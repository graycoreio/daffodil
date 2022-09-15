

import { DaffFilterOptionBase } from './filter-option-base';
import { DaffFilterType } from './type/filter-type';

/**
 * The base type of a filter.
 */
export interface DaffFilterBase {
  /**
   * The end-user facing string that explains the filter e.g. "Color".
   */
  label: string;

  /**
   * The name of the filter e.g. "color".
   */
  name: string;

  /**
   * The type of the filter. This is used to determine the specific behavior of the filter.
   */
  type: DaffFilterType;

  /**
   * The available options by which to filter a collection entity, e.g. "red", "blue", or "green".
   * The type of options changes per type of filter.
   */
  options: Record<string, DaffFilterOptionBase>;
}
