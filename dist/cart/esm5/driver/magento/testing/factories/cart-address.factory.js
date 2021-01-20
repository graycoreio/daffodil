/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockMagentoCartAddress = /** @class */ (function () {
    function MockMagentoCartAddress() {
        this.__typename = 'BillingCartAddress';
        this.region = {
            __typename: 'CartAddressRegion',
            code: faker.address.stateAbbr(),
            label: faker.address.state()
        };
        this.country = {
            __typename: 'CartAddressCountry',
            code: faker.address.countryCode(),
            label: faker.address.country()
        };
        this.street = [faker.address.streetAddress()];
        this.company = faker.company.companyName();
        this.telephone = faker.phone.phoneNumber();
        this.postcode = faker.address.zipCode();
        this.city = faker.address.city();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.email = faker.internet.email();
    }
    return MockMagentoCartAddress;
}());
export { MockMagentoCartAddress };
if (false) {
    /** @type {?} */
    MockMagentoCartAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoCartAddress.prototype.region;
    /** @type {?} */
    MockMagentoCartAddress.prototype.country;
    /** @type {?} */
    MockMagentoCartAddress.prototype.street;
    /** @type {?} */
    MockMagentoCartAddress.prototype.company;
    /** @type {?} */
    MockMagentoCartAddress.prototype.telephone;
    /** @type {?} */
    MockMagentoCartAddress.prototype.postcode;
    /** @type {?} */
    MockMagentoCartAddress.prototype.city;
    /** @type {?} */
    MockMagentoCartAddress.prototype.firstname;
    /** @type {?} */
    MockMagentoCartAddress.prototype.lastname;
    /** @type {?} */
    MockMagentoCartAddress.prototype.email;
}
var MagentoCartAddressFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartAddressFactory, _super);
    function MagentoCartAddressFactory() {
        return _super.call(this, MockMagentoCartAddress) || this;
    }
    MagentoCartAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartAddressFactory_Factory() { return new MagentoCartAddressFactory(); }, token: MagentoCartAddressFactory, providedIn: "root" });
    return MagentoCartAddressFactory;
}(DaffModelFactory));
export { MagentoCartAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0MsZUFBVSxHQUFHLG9CQUFvQixDQUFDO1FBQ2pDLFdBQU0sR0FBRztZQUNULFVBQVUsRUFBRSxtQkFBbUI7WUFDN0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQy9CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtTQUM3QixDQUFDO1FBQ0YsWUFBTyxHQUFHO1lBQ1YsVUFBVSxFQUFFLG9CQUFvQjtZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1NBQy9CLENBQUM7UUFDRixXQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDekMsWUFBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsY0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsVUFBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQzs7OztJQW5CQSw0Q0FBa0M7O0lBQ2pDLHdDQUlFOztJQUNGLHlDQUlFOztJQUNGLHdDQUF5Qzs7SUFDekMseUNBQXNDOztJQUN0QywyQ0FBc0M7O0lBQ3RDLDBDQUFtQzs7SUFDbkMsc0NBQTRCOztJQUM1QiwyQ0FBbUM7O0lBQ25DLDBDQUFpQzs7SUFDakMsdUNBQStCOztBQUdqQztJQUcrQyxxREFBb0M7SUFDakY7ZUFDRSxrQkFBTSxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztvQ0EvQkQ7Q0FvQ0MsQUFQRCxDQUcrQyxnQkFBZ0IsR0FJOUQ7U0FKWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50byc7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ2FydEFkZHJlc3MgaW1wbGVtZW50cyBNYWdlbnRvQ2FydEFkZHJlc3Mge1xuXHRfX3R5cGVuYW1lID0gJ0JpbGxpbmdDYXJ0QWRkcmVzcyc7XG4gIHJlZ2lvbiA9IHtcblx0XHRfX3R5cGVuYW1lOiAnQ2FydEFkZHJlc3NSZWdpb24nLFxuICAgIGNvZGU6IGZha2VyLmFkZHJlc3Muc3RhdGVBYmJyKCksXG4gICAgbGFiZWw6IGZha2VyLmFkZHJlc3Muc3RhdGUoKVxuICB9O1xuICBjb3VudHJ5ID0ge1xuXHRcdF9fdHlwZW5hbWU6ICdDYXJ0QWRkcmVzc0NvdW50cnknLFxuICAgIGNvZGU6IGZha2VyLmFkZHJlc3MuY291bnRyeUNvZGUoKSxcbiAgICBsYWJlbDogZmFrZXIuYWRkcmVzcy5jb3VudHJ5KClcbiAgfTtcbiAgc3RyZWV0ID0gW2Zha2VyLmFkZHJlc3Muc3RyZWV0QWRkcmVzcygpXTtcbiAgY29tcGFueSA9IGZha2VyLmNvbXBhbnkuY29tcGFueU5hbWUoKTtcbiAgdGVsZXBob25lID0gZmFrZXIucGhvbmUucGhvbmVOdW1iZXIoKTtcbiAgcG9zdGNvZGUgPSBmYWtlci5hZGRyZXNzLnppcENvZGUoKTtcbiAgY2l0eSA9IGZha2VyLmFkZHJlc3MuY2l0eSgpO1xuICBmaXJzdG5hbWUgPSBmYWtlci5uYW1lLmZpcnN0TmFtZSgpO1xuICBsYXN0bmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoKTtcbiAgZW1haWwgPSBmYWtlci5pbnRlcm5ldC5lbWFpbCgpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ2FydEFkZHJlc3NGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ2FydEFkZHJlc3M+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9DYXJ0QWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==