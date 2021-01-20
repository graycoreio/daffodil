/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from '@daffodil/cart/testing';
import { DaffCartItemStateEnum } from '@daffodil/cart/state';
import * as i0 from "@angular/core";
var DaffMockStatefulCartItem = /** @class */ (function (_super) {
    tslib_1.__extends(DaffMockStatefulCartItem, _super);
    function DaffMockStatefulCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.daffState = DaffCartItemStateEnum.Default;
        return _this;
    }
    return DaffMockStatefulCartItem;
}(DaffMockCartItem));
export { DaffMockStatefulCartItem };
if (false) {
    /** @type {?} */
    DaffMockStatefulCartItem.prototype.daffState;
}
var DaffStatefulCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffStatefulCartItemFactory, _super);
    function DaffStatefulCartItemFactory() {
        return _super.call(this, DaffMockStatefulCartItem) || this;
    }
    DaffStatefulCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffStatefulCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffStatefulCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffStatefulCartItemFactory_Factory() { return new DaffStatefulCartItemFactory(); }, token: DaffStatefulCartItemFactory, providedIn: "root" });
    return DaffStatefulCartItemFactory;
}(DaffModelFactory));
export { DaffStatefulCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVmdWwtY2FydC1pdGVtLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL3N0YXRlZnVsLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQXdCLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRW5GO0lBQThDLG9EQUFnQjtJQUE5RDtRQUFBLHFFQUVDO1FBREEsZUFBUyxHQUFHLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs7SUFDM0MsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQThDLGdCQUFnQixHQUU3RDs7OztJQURBLDZDQUEwQzs7QUFHM0M7SUFHaUQsdURBQXNDO0lBRXJGO2VBQ0Usa0JBQU0sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7c0NBWkQ7Q0FrQkMsQUFSRCxDQUdpRCxnQkFBZ0IsR0FLaEU7U0FMWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZNb2NrQ2FydEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZTdGF0ZWZ1bENhcnRJdGVtLCBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydC9zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBEYWZmTW9ja1N0YXRlZnVsQ2FydEl0ZW0gZXh0ZW5kcyBEYWZmTW9ja0NhcnRJdGVtIGltcGxlbWVudHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0ge1xuXHRkYWZmU3RhdGUgPSBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0uRGVmYXVsdDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlN0YXRlZnVsQ2FydEl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmU3RhdGVmdWxDYXJ0SXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoRGFmZk1vY2tTdGF0ZWZ1bENhcnRJdGVtKTtcbiAgfVxufVxuIl19