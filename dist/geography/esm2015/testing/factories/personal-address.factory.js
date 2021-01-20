/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffAddress } from './address.factory';
import * as i0 from "@angular/core";
export class MockDaffPersonalAddress extends MockDaffAddress {
    constructor() {
        super(...arguments);
        this.prefix = faker.name.prefix();
        this.suffix = faker.name.suffix();
        this.firstname = faker.name.firstName();
        this.middlename = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.email = faker.internet.email();
        this.telephone = faker.phone.phoneNumber();
    }
}
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
export class DaffPersonalAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffPersonalAddress);
    }
}
DaffPersonalAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPersonalAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPersonalAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPersonalAddressFactory_Factory() { return new DaffPersonalAddressFactory(); }, token: DaffPersonalAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwtYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL3BlcnNvbmFsLWFkZHJlc3MuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFcEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFBNUQ7O1FBQ0UsV0FBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsYUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsVUFBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUFBOzs7SUFQQyx5Q0FBNkI7O0lBQzdCLHlDQUE2Qjs7SUFDN0IsNENBQW1DOztJQUNuQyw2Q0FBb0M7O0lBQ3BDLDJDQUFpQzs7SUFDakMsd0NBQStCOztJQUMvQiw0Q0FBc0M7O0FBTXhDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxnQkFBcUM7SUFDbkY7UUFDRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmUGVyc29uYWxBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmltcG9ydCB7IE1vY2tEYWZmQWRkcmVzcyB9IGZyb20gJy4vYWRkcmVzcy5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmUGVyc29uYWxBZGRyZXNzIGV4dGVuZHMgTW9ja0RhZmZBZGRyZXNzIGltcGxlbWVudHMgRGFmZlBlcnNvbmFsQWRkcmVzcyB7XG4gIHByZWZpeCA9IGZha2VyLm5hbWUucHJlZml4KCk7XG4gIHN1ZmZpeCA9IGZha2VyLm5hbWUuc3VmZml4KCk7XG4gIGZpcnN0bmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIG1pZGRsZW5hbWUgPSBmYWtlci5uYW1lLmZpcnN0TmFtZSgpO1xuICBsYXN0bmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoKTtcbiAgZW1haWwgPSBmYWtlci5pbnRlcm5ldC5lbWFpbCgpO1xuICB0ZWxlcGhvbmUgPSBmYWtlci5waG9uZS5waG9uZU51bWJlcigpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGVyc29uYWxBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlBlcnNvbmFsQWRkcmVzcz57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tEYWZmUGVyc29uYWxBZGRyZXNzKTtcbiAgfVxufVxuIl19