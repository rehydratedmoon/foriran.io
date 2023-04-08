import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import markdownItMermaid from 'markdown-it-mermaid';

const rederDiagram = (post) => {
  const mdi = markdownIt();
  mdi.use(markdownItMermaid);
  //   mdi.render(`\`\`\`mermaid
  // graph TD
  //     A[Christmas] -->|Get money| B(Go shopping)
  //     B --> C{Let me think}
  //     C -->|One| D[Laptop]
  //     C -->|Two| E[iPhone]
  //     C -->|Three| F[Car]
  // \`\`\``);
  
  const parser = new MarkdownIt();
  const content = sanitizeHtml(mdi.render(post.body));
};
