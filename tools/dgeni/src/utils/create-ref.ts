import { DaffDocsApiRef } from '@daffodil/docs-utils';

import { absolutifyPaths } from '../processors/absolutify-paths';
import { CollectLinkableSymbolsProcessor } from '../processors/collect-linkable-symbols';

export const createRef = (text: string): DaffDocsApiRef =>
  CollectLinkableSymbolsProcessor.symbols.has(text)
    ? {
      label: text,
      path: absolutifyPaths(CollectLinkableSymbolsProcessor.symbols.get(text)),
    }
    : undefined;
