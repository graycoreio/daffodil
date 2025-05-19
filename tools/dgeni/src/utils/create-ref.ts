import { DaffDocsApiRef } from '@daffodil/docs-utils';

import { absolutifyPaths } from '../processors/absolutify-paths';
import { CollectLinkableSymbolsProcessor } from '../processors/collect-linkable-symbols';

export const createRef = (text: string): DaffDocsApiRef => ({
  label: text,
  path: CollectLinkableSymbolsProcessor.symbols.has(text)
    ? absolutifyPaths(CollectLinkableSymbolsProcessor.symbols.get(text))
    : '',
});
