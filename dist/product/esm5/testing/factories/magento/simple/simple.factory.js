/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
import * as i0 from "@angular/core";
var MockMagentoSimpleProduct = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoSimpleProduct, _super);
    function MockMagentoSimpleProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoProductTypeEnum.SimpleProduct;
        return _this;
    }
    return MockMagentoSimpleProduct;
}(MockMagentoCoreProduct));
export { MockMagentoSimpleProduct };
if (false) {
    /** @type {?} */
    MockMagentoSimpleProduct.prototype.__typename;
}
var MagentoSimpleProductFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoSimpleProductFactory, _super);
    function MagentoSimpleProductFactory() {
        return _super.call(this, MockMagentoSimpleProduct) || this;
    }
    MagentoSimpleProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoSimpleProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoSimpleProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoSimpleProductFactory_Factory() { return new MagentoSimpleProductFactory(); }, token: MagentoSimpleProductFactory, providedIn: "root" });
    return MagentoSimpleProductFactory;
}(DaffModelFactory));
export { MagentoSimpleProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vc2ltcGxlL3NpbXBsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHNCQUFzQixFQUF3QixNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUVqRTtJQUE4QyxvREFBc0I7SUFBcEU7UUFBQSxxRUFFQztRQURBLGdCQUFVLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDOztJQUNuRCxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBOEMsc0JBQXNCLEdBRW5FOzs7O0lBREEsOENBQWtEOztBQUduRDtJQUdpRCx1REFBc0M7SUFFckY7ZUFDRSxrQkFBTSx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztzQ0FkRDtDQW9CQyxBQVJELENBR2lELGdCQUFnQixHQUtoRTtTQUxZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRGFmZk1vZGVsRmFjdG9yeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLCBNYWdlbnRvU2ltcGxlUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7IE1vY2tNYWdlbnRvQ29yZVByb2R1Y3QgfSBmcm9tICcuLi9jb3JlL3Byb2R1Y3QuZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b1NpbXBsZVByb2R1Y3QgZXh0ZW5kcyBNb2NrTWFnZW50b0NvcmVQcm9kdWN0IGltcGxlbWVudHMgTWFnZW50b1NpbXBsZVByb2R1Y3Qge1xuXHRfX3R5cGVuYW1lID0gTWFnZW50b1Byb2R1Y3RUeXBlRW51bS5TaW1wbGVQcm9kdWN0O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvU2ltcGxlUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9TaW1wbGVQcm9kdWN0PiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b1NpbXBsZVByb2R1Y3QpO1xuICB9XG59XG4iXX0=