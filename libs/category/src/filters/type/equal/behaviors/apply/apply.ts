import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequestReplacement,
} from '../../../../../models/public_api';

/**
 * Applies a {@link DaffCategoryFilterEqualRequestReplacement} to a {@link DaffCategoryFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffApplyFilterEqual = (
  request: DaffCategoryFilterEqualRequestReplacement,
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqual => ({
  ...filter,
  options: request.value.reduce((acc, value) => {
    const option = filter.options[value];

    if (option) {
      acc[value] = {
        ...option,
        applied: true,
      };
    }

    return acc;
  }, { ...filter.options }),
});
