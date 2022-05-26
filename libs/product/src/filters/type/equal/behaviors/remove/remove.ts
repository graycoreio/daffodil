import {
  DaffProductFilterEqualRequest,
  DaffProductFilter,
  DaffProductFilterEqual,
} from '../../../../../models/public_api';

/**
 * Removes the matching filter options of a {@link DaffProductFilterEqual}
 * that match the {@link DaffProductFilterEqualRequest}
 *
 * If there are no matching options, returns the original {@link DaffProductFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterEqual = (
  request: DaffProductFilterEqualRequest,
  filter: DaffProductFilterEqual,
): DaffProductFilter => ({
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
