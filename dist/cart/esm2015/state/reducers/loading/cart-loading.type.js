/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffCartOperationType } from '../cart-operation-type.enum';
/**
 * @record
 */
export function DaffCartLoading() { }
if (false) {
    /* Skipping unnamed member:
    [DaffCartOperationType.Cart]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Item]: DaffCartItemLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.BillingAddress]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingAddress]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Payment]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.PaymentMethods]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingInformation]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingMethods]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Coupon]: DaffLoadingState;*/
}
/** @enum {string} */
const DaffCartItemLoadingState = {
    Resolving: 'Resolving',
    Adding: 'Adding',
    Complete: 'Complete',
};
export { DaffCartItemLoadingState };
/** @type {?} */
export const initializeLoadingSetter = (/**
 * @param {?} loadingSpace
 * @return {?}
 */
(loadingSpace) => (/**
 * @param {?} loadingObj
 * @param {?} loading
 * @return {?}
 */
(loadingObj, loading) => ({
    loading: Object.assign({}, loadingObj, { [loadingSpace]: loading })
})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1sb2FkaW5nLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2xvYWRpbmcvY2FydC1sb2FkaW5nLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXBFLHFDQVVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdDLFdBQVksV0FBVztJQUN4QixRQUFTLFFBQVE7SUFDaEIsVUFBVyxVQUFVOzs7O0FBR3ZCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUFDLFlBQW1DLEVBQUUsRUFBRTs7Ozs7QUFDN0UsQ0FBQyxVQUEyQixFQUFFLE9BQW9ELEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEYsT0FBTyxvQkFDRixVQUFVLElBQ2IsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLEdBQ3hCO0NBQ0gsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydE9wZXJhdGlvblR5cGUgfSBmcm9tICcuLi9jYXJ0LW9wZXJhdGlvbi10eXBlLmVudW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0TG9hZGluZyB7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ2FydF06IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV06IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZTtcblx0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc106IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdBZGRyZXNzXTogRGFmZkxvYWRpbmdTdGF0ZTtcblx0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50XTogRGFmZkxvYWRpbmdTdGF0ZTtcblx0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50TWV0aG9kc106IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdJbmZvcm1hdGlvbl06IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdNZXRob2RzXTogRGFmZkxvYWRpbmdTdGF0ZTtcblx0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dOiBEYWZmTG9hZGluZ1N0YXRlO1xufVxuXG5leHBvcnQgZW51bSBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUge1xuICBSZXNvbHZpbmcgPSAnUmVzb2x2aW5nJyxcblx0QWRkaW5nID0gJ0FkZGluZycsXG4gIENvbXBsZXRlID0gJ0NvbXBsZXRlJyxcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMb2FkaW5nU2V0dGVyID0gKGxvYWRpbmdTcGFjZTogRGFmZkNhcnRPcGVyYXRpb25UeXBlKSA9PlxuICAobG9hZGluZ09iajogRGFmZkNhcnRMb2FkaW5nLCBsb2FkaW5nOiBEYWZmTG9hZGluZ1N0YXRlIHwgRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlKSA9PiAoe1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIC4uLmxvYWRpbmdPYmosXG4gICAgICBbbG9hZGluZ1NwYWNlXTogbG9hZGluZ1xuICAgIH1cblx0fSlcbiJdfQ==