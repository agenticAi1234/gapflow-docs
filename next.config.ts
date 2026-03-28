import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  /** Cloudflare `@cloudflare/next-on-pages` — align with Edge deployment (see also route `runtime`). */
  experimental: {
    runtime: 'edge',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: true,
      },
    ]
  },
}

export default withMDX(config)
