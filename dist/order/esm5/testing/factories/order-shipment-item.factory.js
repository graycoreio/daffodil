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
var MockOrderShipmentItem = /** @class */ (function () {
    function MockOrderShipmentItem() {
        this.item = null;
        this.qty = faker.random.number({ min: 1, max: 100 });
    }
    return MockOrderShipmentItem;
}());
export { MockOrderShipmentItem };
if (false) {
    /** @type {?} */
    MockOrderShipmentItem.prototype.item;
    /** @type {?} */
    MockOrderShipmentItem.prototype.qty;
}
;
var DaffOrderShipmentItemFactory = /** @class */ (function (_super) {
    __extends(DaffOrderShipmentItemFactory, _super);
    function DaffOrderShipmentItemFactory() {
        return _super.call(this, MockOrderShipmentItem) || this;
    }
    DaffOrderShipmentItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentItemFactory_Factory() { return new DaffOrderShipmentItemFactory(); }, token: DaffOrderShipmentItemFactory, providedIn: "root" });
    return DaffOrderShipmentItemFactory;
}(DaffModelFactory));
export { DaffOrderShipmentItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItc2hpcG1lbnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxxQ0FBWTs7SUFDWixvQ0FBOEM7O0FBQy9DLENBQUM7QUFFRjtJQUdrRCxnREFBdUM7SUFDdkY7ZUFDRSxrQkFBTSxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1Q0FiRDtDQWtCQyxBQVBELENBR2tELGdCQUFnQixHQUlqRTtTQUpZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclNoaXBtZW50SXRlbSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJTaGlwbWVudEl0ZW0gaW1wbGVtZW50cyBEYWZmT3JkZXJTaGlwbWVudEl0ZW0ge1xuICBpdGVtID0gbnVsbDtcbiAgcXR5ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyU2hpcG1lbnRJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyU2hpcG1lbnRJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tPcmRlclNoaXBtZW50SXRlbSk7XG4gIH1cbn1cbiJdfQ==