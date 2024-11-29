import { getCollection } from 'astro:content'
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

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Saastro Changelog',
    home_page_url: context.site,
    feed_url: `${context.site}rss.json`,
    description: 'Latest updates and changes from Saastro',
    items: sortedChangelog.map((post) => ({
      id: generateSlug(post.data.title),
      url: `${context.site}changelog/${generateSlug(post.data.title)}`,
      title: post.data.title,
      content_text: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      tags: post.data.type ? [post.data.type] : undefined,
    })),
  }

  return new Response(JSON.stringify(feed), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=3600',
    },
  })
}
