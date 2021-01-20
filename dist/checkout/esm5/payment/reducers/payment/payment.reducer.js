/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffPaymentActionTypes } from '../../actions/payment.actions';
/** @type {?} */
export var initialState = {
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffPaymentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffPaymentActionTypes.UpdatePaymentInfoAction:
            return tslib_1.__assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsicGF5bWVudC9yZWR1Y2Vycy9wYXltZW50L3BheW1lbnQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHM0YsTUFBTSxLQUFPLFlBQVksR0FBNEI7SUFDbkQsV0FBVyxFQUFFLElBQUk7Q0FDbEI7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxLQUFvQixFQUFFLE1BQTBCO0lBQWhELHNCQUFBLEVBQUEsb0JBQW9CO0lBQ3JELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHNCQUFzQixDQUFDLHVCQUF1QjtZQUNqRCw0QkFBVyxLQUFLLElBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDakQ7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmUGF5bWVudEFjdGlvblR5cGVzLCBEYWZmUGF5bWVudEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3BheW1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmUGF5bWVudFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vcGF5bWVudC1yZWR1Y2VyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZQYXltZW50UmVkdWNlclN0YXRlID0ge1xuICBwYXltZW50SW5mbzogbnVsbFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZQYXltZW50UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBEYWZmUGF5bWVudEFjdGlvbnMpOiBEYWZmUGF5bWVudFJlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZQYXltZW50QWN0aW9uVHlwZXMuVXBkYXRlUGF5bWVudEluZm9BY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXltZW50SW5mbzogYWN0aW9uLnBheWxvYWR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==