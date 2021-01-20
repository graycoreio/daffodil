/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
export class DaffCartInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = DaffCartDriverErrorCodes.INVALID_API_RESPONSE;
    }
}
if (false) {
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1hcGktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1hcGktcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLG9CQUFvQjs7OztJQUd4RSxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDO0lBSTlFLENBQUM7Q0FDRDs7O0lBTEMsK0NBQTZFOztJQUVsRSxrREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBwbGF0Zm9ybSdzIEFQSSByZXNwb25zZSBpcyBtaXNzaW5nIHJlcXVpcmVkIGluZm9ybWF0aW9uXG4gKiBvciBtYWxmb3JtZWQgaW4gYW4gdW5yZWNvdmVyYWJsZSB3YXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEludmFsaWRBUElSZXNwb25zZUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLklOVkFMSURfQVBJX1JFU1BPTlNFO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19