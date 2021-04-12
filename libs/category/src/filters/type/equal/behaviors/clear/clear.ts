import { DaffCategoryFilterEqual } from '../../../../../models/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffCategoryFilterEqual}
 *
 * @docs-private
 */
export const daffClearFilterEqual = (filter: DaffCategoryFilterEqual): DaffCategoryFilterEqual => ({
  ...filter,
  options: Object.keys(filter.options).map((key) => filter.options[key]).reduce((acc, option) => {
    acc[option.value] = {
      ...option,
      applied: false,
    };
    return acc;
  }, { ...filter.options }),
});
