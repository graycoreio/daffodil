import {
  DaffFilterEqualRequest,
  DaffFilter,
  DaffFilterEqual,
} from '../../../../../filterable/public_api';

/**
 * Removes the matching filter options of a {@link DaffFilterEqual}
 * that match the {@link DaffFilterEqualRequest}
 *
 * If there are no matching options, returns the original {@link DaffFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffRemoveFilterEqual = (
  request: DaffFilterEqualRequest,
  filter: DaffFilterEqual,
): DaffFilter => ({
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
