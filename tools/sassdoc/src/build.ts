// @ts-expect-error there are no types for this package
import sassdoc from 'sassdoc';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

import { SassDocConfig } from './config.type';
import { processSassDocData } from './value-parser';

export interface ParsedSassDocResult {
  data: Array<DaffDocsSassItem>;
  config: SassDocConfig;
}

export async function processSassDoc(config: SassDocConfig): Promise<ParsedSassDocResult> {
  try {
    // TODO: figure out why groups aren't being set on maps
    const data: Array<DaffDocsSassItem> = await sassdoc.parse(config.src, { verbose: config.verbose });

    const enhancedData = processSassDocData(data);

    return {
      data: enhancedData,
      config,
    };

  } catch (error) {
    console.error('SassDoc processing failed:', error);
    throw error;
  }
}
