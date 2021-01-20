/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
export class DaffAuthorizeNetInvalidCCNameError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NAME';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNameError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNameError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jYy1uYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1jYy1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFNakUsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLG9CQUFvQjs7OztJQUczRSxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLG9DQUFvQyxDQUFDO0lBSXJFLENBQUM7Q0FDRDs7O0lBTEMsa0RBQW9FOztJQUV6RCxxREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBjYXJkaG9sZGVyIG5hbWUgaXMgaW52YWxpZC5cbiAqIEl0IHNob3VsZCBiZSBubyBtb3JlIHRoYW4gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aG9yaXplTmV0SW52YWxpZENDTmFtZUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfQVVUSE9SSVpFX05FVF9JTlZBTElEX0NDX05BTUUnO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19