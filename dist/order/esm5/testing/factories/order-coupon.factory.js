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
import * as i0 from "@angular/core";
var MockOrderCoupon = /** @class */ (function () {
    function MockOrderCoupon() {
        this.code = faker.random.alphaNumeric(10);
    }
    return MockOrderCoupon;
}());
export { MockOrderCoupon };
if (false) {
    /** @type {?} */
    MockOrderCoupon.prototype.code;
}
;
var DaffOrderCouponFactory = /** @class */ (function (_super) {
    __extends(DaffOrderCouponFactory, _super);
    function DaffOrderCouponFactory() {
        return _super.call(this, MockOrderCoupon) || this;
    }
    DaffOrderCouponFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderCouponFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderCouponFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderCouponFactory_Factory() { return new DaffOrderCouponFactory(); }, token: DaffOrderCouponFactory, providedIn: "root" });
    return DaffOrderCouponFactory;
}(DaffModelFactory));
export { DaffOrderCouponFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY291cG9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9vcmRlci1jb3Vwb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQ7SUFBQTtRQUNFLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLCtCQUFxQzs7QUFDdEMsQ0FBQztBQUdGO0lBRzRDLDBDQUFpQztJQUMzRTtlQUNFLGtCQUFNLGVBQWUsQ0FBQztJQUN4QixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztpQ0FiRDtDQWtCQyxBQVBELENBRzRDLGdCQUFnQixHQUkzRDtTQUpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckNvdXBvbiB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJDb3Vwb24gaW1wbGVtZW50cyBEYWZmT3JkZXJDb3Vwb24ge1xuICBjb2RlID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCk7XG59O1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckNvdXBvbkZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlckNvdXBvbj57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tPcmRlckNvdXBvbik7XG4gIH1cbn1cbiJdfQ==