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
var MockMagentoBundledProduct = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoBundledProduct, _super);
    function MockMagentoBundledProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoProductTypeEnum.BundledProduct;
        _this.items = [];
        return _this;
    }
    return MockMagentoBundledProduct;
}(MockMagentoCoreProduct));
export { MockMagentoBundledProduct };
if (false) {
    /** @type {?} */
    MockMagentoBundledProduct.prototype.__typename;
    /** @type {?} */
    MockMagentoBundledProduct.prototype.items;
}
var MagentoBundledProductFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoBundledProductFactory, _super);
    function MagentoBundledProductFactory() {
        return _super.call(this, MockMagentoBundledProduct) || this;
    }
    MagentoBundledProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoBundledProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoBundledProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoBundledProductFactory_Factory() { return new MagentoBundledProductFactory(); }, token: MagentoBundledProductFactory, providedIn: "root" });
    return MagentoBundledProductFactory;
}(DaffModelFactory));
export { MagentoBundledProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vYnVuZGxlL2J1bmRsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHNCQUFzQixFQUF5QixNQUFNLG1CQUFtQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUVqRTtJQUErQyxxREFBc0I7SUFBckU7UUFBQSxxRUFHQztRQUZDLGdCQUFVLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFDO1FBQ25ELFdBQUssR0FBRyxFQUFFLENBQUM7O0lBQ2IsQ0FBQztJQUFELGdDQUFDO0FBQUQsQ0FBQyxBQUhELENBQStDLHNCQUFzQixHQUdwRTs7OztJQUZDLCtDQUFtRDs7SUFDbkQsMENBQVc7O0FBR2I7SUFHa0Qsd0RBQXVDO0lBRXZGO2VBQ0Usa0JBQU0seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUNBZkQ7Q0FxQkMsQUFSRCxDQUdrRCxnQkFBZ0IsR0FLakU7U0FMWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3RUeXBlRW51bSwgTWFnZW50b0J1bmRsZWRQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHsgTW9ja01hZ2VudG9Db3JlUHJvZHVjdCB9IGZyb20gJy4uL2NvcmUvcHJvZHVjdC5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQnVuZGxlZFByb2R1Y3QgZXh0ZW5kcyBNb2NrTWFnZW50b0NvcmVQcm9kdWN0IGltcGxlbWVudHMgTWFnZW50b0J1bmRsZWRQcm9kdWN0IHtcbiAgX190eXBlbmFtZSA9IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uQnVuZGxlZFByb2R1Y3Q7XG4gIGl0ZW1zID0gW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9CdW5kbGVkUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9CdW5kbGVkUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9CdW5kbGVkUHJvZHVjdCk7XG4gIH1cbn1cbiJdfQ==