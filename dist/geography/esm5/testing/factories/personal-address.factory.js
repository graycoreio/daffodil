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
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffAddress } from './address.factory';
import * as i0 from "@angular/core";
var MockDaffPersonalAddress = /** @class */ (function (_super) {
    __extends(MockDaffPersonalAddress, _super);
    function MockDaffPersonalAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefix = faker.name.prefix();
        _this.suffix = faker.name.suffix();
        _this.firstname = faker.name.firstName();
        _this.middlename = faker.name.firstName();
        _this.lastname = faker.name.lastName();
        _this.email = faker.internet.email();
        _this.telephone = faker.phone.phoneNumber();
        return _this;
    }
    return MockDaffPersonalAddress;
}(MockDaffAddress));
export { MockDaffPersonalAddress };
if (false) {
    /** @type {?} */
    MockDaffPersonalAddress.prototype.prefix;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.suffix;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.firstname;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.middlename;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.lastname;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.email;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.telephone;
}
var DaffPersonalAddressFactory = /** @class */ (function (_super) {
    __extends(DaffPersonalAddressFactory, _super);
    function DaffPersonalAddressFactory() {
        return _super.call(this, MockDaffPersonalAddress) || this;
    }
    DaffPersonalAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPersonalAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffPersonalAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPersonalAddressFactory_Factory() { return new DaffPersonalAddressFactory(); }, token: DaffPersonalAddressFactory, providedIn: "root" });
    return DaffPersonalAddressFactory;
}(DaffModelFactory));
export { DaffPersonalAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwtYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL3BlcnNvbmFsLWFkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXBEO0lBQTZDLDJDQUFlO0lBQTVEO1FBQUEscUVBUUM7UUFQQyxZQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixZQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixlQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxnQkFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsY0FBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsV0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsZUFBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7O0lBQ3hDLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFSRCxDQUE2QyxlQUFlLEdBUTNEOzs7O0lBUEMseUNBQTZCOztJQUM3Qix5Q0FBNkI7O0lBQzdCLDRDQUFtQzs7SUFDbkMsNkNBQW9DOztJQUNwQywyQ0FBaUM7O0lBQ2pDLHdDQUErQjs7SUFDL0IsNENBQXNDOztBQUd4QztJQUdnRCw4Q0FBcUM7SUFDbkY7ZUFDRSxrQkFBTSx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztxQ0FwQkQ7Q0F5QkMsQUFQRCxDQUdnRCxnQkFBZ0IsR0FJL0Q7U0FKWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmUGVyc29uYWxBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmltcG9ydCB7IE1vY2tEYWZmQWRkcmVzcyB9IGZyb20gJy4vYWRkcmVzcy5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmUGVyc29uYWxBZGRyZXNzIGV4dGVuZHMgTW9ja0RhZmZBZGRyZXNzIGltcGxlbWVudHMgRGFmZlBlcnNvbmFsQWRkcmVzcyB7XG4gIHByZWZpeCA9IGZha2VyLm5hbWUucHJlZml4KCk7XG4gIHN1ZmZpeCA9IGZha2VyLm5hbWUuc3VmZml4KCk7XG4gIGZpcnN0bmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIG1pZGRsZW5hbWUgPSBmYWtlci5uYW1lLmZpcnN0TmFtZSgpO1xuICBsYXN0bmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoKTtcbiAgZW1haWwgPSBmYWtlci5pbnRlcm5ldC5lbWFpbCgpO1xuICB0ZWxlcGhvbmUgPSBmYWtlci5waG9uZS5waG9uZU51bWJlcigpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGVyc29uYWxBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlBlcnNvbmFsQWRkcmVzcz57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tEYWZmUGVyc29uYWxBZGRyZXNzKTtcbiAgfVxufVxuIl19