import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const changelog = await getCollection('changelog')
  const sortedChangelog = changelog.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  )

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  }

  return rss({
    title: 'Saastro Changelog',
    description: 'Latest updates and changes from Saastro',
    site: context.site || 'https://example.com',
    items: sortedChangelog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/changelog/${generateSlug(post.data.title)}`,
      // Optional: add categories for each post based on the type
      categories: post.data.type ? [post.data.type] : undefined,
    })),
    customData: `<language>en-us</language>`,
  })
}
