import {
  Processor,
  Document,
} from 'dgeni';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import graphql from 'highlight.js/lib/languages/graphql';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('gql', graphql);

// marked.use(markedMermaid);
marked.use(
  markedHighlight({
    // langPrefix: 'hljs language-',
    highlight: (code, lang, info) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  }),
);

export class MarkdownCodeProcessor implements Processor {
  name = 'markdown';
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    return docs.map((doc) => {
      if(this.docTypes.includes(doc.docType)){
        doc.content = marked.parse(doc.content);
      };
      return doc;
    });
  }
};
