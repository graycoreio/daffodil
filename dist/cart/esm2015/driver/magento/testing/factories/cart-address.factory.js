/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockMagentoCartAddress {
    constructor() {
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
}
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
export class MagentoCartAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartAddress);
    }
}
MagentoCartAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartAddressFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartAddressFactory_Factory() { return new MagentoCartAddressFactory(); }, token: MagentoCartAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFDQyxlQUFVLEdBQUcsb0JBQW9CLENBQUM7UUFDakMsV0FBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1NBQzdCLENBQUM7UUFDRixZQUFPLEdBQUc7WUFDVixVQUFVLEVBQUUsb0JBQW9CO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7U0FDL0IsQ0FBQztRQUNGLFdBQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN6QyxZQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxTQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxVQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQUE7OztJQW5CQSw0Q0FBa0M7O0lBQ2pDLHdDQUlFOztJQUNGLHlDQUlFOztJQUNGLHdDQUF5Qzs7SUFDekMseUNBQXNDOztJQUN0QywyQ0FBc0M7O0lBQ3RDLDBDQUFtQzs7SUFDbkMsc0NBQTRCOztJQUM1QiwyQ0FBbUM7O0lBQ25DLDBDQUFpQzs7SUFDakMsdUNBQStCOztBQU1qQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQW9DO0lBQ2pGO1FBQ0UsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0NhcnRBZGRyZXNzIGltcGxlbWVudHMgTWFnZW50b0NhcnRBZGRyZXNzIHtcblx0X190eXBlbmFtZSA9ICdCaWxsaW5nQ2FydEFkZHJlc3MnO1xuICByZWdpb24gPSB7XG5cdFx0X190eXBlbmFtZTogJ0NhcnRBZGRyZXNzUmVnaW9uJyxcbiAgICBjb2RlOiBmYWtlci5hZGRyZXNzLnN0YXRlQWJicigpLFxuICAgIGxhYmVsOiBmYWtlci5hZGRyZXNzLnN0YXRlKClcbiAgfTtcbiAgY291bnRyeSA9IHtcblx0XHRfX3R5cGVuYW1lOiAnQ2FydEFkZHJlc3NDb3VudHJ5JyxcbiAgICBjb2RlOiBmYWtlci5hZGRyZXNzLmNvdW50cnlDb2RlKCksXG4gICAgbGFiZWw6IGZha2VyLmFkZHJlc3MuY291bnRyeSgpXG4gIH07XG4gIHN0cmVldCA9IFtmYWtlci5hZGRyZXNzLnN0cmVldEFkZHJlc3MoKV07XG4gIGNvbXBhbnkgPSBmYWtlci5jb21wYW55LmNvbXBhbnlOYW1lKCk7XG4gIHRlbGVwaG9uZSA9IGZha2VyLnBob25lLnBob25lTnVtYmVyKCk7XG4gIHBvc3Rjb2RlID0gZmFrZXIuYWRkcmVzcy56aXBDb2RlKCk7XG4gIGNpdHkgPSBmYWtlci5hZGRyZXNzLmNpdHkoKTtcbiAgZmlyc3RuYW1lID0gZmFrZXIubmFtZS5maXJzdE5hbWUoKTtcbiAgbGFzdG5hbWUgPSBmYWtlci5uYW1lLmxhc3ROYW1lKCk7XG4gIGVtYWlsID0gZmFrZXIuaW50ZXJuZXQuZW1haWwoKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0NhcnRBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRBZGRyZXNzPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvQ2FydEFkZHJlc3MpO1xuICB9XG59XG4iXX0=