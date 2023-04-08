import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { visit } from 'unist-util-visit';
import dedent from 'ts-dedent';
import mermaid from 'mermaid';

const escapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (str: string) => str.replace(/[&<>"']/g, (c) => escapeMap[c]);

export const renderMermaid: RemarkPlugin<[]> = () => (tree) => {
  console.log('🚀 ~ tree:', tree);
  visit(tree, 'element', (node) => {
    if (
      node.tagName !== 'pre' ||
      node.children[0].tagName !== 'code' ||
      !node.children[0].properties.className.includes('language-mermaid')
    ) {
      return;
    }

    const content = node.children[0].children[0].value;
    console.log('🚀 ~ node:', node.children[0]);

    //   {
    // type: 'element',
    // tagName: 'code',
    // properties: { className: [ 'language-mermaid' ] },
    // children: [
    //   {
    //     type: 'text',
    //     value: '\r\n' +
    //       '    A[Christmas] -->|Get money| B(Go shopping)\r\n' +
    //       '    B --> C{Let me think}\r\n' +
    //       '    C -->|One| D[Laptop]\r\n' +
    //       '    C -->|Two| E[iPhone]\r\n' +
    //       '    C -->|Three| F[fa:fa-car Car]\r\n' +
    //       '\n'
    //   }
    //   ;

    // @ts-ignore
    // node.type = 'html';

    const id = 'mermaid-' + Math.round(Math.random() * 100000);
    let res = null;
    mermaid.render(id, content, (result: string) => {
      console.log('🚀 ~ result:', result);
      res = result;
    });
    node.children[0].children[0].value = dedent`
          <div class="mermaid" data-content="${escapeHtml(content)}">
          <svg  viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${res}
          </svg>
          </div>
        `;
    // node.value = 'hiiiiiiiiiiiiii';
  });
};
