import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { ExternalLink } from 'lucide-react'
import { source } from '@/lib/source'

/** Gapcloud symbol only (no wordmark). Fumadocs wraps `nav.title` in its own `<Link>` — do not nest another link here. */
const BRAND_MARK = '/brand/gapcloud-mark.svg'

function DocsNavTitle() {
  return (
    <span className="inline-flex items-center gap-2 font-medium">
      {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG from /public */}
      <img
        src={BRAND_MARK}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 object-contain"
      />
      <span>Gapflow</span>
    </span>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <DocsNavTitle />,
      }}
      links={[
        {
          text: 'Open Gapflow',
          url: 'https://app.gapflow.ai',
          icon: <ExternalLink className="h-4 w-4" />,
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
        collapsible: true,
        footer: null,
      }}
    >
      {children}
    </DocsLayout>
  )
}
