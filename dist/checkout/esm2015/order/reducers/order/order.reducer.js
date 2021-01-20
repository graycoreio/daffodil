/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffOrderActionTypes } from '../../actions/order.actions';
/**
 * @deprecated
 * @type {?}
 */
export const initialState = {
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
export function daffOrderReducer(state = initialState, action) {
    switch (action.type) {
        case DaffOrderActionTypes.PlaceOrderAction:
            return Object.assign({}, state, { loading: true });
        case DaffOrderActionTypes.PlaceOrderSuccessAction:
            return Object.assign({}, state, { order: action.payload, loading: false });
        case DaffOrderActionTypes.PlaceOrderFailureAction:
            return Object.assign({}, state, { errors: [action.payload], loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL3JlZHVjZXJzL29yZGVyL29yZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFNckYsTUFBTSxPQUFPLFlBQVksR0FBMEI7SUFDakQsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxFQUFFO0NBQ1g7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUF3QjtJQUM3RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBb0IsQ0FBQyxnQkFBZ0I7WUFDeEMseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSyxvQkFBb0IsQ0FBQyx1QkFBdUI7WUFDL0MseUJBQVcsS0FBSyxJQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUU7UUFDM0QsS0FBSyxvQkFBb0IsQ0FBQyx1QkFBdUI7WUFDL0MseUJBQVcsS0FBSyxJQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFDO1FBQzdEO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZk9yZGVyQWN0aW9ucywgRGFmZk9yZGVyQWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL29yZGVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZk9yZGVyUmVkdWNlclN0YXRlIH0gZnJvbSAnLi9vcmRlci1yZWR1Y2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZk9yZGVyUmVkdWNlclN0YXRlID0ge1xuICBvcmRlcjogbnVsbCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yczogW11cbn07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZPcmRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZk9yZGVyQWN0aW9ucyk6IERhZmZPcmRlclJlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZPcmRlckFjdGlvblR5cGVzLlBsYWNlT3JkZXJBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlfTtcbiAgICBjYXNlIERhZmZPcmRlckFjdGlvblR5cGVzLlBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgb3JkZXI6IGFjdGlvbi5wYXlsb2FkLCBsb2FkaW5nOiBmYWxzZX07XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5QbGFjZU9yZGVyRmFpbHVyZUFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVycm9yczogW2FjdGlvbi5wYXlsb2FkXSwgbG9hZGluZzogZmFsc2V9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19