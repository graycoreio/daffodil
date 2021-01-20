/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
export class DaffAuthorizeNetAuthFailedError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_AUTH_FAILED';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetAuthFailedError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetAuthFailedError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1mYWlsZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9hdXRoLWZhaWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLakUsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLG9CQUFvQjs7OztJQUd4RSxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLGdDQUFnQyxDQUFDO0lBSWpFLENBQUM7Q0FDRDs7O0lBTEMsK0NBQWdFOztJQUVyRCxrREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGVpdGhlciB0aGUgQVBJIExvZ2luIElEIG9yIFB1YmxpYyBDbGllbnQgS2V5IHZhbHVlcyBhcmUgaW5jb3JyZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldEF1dGhGYWlsZWRFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9ICdEQUZGX0FVVEhPUklaRV9ORVRfQVVUSF9GQUlMRUQnO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19