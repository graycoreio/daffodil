/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffLoadingState } from '@daffodil/core/state';
import { daffCartOrderInitialState } from './cart-order-initial-state';
import { DaffCartOrderActionTypes } from '../../actions/public_api';
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffCartOrderReducer(state, action) {
    if (state === void 0) { state = daffCartOrderInitialState; }
    switch (action.type) {
        case DaffCartOrderActionTypes.CartPlaceOrderAction:
            return tslib_1.__assign({}, state, { loading: DaffLoadingState.Mutating });
        case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
            return tslib_1.__assign({}, state, { errors: [], loading: DaffLoadingState.Complete, cartOrderResult: action.payload });
        case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
            return tslib_1.__assign({}, state, { loading: DaffLoadingState.Complete, errors: tslib_1.__spread(state.errors, [
                    action.payload
                ]) });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXJ0LW9yZGVyL2NhcnQtb3JkZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFFTCx3QkFBd0IsRUFDekIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUdsQyxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQWlDLEVBQ2pDLE1BQStCO0lBRC9CLHNCQUFBLEVBQUEsaUNBQWlDO0lBR2pDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHdCQUF3QixDQUFDLG9CQUFvQjtZQUNoRCw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsSUFDbEM7UUFFSixLQUFLLHdCQUF3QixDQUFDLDJCQUEyQjtZQUN2RCw0QkFDSyxLQUFLLElBQ1IsTUFBTSxFQUFFLEVBQUUsRUFDVixPQUFPLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUNsQyxlQUFlLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDL0I7UUFFSixLQUFLLHdCQUF3QixDQUFDLDJCQUEyQjtZQUN2RCw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFDbEMsTUFBTSxtQkFDRCxLQUFLLENBQUMsTUFBTTtvQkFDZixNQUFNLENBQUMsT0FBTztzQkFFaEI7UUFFSjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZMb2FkaW5nU3RhdGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBkYWZmQ2FydE9yZGVySW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9jYXJ0LW9yZGVyLWluaXRpYWwtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlckFjdGlvbnMsXG4gIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlc1xufSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhcnRPcmRlclJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vY2FydC1vcmRlci1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZkNhcnRPcmRlclJlZHVjZXI8VCBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0PihcbiAgc3RhdGUgPSBkYWZmQ2FydE9yZGVySW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IERhZmZDYXJ0T3JkZXJBY3Rpb25zPFQ+XG4pOiBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFQ+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgbG9hZGluZzogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICAgICAgY2FydE9yZGVyUmVzdWx0OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlckZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZSxcbiAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgLi4uc3RhdGUuZXJyb3JzLFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIF1cbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=