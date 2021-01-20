/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartService = /** @class */ (function () {
    function DaffTestingCartService(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DaffTestingCartService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffTestingCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffTestingCartService.prototype.clear = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return of(this.cartFactory.create());
    };
    /**
     * @return {?}
     */
    DaffTestingCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return of({
            id: this.cartFactory.create().id
        });
    };
    DaffTestingCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartService.ctorParameters = function () { return [
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartService_Factory() { return new DaffTestingCartService(i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartService, providedIn: "root" });
    return DaffTestingCartService;
}());
export { DaffTestingCartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFekQ7SUFJRSxnQ0FDVSxXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFDbkMsQ0FBQzs7Ozs7SUFFSixvQ0FBRzs7OztJQUFILFVBQUksRUFBbUI7UUFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsU0FBaUIsRUFBRSxHQUFXO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHNDQUFLOzs7O0lBQUwsVUFBTSxFQUFtQjtRQUN2QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUNFLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF4QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxlQUFlOzs7aUNBTnhCO0NBaUNDLEFBekJELElBeUJDO1NBdEJZLHNCQUFzQjs7Ozs7O0lBRS9CLDZDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZkNhcnRGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIGdldChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIGFkZFRvQ2FydChwcm9kdWN0SWQ6IHN0cmluZywgcXR5OiBudW1iZXIpOiBPYnNlcnZhYmxlPERhZmZDYXJ0PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgY2xlYXIoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnQ+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIGlkOiB0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpLmlkXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==