import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const BASE = '/art-history';

function remarkRebaseLinks() {
  return (tree) => {
    visit(tree, (node) => {
      if ((node.type === 'link' || node.type === 'image') &&
          typeof node.url === 'string' &&
          node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = BASE + node.url;
      }
    });
  };
}

// Rebases absolute src/href paths inside raw HTML nodes in markdown.
function rehypeRebaseVideoSrc() {
  return (tree) => {
    visit(tree, 'raw', (node) => {
      node.value = node.value
        .replace(/src="\/videos\//g, `src="${BASE}/videos/`)
        .replace(/src="\/images\//g, `src="${BASE}/images/`)
        .replace(/href="\/images\//g, `href="${BASE}/images/`);
    });
  };
}

// Converts image title="100"|"75"|"50"|"33" to inline width style, removes the title.
function rehypeImageSize() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      const title = String(node.properties?.title ?? '');
      if (!['100', '75', '50', '33'].includes(title)) return;
      node.properties.style = `width:${title}%`;
      delete node.properties.title;
    });
  };
}

export default defineConfig({
  base: '/art-history',
  markdown: {
    remarkPlugins: [remarkRebaseLinks, remarkMath],
    rehypePlugins: [rehypeImageSize, rehypeRebaseVideoSrc, rehypeKatex],
  },
  output: 'static',
  build: {
    assets: 'assets',
  },
  devToolbar: {
    enabled: false,
  },
});
