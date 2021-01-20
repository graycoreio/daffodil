/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockMagentoCartPaymentMethod {
    constructor() {
        this.code = faker.random.word();
        this.title = faker.random.word();
        this.purchase_order_number = faker.random.word();
    }
}
if (false) {
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.code;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.title;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.purchase_order_number;
}
export class MagentoCartPaymentMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartPaymentMethod);
    }
}
MagentoCartPaymentMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MagentoCartPaymentMethodFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartPaymentMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartPaymentMethodFactory_Factory() { return new MagentoCartPaymentMethodFactory(); }, token: MagentoCartPaymentMethodFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LXBheW1lbnQtbWV0aG9kLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUk1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLDRCQUE0QjtJQUF6QztRQUNDLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLDBCQUFxQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUFBOzs7SUFIQSw0Q0FBMkI7O0lBQzNCLDZDQUE0Qjs7SUFDNUIsNkRBQTRDOztBQU03QyxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsZ0JBQTBDO0lBQzlGO1FBQ0MsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBTkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnRQYXltZW50TWV0aG9kIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0NhcnRQYXltZW50TWV0aG9kIGltcGxlbWVudHMgTWFnZW50b0NhcnRQYXltZW50TWV0aG9kIHtcblx0Y29kZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG5cdHRpdGxlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcblx0cHVyY2hhc2Vfb3JkZXJfbnVtYmVyID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0UGF5bWVudE1ldGhvZEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9DYXJ0UGF5bWVudE1ldGhvZD4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihNb2NrTWFnZW50b0NhcnRQYXltZW50TWV0aG9kKTtcblx0fVxufVxuIl19