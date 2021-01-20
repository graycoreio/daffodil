/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffBestSellersActionTypes } from '../../actions/best-sellers.actions';
/** @type {?} */
export var initialState = {
    productIds: [],
    loading: false,
    errors: []
};
/** @type {?} */
export var resetState = Object.assign({}, initialState);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffBestSellersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffBestSellersActionTypes.BestSellersLoadAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return tslib_1.__assign({}, state, { loading: false, productIds: getIds(action.payload) });
        case DaffBestSellersActionTypes.BestSellersLoadFailureAction:
            return tslib_1.__assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
        case DaffBestSellersActionTypes.BestSellersResetAction:
            return tslib_1.__assign({}, resetState);
        default:
            return state;
    }
}
/**
 * @template T
 * @param {?} products
 * @return {?}
 */
function getIds(products) {
    /** @type {?} */
    var ids = new Array();
    products.forEach((/**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        ids.push(product.id);
    }));
    return ids;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Jlc3Qtc2VsbGVycy9iZXN0LXNlbGxlcnMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBMEIsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFJeEcsTUFBTSxLQUFPLFlBQVksR0FBZ0M7SUFDdkQsVUFBVSxFQUFFLEVBQUU7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxFQUFFO0NBQ1g7O0FBRUQsTUFBTSxLQUFPLFVBQVUsR0FBZ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDOzs7Ozs7O0FBRXRGLE1BQU0sVUFBVSxzQkFBc0IsQ0FBd0IsS0FBb0IsRUFBRSxNQUFpQztJQUF2RCxzQkFBQSxFQUFBLG9CQUFvQjtJQUNoRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSywwQkFBMEIsQ0FBQyxxQkFBcUI7WUFDbkQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEI7WUFDMUQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUU7UUFDM0UsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEI7WUFDMUQsNEJBQVcsS0FBSyxJQUNkLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUN0RDtRQUNKLEtBQUssMEJBQTBCLENBQUMsc0JBQXNCO1lBQ3BELDRCQUNLLFVBQVUsRUFDZDtRQUNIO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLE1BQU0sQ0FBd0IsUUFBYTs7UUFDNUMsR0FBRyxHQUFhLElBQUksS0FBSyxFQUFFO0lBRWpDLFFBQVEsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxPQUFPO1FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RCLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMsIERhZmZCZXN0U2VsbGVyc0FjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jlc3Qtc2VsbGVycy5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzUmVkdWNlclN0YXRlIH0gZnJvbSAnLi9iZXN0LXNlbGxlcnMtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEYWZmQmVzdFNlbGxlcnNSZWR1Y2VyU3RhdGUgPSB7XG4gIHByb2R1Y3RJZHM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3JzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGU6IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQmVzdFNlbGxlcnNSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZkJlc3RTZWxsZXJzQWN0aW9uczxUPik6IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZEFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMuQmVzdFNlbGxlcnNMb2FkU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBwcm9kdWN0SWRzOiBnZXRJZHM8VD4oYWN0aW9uLnBheWxvYWQpfTtcbiAgICBjYXNlIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZEZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBcbiAgICAgICAgbG9hZGluZzogZmFsc2UsIFxuICAgICAgICBlcnJvcnM6IHN0YXRlLmVycm9ycy5jb25jYXQobmV3IEFycmF5KGFjdGlvbi5wYXlsb2FkKSlcbiAgICAgIH07XG4gICAgY2FzZSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc1Jlc2V0QWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucmVzZXRTdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWRzPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4ocHJvZHVjdHM6IFRbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xuXG4gIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgaWRzLnB1c2gocHJvZHVjdC5pZClcbiAgfSk7XG5cbiAgcmV0dXJuIGlkcztcbn1cbiJdfQ==