/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
export class MockOrderAddress extends MockDaffPersonalAddress {
    constructor() {
        super(...arguments);
        this.order_id = faker.random.number({ min: 1, max: 1000 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.order_id;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRXRFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSx1QkFBdUI7SUFBN0Q7O1FBQ0UsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUE7OztJQURDLG9DQUFvRDs7QUFNdEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFrQztJQUM3RTtRQUNFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTW9ja0RhZmZQZXJzb25hbEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyQWRkcmVzcyBleHRlbmRzIE1vY2tEYWZmUGVyc29uYWxBZGRyZXNzIGltcGxlbWVudHMgRGFmZk9yZGVyQWRkcmVzcyB7XG4gIG9yZGVyX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyQWRkcmVzc0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlckFkZHJlc3M+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyQWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==