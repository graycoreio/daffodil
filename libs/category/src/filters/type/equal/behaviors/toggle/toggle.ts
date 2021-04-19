import { DaffCategoryFilterEqual } from '../../../../../models/public_api';
import { DaffCategoryFilterEqualToggleRequest } from '../../../../../models/public_api';

/**
 * Oscillates the applied state of the matching filter options of a {@link DaffCategoryFilterEqual}
 * that match the {@link DaffCategoryFilterEqualRequestReplacement}
 *
 * If there are no matching options, returns the original {@link DaffCategoryFilterEqual}
 *
 * @docs-private
 */
export const daffToggleFilterEqual = (
  request: DaffCategoryFilterEqualToggleRequest,
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqual => {
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
