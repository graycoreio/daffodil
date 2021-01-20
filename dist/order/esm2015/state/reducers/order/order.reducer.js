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
export function daffOrderReducer(state = daffOrderInitialState, action) {
    switch (action.type) {
        case DaffOrderActionTypes.OrderListAction:
        case DaffOrderActionTypes.OrderLoadAction:
            return Object.assign({}, state, { loading: true });
        case DaffOrderActionTypes.OrderListSuccessAction:
        case DaffOrderActionTypes.OrderLoadSuccessAction:
            return Object.assign({}, state, { loading: false, errors: [] });
        case DaffOrderActionTypes.OrderListFailureAction:
        case DaffOrderActionTypes.OrderLoadFailureAction:
            return Object.assign({}, state, { errors: [
                    ...state.errors,
                    action.payload
                ], loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL29yZGVyL29yZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQUU5RCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEtBQUssR0FBRyxxQkFBcUIsRUFDN0IsTUFBMkI7SUFFM0IsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQW9CLENBQUMsZUFBZSxDQUFDO1FBQzFDLEtBQUssb0JBQW9CLENBQUMsZUFBZTtZQUN2Qyx5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksSUFDYjtRQUVKLEtBQUssb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7UUFDakQsS0FBSyxvQkFBb0IsQ0FBQyxzQkFBc0I7WUFDOUMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLEVBQUUsSUFDVjtRQUVKLEtBQUssb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7UUFDakQsS0FBSyxvQkFBb0IsQ0FBQyxzQkFBc0I7WUFDOUMseUJBQ0ssS0FBSyxJQUNSLE1BQU0sRUFBRTtvQkFDTixHQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNmLE1BQU0sQ0FBQyxPQUFPO2lCQUNmLEVBQ0QsT0FBTyxFQUFFLEtBQUssSUFDZjtRQUVIO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyQWN0aW9ucywgRGFmZk9yZGVyQWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL29yZGVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZk9yZGVyUmVkdWNlclN0YXRlIH0gZnJvbSAnLi9vcmRlci1yZWR1Y2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBkYWZmT3JkZXJJbml0aWFsU3RhdGUgfSBmcm9tICcuL29yZGVyLWluaXRpYWwtc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZk9yZGVyUmVkdWNlcjxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPihcbiAgc3RhdGUgPSBkYWZmT3JkZXJJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogRGFmZk9yZGVyQWN0aW9uczxUPlxuKTogRGFmZk9yZGVyUmVkdWNlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMaXN0QWN0aW9uOlxuICAgIGNhc2UgRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMb2FkQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTGlzdFN1Y2Nlc3NBY3Rpb246XG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxvYWRTdWNjZXNzQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IFtdXG4gICAgICB9O1xuXG4gICAgY2FzZSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxpc3RGYWlsdXJlQWN0aW9uOlxuICAgIGNhc2UgRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMb2FkRmFpbHVyZUFjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5lcnJvcnMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==