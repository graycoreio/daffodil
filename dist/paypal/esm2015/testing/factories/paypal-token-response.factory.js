/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockPaypalTokenResponse {
    constructor() {
        this.token = 'tokenstring';
        this.urls = {
            start: faker.internet.url(),
            edit: faker.internet.url()
        };
    }
}
if (false) {
    /** @type {?} */
    MockPaypalTokenResponse.prototype.token;
    /** @type {?} */
    MockPaypalTokenResponse.prototype.urls;
}
export class DaffPaypalTokenResponseFactory extends DaffModelFactory {
    constructor() {
        super(MockPaypalTokenResponse);
    }
}
DaffPaypalTokenResponseFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaypalTokenResponseFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPaypalTokenResponseFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaypalTokenResponseFactory_Factory() { return new DaffPaypalTokenResponseFactory(); }, token: DaffPaypalTokenResponseFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvcGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHMUQsTUFBTSxPQUFPLHVCQUF1QjtJQUFwQztRQUNFLFVBQUssR0FBRyxhQUFhLENBQUM7UUFDdEIsU0FBSSxHQUFHO1lBQ1AsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzNCLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtTQUMxQixDQUFDO0lBQ0gsQ0FBQztDQUFBOzs7SUFMQyx3Q0FBc0I7O0lBQ3RCLHVDQUdDOztBQU1ILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxnQkFBeUM7SUFDM0Y7UUFDRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1BheXBhbFRva2VuUmVzcG9uc2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB7XG4gIHRva2VuID0gJ3Rva2Vuc3RyaW5nJztcbiAgdXJscyA9IHtcblx0XHRzdGFydDogZmFrZXIuaW50ZXJuZXQudXJsKCksXG5cdFx0ZWRpdDogZmFrZXIuaW50ZXJuZXQudXJsKClcblx0fTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlBheXBhbFRva2VuUmVzcG9uc2VGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja1BheXBhbFRva2VuUmVzcG9uc2UpO1xuICB9XG59XG4iXX0=