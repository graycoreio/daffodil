/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
export class DaffAuthorizeNetInvalidPostalCodeError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_POSTAL_CODE';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidPostalCodeError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidPostalCodeError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1wb3N0YWwtY29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2ludmFsaWQtcG9zdGFsLWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU1qRSxNQUFNLE9BQU8sc0NBQXVDLFNBQVEsb0JBQW9COzs7O0lBRy9FLFlBQW1CLE9BQWU7UUFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREcsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZqQixTQUFJLEdBQVcsd0NBQXdDLENBQUM7SUFJekUsQ0FBQztDQUNEOzs7SUFMQyxzREFBd0U7O0lBRTdELHlEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHBvc3RhbCBjb2RlIGlzIGludmFsaWQuXG4gKiBJdCBzaG91bGQgYmUgbm8gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldEludmFsaWRQb3N0YWxDb2RlRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG4gIHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSAnREFGRl9BVVRIT1JJWkVfTkVUX0lOVkFMSURfUE9TVEFMX0NPREUnO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19