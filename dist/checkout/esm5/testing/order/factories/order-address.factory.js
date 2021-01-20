/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderAddress = /** @class */ (function () {
    function MockOrderAddress() {
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
    return MockOrderAddress;
}());
/**
 * @deprecated
 */
export { MockOrderAddress };
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
var DaffOrderAddressFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffOrderAddressFactory, _super);
    function DaffOrderAddressFactory() {
        return _super.call(this, MockOrderAddress) || this;
    }
    DaffOrderAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
    return DaffOrderAddressFactory;
}(DaffModelFactory));
export { DaffOrderAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUsxRDs7OztJQUFBO1FBQ0UsZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELHdCQUFtQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRCxpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDckQsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxXQUFXLENBQUM7UUFDeEIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHlCQUFvQixHQUFHLFFBQVEsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDOzs7Ozs7O0lBMUJDLHNDQUFzRDs7SUFDdEQsb0NBQW9EOztJQUNwRCxzQ0FBd0I7O0lBQ3hCLHNDQUF3Qjs7SUFDeEIsdUNBQXVEOztJQUN2RCwrQ0FBK0Q7O0lBQy9ELHdDQUEyQjs7SUFDM0IsaUNBQTBCOztJQUMxQixrQ0FBa0I7O0lBQ2xCLHFDQUFvQjs7SUFDcEIsc0NBQXNCOztJQUN0QixvQ0FBa0I7O0lBQ2xCLGtDQUFrQjs7SUFDbEIsbUNBQW9COztJQUNwQixrQ0FBa0I7O0lBQ2xCLGdDQUFjOztJQUNkLGlDQUFnQjs7SUFDaEIsa0NBQWtCOztJQUNsQixxQ0FBcUQ7O0lBQ3JELG9DQUFzQjs7SUFDdEIsc0NBQW1COztJQUNuQixxQ0FBd0I7O0lBQ3hCLCtCQUFZOztJQUNaLDJDQUE0Qjs7SUFDNUIsZ0RBQWdDOztJQUNoQyx5Q0FBcUI7Ozs7O0FBTXZCO0lBRzZDLG1EQUFrQztJQUU3RTtlQUNFLGtCQUFNLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7O2dCQVBGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2tDQTVDRDtDQWtEQyxBQVJELENBRzZDLGdCQUFnQixHQUs1RDtTQUxZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tPcmRlckFkZHJlc3MgaW1wbGVtZW50cyBEYWZmT3JkZXJBZGRyZXNzIHtcbiAgYWRkcmVzc19pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHF1b3RlX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gIHVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICBjdXN0b21lcl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGN1c3RvbWVyX2FkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBhZGRyZXNzX3R5cGUgPSAnYXBhcnRtZW50JztcbiAgZW1haWwgPSAnZW1haWxAZW1haWwuY29tJztcbiAgcHJlZml4ID0gJ3ByZWZpeCc7XG4gIGZpcnN0bmFtZSA9ICdmaXJzdCc7XG4gIG1pZGRsZW5hbWUgPSAnbWlkZGxlJztcbiAgbGFzdG5hbWUgPSAnbGFzdCc7XG4gIHN1ZmZpeCA9ICdzdWZmaXgnO1xuICBjb21wYW55ID0gJ2NvbXBhbnknO1xuICBzdHJlZXQgPSAnc3RyZWV0JztcbiAgY2l0eSA9ICdjaXR5JztcbiAgc3RhdGUgPSAnc3RhdGUnO1xuICByZWdpb24gPSAncmVnaW9uJztcbiAgcmVnaW9uX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcG9zdGNvZGUgPSAncG9zdGNvZGUnO1xuICBjb3VudHJ5X2lkID0gJ0lTTyc7XG4gIHRlbGVwaG9uZSA9ICd0ZWxlcGhvbmUnO1xuICBmYXggPSAnZmF4JztcbiAgc2hpcHBpbmdfbWV0aG9kID0gJ3N3YWxsb3cnO1xuICBzaGlwcGluZ19kZXNjcmlwdGlvbiA9ICdmbGlnaHQnO1xuICBzaGlwcGluZ19yYXRlID0gbnVsbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyQWRkcmVzcz4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja09yZGVyQWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==