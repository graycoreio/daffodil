/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartService {
    /**
     * @param {?} cartFactory
     */
    constructor(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} id
     * @return {?}
     */
    clear(id) {
        return of(this.cartFactory.create());
    }
    /**
     * @return {?}
     */
    create() {
        return of({
            id: this.cartFactory.create().id
        });
    }
}
DaffTestingCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartService.ctorParameters = () => [
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartService_Factory() { return new DaffTestingCartService(i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLekQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUNVLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUNuQyxDQUFDOzs7OztJQUVKLEdBQUcsQ0FBQyxFQUFtQjtRQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFNBQWlCLEVBQUUsR0FBVztRQUN0QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsRUFBbUI7UUFDdkIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxlQUFlOzs7Ozs7OztJQU9wQiw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0RmFjdG9yeTogRGFmZkNhcnRGYWN0b3J5XG4gICkge31cblxuICBnZXQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnQ+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICBhZGRUb0NhcnQocHJvZHVjdElkOiBzdHJpbmcsIHF0eTogbnVtYmVyKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIGNsZWFyKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHJldHVybiBvZih7XG4gICAgICBpZDogdGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKS5pZFxuICAgIH0pO1xuICB9XG59XG4iXX0=