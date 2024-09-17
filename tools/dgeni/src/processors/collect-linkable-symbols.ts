import {
  Processor,
  Document,
} from 'dgeni';

export const COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME = 'collectLinkableSymbols';

/**
 * Stores a list of symbols and their paths.
 */
export class CollectLinkableSymbolsProcessor implements Processor {
  private static readonly _symbols = new Map<string, string>();

  public static get symbols(): ReadonlyMap<string, string> {
    return this._symbols;
  }

  name = COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME;
  $runAfter = ['paths-computed'];
  $runBefore = ['markdown'];

  constructor(private log, private createDocMessage) {}

  $process(docs: Document[]): Document[] {
    docs.forEach((doc) => {
      if (CollectLinkableSymbolsProcessor._symbols.get(doc.name)) {
        this.log.warn(this.createDocMessage(`Linkable symbol collision for name ${doc.name}. Existing path: ${CollectLinkableSymbolsProcessor._symbols.get(doc.name)}, new path: ${doc.path}`));
      }
      CollectLinkableSymbolsProcessor._symbols.set(doc.name, doc.path);
    });

    return docs;
  }
}
