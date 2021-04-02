import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';

/**
 * Removes a currently applied filter. If the filter isn't currently applied, returns
 * the original DaffCategoryFilterOption[].
 */
export const daffRemoveFilterEqual = (
  request: DaffCategoryFilterEqualRequest,
  filter: DaffCategoryEqualFilter,
): DaffCategoryFilter => ({
  ...filter,
  options: request.value.reduce((acc, value) => {
    const option = filter.options[value];

    if (option) {
      acc[value] = {
        ...option,
        applied: false,
      };
    }

    return acc;
  }, { ...filter.options }),
});
