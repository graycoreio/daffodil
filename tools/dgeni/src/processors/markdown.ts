import { Document } from 'dgeni';
import { slugify } from 'markdown-toc';
import { Marked } from 'marked';
import { highlightCodeInline, highlightCodeSync } from '../utils/shiki-highlighter';

import {
  DaffDocExample,
  daffDocsGetLinkUrl,
} from '@daffodil/docs-utils';

import { FilterableProcessor } from '../utils/filterable-processor.type';
import { linkSymbols } from '../utils/link-symbols';

export const MARKDOWN_CODE_PROCESSOR_NAME = 'markdown';

export class MarkdownCodeProcessor implements FilterableProcessor {
  /**
   * Stores a list of headings for the current document.
   * Needed so that `slugify` can generate unique slugs.
   */
  private headingList: Array<string> = [];
  private marked = new Marked(
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
          return `<h${level} id="${slugify(raw, count > 0 ? { num: count } : undefined)}">${text}</h${level}>`;
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

  async $process(docs: Document[]): Promise<Document[]> {
    const processedDocs = [];

    for (const doc of docs) {
      if (this.docTypes.includes(doc.docType)) {
        doc[this.contentKey] = await this.parseAsync(typeof doc.description === 'undefined' ? doc.content : doc.description);

        if (doc.examples) {
          const processedExamples = [];
          for (const example of <Array<DaffDocExample>>doc.examples) {
            const processedExample = {
              ...example,
              body: await this.parseAsync(example.body),
            };
            processedExamples.push(processedExample);
          }
          doc.examples = processedExamples;
        }

        if (doc.longDescription) {
          const parsedLongDescription = await this.parseAsync(doc.longDescription);
          doc.longDescription = parsedLongDescription.replaceAll(/(^<p>)|(<\/p>(\n)*$)/gm, '');
        }

        doc.slug = slugify(doc.name || doc.title);

        if (doc.sourceApiBlock) {
          doc.sourceApiBlock = await this.parseAsync(`\`\`\`ts\n${doc.sourceApiBlock}\n\`\`\``);
        }
      }
      processedDocs.push(doc);
    }

    return processedDocs;
  }

  parse(text: string): string {
    this.headingList = [];

    // Handle code blocks with Shiki highlighting (synchronous using cache)
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let processedText = text;

    processedText = processedText.replace(codeBlockRegex, (fullMatch, lang = 'plaintext', code) => {
      const highlightedCode = this.highlightCodeBlock(code, lang);
      const processedCode = (lang === 'ts' || lang === 'typescript')
        ? linkSymbols(highlightedCode)
        : highlightedCode;

      return highlightedCode
        ? `<pre><code class="language-${lang}">${processedCode}</code></pre>`
        : `<pre><code class="language-${lang}">${code}</code></pre>`;
    });

    return <string>this.marked.parse(processedText);
  }

  async parseAsync(text: string): Promise<string> {
    this.headingList = [];

    // Handle code blocks with Shiki highlighting (async version)
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let processedText = text;
    const codeBlocks: Array<{ original: string; processed: string }> = [];

    let match;
    while ((match = codeBlockRegex.exec(text)) !== null) {
      const [fullMatch, lang = 'plaintext', code] = match;
      try {
        const highlightedCode = await highlightCodeInline(code, lang);
        const processedCode = (lang === 'ts' || lang === 'typescript')
          ? linkSymbols(highlightedCode)
          : highlightedCode;

        codeBlocks.push({
          original: fullMatch,
          processed: `<pre><code class="language-${lang}">${processedCode}</code></pre>`,
        });
      } catch (error) {
        console.warn(`Failed to highlight code block for language '${lang}':`, error);
        // Keep original code block if highlighting fails
        codeBlocks.push({
          original: fullMatch,
          processed: `<pre><code class="language-${lang}">${code}</code></pre>`,
        });
      }
    }

    // Replace code blocks with highlighted versions
    for (const { original, processed } of codeBlocks) {
      processedText = processedText.replace(original, processed);
    }

    return <string>this.marked.parse(processedText);
  }

  private highlightCodeBlock(code: string, language: string): string {
    try {
      return highlightCodeSync(code, language);
    } catch (error) {
      console.warn(`Failed to highlight code block synchronously for language '${language}':`, error);
      return code;
    }
  }
};

export const MARKDOWN_CODE_PROCESSOR_PROVIDER = <const>[
  MARKDOWN_CODE_PROCESSOR_NAME,
  (aliasMap) => new MarkdownCodeProcessor(aliasMap),
];
