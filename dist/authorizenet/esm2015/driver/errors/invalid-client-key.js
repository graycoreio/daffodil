/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
export class DaffAuthorizeNetInvalidClientKeyError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CLIENT_KEY';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidClientKeyError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidClientKeyError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jbGllbnQta2V5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1jbGllbnQta2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFNakUsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLG9CQUFvQjs7OztJQUc5RSxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLHVDQUF1QyxDQUFDO0lBSXhFLENBQUM7Q0FDRDs7O0lBTEMscURBQXVFOztJQUU1RCx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBgY2xpZW50S2V5YCB2YWx1ZSB3aXRoIHdoaWNoIHRoZSBBdXRob3JpemUubmV0IGRyaXZlciBoYXMgYmVlbiBjb25maWd1cmVkIGlzIGludmFsaWQgb3IgbWlzc2luZy5cbiAqIEBzZWUge0BsaW5rIERhZmZBdXRob3JpemVOZXRDb25maWd9XG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aG9yaXplTmV0SW52YWxpZENsaWVudEtleUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfQVVUSE9SSVpFX05FVF9JTlZBTElEX0NMSUVOVF9LRVknO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19