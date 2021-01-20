/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffPaypalActionTypes } from '../../actions/paypal.actions';
/** @type {?} */
export var initialState = {
    paypalTokenResponse: null,
    loading: false,
    error: null
};
/**
 * @template T, V
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffPaypalReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
            return tslib_1.__assign({}, state, { paypalTokenResponse: action.payload, loading: false, error: null });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
            return tslib_1.__assign({}, state, { error: action.payload, loading: false, paypalTokenResponse: null });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsicmVkdWNlcnMvcGF5cGFsL3BheXBhbC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFxQixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RixNQUFNLEtBQU8sWUFBWSxHQUFnQztJQUN4RCxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLElBQUk7Q0FDWDs7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsS0FBK0MsRUFBRSxNQUErQjtJQUFoRixzQkFBQSxFQUFBLG9CQUErQztJQUMvQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDckIsS0FBSyxxQkFBcUIsQ0FBQyxnQ0FBZ0M7WUFDMUQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDaEMsS0FBSyxxQkFBcUIsQ0FBQyx1Q0FBdUM7WUFDbkUsNEJBQVcsS0FBSyxJQUFFLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFFO1FBQ3JGLEtBQUsscUJBQXFCLENBQUMsdUNBQXVDO1lBQ2pFLDRCQUFXLEtBQUssSUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLElBQUksSUFBRTtRQUNuRjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZQYXlwYWxSZWR1Y2VyU3RhdGUgfSBmcm9tICcuL3BheXBhbC1yZWR1Y2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbEFjdGlvbnMsIERhZmZQYXlwYWxBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcGF5cGFsLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVxdWVzdCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZQYXlwYWxSZWR1Y2VyU3RhdGU8YW55PiA9IHtcblx0cGF5cGFsVG9rZW5SZXNwb25zZTogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdGVycm9yOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmUGF5cGFsUmVkdWNlciA8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIFYgZXh0ZW5kcyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT5cblx0KHN0YXRlOiBEYWZmUGF5cGFsUmVkdWNlclN0YXRlPFY+ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZQYXlwYWxBY3Rpb25zPFQsIFY+KTogRGFmZlBheXBhbFJlZHVjZXJTdGF0ZTxWPiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIERhZmZQYXlwYWxBY3Rpb25UeXBlcy5HZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkFjdGlvbjpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgRGFmZlBheXBhbEFjdGlvblR5cGVzLkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuU3VjY2Vzc0FjdGlvbjpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHBheXBhbFRva2VuUmVzcG9uc2U6IGFjdGlvbi5wYXlsb2FkLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG51bGx9O1xuXHRcdGNhc2UgRGFmZlBheXBhbEFjdGlvblR5cGVzLkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuRmFpbHVyZUFjdGlvbjpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgbG9hZGluZzogZmFsc2UsIHBheXBhbFRva2VuUmVzcG9uc2U6IG51bGx9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==