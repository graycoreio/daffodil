import { DaffDoc } from './type';

/**
 * A guide doc. Includes a table of contents.
 */
export interface DaffGuideDoc extends DaffDoc {
  tableOfContents: {
    json: Array<{
      content: string;
      lvl: number;
      slug: string;
    }>;
  };
}
