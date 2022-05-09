import { DaffIdentifiable } from '@daffodil/core';

/**
 * A piece of static webpage content.
 */
export interface DaffContentBlock extends DaffIdentifiable {
  /**
   * The human-readable title for this content.
   */
  title: string;
  /**
   * The HTML content.
   */
  content: string;
}
