/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockPaypalTokenResponse = /** @class */ (function () {
    function MockPaypalTokenResponse() {
        this.token = 'tokenstring';
        this.urls = {
            start: faker.internet.url(),
            edit: faker.internet.url()
        };
    }
    return MockPaypalTokenResponse;
}());
export { MockPaypalTokenResponse };
if (false) {
    /** @type {?} */
    MockPaypalTokenResponse.prototype.token;
    /** @type {?} */
    MockPaypalTokenResponse.prototype.urls;
}
var DaffPaypalTokenResponseFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffPaypalTokenResponseFactory, _super);
    function DaffPaypalTokenResponseFactory() {
        return _super.call(this, MockPaypalTokenResponse) || this;
    }
    DaffPaypalTokenResponseFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPaypalTokenResponseFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffPaypalTokenResponseFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaypalTokenResponseFactory_Factory() { return new DaffPaypalTokenResponseFactory(); }, token: DaffPaypalTokenResponseFactory, providedIn: "root" });
    return DaffPaypalTokenResponseFactory;
}(DaffModelFactory));
export { DaffPaypalTokenResponseFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvcGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzFEO0lBQUE7UUFDRSxVQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ3RCLFNBQUksR0FBRztZQUNQLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7U0FDMUIsQ0FBQztJQUNILENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsd0NBQXNCOztJQUN0Qix1Q0FHQzs7QUFHSDtJQUdvRCwwREFBeUM7SUFDM0Y7ZUFDRSxrQkFBTSx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5Q0FoQkQ7Q0FxQkMsQUFQRCxDQUdvRCxnQkFBZ0IsR0FJbkU7U0FKWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1BheXBhbFRva2VuUmVzcG9uc2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB7XG4gIHRva2VuID0gJ3Rva2Vuc3RyaW5nJztcbiAgdXJscyA9IHtcblx0XHRzdGFydDogZmFrZXIuaW50ZXJuZXQudXJsKCksXG5cdFx0ZWRpdDogZmFrZXIuaW50ZXJuZXQudXJsKClcblx0fTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlBheXBhbFRva2VuUmVzcG9uc2VGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja1BheXBhbFRva2VuUmVzcG9uc2UpO1xuICB9XG59XG4iXX0=