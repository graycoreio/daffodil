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
import { slugify } from 'markdown-toc';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import { daffDocsGetLinkUrl } from '@daffodil/docs-utils';

import { CollectLinkableSymbolsProcessor } from './collect-linkable-symbols';

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

marked.use({
  walkTokens: (token) => {
    switch (token.type) {
      case 'link':
        token.href = daffDocsGetLinkUrl(token.href);
        break;

      default:
        break;
    }
  },
  renderer: {
    heading: (text: string, level: number, raw: string) =>
      `<h${level} id="${slugify(raw)}">${text}</h${level}>`,
    codespan: (text: string): string | false => {
      const path = CollectLinkableSymbolsProcessor.symbols.get(text);
      return path ? `<a href="${path}"><code>${text}</code></a>` : false;
    },
  },
});

export const MARKDOWN_CODE_PROCESSOR_NAME = 'markdown';

export class MarkdownCodeProcessor implements Processor {
  name = MARKDOWN_CODE_PROCESSOR_NAME;
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];
  contentKey = 'content';

  constructor() {}

  $process(docs: Document[]) {
    return docs.map((doc) => {
      if(this.docTypes.includes(doc.docType)){
        doc[this.contentKey] = marked.parse(doc.content);
      };
      return doc;
    });
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  () => new MarkdownCodeProcessor(),
];
