/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
export class DaffInvalidCountryError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_COUNTRY;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidCountryError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jb3VudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2ludmFsaWQtY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQU14RCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsb0JBQW9COzs7O0lBR2hFLFlBQVksT0FBZ0I7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSEEsU0FBSSxHQUFXLHdCQUF3QixDQUFDLGVBQWUsQ0FBQTtJQUl2RSxDQUFDO0NBQ0Q7OztJQUxBLHVDQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2RlcyB9IGZyb20gJy4vY29kZXMuZW51bSc7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHNwZWNpZmllZCBjb3VudHJ5IGlzIGludmFsaWQgZm9yIHRoZSBzcGVjaWZpZWQgYWRkcmVzc1xuICogb3IgbWlzc2luZyB3aGVyZSBpdCBpcyByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZJbnZhbGlkQ291bnRyeUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLklOVkFMSURfQ09VTlRSWVxuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19