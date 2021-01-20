/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { daffCartStateResolutionConfigurationDefault, } from './resolution/config';
/**
 * An object that describes the configuration of the`\@daffodil/cart/state` package.
 * @record
 */
export function DaffCartStateConfiguration() { }
if (false) {
    /** @type {?} */
    DaffCartStateConfiguration.prototype.resolution;
}
/**
 * The default values of the `\@daffodil/cart/state` state configuration.
 * @type {?}
 */
export var daffCartStateConfigurationDefault = {
    resolution: tslib_1.__assign({}, daffCartStateResolutionConfigurationDefault),
};
/**
 * The token holding the runtime configuration for the behavior of the
 * `\@daffodil/cart/state` package.
 * @type {?}
 */
export var DAFF_CART_STATE_CONFIG = new InjectionToken('DAFF_CART_STATE_CONFIG', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return daffCartStateConfigurationDefault; }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBRU4sMkNBQTJDLEdBQzNDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBSzdCLGdEQUVDOzs7SUFEQSxnREFBaUQ7Ozs7OztBQU1sRCxNQUFNLEtBQU8saUNBQWlDLEdBQStCO0lBQzVFLFVBQVUsdUJBQ04sMkNBQTJDLENBQzlDO0NBQ0Q7Ozs7OztBQU1ELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FFdEQsd0JBQXdCLEVBQUU7SUFDM0IsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTzs7O0lBQUUsY0FBTSxPQUFBLGlDQUFpQyxFQUFqQyxDQUFpQyxDQUFBO0NBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0RGFmZkNhcnRTdGF0ZVJlc29sdXRpb25Db25maWd1cmF0aW9uLFxuXHRkYWZmQ2FydFN0YXRlUmVzb2x1dGlvbkNvbmZpZ3VyYXRpb25EZWZhdWx0LFxufSBmcm9tICcuL3Jlc29sdXRpb24vY29uZmlnJztcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBkZXNjcmliZXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlYEBkYWZmb2RpbC9jYXJ0L3N0YXRlYCBwYWNrYWdlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uIHtcblx0cmVzb2x1dGlvbjogRGFmZkNhcnRTdGF0ZVJlc29sdXRpb25Db25maWd1cmF0aW9uO1xufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IHZhbHVlcyBvZiB0aGUgYEBkYWZmb2RpbC9jYXJ0L3N0YXRlYCBzdGF0ZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgZGFmZkNhcnRTdGF0ZUNvbmZpZ3VyYXRpb25EZWZhdWx0OiBEYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbiA9IHtcblx0cmVzb2x1dGlvbjoge1xuXHRcdC4uLmRhZmZDYXJ0U3RhdGVSZXNvbHV0aW9uQ29uZmlndXJhdGlvbkRlZmF1bHQsXG5cdH0sXG59O1xuXG4vKipcbiAqIFRoZSB0b2tlbiBob2xkaW5nIHRoZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGBAZGFmZm9kaWwvY2FydC9zdGF0ZWAgcGFja2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IERBRkZfQ0FSVF9TVEFURV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG5cdERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uXG4+KCdEQUZGX0NBUlRfU1RBVEVfQ09ORklHJywge1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG5cdGZhY3Rvcnk6ICgpID0+IGRhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uRGVmYXVsdCxcbn0pO1xuIl19