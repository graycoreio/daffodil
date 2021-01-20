/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';
/** @type {?} */
export const validateCheckTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.customer.id) {
        return response;
    }
    else {
        throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by92YWxpZGF0b3JzL2NoZWNrLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFN0UsTUFBTSxPQUFPLDBCQUEwQjs7OztBQUFHLENBQUMsUUFBc0QsRUFBRSxFQUFFO0lBQ25HLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQzdCLE9BQU8sUUFBUSxDQUFBO0tBQ2hCO1NBQU07UUFDTCxNQUFNLElBQUksK0JBQStCLENBQUMsNERBQTRELENBQUMsQ0FBQTtLQUN4RztBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1F1ZXJ5UmVzdWx0IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5cbmltcG9ydCB7IE1hZ2VudG9DaGVja1Rva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkF1dGhJbnZhbGlkQVBJUmVzcG9uc2VFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ2hlY2tUb2tlblJlc3BvbnNlID0gKHJlc3BvbnNlOiBBcG9sbG9RdWVyeVJlc3VsdDxNYWdlbnRvQ2hlY2tUb2tlblJlc3BvbnNlPikgPT4ge1xuICBpZiAocmVzcG9uc2UuZGF0YS5jdXN0b21lci5pZCkge1xuICAgIHJldHVybiByZXNwb25zZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBEYWZmQXV0aEludmFsaWRBUElSZXNwb25zZUVycm9yKCdDaGVjayB0b2tlbiByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgY3VzdG9tZXIgSUQuJylcbiAgfVxufVxuIl19