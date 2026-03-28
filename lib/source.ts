import { loader } from 'fumadocs-core/source'
import { docs } from '@/.source'

// fumadocs-mdx's runtime returns `files` as a zero-arg function; fumadocs-core's loader expects an array.
type DocsSource = ReturnType<typeof docs.toFumadocsSource>

const mdx = docs.toFumadocsSource()
const rawFiles = mdx.files as unknown
const files =
  (typeof rawFiles === 'function'
    ? (rawFiles as () => DocsSource['files'])()
    : rawFiles) as DocsSource['files']

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/',
  source: { files },
})
