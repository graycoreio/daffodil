/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
export class DaffProductNotFoundError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND;
    }
}
if (false) {
    /** @type {?} */
    DaffProductNotFoundError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ub3QtZm91bmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvcHJvZHVjdC1ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG9CQUFvQjs7OztJQUdqRSxZQUFZLE9BQWdCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhBLFNBQUksR0FBVyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUkxRSxDQUFDO0NBQ0Q7OztJQUxBLHdDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2RlcyB9IGZyb20gJy4vY29kZXMuZW51bSc7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gYW4gYWRkIHRvIGNhcnQgcmVxdWVzdCBpcyBzZW50XG4gKiBmb3IgYSBwcm9kdWN0IHRoYXQgY2Fubm90IGJlIGZvdW5kLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3ROb3RGb3VuZEVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLlBST0RVQ1RfTk9UX0ZPVU5EO1xuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19