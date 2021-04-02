import { DaffCategoryEqualFilter } from '../../../../../models/public_api';

export const daffClearFilterEqual = (filter: DaffCategoryEqualFilter): DaffCategoryEqualFilter => ({
  ...filter,
  options: Object.keys(filter.options).map((key) => filter.options[key]).reduce((acc, option) => {
    acc[option.value] = {
      ...option,
      applied: false,
    };
    return acc;
  }, { ...filter.options }),
});
