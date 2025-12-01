import { DaffIdentifiable } from '@daffodil/core';

import { DaffContentSchema } from './content-schema';

export interface DaffContentSchemaPage extends DaffIdentifiable {
/**
 * The human-readable title for this page.
 */
  title: string;
  /**
   * The HTML content.
   */
  schema: DaffContentSchema;
  /**
   * A title for the page for usage in the tab title of the webpage.
   */
  metaTitle?: string;
  /**
   * An overview description of the page for search engine results.
   */
  metaDescription?: string;
}
