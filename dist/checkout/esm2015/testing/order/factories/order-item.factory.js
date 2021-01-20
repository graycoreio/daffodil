/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export class MockOrderItem {
    constructor() {
        this.item_id = faker.random.number({ min: 1, max: 1000 });
        this.image = null;
        this.quote_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.product_id = faker.random.number({ min: 1, max: 1000 });
        this.parent_item_id = faker.random.number({ min: 1, max: 1000 });
        this.sku = 'sku';
        this.name = 'Product Name';
        this.description = 'description';
        this.weight = faker.random.number({ min: 1, max: 1000 });
        this.qty = faker.random.number({ min: 1, max: 100 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.discount_percent = faker.random.number({ min: 1, max: 10 });
        this.discount_amount = faker.random.number({ min: 1, max: 100 });
        this.tax_percent = faker.random.number({ min: 1, max: 10 });
        this.tax_amount = faker.random.number({ min: 1, max: 10 });
        this.row_total = faker.random.number({ min: 1, max: 1000 });
        this.row_total_with_discount = faker.random.number({ min: 1, max: 1000 });
        this.row_weight = faker.random.number({ min: 1, max: 100 });
        this.tax_before_discount = faker.random.number({ min: 1, max: 100 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.quote_id;
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
    MockOrderItem.prototype.description;
    /** @type {?} */
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
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
}
/**
 * @deprecated
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ0UsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxlQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELG1CQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFELFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixTQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELHFCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMxRCxvQkFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMxRCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNyRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDckQsNEJBQXVCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLGVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDckQsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FBQTs7O0lBckJDLGdDQUFtRDs7SUFDbkQsOEJBQWE7O0lBQ2IsaUNBQW9EOztJQUNwRCxtQ0FBd0I7O0lBQ3hCLG1DQUF3Qjs7SUFDeEIsbUNBQXNEOztJQUN0RCx1Q0FBMEQ7O0lBQzFELDRCQUFZOztJQUNaLDZCQUFzQjs7SUFDdEIsb0NBQTRCOztJQUM1QiwrQkFBa0Q7O0lBQ2xELDRCQUE0Qzs7SUFDNUMsOEJBQWlEOztJQUNqRCx5Q0FBMEQ7O0lBQzFELHdDQUEwRDs7SUFDMUQsb0NBQXFEOztJQUNyRCxtQ0FBb0Q7O0lBQ3BELGtDQUFxRDs7SUFDckQsZ0RBQW1FOztJQUNuRSxtQ0FBcUQ7O0lBQ3JELDRDQUE4RDs7Ozs7QUFTaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUErQjtJQUV2RTtRQUNFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJJdGVtIH0gZnJvbSAnQGRhZmZvZGlsL2NoZWNrb3V0JztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJJdGVtIGltcGxlbWVudHMgRGFmZk9yZGVySXRlbSB7XG4gIGl0ZW1faWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBpbWFnZSA9IG51bGw7XG4gIHF1b3RlX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gIHVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICBwcm9kdWN0X2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcGFyZW50X2l0ZW1faWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBza3UgPSAnc2t1JztcbiAgbmFtZSA9ICdQcm9kdWN0IE5hbWUnO1xuICBkZXNjcmlwdGlvbiA9ICdkZXNjcmlwdGlvbic7XG4gIHdlaWdodCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHF0eSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6MTAwfSk7XG4gIHByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgZGlzY291bnRfcGVyY2VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMH0pO1xuICBkaXNjb3VudF9hbW91bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSk7XG4gIHRheF9wZXJjZW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIHRheF9hbW91bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTB9KTtcbiAgcm93X3RvdGFsID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcm93X3RvdGFsX3dpdGhfZGlzY291bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICByb3dfd2VpZ2h0ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xuICB0YXhfYmVmb3JlX2Rpc2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJJdGVtPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrT3JkZXJJdGVtKTtcbiAgfVxufVxuIl19