import { CollectLinkableSymbolsProcessor } from '../processors/collect-linkable-symbols';

export const linkSymbols = (text: string): string =>
  text.replaceAll(/(\w*)/g, (match) =>
    CollectLinkableSymbolsProcessor.symbols.has(match) ? `<a href="${CollectLinkableSymbolsProcessor.symbols.get(match)}">${match}</a>` : match,
  );
