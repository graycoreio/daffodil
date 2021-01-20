/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffProductActionTypes } from '../../actions/product.actions';
/**
 * Initial values of the product state.
 * @type {?}
 */
export var initialState = {
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
export function daffProductReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffProductActionTypes.ProductLoadAction:
            return tslib_1.__assign({}, state, { loading: true, selectedProductId: action.payload });
        case DaffProductActionTypes.ProductLoadSuccessAction:
            return tslib_1.__assign({}, state, { loading: false });
        case DaffProductActionTypes.ProductLoadFailureAction:
            return tslib_1.__assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
        case DaffProductActionTypes.UpdateQtyAction:
            return tslib_1.__assign({}, state, { qty: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9wcm9kdWN0L3Byb2R1Y3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFNM0YsTUFBTSxLQUFPLFlBQVksR0FBNEI7SUFDbkQsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixHQUFHLEVBQUUsQ0FBQztJQUNOLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLEVBQUU7Q0FDWDs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLGtCQUFrQixDQUF3QixLQUFvQixFQUFFLE1BQTZCO0lBQW5ELHNCQUFBLEVBQUEsb0JBQW9CO0lBQzVFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHNCQUFzQixDQUFDLGlCQUFpQjtZQUMzQyw0QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFFO1FBQ3RFLEtBQUssc0JBQXNCLENBQUMsd0JBQXdCO1lBQ2xELDRCQUFXLEtBQUssSUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFFO1FBQ3BDLEtBQUssc0JBQXNCLENBQUMsd0JBQXdCO1lBQ2xELDRCQUFXLEtBQUssSUFDZCxPQUFPLEVBQUUsS0FBSyxFQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFDdEQ7UUFDSixLQUFLLHNCQUFzQixDQUFDLGVBQWU7WUFDekMsNEJBQVcsS0FBSyxJQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFDO1FBQ3hDO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2VyU3RhdGUgfSBmcm9tICcuL3Byb2R1Y3QtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcywgRGFmZlByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9kdWN0LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbi8qKlxuICogSW5pdGlhbCB2YWx1ZXMgb2YgdGhlIHByb2R1Y3Qgc3RhdGUuXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZQcm9kdWN0UmVkdWNlclN0YXRlID0ge1xuICBzZWxlY3RlZFByb2R1Y3RJZDogbnVsbCxcbiAgcXR5OiAxLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3JzOiBbXVxufTtcblxuLyoqXG4gKiBSZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2F0Y2hlcyBhY3Rpb25zIGFuZCBjaGFuZ2VzL292ZXJ3cml0ZXMgcHJvZHVjdCBzdGF0ZS5cbiAqIFxuICogQHBhcmFtIHN0YXRlIGN1cnJlbnQgU3RhdGUgb2YgdGhlIHJlZHV4IHN0b3JlXG4gKiBAcGFyYW0gYWN0aW9uIGEgcHJvZHVjdCBhY3Rpb25cbiAqIEByZXR1cm5zIHByb2R1Y3Qgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZQcm9kdWN0UmVkdWNlcjxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZQcm9kdWN0QWN0aW9uczxUPik6IERhZmZQcm9kdWN0UmVkdWNlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5Qcm9kdWN0TG9hZEFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIHNlbGVjdGVkUHJvZHVjdElkOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgY2FzZSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlfTtcbiAgICBjYXNlIERhZmZQcm9kdWN0QWN0aW9uVHlwZXMuUHJvZHVjdExvYWRGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLCBcbiAgICAgICAgZXJyb3JzOiBzdGF0ZS5lcnJvcnMuY29uY2F0KG5ldyBBcnJheShhY3Rpb24ucGF5bG9hZCkpXG4gICAgICB9O1xuICAgIGNhc2UgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5VcGRhdGVRdHlBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBxdHk6IGFjdGlvbi5wYXlsb2FkfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==