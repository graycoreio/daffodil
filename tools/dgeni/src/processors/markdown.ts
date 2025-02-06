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

import { FilterableProcessor } from '../utils/filterable-processor.type';
import { linkSymbols } from '../utils/link-symbols';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('gql', graphql);

export const MARKDOWN_CODE_PROCESSOR_NAME = 'markdown';

export class MarkdownCodeProcessor implements FilterableProcessor {
  private marked = new Marked(
    markedHighlight({
      highlight: (code, lang, info) => {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return linkSymbols(hljs.highlight(code, { language }).value);
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
        codespan: (text: string): string | false =>
          `<code>${linkSymbols(text)}</code>`,
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
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc[this.contentKey] = this.marked.parse(typeof doc.description === 'undefined' ? doc.content : doc.description);
        if (doc.examples) {
          doc.examples = (<Array<DaffDocExample>>doc.examples).map((example) => ({
            ...example,
            body: this.marked.parse(example.body),
          }));
        }
        if (doc.longDescription) {
          doc.longDescription = (<string>this.marked.parse(doc.longDescription)).replaceAll(/(^<p>)|(<\/p>(\n)*$)/gm, '');
        }
        doc.slug = slugify(doc.name || doc.title);
        if (doc.sourceApiBlock) {
          doc.sourceApiBlock = this.marked.parse(`\`\`\`ts\n${doc.sourceApiBlock}\n\`\`\``);
        }
      };
      return doc;
    });
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  (aliasMap) => new MarkdownCodeProcessor(aliasMap),
];
