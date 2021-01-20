/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/testing';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import * as i0 from "@angular/core";
export class MockMagentoCartItem {
    constructor() {
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
    createProduct() {
        return (new MagentoProductFactory()).create();
    }
    /**
     * @private
     * @return {?}
     */
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
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
export class MagentoCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartItem);
    }
}
MagentoCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartItemFactory_Factory() { return new MagentoCartItemFactory(); }, token: MagentoCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFdkUsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUNDLGVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDM0MsT0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5QyxXQUFNLEdBQUc7WUFDVCxVQUFVLEVBQUUsZ0JBQWdCO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNsQyxDQUFDO1FBQ0YsWUFBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBU3BELENBQUM7Ozs7O0lBUFMsYUFBYTtRQUNuQixPQUFPLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDL0MsQ0FBQzs7Ozs7SUFFTyxLQUFLO1FBQ1gsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzdDLENBQUM7Q0FDRjs7O0lBbkJBLHlDQUE0Qzs7SUFDM0MsaUNBQThDOztJQUM5QyxxQ0FNRTs7SUFDRixzQ0FBK0I7O0lBQy9CLHVDQUFrRDs7QUFjcEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFpQztJQUUzRTtRQUNFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7XG5cdE1hZ2VudG9DYXJ0SXRlbSxcblx0TWFnZW50b0NhcnRJdGVtVHlwZUVudW1cbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBNYWdlbnRvUHJvZHVjdEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9Nb25leSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50byc7XG5pbXBvcnQgeyBNYWdlbnRvTW9uZXlGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9DYXJ0SXRlbSBpbXBsZW1lbnRzIE1hZ2VudG9DYXJ0SXRlbSB7XG5cdF9fdHlwZW5hbWUgPSBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bS5TaW1wbGU7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcHJpY2VzID0ge1xuXHRcdF9fdHlwZW5hbWU6ICdDYXJ0SXRlbVByaWNlcycsXG4gICAgcHJpY2U6IHRoaXMubW9uZXkoKSxcbiAgICByb3dfdG90YWw6IHRoaXMubW9uZXkoKSxcbiAgICByb3dfdG90YWxfaW5jbHVkaW5nX3RheDogdGhpcy5tb25leSgpLFxuICAgIHRvdGFsX2l0ZW1fZGlzY291bnQ6IHRoaXMubW9uZXkoKVxuICB9O1xuICBwcm9kdWN0ID0gdGhpcy5jcmVhdGVQcm9kdWN0KCk7XG4gIHF1YW50aXR5ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDIwfSk7XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9kdWN0KCk6IE1hZ2VudG9Qcm9kdWN0IHtcbiAgICByZXR1cm4gKG5ldyBNYWdlbnRvUHJvZHVjdEZhY3RvcnkoKSkuY3JlYXRlKClcbiAgfVxuXG4gIHByaXZhdGUgbW9uZXkoKTogTWFnZW50b01vbmV5IHtcbiAgICByZXR1cm4gKG5ldyBNYWdlbnRvTW9uZXlGYWN0b3J5KCkpLmNyZWF0ZSgpXG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0NhcnRJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRJdGVtPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b0NhcnRJdGVtKTtcbiAgfVxufVxuIl19