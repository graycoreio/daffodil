/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockMagentoCartAddressInput = /** @class */ (function () {
    function MockMagentoCartAddressInput() {
        this.region = faker.address.stateAbbr();
        this.country_code = faker.address.countryCode();
        this.street = [faker.address.streetAddress()];
        this.company = faker.company.companyName();
        this.telephone = faker.phone.phoneNumber();
        this.postcode = faker.address.zipCode();
        this.city = faker.address.city();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.save_in_address_book = faker.random.boolean();
    }
    return MockMagentoCartAddressInput;
}());
export { MockMagentoCartAddressInput };
if (false) {
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.region;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.country_code;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.street;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.company;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.telephone;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.postcode;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.city;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.firstname;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.lastname;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.save_in_address_book;
}
var MagentoCartAddressInputFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartAddressInputFactory, _super);
    function MagentoCartAddressInputFactory() {
        return _super.call(this, MockMagentoCartAddressInput) || this;
    }
    MagentoCartAddressInputFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartAddressInputFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartAddressInputFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartAddressInputFactory_Factory() { return new MagentoCartAddressInputFactory(); }, token: MagentoCartAddressInputFactory, providedIn: "root" });
    return MagentoCartAddressInputFactory;
}(DaffModelFactory));
export { MagentoCartAddressInputFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLWlucHV0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy1pbnB1dC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsV0FBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLFdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN6QyxZQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxTQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyx5QkFBb0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFBRCxrQ0FBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7O0lBVkMsNkNBQW1DOztJQUNuQyxtREFBMkM7O0lBQzNDLDZDQUF5Qzs7SUFDekMsOENBQXNDOztJQUN0QyxnREFBc0M7O0lBQ3RDLCtDQUFtQzs7SUFDbkMsMkNBQTRCOztJQUM1QixnREFBbUM7O0lBQ25DLCtDQUFpQzs7SUFDakMsMkRBQThDOztBQUdoRDtJQUdvRCwwREFBeUM7SUFDM0Y7ZUFDRSxrQkFBTSwyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5Q0FyQkQ7Q0EwQkMsQUFQRCxDQUdvRCxnQkFBZ0IsR0FJbkU7U0FKWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dCBpbXBsZW1lbnRzIE1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0IHtcbiAgcmVnaW9uID0gZmFrZXIuYWRkcmVzcy5zdGF0ZUFiYnIoKTtcbiAgY291bnRyeV9jb2RlID0gZmFrZXIuYWRkcmVzcy5jb3VudHJ5Q29kZSgpO1xuICBzdHJlZXQgPSBbZmFrZXIuYWRkcmVzcy5zdHJlZXRBZGRyZXNzKCldO1xuICBjb21wYW55ID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpO1xuICB0ZWxlcGhvbmUgPSBmYWtlci5waG9uZS5waG9uZU51bWJlcigpO1xuICBwb3N0Y29kZSA9IGZha2VyLmFkZHJlc3MuemlwQ29kZSgpO1xuICBjaXR5ID0gZmFrZXIuYWRkcmVzcy5jaXR5KCk7XG4gIGZpcnN0bmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIGxhc3RuYW1lID0gZmFrZXIubmFtZS5sYXN0TmFtZSgpO1xuICBzYXZlX2luX2FkZHJlc3NfYm9vayA9IGZha2VyLnJhbmRvbS5ib29sZWFuKCk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRBZGRyZXNzSW5wdXQ+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9DYXJ0QWRkcmVzc0lucHV0KTtcbiAgfVxufVxuIl19