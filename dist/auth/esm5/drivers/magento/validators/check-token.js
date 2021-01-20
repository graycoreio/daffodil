/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';
/** @type {?} */
export var validateCheckTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
function (response) {
    if (response.data.customer.id) {
        return response;
    }
    else {
        throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by92YWxpZGF0b3JzL2NoZWNrLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFN0UsTUFBTSxLQUFPLDBCQUEwQjs7OztBQUFHLFVBQUMsUUFBc0Q7SUFDL0YsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsT0FBTyxRQUFRLENBQUE7S0FDaEI7U0FBTTtRQUNMLE1BQU0sSUFBSSwrQkFBK0IsQ0FBQyw0REFBNEQsQ0FBQyxDQUFBO0tBQ3hHO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUXVlcnlSZXN1bHQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcblxuaW1wb3J0IHsgTWFnZW50b0NoZWNrVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQXV0aEludmFsaWRBUElSZXNwb25zZUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDaGVja1Rva2VuUmVzcG9uc2UgPSAocmVzcG9uc2U6IEFwb2xsb1F1ZXJ5UmVzdWx0PE1hZ2VudG9DaGVja1Rva2VuUmVzcG9uc2U+KSA9PiB7XG4gIGlmIChyZXNwb25zZS5kYXRhLmN1c3RvbWVyLmlkKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IERhZmZBdXRoSW52YWxpZEFQSVJlc3BvbnNlRXJyb3IoJ0NoZWNrIHRva2VuIHJlc3BvbnNlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCBjdXN0b21lciBJRC4nKVxuICB9XG59XG4iXX0=