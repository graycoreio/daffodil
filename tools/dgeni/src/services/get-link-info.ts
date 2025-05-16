import baseGetLinkInfo from 'dgeni-packages/links/services/getLinkInfo';

import { CollectLinkableSymbolsProcessor } from '../processors/collect-linkable-symbols';

export function getLinkInfo(getDocFromAlias, encodeCodeBlock, log) {
  return (url, title, currentDoc) => {
    const link = CollectLinkableSymbolsProcessor.canonical.has(url)
      ? CollectLinkableSymbolsProcessor.canonical.get(url)
      : CollectLinkableSymbolsProcessor.symbols.has(url)
        ? CollectLinkableSymbolsProcessor.symbols.get(url)
        : null;
    const ret = baseGetLinkInfo(getDocFromAlias, encodeCodeBlock, log)(url, title, currentDoc);
    if (link) {
      ret.url = link;
    }
    return ret;
  };
}
