import { Document } from 'dgeni';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import graphql from 'highlight.js/lib/languages/graphql';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { slugify } from 'markdown-toc';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import {
  DaffDocExample,
  DaffDocKind,
  daffDocsGetLinkUrl,
} from '@daffodil/docs-utils';

import { CollectLinkableSymbolsProcessor } from './collect-linkable-symbols';
import { FilterableProcessor } from '../utils/filterable-processor.type';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('gql', graphql);

export const MARKDOWN_CODE_PROCESSOR_NAME = 'markdown';

export class MarkdownCodeProcessor implements FilterableProcessor {
  private docDescription: string;
  private marked = new Marked(
    markedHighlight({
      highlight: (code, lang, info) => {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    }),
    {
      walkTokens: (token) => {
        switch (token.type) {
          case 'link':
            const [link, anchor] = token.href.split('#');
            const alias = this.aliasMap.getDocs(link)[0];
            token.href = `${alias?.path || daffDocsGetLinkUrl(token.href)}${anchor ? `#${anchor}` : ''}`;
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
        paragraph: (text) => {
          if (!this.docDescription) {
            // get the first paragraph of the doc
            this.docDescription = text;
          }
          return false;
        },
      },
    },
  );

  name = MARKDOWN_CODE_PROCESSOR_NAME;
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];
  contentKey = 'content';

  constructor(
    private aliasMap,
  ) {}

  $process(docs: Document[]) {
    const ret = docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc[this.contentKey] = this.marked.parse(typeof doc.description === 'undefined' ? doc.content : doc.description);
        if (doc.kind === DaffDocKind.PACKAGE || doc.kind === DaffDocKind.COMPONENT) {
          doc.description = this.docDescription;
        }
        if (doc.examples) {
          doc.examples = (<Array<DaffDocExample>>doc.examples).map((example) => ({
            ...example,
            body: this.marked.parse(example.body),
          }));
        }
        this.docDescription = null;
      };
      return doc;
    });

    return ret;
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  (aliasMap) => new MarkdownCodeProcessor(aliasMap),
];
