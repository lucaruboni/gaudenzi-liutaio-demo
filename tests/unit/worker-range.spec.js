import { describe, expect, it } from 'vitest'
import worker, { parseRange } from '../../worker/index.js'

describe('parseRange', () => {
  it.each([
    ['bytes=0-1', 10, { start: 0, end: 1 }],
    ['bytes=5-', 10, { start: 5, end: 9 }],
    ['bytes=-3', 10, { start: 7, end: 9 }],
    ['bytes=8-100', 10, { start: 8, end: 9 }],
    ['bytes=20-30', 10, 'unsatisfiable'],
    ['bytes=-', 10, null],
    ['items=0-1', 10, null],
  ])('%s su %i byte', (h, size, expected) => expect(parseRange(h, size)).toEqual(expected))
})

describe('worker', () => {
  const env = {
    ASSETS: {
      fetch: async () => new Response(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), { status: 200 }),
    },
  }

  it('risponde 206 con Content-Range a una richiesta Range', async () => {
    const res = await worker.fetch(
      new Request('https://x/assets/v.mp4', { headers: { Range: 'bytes=2-4' } }),
      env
    )
    expect(res.status).toBe(206)
    expect(res.headers.get('Content-Range')).toBe('bytes 2-4/10')
    expect([...new Uint8Array(await res.arrayBuffer())]).toEqual([2, 3, 4])
  })

  it('passa invariata una richiesta senza Range', async () => {
    const res = await worker.fetch(new Request('https://x/assets/v.mp4'), env)
    expect(res.status).toBe(200)
  })

  it('risponde 416 a un intervallo fuori dal file', async () => {
    const res = await worker.fetch(
      new Request('https://x/assets/v.mp4', { headers: { Range: 'bytes=50-' } }),
      env
    )
    expect(res.status).toBe(416)
  })
})
