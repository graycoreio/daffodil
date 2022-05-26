import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
} from '../../../../../models/public_api';

/**
 * Applies a {@link DaffProductFilterEqualRequest} to a {@link DaffProductFilterEqual}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffApplyFilterEqual = (
  request: DaffProductFilterEqualRequest,
  filter: DaffProductFilterEqual,
): DaffProductFilterEqual => ({
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
