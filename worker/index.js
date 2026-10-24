// Worker davanti agli asset statici, invocato solo per i video (run_worker_first in wrangler.toml).
// Gli asset statici dei Worker rispondono 200 anche alle richieste Range, ma Safari/iOS
// riproducono un <video> solo se il server risponde 206 con Content-Range.

export function parseRange(header, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim())
  if (!m || (m[1] === '' && m[2] === '')) return null
  let start, end
  if (m[1] === '') {
    start = Math.max(0, size - Number(m[2]))
    end = size - 1
  } else {
    start = Number(m[1])
    end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1)
  }
  return start <= end && start < size ? { start, end } : 'unsatisfiable'
}

export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request)
    const header = request.headers.get('Range')
    if (!header || res.status !== 200) return res

    const body = await res.arrayBuffer()
    const size = body.byteLength
    const range = parseRange(header, size)
    const headers = new Headers(res.headers)
    headers.set('Accept-Ranges', 'bytes')
    if (range === null) return new Response(body, { status: 200, headers })
    if (range === 'unsatisfiable') {
      return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } })
    }
    headers.set('Content-Range', `bytes ${range.start}-${range.end}/${size}`)
    headers.set('Content-Length', String(range.end - range.start + 1))
    return new Response(body.slice(range.start, range.end + 1), { status: 206, headers })
  },
}
