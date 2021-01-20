/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCustomerRegistration {
    constructor() {
        this.email = faker.internet.email();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}
if (false) {
    /** @type {?} */
    MockCustomerRegistration.prototype.email;
    /** @type {?} */
    MockCustomerRegistration.prototype.firstName;
    /** @type {?} */
    MockCustomerRegistration.prototype.lastName;
}
export class DaffCustomerRegistrationFactory extends DaffModelFactory {
    constructor() {
        super(MockCustomerRegistration);
    }
}
DaffCustomerRegistrationFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCustomerRegistrationFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCustomerRegistrationFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCustomerRegistrationFactory_Factory() { return new DaffCustomerRegistrationFactory(); }, token: DaffCustomerRegistrationFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmVnaXN0cmF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2N1c3RvbWVyLXJlZ2lzdHJhdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyx3QkFBd0I7SUFBckM7UUFDRSxVQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQUE7OztJQUhDLHlDQUErQjs7SUFDL0IsNkNBQW1DOztJQUNuQyw0Q0FBaUM7O0FBTW5DLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxnQkFBMEM7SUFDN0Y7UUFDRSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ3VzdG9tZXJSZWdpc3RyYXRpb24gaW1wbGVtZW50cyBEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb24ge1xuICBlbWFpbCA9IGZha2VyLmludGVybmV0LmVtYWlsKCk7XG4gIGZpcnN0TmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKCk7XG4gIGxhc3ROYW1lID0gZmFrZXIubmFtZS5sYXN0TmFtZSgpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb25GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ3VzdG9tZXJSZWdpc3RyYXRpb24+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0N1c3RvbWVyUmVnaXN0cmF0aW9uKTtcbiAgfVxufVxuIl19