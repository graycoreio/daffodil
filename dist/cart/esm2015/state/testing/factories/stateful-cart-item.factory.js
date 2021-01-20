/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import { DaffCartItemStateEnum } from '@daffodil/cart/state';
import * as i0 from "@angular/core";
export class DaffMockStatefulCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.daffState = DaffCartItemStateEnum.Default;
    }
}
if (false) {
    /** @type {?} */
    DaffMockStatefulCartItem.prototype.daffState;
}
export class DaffStatefulCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockStatefulCartItem);
    }
}
DaffStatefulCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffStatefulCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffStatefulCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffStatefulCartItemFactory_Factory() { return new DaffStatefulCartItemFactory(); }, token: DaffStatefulCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVmdWwtY2FydC1pdGVtLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL3N0YXRlZnVsLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBd0IscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFbkYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjtJQUE5RDs7UUFDQyxjQUFTLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7Q0FBQTs7O0lBREEsNkNBQTBDOztBQU0zQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQXNDO0lBRXJGO1FBQ0UsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBUEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmTW9ja0NhcnRJdGVtIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSwgRGFmZkNhcnRJdGVtU3RhdGVFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvc3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgRGFmZk1vY2tTdGF0ZWZ1bENhcnRJdGVtIGV4dGVuZHMgRGFmZk1vY2tDYXJ0SXRlbSBpbXBsZW1lbnRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtIHtcblx0ZGFmZlN0YXRlID0gRGFmZkNhcnRJdGVtU3RhdGVFbnVtLkRlZmF1bHQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZTdGF0ZWZ1bENhcnRJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlN0YXRlZnVsQ2FydEl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKERhZmZNb2NrU3RhdGVmdWxDYXJ0SXRlbSk7XG4gIH1cbn1cbiJdfQ==