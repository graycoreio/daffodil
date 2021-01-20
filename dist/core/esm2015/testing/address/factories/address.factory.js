/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '../../factories/factory';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
export class MockDaffAddress {
    constructor() {
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.stateAbbr();
        this.email = faker.internet.email();
        this.postcode = faker.address.zipCode();
        this.telephone = faker.phone.phoneNumber();
    }
}
if (false) {
    /** @type {?} */
    MockDaffAddress.prototype.firstname;
    /** @type {?} */
    MockDaffAddress.prototype.lastname;
    /** @type {?} */
    MockDaffAddress.prototype.street;
    /** @type {?} */
    MockDaffAddress.prototype.city;
    /** @type {?} */
    MockDaffAddress.prototype.state;
    /** @type {?} */
    MockDaffAddress.prototype.email;
    /** @type {?} */
    MockDaffAddress.prototype.postcode;
    /** @type {?} */
    MockDaffAddress.prototype.telephone;
}
/**
 * @deprecated
 * Prefer the `DaffAddressFactory` of `daffodil/geography/testing`
 */
export class DaffAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffAddress);
    }
}
DaffAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAddressFactory_Factory() { return new DaffAddressFactory(); }, token: DaffAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvdGVzdGluZy8iLCJzb3VyY2VzIjpbImFkZHJlc3MvZmFjdG9yaWVzL2FkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFNM0QsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDRSxjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxTQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixVQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQUE7OztJQVJDLG9DQUFtQzs7SUFDbkMsbUNBQWlDOztJQUNqQyxpQ0FBb0M7O0lBQ3BDLCtCQUE0Qjs7SUFDNUIsZ0NBQWtDOztJQUNsQyxnQ0FBK0I7O0lBQy9CLG1DQUFtQzs7SUFDbkMsb0NBQXNDOzs7Ozs7QUFVeEMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUE2QjtJQUNuRTtRQUNFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvZmFjdG9yeSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIFByZWZlciB0aGUgYE1vY2tEYWZmQWRkcmVzc2Agb2YgZGFmZm9kaWwvZ2VvZ3JhcGh5L3Rlc3RpbmdgXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRGFmZkFkZHJlc3MgaW1wbGVtZW50cyBEYWZmQWRkcmVzcyB7XG4gIGZpcnN0bmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIGxhc3RuYW1lID0gZmFrZXIubmFtZS5sYXN0TmFtZSgpO1xuICBzdHJlZXQgPSBmYWtlci5hZGRyZXNzLnN0cmVldE5hbWUoKTtcbiAgY2l0eSA9IGZha2VyLmFkZHJlc3MuY2l0eSgpO1xuICBzdGF0ZSA9IGZha2VyLmFkZHJlc3Muc3RhdGVBYmJyKCk7XG4gIGVtYWlsID0gZmFrZXIuaW50ZXJuZXQuZW1haWwoKTtcbiAgcG9zdGNvZGUgPSBmYWtlci5hZGRyZXNzLnppcENvZGUoKTtcbiAgdGVsZXBob25lID0gZmFrZXIucGhvbmUucGhvbmVOdW1iZXIoKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogUHJlZmVyIHRoZSBgRGFmZkFkZHJlc3NGYWN0b3J5YCBvZiBgZGFmZm9kaWwvZ2VvZ3JhcGh5L3Rlc3RpbmdgXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkFkZHJlc3M+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tEYWZmQWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==