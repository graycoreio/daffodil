/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCartAddress {
    constructor() {
        this.address_id = faker.random.number({ min: 1, max: 1000 });
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
        this.postcode = 'postcode';
        this.country_id = 'ISO';
        this.telephone = '+1 (123)-123-1234';
    }
}
if (false) {
    /** @type {?} */
    MockCartAddress.prototype.address_id;
    /** @type {?} */
    MockCartAddress.prototype.address_type;
    /** @type {?} */
    MockCartAddress.prototype.email;
    /** @type {?} */
    MockCartAddress.prototype.prefix;
    /** @type {?} */
    MockCartAddress.prototype.firstname;
    /** @type {?} */
    MockCartAddress.prototype.middlename;
    /** @type {?} */
    MockCartAddress.prototype.lastname;
    /** @type {?} */
    MockCartAddress.prototype.suffix;
    /** @type {?} */
    MockCartAddress.prototype.company;
    /** @type {?} */
    MockCartAddress.prototype.street;
    /** @type {?} */
    MockCartAddress.prototype.city;
    /** @type {?} */
    MockCartAddress.prototype.state;
    /** @type {?} */
    MockCartAddress.prototype.region;
    /** @type {?} */
    MockCartAddress.prototype.postcode;
    /** @type {?} */
    MockCartAddress.prototype.country_id;
    /** @type {?} */
    MockCartAddress.prototype.telephone;
}
export class DaffCartAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockCartAddress);
    }
}
DaffCartAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartAddressFactory_Factory() { return new DaffCartAddressFactory(); }, token: DaffCartAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ0UsZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztDQUFBOzs7SUFoQkMscUNBQXNEOztJQUN0RCx1Q0FBMkI7O0lBQzNCLGdDQUEwQjs7SUFDMUIsaUNBQWtCOztJQUNsQixvQ0FBb0I7O0lBQ3BCLHFDQUFzQjs7SUFDdEIsbUNBQWtCOztJQUNsQixpQ0FBa0I7O0lBQ2xCLGtDQUFvQjs7SUFDcEIsaUNBQWtCOztJQUNsQiwrQkFBYzs7SUFDZCxnQ0FBZ0I7O0lBQ2hCLGlDQUFrQjs7SUFDbEIsbUNBQXNCOztJQUN0QixxQ0FBbUI7O0lBQ25CLG9DQUFnQzs7QUFNbEMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFpQztJQUUzRTtRQUNFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ2FydEFkZHJlc3MgaW1wbGVtZW50cyBEYWZmQ2FydEFkZHJlc3Mge1xuICBhZGRyZXNzX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgYWRkcmVzc190eXBlID0gJ2FwYXJ0bWVudCc7XG4gIGVtYWlsID0gJ2VtYWlsQGVtYWlsLmNvbSc7XG4gIHByZWZpeCA9ICdwcmVmaXgnO1xuICBmaXJzdG5hbWUgPSAnZmlyc3QnO1xuICBtaWRkbGVuYW1lID0gJ21pZGRsZSc7XG4gIGxhc3RuYW1lID0gJ2xhc3QnO1xuICBzdWZmaXggPSAnc3VmZml4JztcbiAgY29tcGFueSA9ICdjb21wYW55JztcbiAgc3RyZWV0ID0gJ3N0cmVldCc7XG4gIGNpdHkgPSAnY2l0eSc7XG4gIHN0YXRlID0gJ3N0YXRlJztcbiAgcmVnaW9uID0gJ3JlZ2lvbic7XG4gIHBvc3Rjb2RlID0gJ3Bvc3Rjb2RlJztcbiAgY291bnRyeV9pZCA9ICdJU08nO1xuICB0ZWxlcGhvbmUgPSAnKzEgKDEyMyktMTIzLTEyMzQnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEFkZHJlc3NGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ2FydEFkZHJlc3M+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tDYXJ0QWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==