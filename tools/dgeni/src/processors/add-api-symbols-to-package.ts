import { Document } from 'dgeni';
import { slugify } from 'markdown-toc';
import type { Environment } from 'nunjucks';

import {
  DaffApiDoc,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { CollectLinkableSymbolsProcessor } from './collect-linkable-symbols';
import { API_TEMPLATES_PATH } from '../transforms/config';
import { FilterableProcessor } from '../utils/filterable-processor.type';

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME = 'addApiSymbolsToPackages';

const LINK_TAG = /\{@link (\w+)}/g;

export class AddApiSymbolsToPackagesProcessor implements FilterableProcessor {
  readonly name = ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];
  lookup = (doc: Document) => doc.id;

  constructor(
    private templateEngine,
    private templateFinder,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    const templates = this.templateFinder.templateFolders;
    this.templateFinder.templateFolders = [
      API_TEMPLATES_PATH,
      ...templates,
    ];
    const render: Environment['render'] = this.templateEngine.getRenderer();

    const ret = docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        const exportDocs = CollectLinkableSymbolsProcessor.packages.get(this.lookup(doc));
        doc.symbols = exportDocs?.map((d) => d.slug);
        // the inline tag processor runs after doc rendering and
        // doesn't expose anything besides `$process` so trick it into processing our child docs
        doc.api = exportDocs?.map((symbol) =>
          render(
            this.templateFinder.getFinder()(symbol),
            { doc: symbol, child: true },
          ).replaceAll(
            LINK_TAG,
            (match, linkableSymbol) => `<a href="${CollectLinkableSymbolsProcessor.symbols.get(linkableSymbol)}"><code>${linkableSymbol}</code></a>`,
          ),
        );
        doc.apiToc = exportDocs?.flatMap((symbol: Document & DaffApiDoc): DaffDocTableOfContents => [
          {
            content: symbol.name,
            lvl: 2,
            slug: slugify(symbol.name),
          },
          // ...symbol.tableOfContents.map((entry) => ({
          //   ...entry,
          //   lvl: entry.lvl + 1,
          //   slug: entry.slug === 'examples' ? `${symbol.slug}-examples` : entry.slug,
          // })),
        ]);
      }
      return doc;
    });

    this.templateFinder.templateFolders = templates;
    return ret;
  }
};

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_PROVIDER = <const>[
  ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME,
  (templateEngine, templateFinder) => new AddApiSymbolsToPackagesProcessor(templateEngine, templateFinder),
];
