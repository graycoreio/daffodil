/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerRegistrationFactory } from './customer-registration.factory';
import * as i0 from "@angular/core";
var MockAccountRegistration = /** @class */ (function () {
    function MockAccountRegistration() {
        this.customer = this.fakeCustomer();
        this.password = faker.random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    MockAccountRegistration.prototype.fakeCustomer = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = new DaffCustomerRegistrationFactory();
        return factory.create();
    };
    return MockAccountRegistration;
}());
export { MockAccountRegistration };
if (false) {
    /** @type {?} */
    MockAccountRegistration.prototype.customer;
    /** @type {?} */
    MockAccountRegistration.prototype.password;
}
;
var DaffAccountRegistrationFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffAccountRegistrationFactory, _super);
    function DaffAccountRegistrationFactory() {
        return _super.call(this, MockAccountRegistration) || this;
    }
    DaffAccountRegistrationFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAccountRegistrationFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAccountRegistrationFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAccountRegistrationFactory_Factory() { return new DaffAccountRegistrationFactory(); }, token: DaffAccountRegistrationFactory, providedIn: "root" });
    return DaffAccountRegistrationFactory;
}(DaffModelFactory));
export { DaffAccountRegistrationFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1yZWdpc3RyYXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvYWNjb3VudC1yZWdpc3RyYXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFbEY7SUFBQTtRQUNFLGFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBTzNDLENBQUM7Ozs7O0lBTFMsOENBQVk7Ozs7SUFBcEI7O1lBQ1EsT0FBTyxHQUFHLElBQUksK0JBQStCLEVBQUU7UUFFckQsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQywyQ0FBK0I7O0lBQy9CLDJDQUF5Qzs7QUFPMUMsQ0FBQztBQUVGO0lBR29ELDBEQUF5QztJQUMzRjtlQUNFLGtCQUFNLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lDQXBCRDtDQXlCQyxBQVBELENBR29ELGdCQUFnQixHQUluRTtTQUpZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uLCBEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb24gfSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb25GYWN0b3J5IH0gZnJvbSAnLi9jdXN0b21lci1yZWdpc3RyYXRpb24uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQWNjb3VudFJlZ2lzdHJhdGlvbiBpbXBsZW1lbnRzIERhZmZBY2NvdW50UmVnaXN0cmF0aW9uIHtcbiAgY3VzdG9tZXIgPSB0aGlzLmZha2VDdXN0b21lcigpO1xuICBwYXNzd29yZCA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xuXG4gIHByaXZhdGUgZmFrZUN1c3RvbWVyKCk6IERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbiB7XG4gICAgY29uc3QgZmFjdG9yeSA9IG5ldyBEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb25GYWN0b3J5KCk7XG5cbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoKVxuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbkZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZBY2NvdW50UmVnaXN0cmF0aW9uPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tBY2NvdW50UmVnaXN0cmF0aW9uKTtcbiAgfVxufVxuIl19