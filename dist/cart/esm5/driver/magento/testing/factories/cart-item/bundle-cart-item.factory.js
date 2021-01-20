/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
var MockMagentoBundleCartItem = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoBundleCartItem, _super);
    function MockMagentoBundleCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoCartItemTypeEnum.Bundle;
        _this.bundle_options = [
            {
                id: faker.random.number({ min: 1, max: 1000 }),
                type: 'radio',
                label: faker.random.word(),
                price: faker.random.number({ min: 1, max: 99 }),
                quantity: 1,
                values: [{
                        id: faker.random.number({ min: 1, max: 1000 }),
                        label: faker.random.word(),
                        price: faker.random.number({ min: 1, max: 99 }),
                        quantity: 1
                    }]
            }
        ];
        return _this;
    }
    return MockMagentoBundleCartItem;
}(MockMagentoCartItem));
export { MockMagentoBundleCartItem };
if (false) {
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.bundle_options;
}
var MagentoBundleCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoBundleCartItemFactory, _super);
    function MagentoBundleCartItemFactory() {
        return _super.call(this, MockMagentoBundleCartItem) || this;
    }
    MagentoBundleCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoBundleCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoBundleCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoBundleCartItemFactory_Factory() { return new MagentoBundleCartItemFactory(); }, token: MagentoBundleCartItemFactory, providedIn: "root" });
    return MagentoBundleCartItemFactory;
}(DaffModelFactory));
export { MagentoBundleCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vYnVuZGxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsdUJBQXVCLEVBQXlCLE1BQU0sK0JBQStCLENBQUM7QUFFL0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRTFEO0lBQStDLHFEQUFtQjtJQUFsRTtRQUFBLHFFQWlCQztRQWhCQyxnQkFBVSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztRQUM1QyxvQkFBYyxHQUFHO1lBQ2pCO2dCQUNDLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUM3QyxRQUFRLEVBQUUsQ0FBQztnQkFDWCxNQUFNLEVBQUUsQ0FBQzt3QkFDUixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQzt3QkFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQzt3QkFDN0MsUUFBUSxFQUFFLENBQUM7cUJBQ1gsQ0FBQzthQUNGO1NBQ0QsQ0FBQzs7SUFDSCxDQUFDO0lBQUQsZ0NBQUM7QUFBRCxDQUFDLEFBakJELENBQStDLG1CQUFtQixHQWlCakU7Ozs7SUFoQkMsK0NBQTRDOztJQUM1QyxtREFjQzs7QUFHSDtJQUdrRCx3REFBdUM7SUFFdkY7ZUFDRSxrQkFBTSx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1Q0EvQkQ7Q0FxQ0MsQUFSRCxDQUdrRCxnQkFBZ0IsR0FLakU7U0FMWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQge1xuICBEYWZmTW9kZWxGYWN0b3J5LFxufSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtLCBNYWdlbnRvQnVuZGxlQ2FydEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50byc7XG5cbmltcG9ydCB7IE1vY2tNYWdlbnRvQ2FydEl0ZW0gfSBmcm9tICcuL2NhcnQtaXRlbS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQnVuZGxlQ2FydEl0ZW0gZXh0ZW5kcyBNb2NrTWFnZW50b0NhcnRJdGVtIGltcGxlbWVudHMgTWFnZW50b0J1bmRsZUNhcnRJdGVtIHtcbiAgX190eXBlbmFtZSA9IE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtLkJ1bmRsZTtcbiAgYnVuZGxlX29wdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSksXG5cdFx0XHR0eXBlOiAncmFkaW8nLFxuXHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKCksXG5cdFx0XHRwcmljZTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDk5fSksXG5cdFx0XHRxdWFudGl0eTogMSxcblx0XHRcdHZhbHVlczogW3tcblx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6IDEwMDB9KSxcblx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKCksXG5cdFx0XHRcdHByaWNlOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogOTl9KSxcblx0XHRcdFx0cXVhbnRpdHk6IDFcblx0XHRcdH1dXG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQnVuZGxlQ2FydEl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQnVuZGxlQ2FydEl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvQnVuZGxlQ2FydEl0ZW0pO1xuICB9XG59XG4iXX0=