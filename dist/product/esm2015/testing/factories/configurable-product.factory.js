/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * Mocked DaffConfigurableProduct object.
 */
export class MockConfigurableProduct {
    constructor() {
        this.stubPriceVariant1 = faker.random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant1 = faker.random.number({ min: 0, max: this.stubPriceVariant1 - 1 });
        this.stubPriceVariant2 = faker.random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant2 = faker.random.number({ min: 0, max: this.stubPriceVariant2 - 1 });
        this.stubPriceVariant3 = faker.random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant3 = faker.random.number({ min: 0, max: this.stubPriceVariant3 - 1 });
        this.type = DaffProductTypeEnum.Configurable;
        this.id = faker.random.number({ min: 1, max: 10000 }).toString();
        this.url = faker.random.alphaNumeric(16);
        this.price = faker.random.number({ min: 1, max: 1500 });
        this.images = [];
        this.name = faker.commerce.productName();
        this.brand = faker.company.companyName();
        this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
        this.in_stock = true;
        this.configurableAttributes = [
            {
                code: 'color',
                label: 'Color',
                order: 0,
                values: [
                    {
                        value: '0',
                        label: 'Blue',
                        swatch: {
                            value: '#0000FF',
                            thumbnail: null
                        }
                    },
                    {
                        value: '1',
                        label: 'Yellow',
                        swatch: {
                            value: '#FFFF00',
                            thumbnail: null
                        }
                    },
                    {
                        value: '2',
                        label: 'Red',
                        swatch: {
                            value: '#FF0000',
                            thumbnail: null
                        }
                    }
                ]
            },
            {
                code: 'size',
                label: 'Size',
                order: 1,
                values: [
                    {
                        value: '0',
                        label: 'Small',
                        swatch: null
                    },
                    {
                        value: '1',
                        label: 'Medium',
                        swatch: null
                    },
                    {
                        value: '2',
                        label: 'Large',
                        swatch: null
                    }
                ]
            },
            {
                code: 'material',
                label: 'Material',
                order: 2,
                values: [
                    {
                        value: '0',
                        label: 'Cotton',
                        swatch: null
                    },
                    {
                        value: '1',
                        label: 'Polyester',
                        swatch: null
                    },
                    {
                        value: '2',
                        label: 'Spandex',
                        swatch: null
                    }
                ]
            }
        ];
        this.variants = [
            {
                appliedAttributes: {
                    color: '0',
                    size: '0',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '0',
                    size: '1',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '0',
                    size: '1',
                    material: '2'
                },
                price: this.stubPriceVariant3,
                discount: {
                    amount: this.stubDiscountVariant3,
                    percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '0',
                    size: '2',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '1',
                    size: '0',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '1',
                    size: '0',
                    material: '2'
                },
                price: this.stubPriceVariant3,
                discount: {
                    amount: this.stubDiscountVariant3,
                    percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '1',
                    size: '2',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '1',
                    size: '2',
                    material: '1'
                },
                price: this.stubPriceVariant2,
                discount: {
                    amount: this.stubDiscountVariant2,
                    percent: Math.floor((this.stubDiscountVariant2 / this.stubPriceVariant2) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '2',
                    size: '0',
                    material: '0'
                },
                price: this.stubPriceVariant3,
                discount: {
                    amount: this.stubDiscountVariant3,
                    percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            },
            {
                appliedAttributes: {
                    color: '2',
                    size: '2',
                    material: '0'
                },
                price: this.stubPriceVariant1,
                discount: {
                    amount: this.stubDiscountVariant1,
                    percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                },
                id: faker.random.alphaNumeric(16),
                in_stock: true
            }
        ];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubPriceVariant1;
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubDiscountVariant1;
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubPriceVariant2;
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubDiscountVariant2;
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubPriceVariant3;
    /**
     * @type {?}
     * @private
     */
    MockConfigurableProduct.prototype.stubDiscountVariant3;
    /** @type {?} */
    MockConfigurableProduct.prototype.type;
    /** @type {?} */
    MockConfigurableProduct.prototype.id;
    /** @type {?} */
    MockConfigurableProduct.prototype.url;
    /** @type {?} */
    MockConfigurableProduct.prototype.price;
    /** @type {?} */
    MockConfigurableProduct.prototype.images;
    /** @type {?} */
    MockConfigurableProduct.prototype.name;
    /** @type {?} */
    MockConfigurableProduct.prototype.brand;
    /** @type {?} */
    MockConfigurableProduct.prototype.description;
    /** @type {?} */
    MockConfigurableProduct.prototype.in_stock;
    /** @type {?} */
    MockConfigurableProduct.prototype.configurableAttributes;
    /** @type {?} */
    MockConfigurableProduct.prototype.variants;
}
/**
 * Factory for creating DaffConfigurableProducts.
 */
export class DaffConfigurableProductFactory extends DaffModelFactory {
    constructor() {
        super(MockConfigurableProduct);
    }
}
DaffConfigurableProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffConfigurableProductFactory.ctorParameters = () => [];
/** @nocollapse */ DaffConfigurableProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFactory_Factory() { return new DaffConfigurableProductFactory(); }, token: DaffConfigurableProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBMkIsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFLMUQsTUFBTSxPQUFPLHVCQUF1QjtJQUFwQztRQUNTLHNCQUFpQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RCx5QkFBb0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLHNCQUFpQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RCx5QkFBb0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLHNCQUFpQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RCx5QkFBb0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRTlGLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLENBQUM7UUFDeEMsT0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxRCxRQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsVUFBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsZ0JBQVcsR0FBRyw0VEFBNFQsQ0FBQTtRQUMxVSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJCQUFzQixHQUFHO1lBQ3hCO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRTtvQkFDUDt3QkFDQyxLQUFLLEVBQUUsR0FBRzt3QkFDVixLQUFLLEVBQUUsTUFBTTt3QkFDYixNQUFNLEVBQUU7NEJBQ1AsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFNBQVMsRUFBRSxJQUFJO3lCQUNmO3FCQUNEO29CQUNEO3dCQUNDLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLE1BQU0sRUFBRTs0QkFDUCxLQUFLLEVBQUUsU0FBUzs0QkFDaEIsU0FBUyxFQUFFLElBQUk7eUJBQ2Y7cUJBQ0Q7b0JBQ0Q7d0JBQ0MsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsS0FBSyxFQUFFLEtBQUs7d0JBQ1osTUFBTSxFQUFFOzRCQUNQLEtBQUssRUFBRSxTQUFTOzRCQUNoQixTQUFTLEVBQUUsSUFBSTt5QkFDZjtxQkFDRDtpQkFDRDthQUNEO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFO29CQUNQO3dCQUNDLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxPQUFPO3dCQUNkLE1BQU0sRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNDLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxRQUFRO3dCQUNmLE1BQU0sRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNDLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxPQUFPO3dCQUNkLE1BQU0sRUFBRSxJQUFJO3FCQUNaO2lCQUNEO2FBQ0Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRTtvQkFDUDt3QkFDQyxLQUFLLEVBQUUsR0FBRzt3QkFDVixLQUFLLEVBQUUsUUFBUTt3QkFDZixNQUFNLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDQyxLQUFLLEVBQUUsR0FBRzt3QkFDVixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsTUFBTSxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0MsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE1BQU0sRUFBRSxJQUFJO3FCQUNaO2lCQUNEO2FBQ0Q7U0FDRCxDQUFDO1FBQ0YsYUFBUSxHQUFHO1lBQ1Y7Z0JBQ0MsaUJBQWlCLEVBQUU7b0JBQ2xCLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO29CQUNULFFBQVEsRUFBRSxHQUFHO2lCQUNiO2dCQUNELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixRQUFRLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDN0U7Z0JBQ0QsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsUUFBUSxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNDLGlCQUFpQixFQUFFO29CQUNsQixLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsR0FBRztvQkFDVCxRQUFRLEVBQUUsR0FBRztpQkFDYjtnQkFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsUUFBUSxFQUFFO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsb0JBQW9CO29CQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQzdFO2dCQUNELEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDQyxpQkFBaUIsRUFBRTtvQkFDbEIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsUUFBUSxFQUFFLEdBQUc7aUJBQ2I7Z0JBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzdCLFFBQVEsRUFBRTtvQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtvQkFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUM3RTtnQkFDRCxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxRQUFRLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0MsaUJBQWlCLEVBQUU7b0JBQ2xCLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO29CQUNULFFBQVEsRUFBRSxHQUFHO2lCQUNiO2dCQUNELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixRQUFRLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDN0U7Z0JBQ0QsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsUUFBUSxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNDLGlCQUFpQixFQUFFO29CQUNsQixLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsR0FBRztvQkFDVCxRQUFRLEVBQUUsR0FBRztpQkFDYjtnQkFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsUUFBUSxFQUFFO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsb0JBQW9CO29CQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQzdFO2dCQUNELEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDQyxpQkFBaUIsRUFBRTtvQkFDbEIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsUUFBUSxFQUFFLEdBQUc7aUJBQ2I7Z0JBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzdCLFFBQVEsRUFBRTtvQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtvQkFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUM3RTtnQkFDRCxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxRQUFRLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0MsaUJBQWlCLEVBQUU7b0JBQ2xCLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO29CQUNULFFBQVEsRUFBRSxHQUFHO2lCQUNiO2dCQUNELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixRQUFRLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDN0U7Z0JBQ0QsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsUUFBUSxFQUFFLElBQUk7YUFDZDtZQUNEO2dCQUNDLGlCQUFpQixFQUFFO29CQUNsQixLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsR0FBRztvQkFDVCxRQUFRLEVBQUUsR0FBRztpQkFDYjtnQkFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsUUFBUSxFQUFFO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsb0JBQW9CO29CQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQzdFO2dCQUNELEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDQyxpQkFBaUIsRUFBRTtvQkFDbEIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsUUFBUSxFQUFFLEdBQUc7aUJBQ2I7Z0JBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzdCLFFBQVEsRUFBRTtvQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtvQkFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUM3RTtnQkFDRCxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxRQUFRLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0MsaUJBQWlCLEVBQUU7b0JBQ2xCLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO29CQUNULFFBQVEsRUFBRSxHQUFHO2lCQUNiO2dCQUNELEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM3QixRQUFRLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDN0U7Z0JBQ0QsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsUUFBUSxFQUFFLElBQUk7YUFDZDtTQUNELENBQUE7SUFDRixDQUFDO0NBQUE7Ozs7OztJQTNPQSxvREFBcUU7Ozs7O0lBQ3JFLHVEQUE4Rjs7Ozs7SUFDOUYsb0RBQXFFOzs7OztJQUNyRSx1REFBOEY7Ozs7O0lBQzlGLG9EQUFxRTs7Ozs7SUFDckUsdURBQThGOztJQUU5Rix1Q0FBd0M7O0lBQ3hDLHFDQUEwRDs7SUFDMUQsc0NBQW9DOztJQUNwQyx3Q0FBaUQ7O0lBQ2pELHlDQUFZOztJQUNYLHVDQUFvQzs7SUFDcEMsd0NBQW9DOztJQUNyQyw4Q0FBMFU7O0lBQzFVLDJDQUFnQjs7SUFDaEIseURBNEVFOztJQUNGLDJDQTZJQzs7Ozs7QUFTRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsZ0JBQXlDO0lBQzNGO1FBQ0UsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIE1vY2tlZCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrQ29uZmlndXJhYmxlUHJvZHVjdCBpbXBsZW1lbnRzIERhZmZDb25maWd1cmFibGVQcm9kdWN0IHtcblx0cHJpdmF0ZSBzdHViUHJpY2VWYXJpYW50MSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG5cdHByaXZhdGUgc3R1YkRpc2NvdW50VmFyaWFudDEgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5zdHViUHJpY2VWYXJpYW50MSAtIDF9KTtcblx0cHJpdmF0ZSBzdHViUHJpY2VWYXJpYW50MiA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG5cdHByaXZhdGUgc3R1YkRpc2NvdW50VmFyaWFudDIgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5zdHViUHJpY2VWYXJpYW50MiAtIDF9KTtcblx0cHJpdmF0ZSBzdHViUHJpY2VWYXJpYW50MyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG5cdHByaXZhdGUgc3R1YkRpc2NvdW50VmFyaWFudDMgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5zdHViUHJpY2VWYXJpYW50MyAtIDF9KTtcblxuXHR0eXBlID0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db25maWd1cmFibGU7XG5cdGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDAwfSkudG9TdHJpbmcoKTtcblx0dXJsID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG5cdHByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcblx0aW1hZ2VzID0gW107XG4gIG5hbWUgPSBmYWtlci5jb21tZXJjZS5wcm9kdWN0TmFtZSgpO1xuICBicmFuZCA9IGZha2VyLmNvbXBhbnkuY29tcGFueU5hbWUoKTtcblx0ZGVzY3JpcHRpb24gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGFjY3Vtc2FuIHVsbGFtY29ycGVyIGVpIGVhbS4gU2ludCBhcHBldGVyZSBvY3VycmVyZXQgbm8gcGVyLCBldCBjdW0gbG9yZW0gZGlzcHV0YXRpb25pLiBTaXQgdXQgbWFnbmEgZGVsZW5pdCwgYXNzdW0gdmlkaXNzZSB2b2NpYnVzIHNlZCB1dC4gSW4gYXBlcmlyaSBtYWxvcnVtIGFjY3VzYW11cyBzZWEsIG5vdnVtIG1lZGlvY3JpdGF0ZW0gaXVzIGF0LiBEdW8gYWdhbSBwcm9ibyBob25lc3RhdGlzIHV0LiBOZWMgcmVnaW9uZSBzcGxlbmRpZGUgY3UsIHVudW0gZ3JhZWNvIHZpdmVuZHVtIGluIGR1by4nXG5cdGluX3N0b2NrID0gdHJ1ZTtcblx0Y29uZmlndXJhYmxlQXR0cmlidXRlcyA9IFtcblx0XHR7XG5cdFx0XHRjb2RlOiAnY29sb3InLFxuXHRcdFx0bGFiZWw6ICdDb2xvcicsXG5cdFx0XHRvcmRlcjogMCxcblx0XHRcdHZhbHVlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcwJyxcblx0XHRcdFx0XHRsYWJlbDogJ0JsdWUnLFxuXHRcdFx0XHRcdHN3YXRjaDoge1xuXHRcdFx0XHRcdFx0dmFsdWU6ICcjMDAwMEZGJyxcblx0XHRcdFx0XHRcdHRodW1ibmFpbDogbnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMScsXG5cdFx0XHRcdFx0bGFiZWw6ICdZZWxsb3cnLFxuXHRcdFx0XHRcdHN3YXRjaDoge1xuXHRcdFx0XHRcdFx0dmFsdWU6ICcjRkZGRjAwJyxcblx0XHRcdFx0XHRcdHRodW1ibmFpbDogbnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMicsXG5cdFx0XHRcdFx0bGFiZWw6ICdSZWQnLFxuXHRcdFx0XHRcdHN3YXRjaDoge1xuXHRcdFx0XHRcdFx0dmFsdWU6ICcjRkYwMDAwJyxcblx0XHRcdFx0XHRcdHRodW1ibmFpbDogbnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0Y29kZTogJ3NpemUnLFxuXHRcdFx0bGFiZWw6ICdTaXplJyxcblx0XHRcdG9yZGVyOiAxLFxuXHRcdFx0dmFsdWVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzAnLFxuXHRcdFx0XHRcdGxhYmVsOiAnU21hbGwnLFxuXHRcdFx0XHRcdHN3YXRjaDogbnVsbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcxJyxcblx0XHRcdFx0XHRsYWJlbDogJ01lZGl1bScsXG5cdFx0XHRcdFx0c3dhdGNoOiBudWxsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzInLFxuXHRcdFx0XHRcdGxhYmVsOiAnTGFyZ2UnLFxuXHRcdFx0XHRcdHN3YXRjaDogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb2RlOiAnbWF0ZXJpYWwnLFxuXHRcdFx0bGFiZWw6ICdNYXRlcmlhbCcsXG5cdFx0XHRvcmRlcjogMixcblx0XHRcdHZhbHVlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcwJyxcblx0XHRcdFx0XHRsYWJlbDogJ0NvdHRvbicsXG5cdFx0XHRcdFx0c3dhdGNoOiBudWxsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzEnLFxuXHRcdFx0XHRcdGxhYmVsOiAnUG9seWVzdGVyJyxcblx0XHRcdFx0XHRzd2F0Y2g6IG51bGxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMicsXG5cdFx0XHRcdFx0bGFiZWw6ICdTcGFuZGV4Jyxcblx0XHRcdFx0XHRzd2F0Y2g6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XTtcblx0dmFyaWFudHMgPSBbXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcwJyxcblx0XHRcdFx0c2l6ZTogJzAnLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMCcsXG5cdFx0XHRcdHNpemU6ICcxJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcwJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQxLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQxLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQxL3RoaXMuc3R1YlByaWNlVmFyaWFudDEpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzAnLFxuXHRcdFx0XHRzaXplOiAnMScsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMidcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50Myxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50Myxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50My90aGlzLnN0dWJQcmljZVZhcmlhbnQzKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcwJyxcblx0XHRcdFx0c2l6ZTogJzInLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMScsXG5cdFx0XHRcdHNpemU6ICcwJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcwJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQxLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQxLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQxL3RoaXMuc3R1YlByaWNlVmFyaWFudDEpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzEnLFxuXHRcdFx0XHRzaXplOiAnMCcsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMidcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50Myxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50Myxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50My90aGlzLnN0dWJQcmljZVZhcmlhbnQzKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcxJyxcblx0XHRcdFx0c2l6ZTogJzInLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMScsXG5cdFx0XHRcdHNpemU6ICcyJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcxJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQyLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQyLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQyL3RoaXMuc3R1YlByaWNlVmFyaWFudDIpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzInLFxuXHRcdFx0XHRzaXplOiAnMCcsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMCdcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50Myxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50Myxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50My90aGlzLnN0dWJQcmljZVZhcmlhbnQzKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcyJyxcblx0XHRcdFx0c2l6ZTogJzInLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9XG5cdF1cbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZvciBjcmVhdGluZyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Q+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tDb25maWd1cmFibGVQcm9kdWN0KTtcbiAgfVxufVxuIl19