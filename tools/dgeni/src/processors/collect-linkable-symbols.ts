import {
  Processor,
  Document,
} from 'dgeni';

import { MARKDOWN_CODE_PROCESSOR_NAME } from './markdown';

export const COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME = 'collectLinkableSymbols';

/**
 * Stores a list of symbols and their paths.
 */
export class CollectLinkableSymbolsProcessor implements Processor {
  private static readonly _symbols = new Map<string, string>();
  private static readonly _packages = new Map<string, Array<string>>();

  public static get symbols(): ReadonlyMap<string, string> {
    return this._symbols;
  }

  public static get packages(): ReadonlyMap<string, Array<Document>> {
    return this._packages;
  }

  name = COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME;
  $runAfter = ['paths-absolutified'];
  $runBefore = [MARKDOWN_CODE_PROCESSOR_NAME];

  constructor(private log, private createDocMessage) {}

  $process(docs: Document[]): Document[] {
    docs.forEach((doc) => {
      if (CollectLinkableSymbolsProcessor._symbols.get(doc.name)) {
        this.log.warn(this.createDocMessage(`Linkable symbol collision for name ${doc.name}. Existing path: ${CollectLinkableSymbolsProcessor._symbols.get(doc.name)}, new path: ${doc.path}`));
      }
      CollectLinkableSymbolsProcessor._symbols.set(doc.name, doc.path);
      if (doc.docType !== 'package') {
        const packageName = doc.id.match(/(.*)\/src/)[1];
        if (!CollectLinkableSymbolsProcessor._packages.get(packageName)) {
          CollectLinkableSymbolsProcessor._packages.set(packageName, []);
        }
        CollectLinkableSymbolsProcessor._packages.get(packageName).push(doc);
      }
    });

    return docs;
  }
}

export const COLLECT_LINKABLE_SYMBOLS_PROCESSOR_PROVIDER = <const>[
  COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME,
  (log, createDocMessage) => new CollectLinkableSymbolsProcessor(log, createDocMessage),
];
