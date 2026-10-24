# Note di cloudflare-edge

Note durevoli del dominio (trappole, convenzioni, scoperte). Brevi. Aggiornate dall'agente stesso.

- Il dashboard "Create" porta ai Worker, non a Pages: un `wrangler.toml` in formato Pages (`pages_build_output_dir`) fa fallire `wrangler deploy`. Usiamo `[assets]`.
- In Workers Builds `name` in `wrangler.toml` deve coincidere con il nome del Worker.
