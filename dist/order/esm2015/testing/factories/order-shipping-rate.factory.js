/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderShippingMethod {
    constructor() {
        this.rate_id = faker.random.number({ min: 1, max: 1000 });
        this.address_id = faker.random.number({ min: 1, max: 1000 });
        this.order_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.carrier = faker.random.word();
        this.carrier_title = faker.random.word();
        this.code = faker.random.word();
        this.method = faker.random.word();
        this.method_description = faker.random.word();
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.error_message = faker.random.word();
        this.method_title = faker.random.word();
    }
}
if (false) {
    /** @type {?} */
    MockOrderShippingMethod.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.address_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.order_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.created_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingMethod.prototype.code;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_description;
    /** @type {?} */
    MockOrderShippingMethod.prototype.price;
    /** @type {?} */
    MockOrderShippingMethod.prototype.error_message;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_title;
}
export class DaffOrderShippingMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShippingMethod);
    }
}
DaffOrderShippingMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShippingMethodFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShippingMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShippingMethodFactory_Factory() { return new DaffOrderShippingMethodFactory(); }, token: DaffOrderShippingMethodFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyx1QkFBdUI7SUFBcEM7UUFDRSxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELGVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdEQsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxlQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxlQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsV0FBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELGtCQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUFBOzs7SUFiQywwQ0FBbUQ7O0lBQ25ELDZDQUFzRDs7SUFDdEQsMkNBQW9EOztJQUNwRCw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFDMUMsMENBQThCOztJQUM5QixnREFBb0M7O0lBQ3BDLHVDQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3QixxREFBeUM7O0lBQ3pDLHdDQUFpRDs7SUFDakQsZ0RBQW9DOztJQUNwQywrQ0FBbUM7O0FBTXJDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxnQkFBeUM7SUFDM0Y7UUFDRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwcGluZ01ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJTaGlwcGluZ01ldGhvZCBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBwaW5nTWV0aG9kIHtcbiAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGFkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBvcmRlcl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBmYWtlci5kYXRlLnBhc3QoKS50b1N0cmluZygpO1xuICB1cGRhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgY2FycmllciA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGNhcnJpZXJfdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgcHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBlcnJvcl9tZXNzYWdlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX3RpdGxlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJTaGlwcGluZ01ldGhvZEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclNoaXBwaW5nTWV0aG9kPntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrT3JkZXJTaGlwcGluZ01ldGhvZCk7XG4gIH1cbn1cbiJdfQ==