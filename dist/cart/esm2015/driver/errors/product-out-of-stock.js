/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
export class DaffProductOutOfStockError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK;
    }
}
if (false) {
    /** @type {?} */
    DaffProductOutOfStockError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vdXQtb2Ytc3RvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvcHJvZHVjdC1vdXQtb2Ytc3RvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjs7OztJQUduRSxZQUFZLE9BQWdCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhBLFNBQUksR0FBVyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUk3RSxDQUFDO0NBQ0Q7OztJQUxBLDBDQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2RlcyB9IGZyb20gJy4vY29kZXMuZW51bSc7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gYSBjYXJ0IGl0ZW0ncyByZXF1ZXN0ZWQgcXVhbnRpdHlcbiAqIGV4Y2VlZHMgdGhhdCBhbGxvd2VkIGJ5IHRoZSBwbGF0Zm9ybSBmb3IgdGhlIHNwZWNpZmllZCBwcm9kdWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RPdXRPZlN0b2NrRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuUFJPRFVDVF9PVVRfT0ZfU1RPQ0s7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=