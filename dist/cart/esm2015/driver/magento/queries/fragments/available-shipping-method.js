/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { moneyFragment } from './money';
/** @type {?} */
export const availableShippingMethodFragment = gql `
  fragment availableShippingMethod on AvailableShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...money
    }
  }
  ${moneyFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLXNoaXBwaW5nLW1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvYXZhaWxhYmxlLXNoaXBwaW5nLW1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRXhDLE1BQU0sT0FBTywrQkFBK0IsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7SUFVOUMsYUFBYTtDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBtb25leUZyYWdtZW50IH0gZnJvbSAnLi9tb25leSc7XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVTaGlwcGluZ01ldGhvZEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBhdmFpbGFibGVTaGlwcGluZ01ldGhvZCBvbiBBdmFpbGFibGVTaGlwcGluZ01ldGhvZCB7XG4gICAgY2Fycmllcl9jb2RlXG4gICAgbWV0aG9kX2NvZGVcbiAgICBjYXJyaWVyX3RpdGxlXG4gICAgbWV0aG9kX3RpdGxlXG4gICAgYW1vdW50IHtcbiAgICAgIC4uLm1vbmV5XG4gICAgfVxuICB9XG4gICR7bW9uZXlGcmFnbWVudH1cbmA7XG4iXX0=