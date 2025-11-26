// @ts-ignore
import sassdoc = require('sassdoc');
import { SassValueParser, SassDocItem } from './value-parser';
import { SassDocConfig } from './sassdoc.config';

export interface ParsedSassDocResult {
  data: SassDocItem[];
  config: SassDocConfig;
}

export async function processSassDoc(config: SassDocConfig): Promise<ParsedSassDocResult> {
  try {
    const data: SassDocItem[] = await sassdoc.parse(config.src, { verbose: config.verbose });
    
    const parser = new SassValueParser();
    const enhancedData = parser.processSassDocData(data);
    
    return {
      data: enhancedData,
      config
    };
    
  } catch (error) {
    console.error('SassDoc processing failed:', error);
    throw error;
  }
} 