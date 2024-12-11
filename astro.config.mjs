import alpine from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import yaml from '@rollup/plugin-yaml'
import { transformerMetaHighlight } from '@shikijs/transformers'
import { transformerMetaWordHighlight } from '@shikijs/transformers'
import { transformerNotationDiff } from '@shikijs/transformers'
import { transformerNotationErrorLevel } from '@shikijs/transformers'
import { transformerNotationFocus } from '@shikijs/transformers'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { transformerNotationWordHighlight } from '@shikijs/transformers'
import compress from 'astro-compress'
import rename from 'astro-rename'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { env, isProduction, process, provider } from 'std-env'

const isCloudflarePages = provider === 'cloudflare_pages'

export default defineConfig({
  site: isCloudflarePages ? env.CF_PAGES_URL : 'http://localhost:3000',
  build: { format: 'file' /* fix CloudFlare Pages trailing slash problem */ },
  server: { port: 3000, host: '127.0.0.1' },
  output: 'static',
  vite: {
    plugins: [yaml()],
    build: {
      manifest: true,
      emptyOutDir: true,
      minify: isProduction,
      chunkSizeWarningLimit: 1024 * 3,
    },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
  image: {
    domains: ['img.youtube.com'],
  },
  prefetch: process.dev
    ? undefined
    : { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    mdx(),
    alpine(),
    sitemap(),
    tailwind({ configFile: 'tailwind.config.mjs' }),
    rename({ rename: { prefix: 'astro-', except: ['debug', /^ea-/] } }),
    compress({ SVG: true, Image: true, JavaScript: true }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            class: 'autolink-header',
            ariaHidden: true,
            tabIndex: -1,
          },
          test: ['h2', 'h3', 'h4', 'h5'],
        },
      ],
    ],
    shikiConfig: {
      theme: 'css-variables',
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationFocus(),
        transformerNotationErrorLevel(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
  },
})
