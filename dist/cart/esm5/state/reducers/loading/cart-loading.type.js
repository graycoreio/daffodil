/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DaffCartItemLoadingState = {
    Resolving: 'Resolving',
    Adding: 'Adding',
    Complete: 'Complete',
};
export { DaffCartItemLoadingState };
/** @type {?} */
export var initializeLoadingSetter = (/**
 * @param {?} loadingSpace
 * @return {?}
 */
function (loadingSpace) { return (/**
 * @param {?} loadingObj
 * @param {?} loading
 * @return {?}
 */
function (loadingObj, loading) {
    var _a;
    return ({
        loading: tslib_1.__assign({}, loadingObj, (_a = {}, _a[loadingSpace] = loading, _a))
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1sb2FkaW5nLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2xvYWRpbmcvY2FydC1sb2FkaW5nLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUVwRSxxQ0FVQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHQyxXQUFZLFdBQVc7SUFDeEIsUUFBUyxRQUFRO0lBQ2hCLFVBQVcsVUFBVTs7OztBQUd2QixNQUFNLEtBQU8sdUJBQXVCOzs7O0FBQUcsVUFBQyxZQUFtQzs7Ozs7QUFDekUsVUFBQyxVQUEyQixFQUFFLE9BQW9EOztJQUFLLE9BQUEsQ0FBQztRQUN0RixPQUFPLHVCQUNGLFVBQVUsZUFDWixZQUFZLElBQUcsT0FBTyxNQUN4QjtLQUNILENBQUM7QUFMc0YsQ0FLdEYsSUFBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkxvYWRpbmdTdGF0ZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vY2FydC1vcGVyYXRpb24tdHlwZS5lbnVtJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydExvYWRpbmcge1xuXHRbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdOiBEYWZmTG9hZGluZ1N0YXRlO1xuXHRbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dOiBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQmlsbGluZ0FkZHJlc3NdOiBEYWZmTG9hZGluZ1N0YXRlO1xuXHRbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc106IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF06IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudE1ldGhvZHNdOiBEYWZmTG9hZGluZ1N0YXRlO1xuXHRbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dOiBEYWZmTG9hZGluZ1N0YXRlO1xuXHRbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nTWV0aG9kc106IERhZmZMb2FkaW5nU3RhdGU7XG5cdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ291cG9uXTogRGFmZkxvYWRpbmdTdGF0ZTtcbn1cblxuZXhwb3J0IGVudW0gRGFmZkNhcnRJdGVtTG9hZGluZ1N0YXRlIHtcbiAgUmVzb2x2aW5nID0gJ1Jlc29sdmluZycsXG5cdEFkZGluZyA9ICdBZGRpbmcnLFxuICBDb21wbGV0ZSA9ICdDb21wbGV0ZScsXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTG9hZGluZ1NldHRlciA9IChsb2FkaW5nU3BhY2U6IERhZmZDYXJ0T3BlcmF0aW9uVHlwZSkgPT5cbiAgKGxvYWRpbmdPYmo6IERhZmZDYXJ0TG9hZGluZywgbG9hZGluZzogRGFmZkxvYWRpbmdTdGF0ZSB8IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZSkgPT4gKHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICAuLi5sb2FkaW5nT2JqLFxuICAgICAgW2xvYWRpbmdTcGFjZV06IGxvYWRpbmdcbiAgICB9XG5cdH0pXG4iXX0=