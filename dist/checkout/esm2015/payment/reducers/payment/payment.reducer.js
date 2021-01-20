/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffPaymentActionTypes } from '../../actions/payment.actions';
/** @type {?} */
export const initialState = {
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffPaymentReducer(state = initialState, action) {
    switch (action.type) {
        case DaffPaymentActionTypes.UpdatePaymentInfoAction:
            return Object.assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsicGF5bWVudC9yZWR1Y2Vycy9wYXltZW50L3BheW1lbnQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFzQixNQUFNLCtCQUErQixDQUFDOztBQUczRixNQUFNLE9BQU8sWUFBWSxHQUE0QjtJQUNuRCxXQUFXLEVBQUUsSUFBSTtDQUNsQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBMEI7SUFDakYsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssc0JBQXNCLENBQUMsdUJBQXVCO1lBQ2pELHlCQUFXLEtBQUssSUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUNqRDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZQYXltZW50QWN0aW9uVHlwZXMsIERhZmZQYXltZW50QWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcGF5bWVudC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQYXltZW50UmVkdWNlclN0YXRlIH0gZnJvbSAnLi9wYXltZW50LXJlZHVjZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZlBheW1lbnRSZWR1Y2VyU3RhdGUgPSB7XG4gIHBheW1lbnRJbmZvOiBudWxsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZlBheW1lbnRSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZQYXltZW50QWN0aW9ucyk6IERhZmZQYXltZW50UmVkdWNlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZlBheW1lbnRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50SW5mb0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBheW1lbnRJbmZvOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19