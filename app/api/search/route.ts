import { createFromSource } from 'fumadocs-core/search/server'
import { source } from '@/lib/source'

/**
 * Emit a static JSON snapshot of the Orama index at build time (Node).
 * Cloudflare `next-on-pages` does not need Edge here: the route is fully static.
 * Pair with `search.options.type: 'static'` on `RootProvider`.
 */
export const revalidate = false
export const { staticGET: GET } = createFromSource(source)
