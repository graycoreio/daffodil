import { DaffFilterEqual } from '../../../../../filterable/public_api';
import { DaffFilterEqualToggleRequest } from '../../../../../filterable/public_api';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffFilterEqual}
 * that match the {@link DaffFilterEqualRequest}
 *
 * If there are no matching options, returns the original {@link DaffFilterEqual}
 *
 * @docs-private
 */
export const daffToggleFilterEqual = (
  request: DaffFilterEqualToggleRequest,
  filter: DaffFilterEqual,
): DaffFilterEqual => {
  const option = filter.options[request.value];

  return option
    ? {
      ...filter,
      options: {
        ...filter.options,
        [option.value]: {
          ...option,
          applied: !option.applied,
        },
      },
    }
    : filter;
};
