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
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockOrderInvoice = /** @class */ (function () {
    function MockOrderInvoice() {
        this.items = [];
        this.totals = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.payment = null;
        this.shipping_method = null;
    }
    return MockOrderInvoice;
}());
export { MockOrderInvoice };
if (false) {
    /** @type {?} */
    MockOrderInvoice.prototype.items;
    /** @type {?} */
    MockOrderInvoice.prototype.totals;
    /** @type {?} */
    MockOrderInvoice.prototype.billing_address;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_address;
    /** @type {?} */
    MockOrderInvoice.prototype.payment;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_method;
}
;
var DaffOrderInvoiceFactory = /** @class */ (function (_super) {
    __extends(DaffOrderInvoiceFactory, _super);
    function DaffOrderInvoiceFactory() {
        return _super.call(this, MockOrderInvoice) || this;
    }
    DaffOrderInvoiceFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderInvoiceFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderInvoiceFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderInvoiceFactory_Factory() { return new DaffOrderInvoiceFactory(); }, token: DaffOrderInvoiceFactory, providedIn: "root" });
    return DaffOrderInvoiceFactory;
}(DaffModelFactory));
export { DaffOrderInvoiceFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItaW52b2ljZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQ7SUFBQTtRQUNFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixvQkFBZSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLGlDQUFXOztJQUNYLGtDQUFZOztJQUNaLDJDQUF1Qjs7SUFDdkIsNENBQXdCOztJQUN4QixtQ0FBZTs7SUFDZiwyQ0FBdUI7O0FBQ3hCLENBQUM7QUFHRjtJQUc2QywyQ0FBa0M7SUFDN0U7ZUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztrQ0FqQkQ7Q0FzQkMsQUFQRCxDQUc2QyxnQkFBZ0IsR0FJNUQ7U0FKWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZPcmRlckludm9pY2UgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVySW52b2ljZSBpbXBsZW1lbnRzIERhZmZPcmRlckludm9pY2Uge1xuICBpdGVtcyA9IFtdO1xuICB0b3RhbHMgPSBbXTtcbiAgYmlsbGluZ19hZGRyZXNzID0gbnVsbDtcbiAgc2hpcHBpbmdfYWRkcmVzcyA9IG51bGw7XG4gIHBheW1lbnQgPSBudWxsO1xuICBzaGlwcGluZ19tZXRob2QgPSBudWxsO1xufTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJJbnZvaWNlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVySW52b2ljZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXJJbnZvaWNlKTtcbiAgfVxufVxuIl19