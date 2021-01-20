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
export class MockOrderAddress {
    constructor() {
        this.address_id = faker.random.number({ min: 1, max: 1000 });
        this.quote_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.customer_id = faker.random.number({ min: 1, max: 1000 });
        this.customer_address_id = faker.random.number({ min: 1, max: 1000 });
        this.address_type = 'apartment';
        this.email = 'email@email.com';
        this.prefix = 'prefix';
        this.firstname = 'first';
        this.middlename = 'middle';
        this.lastname = 'last';
        this.suffix = 'suffix';
        this.company = 'company';
        this.street = 'street';
        this.city = 'city';
        this.state = 'state';
        this.region = 'region';
        this.region_id = faker.random.number({ min: 1, max: 1000 });
        this.postcode = 'postcode';
        this.country_id = 'ISO';
        this.telephone = 'telephone';
        this.fax = 'fax';
        this.shipping_method = 'swallow';
        this.shipping_description = 'flight';
        this.shipping_rate = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.address_id;
    /** @type {?} */
    MockOrderAddress.prototype.quote_id;
    /** @type {?} */
    MockOrderAddress.prototype.created_at;
    /** @type {?} */
    MockOrderAddress.prototype.updated_at;
    /** @type {?} */
    MockOrderAddress.prototype.customer_id;
    /** @type {?} */
    MockOrderAddress.prototype.customer_address_id;
    /** @type {?} */
    MockOrderAddress.prototype.address_type;
    /** @type {?} */
    MockOrderAddress.prototype.email;
    /** @type {?} */
    MockOrderAddress.prototype.prefix;
    /** @type {?} */
    MockOrderAddress.prototype.firstname;
    /** @type {?} */
    MockOrderAddress.prototype.middlename;
    /** @type {?} */
    MockOrderAddress.prototype.lastname;
    /** @type {?} */
    MockOrderAddress.prototype.suffix;
    /** @type {?} */
    MockOrderAddress.prototype.company;
    /** @type {?} */
    MockOrderAddress.prototype.street;
    /** @type {?} */
    MockOrderAddress.prototype.city;
    /** @type {?} */
    MockOrderAddress.prototype.state;
    /** @type {?} */
    MockOrderAddress.prototype.region;
    /** @type {?} */
    MockOrderAddress.prototype.region_id;
    /** @type {?} */
    MockOrderAddress.prototype.postcode;
    /** @type {?} */
    MockOrderAddress.prototype.country_id;
    /** @type {?} */
    MockOrderAddress.prototype.telephone;
    /** @type {?} */
    MockOrderAddress.prototype.fax;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_method;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_description;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_rate;
}
/**
 * @deprecated
 */
export class DaffOrderAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderAddress);
    }
}
DaffOrderAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDRSxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEQsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdkQsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLFVBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMxQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNyRCxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLFdBQVcsQ0FBQztRQUN4QixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDNUIseUJBQW9CLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Q0FBQTs7O0lBMUJDLHNDQUFzRDs7SUFDdEQsb0NBQW9EOztJQUNwRCxzQ0FBd0I7O0lBQ3hCLHNDQUF3Qjs7SUFDeEIsdUNBQXVEOztJQUN2RCwrQ0FBK0Q7O0lBQy9ELHdDQUEyQjs7SUFDM0IsaUNBQTBCOztJQUMxQixrQ0FBa0I7O0lBQ2xCLHFDQUFvQjs7SUFDcEIsc0NBQXNCOztJQUN0QixvQ0FBa0I7O0lBQ2xCLGtDQUFrQjs7SUFDbEIsbUNBQW9COztJQUNwQixrQ0FBa0I7O0lBQ2xCLGdDQUFjOztJQUNkLGlDQUFnQjs7SUFDaEIsa0NBQWtCOztJQUNsQixxQ0FBcUQ7O0lBQ3JELG9DQUFzQjs7SUFDdEIsc0NBQW1COztJQUNuQixxQ0FBd0I7O0lBQ3hCLCtCQUFZOztJQUNaLDJDQUE0Qjs7SUFDNUIsZ0RBQWdDOztJQUNoQyx5Q0FBcUI7Ozs7O0FBU3ZCLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBa0M7SUFFN0U7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJBZGRyZXNzIGltcGxlbWVudHMgRGFmZk9yZGVyQWRkcmVzcyB7XG4gIGFkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBxdW90ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICB1cGRhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgY3VzdG9tZXJfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjdXN0b21lcl9hZGRyZXNzX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgYWRkcmVzc190eXBlID0gJ2FwYXJ0bWVudCc7XG4gIGVtYWlsID0gJ2VtYWlsQGVtYWlsLmNvbSc7XG4gIHByZWZpeCA9ICdwcmVmaXgnO1xuICBmaXJzdG5hbWUgPSAnZmlyc3QnO1xuICBtaWRkbGVuYW1lID0gJ21pZGRsZSc7XG4gIGxhc3RuYW1lID0gJ2xhc3QnO1xuICBzdWZmaXggPSAnc3VmZml4JztcbiAgY29tcGFueSA9ICdjb21wYW55JztcbiAgc3RyZWV0ID0gJ3N0cmVldCc7XG4gIGNpdHkgPSAnY2l0eSc7XG4gIHN0YXRlID0gJ3N0YXRlJztcbiAgcmVnaW9uID0gJ3JlZ2lvbic7XG4gIHJlZ2lvbl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHBvc3Rjb2RlID0gJ3Bvc3Rjb2RlJztcbiAgY291bnRyeV9pZCA9ICdJU08nO1xuICB0ZWxlcGhvbmUgPSAndGVsZXBob25lJztcbiAgZmF4ID0gJ2ZheCc7XG4gIHNoaXBwaW5nX21ldGhvZCA9ICdzd2FsbG93JztcbiAgc2hpcHBpbmdfZGVzY3JpcHRpb24gPSAnZmxpZ2h0JztcbiAgc2hpcHBpbmdfcmF0ZSA9IG51bGw7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyQWRkcmVzc0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlckFkZHJlc3M+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tPcmRlckFkZHJlc3MpO1xuICB9XG59XG4iXX0=