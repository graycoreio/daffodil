import {
  DaffIdentifiable,
  HTML,
} from '@daffodil/core';

/**
 * The content for a static webpage.
 */
export interface DaffContentPage extends DaffIdentifiable {
  /**
   * The human-readable title for this page.
   */
  title: string;
  /**
   * The HTML content.
   */
  htmlContent: HTML;
  /**
   * A title for the page for usage in the tab title of the webpage.
   */
  metaTitle?: string;
  /**
   * An overview description of the page for search engine results.
   */
  metaDescription?: string;
}
