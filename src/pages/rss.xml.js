import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(context) {
  const posts = await getCollection('posts');
  return rss({
    title: SITE.NAME,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      // ...post.data,
      title: post.data.title, // required
      pubDate: new Date(post.data.publishedAt).toDateString(), // required
      description: post.data.description, //optioanl
      customData: post.data.customData, // optioanl
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    customData: `<language>fa</language>`,
    stylesheet: '/rss/styles.xsl', //for style the feed
  });
}
