/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../factories/paypal-token-response.factory";
export class DaffTestingPaypalService {
    /**
     * @param {?} paypalTokenResponseFactory
     */
    constructor(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return of(this.paypalTokenResponseFactory.create());
    }
}
DaffTestingPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingPaypalService.ctorParameters = () => [
    { type: DaffPaypalTokenResponseFactory }
];
/** @nocollapse */ DaffTestingPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingPaypalService_Factory() { return new DaffTestingPaypalService(i0.ɵɵinject(i1.DaffPaypalTokenResponseFactory)); }, token: DaffTestingPaypalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingPaypalService.prototype.paypalTokenResponseFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvcGF5cGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBSy9GLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFbkMsWUFDVSwwQkFBMEQ7UUFBMUQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFnQztJQUFHLENBQUM7Ozs7O0lBRXhFLGFBQWEsQ0FBQyxZQUFvQztRQUNoRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSw4QkFBOEI7Ozs7Ozs7O0lBUW5DLDhEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlLCBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvcGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ1BheXBhbFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZTxEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0LCBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4ge1xuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBheXBhbFRva2VuUmVzcG9uc2VGYWN0b3J5OiBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZUZhY3RvcnkpIHt9XG5cbiAgZ2VuZXJhdGVUb2tlbih0b2tlblJlcXVlc3Q6IERhZmZQYXlwYWxUb2tlblJlcXVlc3QpOiBPYnNlcnZhYmxlPERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMucGF5cGFsVG9rZW5SZXNwb25zZUZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=