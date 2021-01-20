/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
import * as i0 from "@angular/core";
var MockMagentoCoreProduct = /** @class */ (function () {
    function MockMagentoCoreProduct() {
        this.__typename = MagentoProductTypeEnum.SimpleProduct;
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.url_key = faker.random.alphaNumeric(16);
        this.name = faker.random.word();
        this.sku = faker.random.alphaNumeric(16);
        this.stock_status = MagentoProductStockStatusEnum.InStock;
        this.image = {
            __typename: 'ProductImage',
            label: faker.random.words(3),
            url: faker.image.imageUrl()
        };
        this.thumbnail = {
            __typename: 'ProductImage',
            label: faker.random.words(3),
            url: faker.image.imageUrl()
        };
        this.description = {
            __typename: 'ComplexTextValue',
            html: faker.random.words(5)
        };
        this.price_range = {
            __typename: 'PriceRange',
            maximum_price: {
                __typename: 'ProductPrice',
                regular_price: {
                    __typename: 'Money',
                    value: faker.random.number({ min: 100, max: 1000 }),
                    currency: null
                },
                discount: {
                    __typename: 'ProductDiscount',
                    amount_off: faker.random.number({ min: 1, max: 99 }),
                    percent_off: faker.random.number({ min: 1, max: 99 })
                }
            }
        };
        this.short_description = {
            __typename: 'ComplexTextValue',
            html: faker.random.words(3)
        };
        this.media_gallery_entries = [];
    }
    return MockMagentoCoreProduct;
}());
export { MockMagentoCoreProduct };
if (false) {
    /** @type {?} */
    MockMagentoCoreProduct.prototype.__typename;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.id;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.url_key;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.name;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.sku;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.stock_status;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.image;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.thumbnail;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.description;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.price_range;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.short_description;
    /** @type {?} */
    MockMagentoCoreProduct.prototype.media_gallery_entries;
}
var MagentoCoreProductFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCoreProductFactory, _super);
    function MagentoCoreProductFactory() {
        return _super.call(this, MockMagentoCoreProduct) || this;
    }
    MagentoCoreProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCoreProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCoreProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCoreProductFactory_Factory() { return new MagentoCoreProductFactory(); }, token: MagentoCoreProductFactory, providedIn: "root" });
    return MagentoCoreProductFactory;
}(DaffModelFactory));
export { MagentoCoreProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9tYWdlbnRvL2NvcmUvcHJvZHVjdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQWtCLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRTFHO0lBQUE7UUFDQyxlQUFVLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1FBQ2pELE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLDZCQUE2QixDQUFDLE9BQU8sQ0FBQztRQUNwRCxVQUFLLEdBQUc7WUFDTixVQUFVLEVBQUUsY0FBYztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtTQUM1QixDQUFDO1FBQ0YsY0FBUyxHQUFHO1lBQ1YsVUFBVSxFQUFFLGNBQWM7WUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QixHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7U0FDNUIsQ0FBQztRQUNGLGdCQUFXLEdBQUc7WUFDWixVQUFVLEVBQUUsa0JBQWtCO1lBQ2hDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0IsQ0FBQTtRQUNBLGdCQUFXLEdBQUc7WUFDWixVQUFVLEVBQUUsWUFBWTtZQUMxQixhQUFhLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLGNBQWM7Z0JBQzdCLGFBQWEsRUFBRTtvQkFDVixVQUFVLEVBQUUsT0FBTztvQkFDdkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7b0JBQ2xELFFBQVEsRUFBRSxJQUFJO2lCQUNkO2dCQUNELFFBQVEsRUFBRTtvQkFDVCxVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7aUJBQ25EO2FBQ0Q7U0FDQSxDQUFDO1FBQ0Ysc0JBQWlCLEdBQUc7WUFDbEIsVUFBVSxFQUFFLGtCQUFrQjtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUE7UUFDRCwwQkFBcUIsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQzs7OztJQXpDQSw0Q0FBa0Q7O0lBQ2pELG9DQUE4Qzs7SUFDOUMseUNBQXdDOztJQUN4QyxzQ0FBMkI7O0lBQzVCLHFDQUFvQzs7SUFDcEMsOENBQXFEOztJQUNwRCx1Q0FJRTs7SUFDRiwyQ0FJRTs7SUFDRiw2Q0FHQTs7SUFDQSw2Q0FlRTs7SUFDRixtREFHQTs7SUFDRCx1REFBMkI7O0FBRzVCO0lBRytDLHFEQUFnQztJQUU3RTtlQUNFLGtCQUFNLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dCQVBGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29DQXRERDtDQTREQyxBQVJELENBRytDLGdCQUFnQixHQUs5RDtTQUxZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3QsIE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0sIE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9Db3JlUHJvZHVjdCBpbXBsZW1lbnRzIE1hZ2VudG9Qcm9kdWN0IHtcblx0X190eXBlbmFtZSA9IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uU2ltcGxlUHJvZHVjdDtcbiAgaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICB1cmxfa2V5ID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG4gIG5hbWUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuXHRza3UgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KTtcblx0c3RvY2tfc3RhdHVzID0gTWFnZW50b1Byb2R1Y3RTdG9ja1N0YXR1c0VudW0uSW5TdG9jaztcbiAgaW1hZ2UgPSB7XG4gICAgX190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG4gICAgbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcbiAgICB1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcbiAgfTtcbiAgdGh1bWJuYWlsID0ge1xuICAgIF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuICAgIGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG4gICAgdXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG4gIH07XG4gIGRlc2NyaXB0aW9uID0ge1xuICAgIF9fdHlwZW5hbWU6ICdDb21wbGV4VGV4dFZhbHVlJyxcblx0XHRodG1sOiBmYWtlci5yYW5kb20ud29yZHMoNSlcblx0fVxuICBwcmljZV9yYW5nZSA9IHtcbiAgICBfX3R5cGVuYW1lOiAnUHJpY2VSYW5nZScsXG5cdFx0bWF4aW11bV9wcmljZToge1xuICAgICAgX190eXBlbmFtZTogJ1Byb2R1Y3RQcmljZScsXG5cdFx0XHRyZWd1bGFyX3ByaWNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNb25leScsXG5cdFx0XHRcdHZhbHVlOiBmYWtlci5yYW5kb20ubnVtYmVyKHsgbWluOiAxMDAsIG1heDogMTAwMH0pLFxuXHRcdFx0XHRjdXJyZW5jeTogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0RGlzY291bnQnLFxuXHRcdFx0XHRhbW91bnRfb2ZmOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogOTl9KSxcblx0XHRcdFx0cGVyY2VudF9vZmY6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA5OX0pXG5cdFx0XHR9XG5cdFx0fVxuICB9O1xuICBzaG9ydF9kZXNjcmlwdGlvbiA9IHtcbiAgICBfX3R5cGVuYW1lOiAnQ29tcGxleFRleHRWYWx1ZScsXG5cdFx0aHRtbDogZmFrZXIucmFuZG9tLndvcmRzKDMpXG5cdH1cblx0bWVkaWFfZ2FsbGVyeV9lbnRyaWVzID0gW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9Db3JlUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9Qcm9kdWN0PiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b0NvcmVQcm9kdWN0KTtcbiAgfVxufVxuIl19