/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
export class MockDaffAddress {
    constructor() {
        this.street = faker.address.streetName();
        this.street2 = faker.address.secondaryAddress();
        this.city = faker.address.city();
        this.region = faker.address.stateAbbr();
        this.postcode = faker.address.zipCode();
        this.country = faker.address.zipCode();
    }
}
if (false) {
    /** @type {?} */
    MockDaffAddress.prototype.street;
    /** @type {?} */
    MockDaffAddress.prototype.street2;
    /** @type {?} */
    MockDaffAddress.prototype.city;
    /** @type {?} */
    MockDaffAddress.prototype.region;
    /** @type {?} */
    MockDaffAddress.prototype.postcode;
    /** @type {?} */
    MockDaffAddress.prototype.country;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2FkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUcxRCxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDOztBQUU1QyxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNFLFdBQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0MsU0FBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsWUFBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUFBOzs7SUFOQyxpQ0FBb0M7O0lBQ3BDLGtDQUEyQzs7SUFDM0MsK0JBQTRCOztJQUM1QixpQ0FBbUM7O0lBQ25DLG1DQUFtQzs7SUFDbkMsa0NBQWtDOztBQU1wQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQTZCO0lBQ25FO1FBQ0UsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQWRkcmVzcyBpbXBsZW1lbnRzIERhZmZBZGRyZXNzIHtcbiAgc3RyZWV0ID0gZmFrZXIuYWRkcmVzcy5zdHJlZXROYW1lKCk7XG4gIHN0cmVldDIgPSBmYWtlci5hZGRyZXNzLnNlY29uZGFyeUFkZHJlc3MoKTtcbiAgY2l0eSA9IGZha2VyLmFkZHJlc3MuY2l0eSgpO1xuICByZWdpb24gPSBmYWtlci5hZGRyZXNzLnN0YXRlQWJicigpO1xuICBwb3N0Y29kZSA9IGZha2VyLmFkZHJlc3MuemlwQ29kZSgpO1xuICBjb3VudHJ5ID0gZmFrZXIuYWRkcmVzcy56aXBDb2RlKCk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkFkZHJlc3M+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tEYWZmQWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==