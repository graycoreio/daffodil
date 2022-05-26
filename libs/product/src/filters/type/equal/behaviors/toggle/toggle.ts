import { DaffProductFilterEqual } from '../../../../../models/public_api';
import { DaffProductFilterEqualToggleRequest } from '../../../../../models/public_api';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffProductFilterEqual}
 * that match the {@link DaffProductFilterEqualRequest}
 *
 * If there are no matching options, returns the original {@link DaffProductFilterEqual}
 *
 * @docs-private
 */
export const daffToggleFilterEqual = (
  request: DaffProductFilterEqualToggleRequest,
  filter: DaffProductFilterEqual,
): DaffProductFilterEqual => {
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
