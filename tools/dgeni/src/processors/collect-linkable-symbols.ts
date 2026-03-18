import {
  Processor,
  Document,
} from 'dgeni';

import { DaffDocsApiType } from '@daffodil/docs-utils';

import { MARKDOWN_CODE_PROCESSOR_NAME } from './markdown';

export const COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME = 'collectLinkableSymbols';

/**
 * Stores a list of symbols and their paths.
 */
export class CollectLinkableSymbolsProcessor implements Processor {
  private static readonly _canonical = new Map<string, string>();
  private static readonly _symbols = new Map<string, string>();
  private static readonly _packages = new Map<string, Array<Document>>();

  public static get symbols(): ReadonlyMap<string, string> {
    return this._symbols;
  }

  public static get canonical(): ReadonlyMap<string, string> {
    return this._canonical;
  }

  public static get packages(): ReadonlyMap<string, Array<Document>> {
    return this._packages;
  }

  name = COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME;
  $runAfter = ['paths-absolutified'];
  $runBefore = [MARKDOWN_CODE_PROCESSOR_NAME];
  /**
   * Allows the storage to operate in a section of docs.
   * This allows a smaller subset of docs to be stored with identifiers that might collide or pollute the global storage.
   */
  section: (doc: Document) => string | null = () => null;

  constructor(private log, private createDocMessage) {}

  $process(docs: Document[]): Document[] {
    docs.forEach((doc) => {
      const section = this.section(doc);
      const id = section ? `${section}/${doc.name}` : doc.name;
      if (CollectLinkableSymbolsProcessor._symbols.get(id)) {
        this.log.warn(this.createDocMessage(`Linkable symbol collision for name ${id}. Existing path: ${CollectLinkableSymbolsProcessor._symbols.get(id)}, new path: ${doc.path}`));
      }
      CollectLinkableSymbolsProcessor._symbols.set(id, doc.path);
      if (doc.canonicalPath) {
        CollectLinkableSymbolsProcessor._canonical.set(id, doc.canonicalPath);
      }
      if (doc.docType !== DaffDocsApiType.PACKAGE) {
        const m = doc.id.match(/(.*)\/src/);
        if (!section && !m) {
          throw new Error(`Cannot determine package for ${doc.id}`);
        }
        const packageName = m
          ? section ? `${section}/${m[1]}` : m[1]
          : section;
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
