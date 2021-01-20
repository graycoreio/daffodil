/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartItemService = /** @class */ (function () {
    function DaffTestingCartItemService(cartItemFactory, cartFactory) {
        this.cartItemFactory = cartItemFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartItemFactory.createMany(3));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.get = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return of(this.cartItemFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    DaffTestingCartItemService.prototype.add = /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    function (cartId, input) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    DaffTestingCartItemService.prototype.update = /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    function (cartId, itemId, item) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.delete = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartItemService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartItemService.ctorParameters = function () { return [
        { type: DaffCartItemFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartItemService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartItemService_Factory() { return new DaffTestingCartItemService(i0.ɵɵinject(i1.DaffCartItemFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartItemService, providedIn: "root" });
    return DaffTestingCartItemService;
}());
export { DaffTestingCartItemService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartItemService.prototype.cartItemFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartItemService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1pdGVtL2NhcnQtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFOUU7SUFJRSxvQ0FDVSxlQUFvQyxFQUNwQyxXQUE0QjtRQUQ1QixvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUoseUNBQUk7Ozs7SUFBSixVQUFLLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsd0NBQUc7Ozs7O0lBQUgsVUFBSSxNQUFzQixFQUFFLE1BQStCO1FBQ3pELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCx3Q0FBRzs7Ozs7SUFBSCxVQUFJLE1BQXNCLEVBQUUsS0FBd0I7UUFDbEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFRCwyQ0FBTTs7Ozs7O0lBQU4sVUFDRSxNQUFzQixFQUN0QixNQUErQixFQUMvQixJQUEyQjtRQUUzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsMkNBQU07Ozs7O0lBQU4sVUFBTyxNQUFjLEVBQUUsTUFBYztRQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBL0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSnlCLG1CQUFtQjtnQkFBcEMsZUFBZTs7O3FDQVJ4QjtDQTBDQyxBQWhDRCxJQWdDQztTQTdCWSwwQkFBMEI7Ozs7OztJQUVuQyxxREFBNEM7Ozs7O0lBQzVDLGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEl0ZW0sIERhZmZDYXJ0SXRlbUlucHV0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZkNhcnRGYWN0b3J5LCBEYWZmQ2FydEl0ZW1GYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydEl0ZW1TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FydEl0ZW1GYWN0b3J5OiBEYWZmQ2FydEl0ZW1GYWN0b3J5LFxuICAgIHByaXZhdGUgY2FydEZhY3Rvcnk6IERhZmZDYXJ0RmFjdG9yeVxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEl0ZW1bXT4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRJdGVtRmFjdG9yeS5jcmVhdGVNYW55KDMpKTtcbiAgfVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEl0ZW0+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0SXRlbUZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgYWRkKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGlucHV0OiBEYWZmQ2FydEl0ZW1JbnB1dCk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgY2FydElkOiBEYWZmQ2FydFsnaWQnXSxcbiAgICBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddLFxuICAgIGl0ZW06IFBhcnRpYWw8RGFmZkNhcnRJdGVtPlxuICApOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgZGVsZXRlKGNhcnRJZDogc3RyaW5nLCBpdGVtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cbn1cbiJdfQ==