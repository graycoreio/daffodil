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
  /**
   * Stores a list of headings for the current document.
   * Needed so that `slugify` can generate unique slugs.
   */
  private headingList: Array<string> = [];
  private marked = new Marked(
    markedHighlight({
      highlight: (code, lang, info) => {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return lang === 'ts' || lang === 'typescript'
          ? linkSymbols(hljs.highlight(code, { language }).value)
          : hljs.highlight(code, { language }).value;
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
        heading: (text: string, level: number, raw: string) => {
          const count = this.headingList.filter((heading) => heading === raw).length;
          this.headingList.push(raw);
          const slug = slugify(raw, count > 0 ? { num: count } : undefined);
          if (level >= 2 && level <= 4) {
            const iconSvg = `<svg class="daffio-docs-heading-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/></svg>`;
            const onclickHandler = `event.preventDefault(); navigator.clipboard.writeText(window.location.href.split('#')[0] + '#${slug}').then(() => { this.classList.add('copied'); setTimeout(() => this.classList.remove('copied'), 1500); }).catch(err => console.error('Copy failed:', err));`;
            return `<h${level} id="${slug}" class="daffio-markdown-heading">${text}<a href="#${slug}" class="daffio-docs-heading-link daffio-markdown-heading-link" aria-label="Link to this section" title="Permalink" onclick="${onclickHandler}">${iconSvg}</a></h${level}>`;
          }
          return `<h${level} id="${slug}">${text}</h${level}>`;
        },
        codespan: (text: string): string | false =>
          `<code>${linkSymbols(text)}</code>`,
      },
    },
  );

  name = MARKDOWN_CODE_PROCESSOR_NAME;
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];
  contentKey = 'contents';

  constructor(
    private aliasMap,
  ) {}

  $process(docs: Document[]) {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc[this.contentKey] = this.parse(typeof doc.description === 'undefined' ? doc.content : doc.description);
        if (doc.examples) {
          doc.examples = (<Array<DaffDocExample>>doc.examples).map((example) => ({
            ...example,
            body: this.parse(example.body),
          }));
        }
        if (doc.longDescription) {
          doc.longDescription = this.parse(doc.longDescription).replaceAll(/(^<p>)|(<\/p>(\n)*$)/gm, '');
        }
        doc.slug = slugify(doc.name || doc.title);
        if (doc.sourceApiBlock) {
          doc.sourceApiBlock = this.parse(`\`\`\`ts\n${doc.sourceApiBlock}\n\`\`\``);
        }
      };
      return doc;
    });
  }

  parse(text: string): string {
    this.headingList = [];
    return <string>this.marked.parse(text);
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  (aliasMap) => new MarkdownCodeProcessor(aliasMap),
];
