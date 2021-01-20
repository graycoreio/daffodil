/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffCompositeProductFacade = /** @class */ (function () {
    function MockDaffCompositeProductFacade() {
    }
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getRequiredItemPricesForConfiguration = /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    function (id, configuration) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getOptionalItemPricesForConfiguration = /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    function (id, configuration) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getPricesAsCurrentlyConfigured = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getAppliedOptions = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject({});
    };
    /**
     * @param {?} id
     * @param {?} item_id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.isItemRequired = /**
     * @param {?} id
     * @param {?} item_id
     * @return {?}
     */
    function (id, item_id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    /**
     * @param {?} priceRange
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.hasDiscount = /**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return false;
    };
    ;
    /**
     * @param {?} priceRange
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.hasPriceRange = /**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return false;
    };
    ;
    MockDaffCompositeProductFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffCompositeProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffCompositeProductFacade_Factory() { return new MockDaffCompositeProductFacade(); }, token: MockDaffCompositeProductFacade, providedIn: "root" });
    return MockDaffCompositeProductFacade;
}());
export { MockDaffCompositeProductFacade };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb21wb3NpdGUtcHJvZHVjdC1mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaGVscGVycy9tb2NrLWNvbXBvc2l0ZS1wcm9kdWN0LWZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVczQztJQUFBO0tBd0JDOzs7Ozs7SUF0QkEsOEVBQXFDOzs7OztJQUFyQyxVQUFzQyxFQUFVLEVBQUUsYUFBMEQ7UUFDM0csT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFDRCw4RUFBcUM7Ozs7O0lBQXJDLFVBQXNDLEVBQVUsRUFBRSxhQUEwRDtRQUMzRyxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsdUVBQThCOzs7O0lBQTlCLFVBQStCLEVBQVU7UUFDeEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELDBEQUFpQjs7OztJQUFqQixVQUFrQixFQUFVO1FBQzNCLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBQ0QsdURBQWM7Ozs7O0lBQWQsVUFBZSxFQUE4QixFQUFFLE9BQXVDO1FBQ3JGLE9BQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFDRCxpREFBUTs7OztJQUFSLFVBQVMsTUFBTSxJQUFHLENBQUM7SUFBQSxDQUFDOzs7OztJQUNwQixvREFBVzs7OztJQUFYLFVBQVksVUFBMEI7UUFDckMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRixzREFBYTs7OztJQUFiLFVBQWMsVUFBMEI7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQUEsQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozt5Q0FiaEM7Q0FxQ0MsQUF4QkQsSUF3QkM7U0F2QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0RGFmZkNvbXBvc2l0ZVByb2R1Y3RGYWNhZGVJbnRlcmZhY2UsXG5cdERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbixcblx0RGFmZkNvbXBvc2l0ZVByb2R1Y3QsXG5cdERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSxcblx0RGFmZlByaWNlUmFuZ2UsXG5cdERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbVxufSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQ29tcG9zaXRlUHJvZHVjdEZhY2FkZSBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIHtcblx0Z2V0UmVxdWlyZWRJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbihpZDogc3RyaW5nLCBjb25maWd1cmF0aW9uPzogRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0+KTogQmVoYXZpb3JTdWJqZWN0PERhZmZQcmljZVJhbmdlPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0Z2V0T3B0aW9uYWxJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbihpZDogc3RyaW5nLCBjb25maWd1cmF0aW9uPzogRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0+KTogQmVoYXZpb3JTdWJqZWN0PERhZmZQcmljZVJhbmdlPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0Z2V0UHJpY2VzQXNDdXJyZW50bHlDb25maWd1cmVkKGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8RGFmZlByaWNlUmFuZ2U+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0fVxuXHRnZXRBcHBsaWVkT3B0aW9ucyhpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uPj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0fVxuXHRpc0l0ZW1SZXF1aXJlZChpZDogRGFmZkNvbXBvc2l0ZVByb2R1Y3RbJ2lkJ10sIGl0ZW1faWQ6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHR9XG5cdGRpc3BhdGNoKGFjdGlvbikge307XG5cdGhhc0Rpc2NvdW50KHByaWNlUmFuZ2U6IERhZmZQcmljZVJhbmdlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRoYXNQcmljZVJhbmdlKHByaWNlUmFuZ2U6IERhZmZQcmljZVJhbmdlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuIl19