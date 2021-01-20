/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderItem {
    constructor() {
        this.item_id = faker.random.number({ min: 1, max: 1000 });
        this.image = {
            url: faker.image.imageUrl(),
            id: String(faker.random.number({ min: 1, max: 1000 })),
            label: faker.random.word()
        };
        this.order_id = faker.random.number({ min: 1, max: 1000 });
        this.qty_ordered = faker.random.number({ min: 1, max: 1000 });
        this.qty_canceled = faker.random.number({ min: 1, max: 1000 });
        this.qty_fulfilled = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.product_id = faker.random.number({ min: 1, max: 1000 });
        this.parent_item_id = faker.random.number({ min: 1, max: 1000 });
        this.sku = faker.random.alphaNumeric(20);
        this.name = faker.random.word();
        this.weight = faker.random.number({ min: 1, max: 1000 });
        this.qty = faker.random.number({ min: 1, max: 10 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.discount_amount = faker.random.number({ min: 1, max: this.price });
        this.discount_percent = Math.floor(this.discount_amount / this.price * 100);
        this.tax_percent = faker.random.number({ min: 1, max: 10 });
        this.tax_amount = faker.random.number({ min: 1, max: 10 });
        this.row_total = this.price * this.qty;
        this.row_total_with_discount = (this.price - this.discount_amount) * this.qty;
        this.row_weight = faker.random.number({ min: 1, max: 100 });
        this.tax_before_discount = faker.random.number({ min: 1, max: 100 });
        this.type = DaffOrderItemType.Simple;
    }
}
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.order_id;
    /** @type {?} */
    MockOrderItem.prototype.qty_ordered;
    /** @type {?} */
    MockOrderItem.prototype.qty_canceled;
    /** @type {?} */
    MockOrderItem.prototype.qty_fulfilled;
    /** @type {?} */
    MockOrderItem.prototype.created_at;
    /** @type {?} */
    MockOrderItem.prototype.updated_at;
    /** @type {?} */
    MockOrderItem.prototype.product_id;
    /** @type {?} */
    MockOrderItem.prototype.parent_item_id;
    /** @type {?} */
    MockOrderItem.prototype.sku;
    /** @type {?} */
    MockOrderItem.prototype.name;
    /** @type {?} */
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_amount;
    /** @type {?} */
    MockOrderItem.prototype.row_total;
    /** @type {?} */
    MockOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    MockOrderItem.prototype.row_weight;
    /** @type {?} */
    MockOrderItem.prototype.tax_before_discount;
    /** @type {?} */
    MockOrderItem.prototype.type;
}
export class DaffOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderItem);
    }
}
DaffOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUNFLFlBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFHO1lBQ04sR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQzNCLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3BELEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtTQUMzQixDQUFDO1FBQ0YsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxpQkFB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RCxvQ0FBdUQ7O0lBQ3ZELHFDQUF3RDs7SUFDeEQsc0NBQXlEOztJQUN6RCxtQ0FBMEM7O0lBQzFDLG1DQUEwQzs7SUFDMUMsbUNBQXNEOztJQUN0RCx1Q0FBMEQ7O0lBQzFELDRCQUFvQzs7SUFDcEMsNkJBQTJCOztJQUMzQiwrQkFBa0Q7O0lBQ2xELDRCQUE2Qzs7SUFDN0MsOEJBQWlEOztJQUNqRCx3Q0FBaUU7O0lBQ2pFLHlDQUF1RTs7SUFDdkUsb0NBQXFEOztJQUNyRCxtQ0FBb0Q7O0lBQ3BELGtDQUFrQzs7SUFDbEMsZ0RBQXlFOztJQUN6RSxtQ0FBcUQ7O0lBQ3JELDRDQUE4RDs7SUFDOUQsNkJBQWdDOztBQU1sQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQStCO0lBRXZFO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckl0ZW0sIERhZmZPcmRlckl0ZW1UeXBlIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVySXRlbSBpbXBsZW1lbnRzIERhZmZPcmRlckl0ZW0ge1xuICBpdGVtX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgaW1hZ2UgPSB7XG4gICAgdXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxuICAgIGlkOiBTdHJpbmcoZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KSksXG4gICAgbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcbiAgfTtcbiAgb3JkZXJfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBxdHlfb3JkZXJlZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHF0eV9jYW5jZWxlZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHF0eV9mdWxmaWxsZWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjcmVhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgdXBkYXRlZF9hdCA9IGZha2VyLmRhdGUucGFzdCgpLnRvU3RyaW5nKCk7XG4gIHByb2R1Y3RfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBwYXJlbnRfaXRlbV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHNrdSA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMjApO1xuICBuYW1lID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgd2VpZ2h0ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcXR5ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIHByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgZGlzY291bnRfYW1vdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IHRoaXMucHJpY2V9KTtcbiAgZGlzY291bnRfcGVyY2VudCA9IE1hdGguZmxvb3IodGhpcy5kaXNjb3VudF9hbW91bnQgLyB0aGlzLnByaWNlICogMTAwKTtcbiAgdGF4X3BlcmNlbnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTB9KTtcbiAgdGF4X2Ftb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMH0pO1xuICByb3dfdG90YWwgPSB0aGlzLnByaWNlICogdGhpcy5xdHk7XG4gIHJvd190b3RhbF93aXRoX2Rpc2NvdW50ID0gKHRoaXMucHJpY2UgLSB0aGlzLmRpc2NvdW50X2Ftb3VudCkgKiB0aGlzLnF0eTtcbiAgcm93X3dlaWdodCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbiAgdGF4X2JlZm9yZV9kaXNjb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbiAgdHlwZSA9IERhZmZPcmRlckl0ZW1UeXBlLlNpbXBsZTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVySXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlckl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tPcmRlckl0ZW0pO1xuICB9XG59XG4iXX0=