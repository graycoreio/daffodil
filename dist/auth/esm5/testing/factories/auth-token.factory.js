/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockAuthToken = /** @class */ (function () {
    function MockAuthToken() {
        this.token = faker.random.alphaNumeric(16);
    }
    return MockAuthToken;
}());
export { MockAuthToken };
if (false) {
    /** @type {?} */
    MockAuthToken.prototype.token;
}
;
var DaffAuthTokenFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffAuthTokenFactory, _super);
    function DaffAuthTokenFactory() {
        return _super.call(this, MockAuthToken) || this;
    }
    DaffAuthTokenFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthTokenFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAuthTokenFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthTokenFactory_Factory() { return new DaffAuthTokenFactory(); }, token: DaffAuthTokenFactory, providedIn: "root" });
    return DaffAuthTokenFactory;
}(DaffModelFactory));
export { DaffAuthTokenFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10b2tlbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9hdXRoLXRva2VuLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyw4QkFBc0M7O0FBQ3ZDLENBQUM7QUFFRjtJQUcwQyxnREFBK0I7SUFDdkU7ZUFDRSxrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBWkQ7Q0FpQkMsQUFQRCxDQUcwQyxnQkFBZ0IsR0FJekQ7U0FKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aFRva2VuIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGgnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0F1dGhUb2tlbiBpbXBsZW1lbnRzIERhZmZBdXRoVG9rZW4ge1xuICB0b2tlbiA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhUb2tlbkZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZBdXRoVG9rZW4+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0F1dGhUb2tlbik7XG4gIH1cbn1cbiJdfQ==