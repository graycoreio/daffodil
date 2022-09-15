import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
} from '../../../../../filterable/public_api';

/**
 * Applies a {@link DaffFilterEqualRequest} to a {@link DaffFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffApplyFilterEqual = (
  request: DaffFilterEqualRequest,
  filter: DaffFilterEqual,
): DaffFilterEqual => ({
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
