/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffLoadingState } from '@daffodil/core/state';
import { daffCartOrderInitialState } from './cart-order-initial-state';
import { DaffCartOrderActionTypes } from '../../actions/public_api';
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffCartOrderReducer(state = daffCartOrderInitialState, action) {
    switch (action.type) {
        case DaffCartOrderActionTypes.CartPlaceOrderAction:
            return Object.assign({}, state, { loading: DaffLoadingState.Mutating });
        case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
            return Object.assign({}, state, { errors: [], loading: DaffLoadingState.Complete, cartOrderResult: action.payload });
        case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
            return Object.assign({}, state, { loading: DaffLoadingState.Complete, errors: [
                    ...state.errors,
                    action.payload
                ] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXJ0LW9yZGVyL2NhcnQtb3JkZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUVMLHdCQUF3QixFQUN6QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBR2xDLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsS0FBSyxHQUFHLHlCQUF5QixFQUNqQyxNQUErQjtJQUUvQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyx3QkFBd0IsQ0FBQyxvQkFBb0I7WUFDaEQseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLElBQ2xDO1FBRUosS0FBSyx3QkFBd0IsQ0FBQywyQkFBMkI7WUFDdkQseUJBQ0ssS0FBSyxJQUNSLE1BQU0sRUFBRSxFQUFFLEVBQ1YsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFDbEMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQy9CO1FBRUosS0FBSyx3QkFBd0IsQ0FBQywyQkFBMkI7WUFDdkQseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQ2xDLE1BQU0sRUFBRTtvQkFDTixHQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNmLE1BQU0sQ0FBQyxPQUFPO2lCQUNmLElBQ0Q7UUFFSjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZMb2FkaW5nU3RhdGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBkYWZmQ2FydE9yZGVySW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9jYXJ0LW9yZGVyLWluaXRpYWwtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlckFjdGlvbnMsXG4gIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlc1xufSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhcnRPcmRlclJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vY2FydC1vcmRlci1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZkNhcnRPcmRlclJlZHVjZXI8VCBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0PihcbiAgc3RhdGUgPSBkYWZmQ2FydE9yZGVySW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IERhZmZDYXJ0T3JkZXJBY3Rpb25zPFQ+XG4pOiBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFQ+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgbG9hZGluZzogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICAgICAgY2FydE9yZGVyUmVzdWx0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlckZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgLi4uc3RhdGUuZXJyb3JzLFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIF1cbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=