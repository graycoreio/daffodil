/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/testing';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import * as i0 from "@angular/core";
var MockMagentoCartItem = /** @class */ (function () {
    function MockMagentoCartItem() {
        this.__typename = MagentoCartItemTypeEnum.Simple;
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.prices = {
            __typename: 'CartItemPrices',
            price: this.money(),
            row_total: this.money(),
            row_total_including_tax: this.money(),
            total_item_discount: this.money()
        };
        this.product = this.createProduct();
        this.quantity = faker.random.number({ min: 1, max: 20 });
    }
    /**
     * @private
     * @return {?}
     */
    MockMagentoCartItem.prototype.createProduct = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoProductFactory()).create();
    };
    /**
     * @private
     * @return {?}
     */
    MockMagentoCartItem.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockMagentoCartItem;
}());
export { MockMagentoCartItem };
if (false) {
    /** @type {?} */
    MockMagentoCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoCartItem.prototype.id;
    /** @type {?} */
    MockMagentoCartItem.prototype.prices;
    /** @type {?} */
    MockMagentoCartItem.prototype.product;
    /** @type {?} */
    MockMagentoCartItem.prototype.quantity;
}
var MagentoCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartItemFactory, _super);
    function MagentoCartItemFactory() {
        return _super.call(this, MockMagentoCartItem) || this;
    }
    MagentoCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartItemFactory_Factory() { return new MagentoCartItemFactory(); }, token: MagentoCartItemFactory, providedIn: "root" });
    return MagentoCartItemFactory;
}(DaffModelFactory));
export { MagentoCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRXZFO0lBQUE7UUFDQyxlQUFVLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBQzNDLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsV0FBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLGdCQUFnQjtZQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN2Qix1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7U0FDbEMsQ0FBQztRQUNGLFlBQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQVNwRCxDQUFDOzs7OztJQVBTLDJDQUFhOzs7O0lBQXJCO1FBQ0UsT0FBTyxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQy9DLENBQUM7Ozs7O0lBRU8sbUNBQUs7Ozs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7O0lBbkJBLHlDQUE0Qzs7SUFDM0MsaUNBQThDOztJQUM5QyxxQ0FNRTs7SUFDRixzQ0FBK0I7O0lBQy9CLHVDQUFrRDs7QUFXcEQ7SUFHNEMsa0RBQWlDO0lBRTNFO2VBQ0Usa0JBQU0sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7aUNBckNEO0NBMkNDLEFBUkQsQ0FHNEMsZ0JBQWdCLEdBSzNEO1NBTFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHtcblx0TWFnZW50b0NhcnRJdGVtLFxuXHRNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bVxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50byc7XG5pbXBvcnQgeyBNYWdlbnRvUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7IE1hZ2VudG9Qcm9kdWN0RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b01vbmV5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvJztcbmltcG9ydCB7IE1hZ2VudG9Nb25leUZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8vdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0NhcnRJdGVtIGltcGxlbWVudHMgTWFnZW50b0NhcnRJdGVtIHtcblx0X190eXBlbmFtZSA9IE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtLlNpbXBsZTtcbiAgaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBwcmljZXMgPSB7XG5cdFx0X190eXBlbmFtZTogJ0NhcnRJdGVtUHJpY2VzJyxcbiAgICBwcmljZTogdGhpcy5tb25leSgpLFxuICAgIHJvd190b3RhbDogdGhpcy5tb25leSgpLFxuICAgIHJvd190b3RhbF9pbmNsdWRpbmdfdGF4OiB0aGlzLm1vbmV5KCksXG4gICAgdG90YWxfaXRlbV9kaXNjb3VudDogdGhpcy5tb25leSgpXG4gIH07XG4gIHByb2R1Y3QgPSB0aGlzLmNyZWF0ZVByb2R1Y3QoKTtcbiAgcXVhbnRpdHkgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMjB9KTtcblxuICBwcml2YXRlIGNyZWF0ZVByb2R1Y3QoKTogTWFnZW50b1Byb2R1Y3Qge1xuICAgIHJldHVybiAobmV3IE1hZ2VudG9Qcm9kdWN0RmFjdG9yeSgpKS5jcmVhdGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBtb25leSgpOiBNYWdlbnRvTW9uZXkge1xuICAgIHJldHVybiAobmV3IE1hZ2VudG9Nb25leUZhY3RvcnkoKSkuY3JlYXRlKClcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ2FydEl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ2FydEl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvQ2FydEl0ZW0pO1xuICB9XG59XG4iXX0=