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
export class MockOrder {
    constructor() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.store_to_base_rate = faker.random.number({ min: 1, max: 1000 });
        this.grand_total = faker.random.number({ min: 1, max: 1000 });
        this.checkout_method = 'card';
        this.customer_id = faker.random.number({ min: 1, max: 1000 });
        this.coupon_code = faker.random.number({ min: 1, max: 100000 }).toString();
        this.subtotal = faker.random.number({ min: 1, max: 1000 });
        this.subtotal_with_discount = faker.random.number({ min: 1, max: 1000 });
        this.items = [];
        this.addresses = [];
        this.payment = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.store_to_base_rate;
    /** @type {?} */
    MockOrder.prototype.grand_total;
    /** @type {?} */
    MockOrder.prototype.checkout_method;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.coupon_code;
    /** @type {?} */
    MockOrder.prototype.subtotal;
    /** @type {?} */
    MockOrder.prototype.subtotal_with_discount;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.addresses;
    /** @type {?} */
    MockOrder.prototype.payment;
}
;
/**
 * @deprecated
 */
export class DaffOrderFactory extends DaffModelFactory {
    constructor() {
        super(MockOrder);
    }
}
DaffOrderFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsib3JkZXIvZmFjdG9yaWVzL29yZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFLMUQsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5RCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxvQkFBZSxHQUFHLE1BQU0sQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELDJCQUFzQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztDQUFBOzs7SUFiQyx1QkFBOEM7O0lBQzlDLCtCQUF3Qjs7SUFDeEIsK0JBQXdCOztJQUN4Qix1Q0FBOEQ7O0lBQzlELGdDQUF1RDs7SUFDdkQsb0NBQXlCOztJQUN6QixnQ0FBdUQ7O0lBQ3ZELGdDQUFvRTs7SUFDcEUsNkJBQW9EOztJQUNwRCwyQ0FBa0U7O0lBQ2xFLDBCQUFXOztJQUNYLDhCQUFlOztJQUNmLDRCQUFlOztBQUNoQixDQUFDOzs7O0FBU0YsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUEyQjtJQUMvRDtRQUNFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXIgaW1wbGVtZW50cyBEYWZmT3JkZXIge1xuICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICB1cGRhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgc3RvcmVfdG9fYmFzZV9yYXRlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgZ3JhbmRfdG90YWwgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjaGVja291dF9tZXRob2QgPSAnY2FyZCc7XG4gIGN1c3RvbWVyX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY291cG9uX2NvZGUgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMDAwfSkudG9TdHJpbmcoKTtcbiAgc3VidG90YWwgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBzdWJ0b3RhbF93aXRoX2Rpc2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgaXRlbXMgPSBbXTtcbiAgYWRkcmVzc2VzID0gW107XG4gIHBheW1lbnQgPSBudWxsO1xufTtcblxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlcj57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja09yZGVyKTtcbiAgfVxufVxuIl19