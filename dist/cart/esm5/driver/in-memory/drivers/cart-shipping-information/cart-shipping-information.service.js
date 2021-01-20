/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartShippingInformationService = /** @class */ (function () {
    function DaffInMemoryCartShippingInformationService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-information';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    function (cartId, info) {
        return this.http.put(this.url + "/" + cartId, info);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.delete(this.url + "/" + cartId);
    };
    DaffInMemoryCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingInformationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingInformationService_Factory() { return new DaffInMemoryCartShippingInformationService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartShippingInformationService, providedIn: "root" });
    return DaffInMemoryCartShippingInformationService;
}());
export { DaffInMemoryCartShippingInformationService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingInformationService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingInformationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSxvREFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsZ0NBQWdDLENBQUM7SUFFQSxDQUFDOzs7OztJQUV4Qyx3REFBRzs7OztJQUFILFVBQUksTUFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCwyREFBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsSUFBbUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsR0FBRyxTQUFJLE1BQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELDJEQUFNOzs7O0lBQU4sVUFBTyxNQUFzQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUF1QixJQUFJLENBQUMsR0FBRyxTQUFJLE1BQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7OztxREFEbkI7Q0E0QkMsQUFuQkQsSUFtQkM7U0FoQlksMENBQTBDOzs7SUFDckQseURBQXVDOzs7OztJQUUzQiwwREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlPERhZmZDYXJ0U2hpcHBpbmdSYXRlLCBEYWZmQ2FydD4ge1xuICB1cmwgPSAnL2FwaS9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0U2hpcHBpbmdSYXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRTaGlwcGluZ1JhdGU+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBpbmZvOiBQYXJ0aWFsPERhZmZDYXJ0U2hpcHBpbmdSYXRlPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxEYWZmQ2FydD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWAsIGluZm8pO1xuICB9XG5cbiAgZGVsZXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKTtcbiAgfVxufVxuIl19