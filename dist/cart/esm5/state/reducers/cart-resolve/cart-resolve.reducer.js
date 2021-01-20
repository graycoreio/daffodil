/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffCartActionTypes, } from '../../actions/public_api';
import { initialState } from '../cart-initial-state';
import { DaffCartResolveState } from './cart-resolve-state.enum';
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function cartResolveReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartActionTypes.ResolveCartAction:
            return tslib_1.__assign({}, state, { resolved: DaffCartResolveState.Resolving });
        case DaffCartActionTypes.ResolveCartServerSideAction:
            return tslib_1.__assign({}, state, { resolved: DaffCartResolveState.ServerSide });
        case DaffCartActionTypes.ResolveCartSuccessAction:
            return tslib_1.__assign({}, state, { resolved: DaffCartResolveState.Succeeded });
        case DaffCartActionTypes.ResolveCartFailureAction:
            return tslib_1.__assign({}, state, { resolved: DaffCartResolveState.Failed });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yZXNvbHZlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhcnQtcmVzb2x2ZS9jYXJ0LXJlc29sdmUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFDTCxtQkFBbUIsR0FDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFFakUsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxLQUFvQixFQUNwQixNQUFtQjtJQURuQixzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUI7WUFDeEMsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxTQUFTLElBQ3hDO1FBQ0osS0FBSyxtQkFBbUIsQ0FBQywyQkFBMkI7WUFDbEQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLElBQ3pDO1FBQ0osS0FBSyxtQkFBbUIsQ0FBQyx3QkFBd0I7WUFDL0MsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxTQUFTLElBQ3hDO1FBRUosS0FBSyxtQkFBbUIsQ0FBQyx3QkFBd0I7WUFDL0MsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxNQUFNLElBQ3JDO1FBRUo7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnRBY3Rpb25UeXBlcyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL2NhcnQtaW5pdGlhbC1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4uL2NhcnQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9uLXR5cGVzLnR5cGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRSZXNvbHZlU3RhdGUgfSBmcm9tICcuL2NhcnQtcmVzb2x2ZS1zdGF0ZS5lbnVtJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRSZXNvbHZlUmVkdWNlcjxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4oXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEFjdGlvblR5cGVzXG4pOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzb2x2ZWQ6IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlJlc29sdmluZ1xuICAgICAgfTtcbiAgICBjYXNlIERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRTZXJ2ZXJTaWRlQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc29sdmVkOiBEYWZmQ2FydFJlc29sdmVTdGF0ZS5TZXJ2ZXJTaWRlXG4gICAgICB9O1xuICAgIGNhc2UgRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydFN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzb2x2ZWQ6IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlN1Y2NlZWRlZFxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydEZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzb2x2ZWQ6IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLkZhaWxlZFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==