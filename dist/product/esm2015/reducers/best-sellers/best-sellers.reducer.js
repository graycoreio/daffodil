/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffBestSellersActionTypes } from '../../actions/best-sellers.actions';
/** @type {?} */
export const initialState = {
    productIds: [],
    loading: false,
    errors: []
};
/** @type {?} */
export const resetState = Object.assign({}, initialState);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffBestSellersReducer(state = initialState, action) {
    switch (action.type) {
        case DaffBestSellersActionTypes.BestSellersLoadAction:
            return Object.assign({}, state, { loading: true });
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return Object.assign({}, state, { loading: false, productIds: getIds(action.payload) });
        case DaffBestSellersActionTypes.BestSellersLoadFailureAction:
            return Object.assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
        case DaffBestSellersActionTypes.BestSellersResetAction:
            return Object.assign({}, resetState);
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
    const ids = new Array();
    products.forEach((/**
     * @param {?} product
     * @return {?}
     */
    product => {
        ids.push(product.id);
    }));
    return ids;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Jlc3Qtc2VsbGVycy9iZXN0LXNlbGxlcnMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUEwQixNQUFNLG9DQUFvQyxDQUFDOztBQUl4RyxNQUFNLE9BQU8sWUFBWSxHQUFnQztJQUN2RCxVQUFVLEVBQUUsRUFBRTtJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLEVBQUU7Q0FDWDs7QUFFRCxNQUFNLE9BQU8sVUFBVSxHQUFnQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUM7Ozs7Ozs7QUFFdEYsTUFBTSxVQUFVLHNCQUFzQixDQUF3QixLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQWlDO0lBQ25ILFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLDBCQUEwQixDQUFDLHFCQUFxQjtZQUNuRCx5QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksSUFBRTtRQUNuQyxLQUFLLDBCQUEwQixDQUFDLDRCQUE0QjtZQUMxRCx5QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBRTtRQUMzRSxLQUFLLDBCQUEwQixDQUFDLDRCQUE0QjtZQUMxRCx5QkFBVyxLQUFLLElBQ2QsT0FBTyxFQUFFLEtBQUssRUFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQ3REO1FBQ0osS0FBSywwQkFBMEIsQ0FBQyxzQkFBc0I7WUFDcEQseUJBQ0ssVUFBVSxFQUNkO1FBQ0g7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsTUFBTSxDQUF3QixRQUFhOztVQUM1QyxHQUFHLEdBQWEsSUFBSSxLQUFLLEVBQUU7SUFFakMsUUFBUSxDQUFDLE9BQU87Ozs7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN0QixDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLCBEYWZmQmVzdFNlbGxlcnNBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9iZXN0LXNlbGxlcnMuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSB9IGZyb20gJy4vYmVzdC1zZWxsZXJzLXJlZHVjZXItc3RhdGUuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZkJlc3RTZWxsZXJzUmVkdWNlclN0YXRlID0ge1xuICBwcm9kdWN0SWRzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yczogW11cbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFN0YXRlOiBEYWZmQmVzdFNlbGxlcnNSZWR1Y2VyU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZkJlc3RTZWxsZXJzUmVkdWNlcjxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZCZXN0U2VsbGVyc0FjdGlvbnM8VD4pOiBEYWZmQmVzdFNlbGxlcnNSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZFN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgcHJvZHVjdElkczogZ2V0SWRzPFQ+KGFjdGlvbi5wYXlsb2FkKX07XG4gICAgY2FzZSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLCBcbiAgICAgICAgZXJyb3JzOiBzdGF0ZS5lcnJvcnMuY29uY2F0KG5ldyBBcnJheShhY3Rpb24ucGF5bG9hZCkpXG4gICAgICB9O1xuICAgIGNhc2UgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMuQmVzdFNlbGxlcnNSZXNldEFjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlc2V0U3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldElkczxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KHByb2R1Y3RzOiBUW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGlkczogc3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcblxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGlkcy5wdXNoKHByb2R1Y3QuaWQpXG4gIH0pO1xuXG4gIHJldHVybiBpZHM7XG59XG4iXX0=