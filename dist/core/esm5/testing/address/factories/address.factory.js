/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '../../factories/factory';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
var /**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
MockDaffAddress = /** @class */ (function () {
    function MockDaffAddress() {
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.stateAbbr();
        this.email = faker.internet.email();
        this.postcode = faker.address.zipCode();
        this.telephone = faker.phone.phoneNumber();
    }
    return MockDaffAddress;
}());
/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
export { MockDaffAddress };
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
var DaffAddressFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffAddressFactory, _super);
    function DaffAddressFactory() {
        return _super.call(this, MockDaffAddress) || this;
    }
    DaffAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAddressFactory_Factory() { return new DaffAddressFactory(); }, token: DaffAddressFactory, providedIn: "root" });
    return DaffAddressFactory;
}(DaffModelFactory));
export { DaffAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvdGVzdGluZy8iLCJzb3VyY2VzIjpbImFkZHJlc3MvZmFjdG9yaWVzL2FkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0FBTTNEOzs7OztJQUFBO1FBQ0UsY0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsVUFBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7Ozs7O0lBUkMsb0NBQW1DOztJQUNuQyxtQ0FBaUM7O0lBQ2pDLGlDQUFvQzs7SUFDcEMsK0JBQTRCOztJQUM1QixnQ0FBa0M7O0lBQ2xDLGdDQUErQjs7SUFDL0IsbUNBQW1DOztJQUNuQyxvQ0FBc0M7Ozs7OztBQU94QztJQUd3Qyw4Q0FBNkI7SUFDbkU7ZUFDRSxrQkFBTSxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkJBM0JEO0NBZ0NDLEFBUEQsQ0FHd0MsZ0JBQWdCLEdBSXZEO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmFjdG9yaWVzL2ZhY3RvcnknO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBQcmVmZXIgdGhlIGBNb2NrRGFmZkFkZHJlc3NgIG9mIGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nYFxuICovXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZBZGRyZXNzIGltcGxlbWVudHMgRGFmZkFkZHJlc3Mge1xuICBmaXJzdG5hbWUgPSBmYWtlci5uYW1lLmZpcnN0TmFtZSgpO1xuICBsYXN0bmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoKTtcbiAgc3RyZWV0ID0gZmFrZXIuYWRkcmVzcy5zdHJlZXROYW1lKCk7XG4gIGNpdHkgPSBmYWtlci5hZGRyZXNzLmNpdHkoKTtcbiAgc3RhdGUgPSBmYWtlci5hZGRyZXNzLnN0YXRlQWJicigpO1xuICBlbWFpbCA9IGZha2VyLmludGVybmV0LmVtYWlsKCk7XG4gIHBvc3Rjb2RlID0gZmFrZXIuYWRkcmVzcy56aXBDb2RlKCk7XG4gIHRlbGVwaG9uZSA9IGZha2VyLnBob25lLnBob25lTnVtYmVyKCk7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIFByZWZlciB0aGUgYERhZmZBZGRyZXNzRmFjdG9yeWAgb2YgYGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nYFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQWRkcmVzc0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZBZGRyZXNzPntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrRGFmZkFkZHJlc3MpO1xuICB9XG59XG4iXX0=