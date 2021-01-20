/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
import * as i0 from "@angular/core";
var MockMagentoConfigurableProduct = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoConfigurableProduct, _super);
    function MockMagentoConfigurableProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.priceVariant1 = faker.random.number({ min: 1, max: 1000 });
        _this.discountVariant1 = faker.random.number({ min: 0, max: _this.priceVariant1 - 1 });
        _this.priceVariant2 = faker.random.number({ min: 1, max: 1000 });
        _this.discountVariant2 = faker.random.number({ min: 0, max: _this.priceVariant2 - 1 });
        _this.priceVariant3 = faker.random.number({ min: 1, max: 1000 });
        _this.discountVariant3 = faker.random.number({ min: 0, max: _this.priceVariant3 - 1 });
        _this.__typename = MagentoProductTypeEnum.ConfigurableProduct;
        _this.configurable_options = [
            {
                attribute_code: 'color',
                attribute_id: faker.random.alphaNumeric(12),
                id: faker.random.alphaNumeric(12),
                label: 'Color',
                position: 0,
                product_id: faker.random.number({ min: 1, max: 1000 }),
                values: [
                    {
                        label: 'Blue',
                        value_index: 0
                    },
                    {
                        label: 'Yellow',
                        value_index: 1
                    },
                    {
                        label: 'Red',
                        value_index: 2
                    }
                ]
            }
        ];
        _this.variants = [
            {
                attributes: [
                    {
                        code: 'color',
                        label: 'Blue',
                        value_index: 0
                    }
                ],
                product: {
                    __typename: MagentoProductTypeEnum.SimpleProduct,
                    id: faker.random.number({ min: 1, max: 1000 }),
                    url_key: faker.random.alphaNumeric(16),
                    name: faker.random.word(),
                    sku: faker.random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    price_range: {
                        __typename: 'PriceRange',
                        maximum_price: {
                            __typename: 'ProductPrice',
                            regular_price: {
                                __typename: 'Money',
                                value: _this.priceVariant1,
                                currency: null
                            },
                            discount: {
                                __typename: 'ProductDiscount',
                                amount_off: _this.discountVariant1,
                                percent_off: _this.discountVariant1 / _this.priceVariant1
                            }
                        }
                    }
                }
            },
            {
                attributes: [
                    {
                        code: 'color',
                        label: 'Yellow',
                        value_index: 1
                    }
                ],
                product: {
                    __typename: MagentoProductTypeEnum.SimpleProduct,
                    id: faker.random.number({ min: 1, max: 1000 }),
                    url_key: faker.random.alphaNumeric(16),
                    name: faker.random.word(),
                    sku: faker.random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    price_range: {
                        __typename: 'PriceRange',
                        maximum_price: {
                            __typename: 'ProductPrice',
                            regular_price: {
                                __typename: 'Money',
                                value: _this.priceVariant2,
                                currency: null
                            },
                            discount: {
                                amount_off: _this.discountVariant2,
                                percent_off: _this.discountVariant2 / _this.priceVariant2
                            }
                        }
                    }
                }
            },
            {
                attributes: [
                    {
                        code: 'color',
                        label: 'Red',
                        value_index: 2
                    }
                ],
                product: {
                    __typename: MagentoProductTypeEnum.SimpleProduct,
                    id: faker.random.number({ min: 1, max: 1000 }),
                    url_key: faker.random.alphaNumeric(16),
                    name: faker.random.word(),
                    sku: faker.random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: faker.random.words(3),
                        url: faker.image.imageUrl()
                    },
                    price_range: {
                        __typename: 'PriceRange',
                        maximum_price: {
                            __typename: 'ProductPrice',
                            regular_price: {
                                __typename: 'Money',
                                value: _this.priceVariant3,
                                currency: null
                            },
                            discount: {
                                amount_off: _this.discountVariant3,
                                percent_off: _this.discountVariant3 / _this.priceVariant3
                            }
                        }
                    }
                }
            }
        ];
        return _this;
    }
    return MockMagentoConfigurableProduct;
}(MockMagentoCoreProduct));
export { MockMagentoConfigurableProduct };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.priceVariant1;
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.discountVariant1;
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.priceVariant2;
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.discountVariant2;
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.priceVariant3;
    /**
     * @type {?}
     * @private
     */
    MockMagentoConfigurableProduct.prototype.discountVariant3;
    /** @type {?} */
    MockMagentoConfigurableProduct.prototype.__typename;
    /** @type {?} */
    MockMagentoConfigurableProduct.prototype.configurable_options;
    /** @type {?} */
    MockMagentoConfigurableProduct.prototype.variants;
}
var MagentoConfigurableProductFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoConfigurableProductFactory, _super);
    function MagentoConfigurableProductFactory() {
        return _super.call(this, MockMagentoConfigurableProduct) || this;
    }
    MagentoConfigurableProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoConfigurableProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoConfigurableProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoConfigurableProductFactory_Factory() { return new MagentoConfigurableProductFactory(); }, token: MagentoConfigurableProductFactory, providedIn: "root" });
    return MagentoConfigurableProductFactory;
}(DaffModelFactory));
export { MagentoConfigurableProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vY29uZmlndXJhYmxlL2NvbmZpZ3VyYWJsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsc0JBQXNCLEVBQThCLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRWpFO0lBQW9ELDBEQUFzQjtJQUExRTtRQUFBLHFFQWtLQztRQWhLUSxtQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN6RCxzQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM5RSxtQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN6RCxzQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDLENBQUMs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QUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7cUJBQzNCO29CQUNELFdBQVcsRUFBRTt3QkFDWixVQUFVLEVBQUUsWUFBWTt3QkFDeEIsYUFBYSxFQUFFOzRCQUNkLFVBQVUsRUFBRSxjQUFjOzRCQUMxQixhQUFhLEVBQUU7Z0NBQ2QsVUFBVSxFQUFFLE9BQU87Z0NBQ25CLEtBQUssRUFBRSxLQUFJLENBQUMsYUFBYTtnQ0FDekIsUUFBUSxFQUFFLElBQUk7NkJBQ2Q7NEJBQ0QsUUFBUSxFQUFFO2dDQUNULFVBQVUsRUFBRSxLQUFJLENBQUMsZ0JBQWdCO2dDQUNqQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixHQUFDLEtBQUksQ0FBQyxhQUFhOzZCQUNyRDt5QkFDRDtxQkFDRDtpQkFDRDthQUNEO1NBQ0QsQ0FBQzs7SUFDSCxDQUFDO0lBQUQscUNBQUM7QUFBRCxDQUFDLEFBbEtELENBQW9ELHNCQUFzQixHQWtLekU7Ozs7Ozs7SUFoS0EsdURBQWlFOzs7OztJQUNqRSwwREFBc0Y7Ozs7O0lBQ3RGLHVEQUFpRTs7Ozs7SUFDakUsMERBQXNGOzs7OztJQUN0Rix1REFBaUU7Ozs7O0lBQ2pFLDBEQUFzRjs7SUFDckYsb0RBQXdEOztJQUN6RCw4REF1QkU7O0lBQ0Ysa0RBZ0lFOztBQUdIO0lBR3VELDZEQUE0QztJQUVqRztlQUNFLGtCQUFNLDhCQUE4QixDQUFDO0lBQ3ZDLENBQUM7O2dCQVBGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRDQWhMRDtDQXNMQyxBQVJELENBR3VELGdCQUFnQixHQUt0RTtTQUxZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3RUeXBlRW51bSwgTWFnZW50b0NvbmZpZ3VyYWJsZVByb2R1Y3QsIE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBNb2NrTWFnZW50b0NvcmVQcm9kdWN0IH0gZnJvbSAnLi4vY29yZS9wcm9kdWN0LmZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0IGV4dGVuZHMgTW9ja01hZ2VudG9Db3JlUHJvZHVjdCBpbXBsZW1lbnRzIE1hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0IHtcblxuXHRwcml2YXRlIHByaWNlVmFyaWFudDEgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuXHRwcml2YXRlIGRpc2NvdW50VmFyaWFudDEgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5wcmljZVZhcmlhbnQxIC0gMX0pO1xuXHRwcml2YXRlIHByaWNlVmFyaWFudDIgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuXHRwcml2YXRlIGRpc2NvdW50VmFyaWFudDIgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5wcmljZVZhcmlhbnQyIC0gMX0pO1xuXHRwcml2YXRlIHByaWNlVmFyaWFudDMgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuXHRwcml2YXRlIGRpc2NvdW50VmFyaWFudDMgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5wcmljZVZhcmlhbnQzIC0gMX0pO1xuICBfX3R5cGVuYW1lID0gTWFnZW50b1Byb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGVQcm9kdWN0O1xuXHRjb25maWd1cmFibGVfb3B0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRhdHRyaWJ1dGVfY29kZTogJ2NvbG9yJyxcblx0XHRcdGF0dHJpYnV0ZV9pZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMiksXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMiksXG5cdFx0XHRsYWJlbDogJ0NvbG9yJyxcblx0XHRcdHBvc2l0aW9uOiAwLFxuXHRcdFx0cHJvZHVjdF9pZDogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KSxcblx0XHRcdHZhbHVlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICdCbHVlJyxcblx0XHRcdFx0XHR2YWx1ZV9pbmRleDogMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICdZZWxsb3cnLFxuXHRcdFx0XHRcdHZhbHVlX2luZGV4OiAxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJ1JlZCcsXG5cdFx0XHRcdFx0dmFsdWVfaW5kZXg6IDJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XTtcblx0dmFyaWFudHMgPSBbXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29kZTogJ2NvbG9yJyxcblx0XHRcdFx0XHRsYWJlbDogJ0JsdWUnLFxuXHRcdFx0XHRcdHZhbHVlX2luZGV4OiAwXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRwcm9kdWN0OiB7XG5cdFx0XHRcdF9fdHlwZW5hbWU6IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uU2ltcGxlUHJvZHVjdCxcblx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSksXG5cdFx0XHRcdHVybF9rZXk6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRuYW1lOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0XHRza3U6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRzdG9ja19zdGF0dXM6IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtLkluU3RvY2ssXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0dGh1bWJuYWlsOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2VfcmFuZ2U6IHtcblx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJpY2VSYW5nZScsXG5cdFx0XHRcdFx0bWF4aW11bV9wcmljZToge1xuXHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RQcmljZScsXG5cdFx0XHRcdFx0XHRyZWd1bGFyX3ByaWNlOiB7XG5cdFx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdNb25leScsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByaWNlVmFyaWFudDEsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbmN5OiBudWxsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3REaXNjb3VudCcsXG5cdFx0XHRcdFx0XHRcdGFtb3VudF9vZmY6IHRoaXMuZGlzY291bnRWYXJpYW50MSxcblx0XHRcdFx0XHRcdFx0cGVyY2VudF9vZmY6IHRoaXMuZGlzY291bnRWYXJpYW50MS90aGlzLnByaWNlVmFyaWFudDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvZGU6ICdjb2xvcicsXG5cdFx0XHRcdFx0bGFiZWw6ICdZZWxsb3cnLFxuXHRcdFx0XHRcdHZhbHVlX2luZGV4OiAxXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRwcm9kdWN0OiB7XG5cdFx0XHRcdF9fdHlwZW5hbWU6IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uU2ltcGxlUHJvZHVjdCxcblx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSksXG5cdFx0XHRcdHVybF9rZXk6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRuYW1lOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0XHRza3U6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRzdG9ja19zdGF0dXM6IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtLkluU3RvY2ssXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0dGh1bWJuYWlsOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2VfcmFuZ2U6IHtcblx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJpY2VSYW5nZScsXG5cdFx0XHRcdFx0bWF4aW11bV9wcmljZToge1xuXHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RQcmljZScsXG5cdFx0XHRcdFx0XHRyZWd1bGFyX3ByaWNlOiB7XG5cdFx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdNb25leScsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByaWNlVmFyaWFudDIsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbmN5OiBudWxsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0XHRcdFx0YW1vdW50X29mZjogdGhpcy5kaXNjb3VudFZhcmlhbnQyLFxuXHRcdFx0XHRcdFx0XHRwZXJjZW50X29mZjogdGhpcy5kaXNjb3VudFZhcmlhbnQyL3RoaXMucHJpY2VWYXJpYW50MlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29kZTogJ2NvbG9yJyxcblx0XHRcdFx0XHRsYWJlbDogJ1JlZCcsXG5cdFx0XHRcdFx0dmFsdWVfaW5kZXg6IDJcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHByb2R1Y3Q6IHtcblx0XHRcdFx0X190eXBlbmFtZTogTWFnZW50b1Byb2R1Y3RUeXBlRW51bS5TaW1wbGVQcm9kdWN0LFxuXHRcdFx0XHRpZDogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KSxcblx0XHRcdFx0dXJsX2tleTogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRcdG5hbWU6IGZha2VyLnJhbmRvbS53b3JkKCksXG5cdFx0XHRcdHNrdTogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRcdHN0b2NrX3N0YXR1czogTWFnZW50b1Byb2R1Y3RTdG9ja1N0YXR1c0VudW0uSW5TdG9jayxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJvZHVjdEltYWdlJyxcblx0XHRcdFx0XHRsYWJlbDogZmFrZXIucmFuZG9tLndvcmRzKDMpLFxuXHRcdFx0XHRcdHVybDogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aHVtYm5haWw6IHtcblx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJvZHVjdEltYWdlJyxcblx0XHRcdFx0XHRsYWJlbDogZmFrZXIucmFuZG9tLndvcmRzKDMpLFxuXHRcdFx0XHRcdHVybDogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmljZV9yYW5nZToge1xuXHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcmljZVJhbmdlJyxcblx0XHRcdFx0XHRtYXhpbXVtX3ByaWNlOiB7XG5cdFx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJvZHVjdFByaWNlJyxcblx0XHRcdFx0XHRcdHJlZ3VsYXJfcHJpY2U6IHtcblx0XHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ01vbmV5Jyxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucHJpY2VWYXJpYW50Myxcblx0XHRcdFx0XHRcdFx0Y3VycmVuY3k6IG51bGxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRcdFx0XHRhbW91bnRfb2ZmOiB0aGlzLmRpc2NvdW50VmFyaWFudDMsXG5cdFx0XHRcdFx0XHRcdHBlcmNlbnRfb2ZmOiB0aGlzLmRpc2NvdW50VmFyaWFudDMvdGhpcy5wcmljZVZhcmlhbnQzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0PiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b0NvbmZpZ3VyYWJsZVByb2R1Y3QpO1xuICB9XG59XG4iXX0=