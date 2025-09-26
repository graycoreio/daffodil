import { Document } from 'dgeni';
import { createHighlighter } from 'shiki';
import { slugify } from 'markdown-toc';
import { Marked } from 'marked';

import {
  DaffDocExample,
  daffDocsGetLinkUrl,
} from '@daffodil/docs-utils';

import { FilterableProcessor } from '../utils/filterable-processor.type';
import { linkSymbols } from '../utils/link-symbols';

let highlighter: any = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['light-plus'],
      langs: []
    });

    // Load languages lazily only when needed
    await Promise.all([
      highlighter.loadLanguage('typescript'),
      highlighter.loadLanguage('javascript'),
      highlighter.loadLanguage('xml'),
      highlighter.loadLanguage('html'),
      highlighter.loadLanguage('scss'),
      highlighter.loadLanguage('css'),
      highlighter.loadLanguage('bash'),
      highlighter.loadLanguage('graphql')
    ]);
  }
  return highlighter;
}

export const MARKDOWN_CODE_PROCESSOR_NAME = 'markdown';

export class MarkdownCodeProcessor implements FilterableProcessor {
  /**
   * Stores a list of headings for the current document.
   * Needed so that `slugify` can generate unique slugs.
   */
  private headingList: Array<string> = [];
  private marked: any = null;

  private async getMarked() {
    if (!this.marked) {
      const shiki = await getHighlighter();
      this.marked = new Marked({
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
            return `<h${level} id="${slugify(raw, count > 0 ? { num: count } : undefined)}">${text}</h${level}>`;
          },
          codespan: (text: string): string | false =>
            `<code>${linkSymbols(text)}</code>`,
          code: (code: string, language?: string) => {
            try {
              const supportedLangs = ['typescript', 'ts', 'javascript', 'js', 'xml', 'html', 'scss', 'css', 'bash', 'sh', 'graphql', 'gql'];
              const lang = supportedLangs.includes(language || '') ? (language === 'ts' ? 'typescript' : language === 'gql' ? 'graphql' : language === 'sh' ? 'bash' : language === 'js' ? 'javascript' : language) : 'text';
              const highlighted = shiki.codeToHtml(code, {
                lang: lang || 'text',
                theme: 'light-plus'
              });
              return language === 'ts' || language === 'typescript'
                ? linkSymbols(highlighted)
                : highlighted;
            } catch (error) {
              const fallbackHighlighted = shiki.codeToHtml(code, {
                lang: 'text',
                theme: 'light-plus'
              });
              return fallbackHighlighted;
            }
          }
        },
      });
    }
    return this.marked;
  }

  name = MARKDOWN_CODE_PROCESSOR_NAME;
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];
  contentKey = 'contents';

  constructor(
    private aliasMap,
  ) {}

  async $process(docs: Document[]): Promise<Document[]> {
    const processedDocs = [];
    for (const doc of docs) {
      if (this.docTypes.includes(doc.docType)) {
        doc[this.contentKey] = await this.parse(typeof doc.description === 'undefined' ? doc.content : doc.description);
        if (doc.examples) {
          doc.examples = await Promise.all((<Array<DaffDocExample>>doc.examples).map(async (example) => ({
            ...example,
            body: await this.parse(example.body),
          })));
        }
        if (doc.longDescription) {
          doc.longDescription = (await this.parse(doc.longDescription)).replaceAll(/(^<p>)|(<\/p>(\n)*$)/gm, '');
        }
        doc.slug = slugify(doc.name || doc.title);
        if (doc.sourceApiBlock) {
          doc.sourceApiBlock = await this.parse(`\`\`\`ts\n${doc.sourceApiBlock}\n\`\`\``);
        }
      }
      processedDocs.push(doc);
    }
    return processedDocs;
  }

  async parse(text: string): Promise<string> {
    this.headingList = [];
    const marked = await this.getMarked();
    return <string>marked.parse(text);
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  (aliasMap) => new MarkdownCodeProcessor(aliasMap),
];
