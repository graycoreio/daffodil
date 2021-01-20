/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCustomerRegistration = /** @class */ (function () {
    function MockCustomerRegistration() {
        this.email = faker.internet.email();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
    return MockCustomerRegistration;
}());
export { MockCustomerRegistration };
if (false) {
    /** @type {?} */
    MockCustomerRegistration.prototype.email;
    /** @type {?} */
    MockCustomerRegistration.prototype.firstName;
    /** @type {?} */
    MockCustomerRegistration.prototype.lastName;
}
var DaffCustomerRegistrationFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCustomerRegistrationFactory, _super);
    function DaffCustomerRegistrationFactory() {
        return _super.call(this, MockCustomerRegistration) || this;
    }
    DaffCustomerRegistrationFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCustomerRegistrationFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCustomerRegistrationFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCustomerRegistrationFactory_Factory() { return new DaffCustomerRegistrationFactory(); }, token: DaffCustomerRegistrationFactory, providedIn: "root" });
    return DaffCustomerRegistrationFactory;
}(DaffModelFactory));
export { DaffCustomerRegistrationFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmVnaXN0cmF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2N1c3RvbWVyLXJlZ2lzdHJhdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyx5Q0FBK0I7O0lBQy9CLDZDQUFtQzs7SUFDbkMsNENBQWlDOztBQUduQztJQUdxRCwyREFBMEM7SUFDN0Y7ZUFDRSxrQkFBTSx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQ0FkRDtDQW1CQyxBQVBELENBR3FELGdCQUFnQixHQUlwRTtTQUpZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkN1c3RvbWVyUmVnaXN0cmF0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGgnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tDdXN0b21lclJlZ2lzdHJhdGlvbiBpbXBsZW1lbnRzIERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbiB7XG4gIGVtYWlsID0gZmFrZXIuaW50ZXJuZXQuZW1haWwoKTtcbiAgZmlyc3ROYW1lID0gZmFrZXIubmFtZS5maXJzdE5hbWUoKTtcbiAgbGFzdE5hbWUgPSBmYWtlci5uYW1lLmxhc3ROYW1lKCk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbkZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbj4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQ3VzdG9tZXJSZWdpc3RyYXRpb24pO1xuICB9XG59XG4iXX0=