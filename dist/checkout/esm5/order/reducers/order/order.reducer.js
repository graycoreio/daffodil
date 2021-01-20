/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffOrderActionTypes } from '../../actions/order.actions';
/**
 * @deprecated
 * @type {?}
 */
export var initialState = {
    order: null,
    loading: false,
    errors: []
};
/**
 * @deprecated
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffOrderReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffOrderActionTypes.PlaceOrderAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffOrderActionTypes.PlaceOrderSuccessAction:
            return tslib_1.__assign({}, state, { order: action.payload, loading: false });
        case DaffOrderActionTypes.PlaceOrderFailureAction:
            return tslib_1.__assign({}, state, { errors: [action.payload], loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL3JlZHVjZXJzL29yZGVyL29yZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQW9CLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBTXJGLE1BQU0sS0FBTyxZQUFZLEdBQTBCO0lBQ2pELEtBQUssRUFBRSxJQUFJO0lBQ1gsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsRUFBRTtDQUNYOzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQW9CLEVBQUUsTUFBd0I7SUFBOUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDbkQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQW9CLENBQUMsZ0JBQWdCO1lBQ3hDLDRCQUFXLEtBQUssSUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFFO1FBQ25DLEtBQUssb0JBQW9CLENBQUMsdUJBQXVCO1lBQy9DLDRCQUFXLEtBQUssSUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFFO1FBQzNELEtBQUssb0JBQW9CLENBQUMsdUJBQXVCO1lBQy9DLDRCQUFXLEtBQUssSUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBQztRQUM3RDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZPcmRlckFjdGlvbnMsIERhZmZPcmRlckFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9vcmRlci5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZPcmRlclJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vb3JkZXItcmVkdWNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZPcmRlclJlZHVjZXJTdGF0ZSA9IHtcbiAgb3JkZXI6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IFtdXG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmT3JkZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZPcmRlckFjdGlvbnMpOiBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5QbGFjZU9yZGVyQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5QbGFjZU9yZGVyU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIG9yZGVyOiBhY3Rpb24ucGF5bG9hZCwgbG9hZGluZzogZmFsc2V9O1xuICAgIGNhc2UgRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlckZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBlcnJvcnM6IFthY3Rpb24ucGF5bG9hZF0sIGxvYWRpbmc6IGZhbHNlfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==