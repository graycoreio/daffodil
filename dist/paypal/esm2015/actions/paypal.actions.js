/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffPaypalActionTypes = {
    GeneratePaypalExpressTokenAction: '[Daff Paypal] Generate Express Token Action',
    GeneratePaypalExpressTokenSuccessAction: '[Daff Paypal] Generate Express Token Success Action',
    GeneratePaypalExpressTokenFailureAction: '[Daff Paypal] Generate Express Token Failure Action',
};
export { DaffPaypalActionTypes };
/**
 * @template T
 */
export class DaffGeneratePaypalExpressToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;
    }
}
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.payload;
}
/**
 * @template T
 */
export class DaffGeneratePaypalExpressTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.payload;
}
export class DaffGeneratePaypalExpressTokenFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressTokenFailure.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressTokenFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9wYXlwYWwuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxrQ0FBbUMsNkNBQTZDO0lBQ2hGLHlDQUEwQyxxREFBcUQ7SUFDL0YseUNBQTBDLHFEQUFxRDs7Ozs7O0FBR2pHLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFHekMsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLGdDQUFnQyxDQUFDO0lBRXZDLENBQUM7Q0FDbEM7OztJQUhDLDhDQUF1RTs7SUFFM0QsaURBQWlCOzs7OztBQUcvQixNQUFNLE9BQU8scUNBQXFDOzs7O0lBR2hELFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyx1Q0FBdUMsQ0FBQztJQUU5QyxDQUFDO0NBQ2xDOzs7SUFIQyxxREFBOEU7O0lBRWxFLHdEQUFpQjs7QUFHL0IsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUdqRCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcscUJBQXFCLENBQUMsdUNBQXVDLENBQUM7SUFFekMsQ0FBQztDQUN0Qzs7O0lBSEEscURBQThFOztJQUVsRSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlc3BvbnNlJztcblxuZXhwb3J0IGVudW0gRGFmZlBheXBhbEFjdGlvblR5cGVzIHtcbiAgR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW5BY3Rpb24gPSAnW0RhZmYgUGF5cGFsXSBHZW5lcmF0ZSBFeHByZXNzIFRva2VuIEFjdGlvbicsXG4gIEdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZiBQYXlwYWxdIEdlbmVyYXRlIEV4cHJlc3MgVG9rZW4gU3VjY2VzcyBBY3Rpb24nLFxuICBHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkZhaWx1cmVBY3Rpb24gPSAnW0RhZmYgUGF5cGFsXSBHZW5lcmF0ZSBFeHByZXNzIFRva2VuIEZhaWx1cmUgQWN0aW9uJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuPFQgZXh0ZW5kcyBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0ID0gRGFmZlBheXBhbFRva2VuUmVxdWVzdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZlBheXBhbEFjdGlvblR5cGVzLkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuU3VjY2VzczxUIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgPSBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZlBheXBhbEFjdGlvblR5cGVzLkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZlBheXBhbEFjdGlvblR5cGVzLkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuRmFpbHVyZUFjdGlvbjtcblx0XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZQYXlwYWxBY3Rpb25zPFxuXHRUIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVxdWVzdCA9IERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIFxuXHRWIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgPSBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZVxuPiA9XG4gICAgfCBEYWZmR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW48VD5cbiAgICB8IERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlblN1Y2Nlc3M8Vj5cbiAgICB8IERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkZhaWx1cmU7XG4iXX0=