/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartCouponService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-coupon';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}/`);
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return this.http.post(`${this.url}/${cartId}/`, coupon);
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return this.http.delete(`${this.url}/${cartId}/${coupon.code}`);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return this.http.delete(`${this.url}/${cartId}/`);
    }
}
DaffInMemoryCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartCouponService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartCouponService_Factory() { return new DaffInMemoryCartCouponService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartCouponService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartCouponService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartCouponService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtY291cG9uL2NhcnQtY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUd4QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUVjLENBQUM7Ozs7O0lBRXhDLElBQUksQ0FBQyxNQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUNsRSxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsTUFBc0IsRUFBRSxNQUFzQjtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQXNCLEVBQUUsTUFBc0I7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFzQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTs7Ozs7SUFZakIsNENBQXlCOzs7OztJQUViLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydENvdXBvbiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2FydENvdXBvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9jYXJ0LWNvdXBvbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxpc3QoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRDb3Vwb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDYXJ0Q291cG9uW10+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vYClcbiAgfVxuXG4gIGFwcGx5KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGNvdXBvbjogRGFmZkNhcnRDb3Vwb24pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBhcnRpYWw8RGFmZkNhcnQ+PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9L2AsIGNvdXBvbik7XG4gIH1cblxuICByZW1vdmUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgY291cG9uOiBEYWZmQ2FydENvdXBvbik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxQYXJ0aWFsPERhZmZDYXJ0Pj4oYCR7dGhpcy51cmx9LyR7Y2FydElkfS8ke2NvdXBvbi5jb2RlfWApO1xuICB9XG5cbiAgcmVtb3ZlQWxsKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vYCk7XG4gIH1cbn1cbiJdfQ==