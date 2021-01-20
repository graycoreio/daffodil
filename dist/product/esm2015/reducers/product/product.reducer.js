/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffProductActionTypes } from '../../actions/product.actions';
/**
 * Initial values of the product state.
 * @type {?}
 */
export const initialState = {
    selectedProductId: null,
    qty: 1,
    loading: false,
    errors: []
};
/**
 * Reducer function that catches actions and changes/overwrites product state.
 *
 * @template T
 * @param {?=} state current State of the redux store
 * @param {?=} action a product action
 * @return {?} product state
 */
export function daffProductReducer(state = initialState, action) {
    switch (action.type) {
        case DaffProductActionTypes.ProductLoadAction:
            return Object.assign({}, state, { loading: true, selectedProductId: action.payload });
        case DaffProductActionTypes.ProductLoadSuccessAction:
            return Object.assign({}, state, { loading: false });
        case DaffProductActionTypes.ProductLoadFailureAction:
            return Object.assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
        case DaffProductActionTypes.UpdateQtyAction:
            return Object.assign({}, state, { qty: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9wcm9kdWN0L3Byb2R1Y3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFzQixNQUFNLCtCQUErQixDQUFDOzs7OztBQU0zRixNQUFNLE9BQU8sWUFBWSxHQUE0QjtJQUNuRCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLEdBQUcsRUFBRSxDQUFDO0lBQ04sT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsRUFBRTtDQUNYOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsa0JBQWtCLENBQXdCLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBNkI7SUFDM0csUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssc0JBQXNCLENBQUMsaUJBQWlCO1lBQzNDLHlCQUFXLEtBQUssSUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDdEUsS0FBSyxzQkFBc0IsQ0FBQyx3QkFBd0I7WUFDbEQseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLElBQUU7UUFDcEMsS0FBSyxzQkFBc0IsQ0FBQyx3QkFBd0I7WUFDbEQseUJBQVcsS0FBSyxJQUNkLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUN0RDtRQUNKLEtBQUssc0JBQXNCLENBQUMsZUFBZTtZQUN6Qyx5QkFBVyxLQUFLLElBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUM7UUFDeEM7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmUHJvZHVjdFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vcHJvZHVjdC1yZWR1Y2VyLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLCBEYWZmUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcblxuLyoqXG4gKiBJbml0aWFsIHZhbHVlcyBvZiB0aGUgcHJvZHVjdCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2VyU3RhdGUgPSB7XG4gIHNlbGVjdGVkUHJvZHVjdElkOiBudWxsLFxuICBxdHk6IDEsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IFtdXG59O1xuXG4vKipcbiAqIFJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYXRjaGVzIGFjdGlvbnMgYW5kIGNoYW5nZXMvb3ZlcndyaXRlcyBwcm9kdWN0IHN0YXRlLlxuICogXG4gKiBAcGFyYW0gc3RhdGUgY3VycmVudCBTdGF0ZSBvZiB0aGUgcmVkdXggc3RvcmVcbiAqIEBwYXJhbSBhY3Rpb24gYSBwcm9kdWN0IGFjdGlvblxuICogQHJldHVybnMgcHJvZHVjdCBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZlByb2R1Y3RSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZlByb2R1Y3RBY3Rpb25zPFQ+KTogRGFmZlByb2R1Y3RSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgc2VsZWN0ZWRQcm9kdWN0SWQ6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICBjYXNlIERhZmZQcm9kdWN0QWN0aW9uVHlwZXMuUHJvZHVjdExvYWRTdWNjZXNzQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2V9O1xuICAgIGNhc2UgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5Qcm9kdWN0TG9hZEZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBcbiAgICAgICAgbG9hZGluZzogZmFsc2UsIFxuICAgICAgICBlcnJvcnM6IHN0YXRlLmVycm9ycy5jb25jYXQobmV3IEFycmF5KGFjdGlvbi5wYXlsb2FkKSlcbiAgICAgIH07XG4gICAgY2FzZSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlVwZGF0ZVF0eUFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHF0eTogYWN0aW9uLnBheWxvYWR9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19