/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
import * as i0 from "@angular/core";
export class MockMagentoConfigurableProduct extends MockMagentoCoreProduct {
    constructor() {
        super(...arguments);
        this.priceVariant1 = faker.random.number({ min: 1, max: 1000 });
        this.discountVariant1 = faker.random.number({ min: 0, max: this.priceVariant1 - 1 });
        this.priceVariant2 = faker.random.number({ min: 1, max: 1000 });
        this.discountVariant2 = faker.random.number({ min: 0, max: this.priceVariant2 - 1 });
        this.priceVariant3 = faker.random.number({ min: 1, max: 1000 });
        this.discountVariant3 = faker.random.number({ min: 0, max: this.priceVariant3 - 1 });
        this.__typename = MagentoProductTypeEnum.ConfigurableProduct;
        this.configurable_options = [
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
        this.variants = [
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
                                value: this.priceVariant1,
                                currency: null
                            },
                            discount: {
                                __typename: 'ProductDiscount',
                                amount_off: this.discountVariant1,
                                percent_off: this.discountVariant1 / this.priceVariant1
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
                                value: this.priceVariant2,
                                currency: null
                            },
                            discount: {
                                amount_off: this.discountVariant2,
                                percent_off: this.discountVariant2 / this.priceVariant2
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
                                value: this.priceVariant3,
                                currency: null
                            },
                            discount: {
                                amount_off: this.discountVariant3,
                                percent_off: this.discountVariant3 / this.priceVariant3
                            }
                        }
                    }
                }
            }
        ];
    }
}
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
export class MagentoConfigurableProductFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoConfigurableProduct);
    }
}
MagentoConfigurableProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoConfigurableProductFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoConfigurableProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoConfigurableProductFactory_Factory() { return new MagentoConfigurableProductFactory(); }, token: MagentoConfigurableProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vY29uZmlndXJhYmxlL2NvbmZpZ3VyYWJsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixHQUNqQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFakUsTUFBTSxPQUFPLDhCQUErQixTQUFRLHNCQUFzQjtJQUExRTs7UUFFUyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM5RSxrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDLENB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RUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtxQkFDM0I7b0JBQ0QsV0FBVyxFQUFFO3dCQUNaLFVBQVUsRUFBRSxZQUFZO3dCQUN4QixhQUFhLEVBQUU7NEJBQ2QsVUFBVSxFQUFFLGNBQWM7NEJBQzFCLGFBQWEsRUFBRTtnQ0FDZCxVQUFVLEVBQUUsT0FBTztnQ0FDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO2dDQUN6QixRQUFRLEVBQUUsSUFBSTs2QkFDZDs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0NBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLGFBQWE7NkJBQ3JEO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUFBOzs7Ozs7SUFoS0EsdURBQWlFOzs7OztJQUNqRSwwREFBc0Y7Ozs7O0lBQ3RGLHVEQUFpRTs7Ozs7SUFDakUsMERBQXNGOzs7OztJQUN0Rix1REFBaUU7Ozs7O0lBQ2pFLDBEQUFzRjs7SUFDckYsb0RBQXdEOztJQUN6RCw4REF1QkU7O0lBQ0Ysa0RBZ0lFOztBQU1ILE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxnQkFBNEM7SUFFakc7UUFDRSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQge1xuICBEYWZmTW9kZWxGYWN0b3J5LFxufSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0sIE1hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0LCBNYWdlbnRvUHJvZHVjdFN0b2NrU3RhdHVzRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgTW9ja01hZ2VudG9Db3JlUHJvZHVjdCB9IGZyb20gJy4uL2NvcmUvcHJvZHVjdC5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdCBleHRlbmRzIE1vY2tNYWdlbnRvQ29yZVByb2R1Y3QgaW1wbGVtZW50cyBNYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdCB7XG5cblx0cHJpdmF0ZSBwcmljZVZhcmlhbnQxID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcblx0cHJpdmF0ZSBkaXNjb3VudFZhcmlhbnQxID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAwLCBtYXg6IHRoaXMucHJpY2VWYXJpYW50MSAtIDF9KTtcblx0cHJpdmF0ZSBwcmljZVZhcmlhbnQyID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcblx0cHJpdmF0ZSBkaXNjb3VudFZhcmlhbnQyID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAwLCBtYXg6IHRoaXMucHJpY2VWYXJpYW50MiAtIDF9KTtcblx0cHJpdmF0ZSBwcmljZVZhcmlhbnQzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcblx0cHJpdmF0ZSBkaXNjb3VudFZhcmlhbnQzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAwLCBtYXg6IHRoaXMucHJpY2VWYXJpYW50MyAtIDF9KTtcbiAgX190eXBlbmFtZSA9IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uQ29uZmlndXJhYmxlUHJvZHVjdDtcblx0Y29uZmlndXJhYmxlX29wdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlX2NvZGU6ICdjb2xvcicsXG5cdFx0XHRhdHRyaWJ1dGVfaWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTIpLFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTIpLFxuXHRcdFx0bGFiZWw6ICdDb2xvcicsXG5cdFx0XHRwb3NpdGlvbjogMCxcblx0XHRcdHByb2R1Y3RfaWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSksXG5cdFx0XHR2YWx1ZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAnQmx1ZScsXG5cdFx0XHRcdFx0dmFsdWVfaW5kZXg6IDBcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAnWWVsbG93Jyxcblx0XHRcdFx0XHR2YWx1ZV9pbmRleDogMVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICdSZWQnLFxuXHRcdFx0XHRcdHZhbHVlX2luZGV4OiAyXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF07XG5cdHZhcmlhbnRzID0gW1xuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvZGU6ICdjb2xvcicsXG5cdFx0XHRcdFx0bGFiZWw6ICdCbHVlJyxcblx0XHRcdFx0XHR2YWx1ZV9pbmRleDogMFxuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRfX3R5cGVuYW1lOiBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLlNpbXBsZVByb2R1Y3QsXG5cdFx0XHRcdGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pLFxuXHRcdFx0XHR1cmxfa2V5OiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdFx0bmFtZTogZmFrZXIucmFuZG9tLndvcmQoKSxcblx0XHRcdFx0c2t1OiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdFx0c3RvY2tfc3RhdHVzOiBNYWdlbnRvUHJvZHVjdFN0b2NrU3RhdHVzRW51bS5JblN0b2NrLFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuXHRcdFx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG5cdFx0XHRcdFx0dXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRodW1ibmFpbDoge1xuXHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuXHRcdFx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG5cdFx0XHRcdFx0dXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaWNlX3JhbmdlOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1ByaWNlUmFuZ2UnLFxuXHRcdFx0XHRcdG1heGltdW1fcHJpY2U6IHtcblx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0UHJpY2UnLFxuXHRcdFx0XHRcdFx0cmVndWxhcl9wcmljZToge1xuXHRcdFx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnTW9uZXknLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcmljZVZhcmlhbnQxLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeTogbnVsbFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0RGlzY291bnQnLFxuXHRcdFx0XHRcdFx0XHRhbW91bnRfb2ZmOiB0aGlzLmRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdFx0XHRcdHBlcmNlbnRfb2ZmOiB0aGlzLmRpc2NvdW50VmFyaWFudDEvdGhpcy5wcmljZVZhcmlhbnQxXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhdHRyaWJ1dGVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb2RlOiAnY29sb3InLFxuXHRcdFx0XHRcdGxhYmVsOiAnWWVsbG93Jyxcblx0XHRcdFx0XHR2YWx1ZV9pbmRleDogMVxuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRfX3R5cGVuYW1lOiBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLlNpbXBsZVByb2R1Y3QsXG5cdFx0XHRcdGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pLFxuXHRcdFx0XHR1cmxfa2V5OiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdFx0bmFtZTogZmFrZXIucmFuZG9tLndvcmQoKSxcblx0XHRcdFx0c2t1OiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdFx0c3RvY2tfc3RhdHVzOiBNYWdlbnRvUHJvZHVjdFN0b2NrU3RhdHVzRW51bS5JblN0b2NrLFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuXHRcdFx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG5cdFx0XHRcdFx0dXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRodW1ibmFpbDoge1xuXHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0SW1hZ2UnLFxuXHRcdFx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZHMoMyksXG5cdFx0XHRcdFx0dXJsOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaWNlX3JhbmdlOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1ByaWNlUmFuZ2UnLFxuXHRcdFx0XHRcdG1heGltdW1fcHJpY2U6IHtcblx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdQcm9kdWN0UHJpY2UnLFxuXHRcdFx0XHRcdFx0cmVndWxhcl9wcmljZToge1xuXHRcdFx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnTW9uZXknLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wcmljZVZhcmlhbnQyLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeTogbnVsbFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRcdGFtb3VudF9vZmY6IHRoaXMuZGlzY291bnRWYXJpYW50Mixcblx0XHRcdFx0XHRcdFx0cGVyY2VudF9vZmY6IHRoaXMuZGlzY291bnRWYXJpYW50Mi90aGlzLnByaWNlVmFyaWFudDJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvZGU6ICdjb2xvcicsXG5cdFx0XHRcdFx0bGFiZWw6ICdSZWQnLFxuXHRcdFx0XHRcdHZhbHVlX2luZGV4OiAyXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRwcm9kdWN0OiB7XG5cdFx0XHRcdF9fdHlwZW5hbWU6IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uU2ltcGxlUHJvZHVjdCxcblx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSksXG5cdFx0XHRcdHVybF9rZXk6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRuYW1lOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0XHRza3U6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0XHRzdG9ja19zdGF0dXM6IE1hZ2VudG9Qcm9kdWN0U3RvY2tTdGF0dXNFbnVtLkluU3RvY2ssXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0dGh1bWJuYWlsOiB7XG5cdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RJbWFnZScsXG5cdFx0XHRcdFx0bGFiZWw6IGZha2VyLnJhbmRvbS53b3JkcygzKSxcblx0XHRcdFx0XHR1cmw6IGZha2VyLmltYWdlLmltYWdlVXJsKClcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2VfcmFuZ2U6IHtcblx0XHRcdFx0XHRfX3R5cGVuYW1lOiAnUHJpY2VSYW5nZScsXG5cdFx0XHRcdFx0bWF4aW11bV9wcmljZToge1xuXHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ1Byb2R1Y3RQcmljZScsXG5cdFx0XHRcdFx0XHRyZWd1bGFyX3ByaWNlOiB7XG5cdFx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdNb25leScsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnByaWNlVmFyaWFudDMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbmN5OiBudWxsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0XHRcdFx0YW1vdW50X29mZjogdGhpcy5kaXNjb3VudFZhcmlhbnQzLFxuXHRcdFx0XHRcdFx0XHRwZXJjZW50X29mZjogdGhpcy5kaXNjb3VudFZhcmlhbnQzL3RoaXMucHJpY2VWYXJpYW50M1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0NvbmZpZ3VyYWJsZVByb2R1Y3RGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9Db25maWd1cmFibGVQcm9kdWN0KTtcbiAgfVxufVxuIl19