/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
import * as i0 from "@angular/core";
export class MockMagentoCoreProduct {
    constructor() {
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
}
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
export class MagentoCoreProductFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCoreProduct);
    }
}
MagentoCoreProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCoreProductFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCoreProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCoreProductFactory_Factory() { return new MagentoCoreProductFactory(); }, token: MagentoCoreProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9tYWdlbnRvL2NvcmUvcHJvZHVjdC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixHQUNqQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBa0Isc0JBQXNCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFMUcsTUFBTSxPQUFPLHNCQUFzQjtJQUFuQztRQUNDLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7UUFDakQsT0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5QyxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsUUFBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsNkJBQTZCLENBQUMsT0FBTyxDQUFDO1FBQ3BELFVBQUssR0FBRztZQUNOLFVBQVUsRUFBRSxjQUFjO1lBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1NBQzVCLENBQUM7UUFDRixjQUFTLEdBQUc7WUFDVixVQUFVLEVBQUUsY0FBYztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtTQUM1QixDQUFDO1FBQ0YsZ0JBQVcsR0FBRztZQUNaLFVBQVUsRUFBRSxrQkFBa0I7WUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQixDQUFBO1FBQ0EsZ0JBQVcsR0FBRztZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQzFCLGFBQWEsRUFBRTtnQkFDWCxVQUFVLEVBQUUsY0FBYztnQkFDN0IsYUFBYSxFQUFFO29CQUNWLFVBQVUsRUFBRSxPQUFPO29CQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQztvQkFDbEQsUUFBUSxFQUFFLElBQUk7aUJBQ2Q7Z0JBQ0QsUUFBUSxFQUFFO29CQUNULFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNsRCxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztpQkFDbkQ7YUFDRDtTQUNBLENBQUM7UUFDRixzQkFBaUIsR0FBRztZQUNsQixVQUFVLEVBQUUsa0JBQWtCO1lBQ2hDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0IsQ0FBQTtRQUNELDBCQUFxQixHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQUE7OztJQXpDQSw0Q0FBa0Q7O0lBQ2pELG9DQUE4Qzs7SUFDOUMseUNBQXdDOztJQUN4QyxzQ0FBMkI7O0lBQzVCLHFDQUFvQzs7SUFDcEMsOENBQXFEOztJQUNwRCx1Q0FJRTs7SUFDRiwyQ0FJRTs7SUFDRiw2Q0FHQTs7SUFDQSw2Q0FlRTs7SUFDRixtREFHQTs7SUFDRCx1REFBMkI7O0FBTTVCLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBZ0M7SUFFN0U7UUFDRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQge1xuICBEYWZmTW9kZWxGYWN0b3J5LFxufSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9Qcm9kdWN0LCBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLCBNYWdlbnRvUHJvZHVjdFN0b2NrU3RhdHVzRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ29yZVByb2R1Y3QgaW1wbGVtZW50cyBNYWdlbnRvUHJvZHVjdCB7XG5cdF9fdHlwZW5hbWUgPSBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLlNpbXBsZVByb2R1Y3Q7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgdXJsX2tleSA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xuICBuYW1lID0gZmFrZXIucmFuZG9tLndvcmQoKTtcblx0c2t1ID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG5cdHN0b2NrX3N0YXR1cyA9IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtLkluU3RvY2s7XG4gIGltYWdlID0ge1xuICAgIF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuICAgIGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG4gICAgdXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG4gIH07XG4gIHRodW1ibmFpbCA9IHtcbiAgICBfX3R5cGVuYW1lOiAnUHJvZHVjdEltYWdlJyxcbiAgICBsYWJlbDogZmFrZXIucmFuZG9tLndvcmRzKDMpLFxuICAgIHVybDogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKVxuICB9O1xuICBkZXNjcmlwdGlvbiA9IHtcbiAgICBfX3R5cGVuYW1lOiAnQ29tcGxleFRleHRWYWx1ZScsXG5cdFx0aHRtbDogZmFrZXIucmFuZG9tLndvcmRzKDUpXG5cdH1cbiAgcHJpY2VfcmFuZ2UgPSB7XG4gICAgX190eXBlbmFtZTogJ1ByaWNlUmFuZ2UnLFxuXHRcdG1heGltdW1fcHJpY2U6IHtcbiAgICAgIF9fdHlwZW5hbWU6ICdQcm9kdWN0UHJpY2UnLFxuXHRcdFx0cmVndWxhcl9wcmljZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTW9uZXknLFxuXHRcdFx0XHR2YWx1ZTogZmFrZXIucmFuZG9tLm51bWJlcih7IG1pbjogMTAwLCBtYXg6IDEwMDB9KSxcblx0XHRcdFx0Y3VycmVuY3k6IG51bGxcblx0XHRcdH0sXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJvZHVjdERpc2NvdW50Jyxcblx0XHRcdFx0YW1vdW50X29mZjogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDk5fSksXG5cdFx0XHRcdHBlcmNlbnRfb2ZmOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogOTl9KVxuXHRcdFx0fVxuXHRcdH1cbiAgfTtcbiAgc2hvcnRfZGVzY3JpcHRpb24gPSB7XG4gICAgX190eXBlbmFtZTogJ0NvbXBsZXhUZXh0VmFsdWUnLFxuXHRcdGh0bWw6IGZha2VyLnJhbmRvbS53b3JkcygzKVxuXHR9XG5cdG1lZGlhX2dhbGxlcnlfZW50cmllcyA9IFtdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ29yZVByb2R1Y3RGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9Db3JlUHJvZHVjdCk7XG4gIH1cbn1cbiJdfQ==