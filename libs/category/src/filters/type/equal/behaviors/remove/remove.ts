import {
  DaffCategoryFilterEqualRequestReplacement,
  DaffCategoryFilterReplacement,
  DaffCategoryFilterEqual,
} from '../../../../../models/public_api';

/**
 * Removes the matching filter options of a {@link DaffCategoryFilterEqual}
 * that match the {@link DaffCategoryFilterEqualRequestReplacement}
 *
 * If there are no matching options, returns the original {@link DaffCategoryFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterEqual = (
  request: DaffCategoryFilterEqualRequestReplacement,
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterReplacement => ({
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
