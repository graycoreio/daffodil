/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockMagentoCartAddressInput {
    constructor() {
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
}
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
export class MagentoCartAddressInputFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartAddressInput);
    }
}
MagentoCartAddressInputFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartAddressInputFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartAddressInputFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartAddressInputFactory_Factory() { return new MagentoCartAddressInputFactory(); }, token: MagentoCartAddressInputFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLWlucHV0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy1pbnB1dC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTywyQkFBMkI7SUFBeEM7UUFDRSxXQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsV0FBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLFNBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLGFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLHlCQUFvQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztDQUFBOzs7SUFWQyw2Q0FBbUM7O0lBQ25DLG1EQUEyQzs7SUFDM0MsNkNBQXlDOztJQUN6Qyw4Q0FBc0M7O0lBQ3RDLGdEQUFzQzs7SUFDdEMsK0NBQW1DOztJQUNuQywyQ0FBNEI7O0lBQzVCLGdEQUFtQzs7SUFDbkMsK0NBQWlDOztJQUNqQywyREFBOEM7O0FBTWhELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxnQkFBeUM7SUFDM0Y7UUFDRSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dCBpbXBsZW1lbnRzIE1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0IHtcbiAgcmVnaW9uID0gZmFrZXIuYWRkcmVzcy5zdGF0ZUFiYnIoKTtcbiAgY291bnRyeV9jb2RlID0gZmFrZXIuYWRkcmVzcy5jb3VudHJ5Q29kZSgpO1xuICBzdHJlZXQgPSBbZmFrZXIuYWRkcmVzcy5zdHJlZXRBZGRyZXNzKCldO1xuICBjb21wYW55ID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpO1xuICB0ZWxlcGhvbmUgPSBmYWtlci5waG9uZS5waG9uZU51bWJlcigpO1xuICBwb3N0Y29kZSA9IGZha2VyLmFkZHJlc3MuemlwQ29kZSgpO1xuICBjaXR5ID0gZmFrZXIuYWRkcmVzcy5jaXR5KCk7XG4gIGZpcnN0bmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIGxhc3RuYW1lID0gZmFrZXIubmFtZS5sYXN0TmFtZSgpO1xuICBzYXZlX2luX2FkZHJlc3NfYm9vayA9IGZha2VyLnJhbmRvbS5ib29sZWFuKCk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRBZGRyZXNzSW5wdXQ+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9DYXJ0QWRkcmVzc0lucHV0KTtcbiAgfVxufVxuIl19