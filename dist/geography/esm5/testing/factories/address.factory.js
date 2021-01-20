var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
var MockDaffAddress = /** @class */ (function () {
    function MockDaffAddress() {
        this.street = faker.address.streetName();
        this.street2 = faker.address.secondaryAddress();
        this.city = faker.address.city();
        this.region = faker.address.stateAbbr();
        this.postcode = faker.address.zipCode();
        this.country = faker.address.zipCode();
    }
    return MockDaffAddress;
}());
export { MockDaffAddress };
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
var DaffAddressFactory = /** @class */ (function (_super) {
    __extends(DaffAddressFactory, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2FkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHMUQsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUM7SUFBQTtRQUNFLFdBQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0MsU0FBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsWUFBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFOQyxpQ0FBb0M7O0lBQ3BDLGtDQUEyQzs7SUFDM0MsK0JBQTRCOztJQUM1QixpQ0FBbUM7O0lBQ25DLG1DQUFtQzs7SUFDbkMsa0NBQWtDOztBQUdwQztJQUd3QyxzQ0FBNkI7SUFDbkU7ZUFDRSxrQkFBTSxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkJBbEJEO0NBdUJDLEFBUEQsQ0FHd0MsZ0JBQWdCLEdBSXZEO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZBZGRyZXNzIGltcGxlbWVudHMgRGFmZkFkZHJlc3Mge1xuICBzdHJlZXQgPSBmYWtlci5hZGRyZXNzLnN0cmVldE5hbWUoKTtcbiAgc3RyZWV0MiA9IGZha2VyLmFkZHJlc3Muc2Vjb25kYXJ5QWRkcmVzcygpO1xuICBjaXR5ID0gZmFrZXIuYWRkcmVzcy5jaXR5KCk7XG4gIHJlZ2lvbiA9IGZha2VyLmFkZHJlc3Muc3RhdGVBYmJyKCk7XG4gIHBvc3Rjb2RlID0gZmFrZXIuYWRkcmVzcy56aXBDb2RlKCk7XG4gIGNvdW50cnkgPSBmYWtlci5hZGRyZXNzLnppcENvZGUoKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkFkZHJlc3NGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQWRkcmVzcz57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja0RhZmZBZGRyZXNzKTtcbiAgfVxufVxuIl19