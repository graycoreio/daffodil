import { DaffProductFilterEqual } from '../../../../../models/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffProductFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffClearFilterEqual = (filter: DaffProductFilterEqual): DaffProductFilterEqual => ({
  ...filter,
  options: Object.keys(filter.options).map((key) => filter.options[key]).reduce((acc, option) => {
    acc[option.value] = {
      ...option,
      applied: false,
    };
    return acc;
  }, { ...filter.options }),
});
