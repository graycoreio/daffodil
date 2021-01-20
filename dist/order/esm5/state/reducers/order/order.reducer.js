var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffOrderActionTypes } from '../../actions/order.actions';
import { daffOrderInitialState } from './order-initial-state';
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffOrderReducer(state, action) {
    if (state === void 0) { state = daffOrderInitialState; }
    switch (action.type) {
        case DaffOrderActionTypes.OrderListAction:
        case DaffOrderActionTypes.OrderLoadAction:
            return __assign({}, state, { loading: true });
        case DaffOrderActionTypes.OrderListSuccessAction:
        case DaffOrderActionTypes.OrderLoadSuccessAction:
            return __assign({}, state, { loading: false, errors: [] });
        case DaffOrderActionTypes.OrderListFailureAction:
        case DaffOrderActionTypes.OrderLoadFailureAction:
            return __assign({}, state, { errors: __spread(state.errors, [
                    action.payload
                ]), loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL29yZGVyL29yZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQW9CLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFFOUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixLQUE2QixFQUM3QixNQUEyQjtJQUQzQixzQkFBQSxFQUFBLDZCQUE2QjtJQUc3QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7UUFDMUMsS0FBSyxvQkFBb0IsQ0FBQyxlQUFlO1lBQ3ZDLG9CQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNiO1FBRUosS0FBSyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRCxLQUFLLG9CQUFvQixDQUFDLHNCQUFzQjtZQUM5QyxvQkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLEtBQUssRUFDZCxNQUFNLEVBQUUsRUFBRSxJQUNWO1FBRUosS0FBSyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRCxLQUFLLG9CQUFvQixDQUFDLHNCQUFzQjtZQUM5QyxvQkFDSyxLQUFLLElBQ1IsTUFBTSxXQUNELEtBQUssQ0FBQyxNQUFNO29CQUNmLE1BQU0sQ0FBQyxPQUFPO29CQUVoQixPQUFPLEVBQUUsS0FBSyxJQUNmO1FBRUg7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJBY3Rpb25zLCBEYWZmT3JkZXJBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvb3JkZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUgfSBmcm9tICcuL29yZGVyLXJlZHVjZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IGRhZmZPcmRlckluaXRpYWxTdGF0ZSB9IGZyb20gJy4vb3JkZXItaW5pdGlhbC1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmT3JkZXJSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+KFxuICBzdGF0ZSA9IGRhZmZPcmRlckluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBEYWZmT3JkZXJBY3Rpb25zPFQ+XG4pOiBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxpc3RBY3Rpb246XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxvYWRBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMaXN0U3VjY2Vzc0FjdGlvbjpcbiAgICBjYXNlIERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTG9hZFN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogW11cbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTGlzdEZhaWx1cmVBY3Rpb246XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxvYWRGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIC4uLnN0YXRlLmVycm9ycyxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19