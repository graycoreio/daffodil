/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
var MockMagentoConfigurableCartItem = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoConfigurableCartItem, _super);
    function MockMagentoConfigurableCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoCartItemTypeEnum.Configurable;
        _this.configurable_options = [
            {
                option_label: 'Color',
                value_label: 'Red'
            },
            {
                option_label: 'Size',
                value_label: 'M'
            },
        ];
        return _this;
    }
    return MockMagentoConfigurableCartItem;
}(MockMagentoCartItem));
export { MockMagentoConfigurableCartItem };
if (false) {
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.configurable_options;
}
var MagentoConfigurableCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoConfigurableCartItemFactory, _super);
    function MagentoConfigurableCartItemFactory() {
        return _super.call(this, MockMagentoConfigurableCartItem) || this;
    }
    MagentoConfigurableCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoConfigurableCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoConfigurableCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoConfigurableCartItemFactory_Factory() { return new MagentoConfigurableCartItemFactory(); }, token: MagentoConfigurableCartItemFactory, providedIn: "root" });
    return MagentoConfigurableCartItemFactory;
}(DaffModelFactory));
export { MagentoConfigurableCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLCtCQUErQixDQUFDO0FBRXJHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRDtJQUFxRCwyREFBbUI7SUFBeEU7UUFBQSxxRUFZQztRQVhDLGdCQUFVLEdBQUcsdUJBQXVCLENBQUMsWUFBWSxDQUFDO1FBQ2xELDBCQUFvQixHQUFHO1lBQ3ZCO2dCQUNDLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsS0FBSzthQUNsQjtZQUNEO2dCQUNDLFlBQVksRUFBRSxNQUFNO2dCQUNwQixXQUFXLEVBQUUsR0FBRzthQUNoQjtTQUNELENBQUE7O0lBQ0YsQ0FBQztJQUFELHNDQUFDO0FBQUQsQ0FBQyxBQVpELENBQXFELG1CQUFtQixHQVl2RTs7OztJQVhDLHFEQUFrRDs7SUFDbEQsK0RBU0E7O0FBR0Y7SUFHd0QsOERBQTZDO0lBRW5HO2VBQ0Usa0JBQU0sK0JBQStCLENBQUM7SUFDeEMsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkNBMUJEO0NBZ0NDLEFBUkQsQ0FHd0QsZ0JBQWdCLEdBS3ZFO1NBTFksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHtcbiAgRGFmZk1vZGVsRmFjdG9yeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bSwgTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuXG5pbXBvcnQgeyBNb2NrTWFnZW50b0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtIGV4dGVuZHMgTW9ja01hZ2VudG9DYXJ0SXRlbSBpbXBsZW1lbnRzIE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbSB7XG4gIF9fdHlwZW5hbWUgPSBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bS5Db25maWd1cmFibGU7XG4gIGNvbmZpZ3VyYWJsZV9vcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdG9wdGlvbl9sYWJlbDogJ0NvbG9yJyxcblx0XHRcdHZhbHVlX2xhYmVsOiAnUmVkJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0b3B0aW9uX2xhYmVsOiAnU2l6ZScsXG5cdFx0XHR2YWx1ZV9sYWJlbDogJ00nXG5cdFx0fSxcblx0XVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0pO1xuICB9XG59XG4iXX0=