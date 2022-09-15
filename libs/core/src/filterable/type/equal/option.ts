import { DaffFilterOptionBase } from '../../filter-option-base';

/**
 * The individual options applicable to a filter. Such an option may be something like
 * "Red" or "Green", "Tall" or "Short", etc.
 */
export interface DaffFilterEqualOption extends DaffFilterOptionBase {
  /**
   * The id of the filter option.
   */
  value: string;
  /**
   * A label to represent the filter option in the UI.
   */
  label: string;
  /**
   * The number of entities that would be returned after application of this filter.
   */
  count: number;
}
