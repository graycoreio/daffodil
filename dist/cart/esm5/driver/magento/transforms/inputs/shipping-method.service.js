/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var DaffMagentoShippingMethodInputTransformer = /** @class */ (function () {
    function DaffMagentoShippingMethodInputTransformer() {
    }
    /**
     * @param {?} method
     * @return {?}
     */
    DaffMagentoShippingMethodInputTransformer.prototype.transform = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        return {
            carrier_code: method.carrier,
            method_code: method.method_code
        };
    };
    DaffMagentoShippingMethodInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoShippingMethodInputTransformer;
}());
export { DaffMagentoShippingMethodInputTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctbWV0aG9kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvaW5wdXRzL3NoaXBwaW5nLW1ldGhvZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDO0lBQUE7SUFRQSxDQUFDOzs7OztJQU5DLDZEQUFTOzs7O0lBQVQsVUFBVSxNQUFxQztRQUM3QyxPQUFPO1lBQ0wsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQzVCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztTQUNoQyxDQUFBO0lBQ0gsQ0FBQzs7Z0JBUEYsVUFBVTs7SUFRWCxnREFBQztDQUFBLEFBUkQsSUFRQztTQVBZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9TaGlwcGluZ01ldGhvZElucHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL3NoaXBwaW5nLW1ldGhvZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b1NoaXBwaW5nTWV0aG9kSW5wdXRUcmFuc2Zvcm1lciB7XG4gIHRyYW5zZm9ybShtZXRob2Q6IFBhcnRpYWw8RGFmZkNhcnRTaGlwcGluZ1JhdGU+KTogTWFnZW50b1NoaXBwaW5nTWV0aG9kSW5wdXQge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJyaWVyX2NvZGU6IG1ldGhvZC5jYXJyaWVyLFxuICAgICAgbWV0aG9kX2NvZGU6IG1ldGhvZC5tZXRob2RfY29kZVxuICAgIH1cbiAgfVxufVxuIl19