/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartItemService {
    /**
     * @param {?} cartItemFactory
     * @param {?} cartFactory
     */
    constructor(cartItemFactory, cartFactory) {
        this.cartItemFactory = cartItemFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.cartItemFactory.createMany(3));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return of(this.cartItemFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    add(cartId, input) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    update(cartId, itemId, item) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartItemService.ctorParameters = () => [
    { type: DaffCartItemFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartItemService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartItemService_Factory() { return new DaffTestingCartItemService(i0.ɵɵinject(i1.DaffCartItemFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartItemService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1pdGVtL2NhcnQtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLOUUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFDckMsWUFDVSxlQUFvQyxFQUNwQyxXQUE0QjtRQUQ1QixvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosSUFBSSxDQUFDLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLE1BQXNCLEVBQUUsTUFBK0I7UUFDekQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxNQUFzQixFQUFFLEtBQXdCO1FBQ2xELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUNKLE1BQXNCLEVBQ3RCLE1BQStCLEVBQy9CLElBQTJCO1FBRTNCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDbkMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQS9CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKeUIsbUJBQW1CO1lBQXBDLGVBQWU7Ozs7Ozs7O0lBT3BCLHFEQUE0Qzs7Ozs7SUFDNUMsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0SXRlbSwgRGFmZkNhcnRJdGVtSW5wdXQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY3RvcnksIERhZmZDYXJ0SXRlbUZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0SXRlbVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0SXRlbUZhY3Rvcnk6IERhZmZDYXJ0SXRlbUZhY3RvcnksXG4gICAgcHJpdmF0ZSBjYXJ0RmFjdG9yeTogRGFmZkNhcnRGYWN0b3J5XG4gICkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0SXRlbVtdPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEl0ZW1GYWN0b3J5LmNyZWF0ZU1hbnkoMykpO1xuICB9XG5cbiAgZ2V0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGl0ZW1JZDogRGFmZkNhcnRJdGVtWydpdGVtX2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0SXRlbT4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRJdGVtRmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICBhZGQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgaW5wdXQ6IERhZmZDYXJ0SXRlbUlucHV0KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICBjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLFxuICAgIGl0ZW1JZDogRGFmZkNhcnRJdGVtWydpdGVtX2lkJ10sXG4gICAgaXRlbTogUGFydGlhbDxEYWZmQ2FydEl0ZW0+XG4gICk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICBkZWxldGUoY2FydElkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxufVxuIl19