/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * Mocked DaffConfigurableProduct object.
 */
var /**
 * Mocked DaffConfigurableProduct object.
 */
MockConfigurableProduct = /** @class */ (function () {
    function MockConfigurableProduct() {
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
    return MockConfigurableProduct;
}());
/**
 * Mocked DaffConfigurableProduct object.
 */
export { MockConfigurableProduct };
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
var DaffConfigurableProductFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffConfigurableProductFactory, _super);
    function DaffConfigurableProductFactory() {
        return _super.call(this, MockConfigurableProduct) || this;
    }
    DaffConfigurableProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffConfigurableProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFactory_Factory() { return new DaffConfigurableProductFactory(); }, token: DaffConfigurableProductFactory, providedIn: "root" });
    return DaffConfigurableProductFactory;
}(DaffModelFactory));
export { DaffConfigurableProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQTJCLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFEOzs7O0lBQUE7UUFDUyxzQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDN0QseUJBQW9CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN0RixzQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDN0QseUJBQW9CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN0RixzQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUs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LENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7U0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQTVPRCxJQTRPQzs7Ozs7Ozs7OztJQTNPQSxvREFBcUU7Ozs7O0lBQ3JFLHVEQUE4Rjs7Ozs7SUFDOUYsb0RBQXFFOzs7OztJQUNyRSx1REFBOEY7Ozs7O0lBQzlGLG9EQUFxRTs7Ozs7SUFDckUsdURBQThGOztJQUU5Rix1Q0FBd0M7O0lBQ3hDLHFDQUEwRDs7SUFDMUQsc0NBQW9DOztJQUNwQyx3Q0FBaUQ7O0lBQ2pELHlDQUFZOztJQUNYLHVDQUFvQzs7SUFDcEMsd0NBQW9DOztJQUNyQyw4Q0FBMFU7O0lBQzFVLDJDQUFnQjs7SUFDaEIseURBNEVFOztJQUNGLDJDQTZJQzs7Ozs7QUFNRjtJQUdvRCwwREFBeUM7SUFDM0Y7ZUFDRSxrQkFBTSx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5Q0EzUEQ7Q0FnUUMsQUFQRCxDQUdvRCxnQkFBZ0IsR0FJbkU7U0FKWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IHsgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0gfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogTW9ja2VkIERhZmZDb25maWd1cmFibGVQcm9kdWN0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tDb25maWd1cmFibGVQcm9kdWN0IGltcGxlbWVudHMgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Qge1xuXHRwcml2YXRlIHN0dWJQcmljZVZhcmlhbnQxID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcblx0cHJpdmF0ZSBzdHViRGlzY291bnRWYXJpYW50MSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMCwgbWF4OiB0aGlzLnN0dWJQcmljZVZhcmlhbnQxIC0gMX0pO1xuXHRwcml2YXRlIHN0dWJQcmljZVZhcmlhbnQyID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcblx0cHJpdmF0ZSBzdHViRGlzY291bnRWYXJpYW50MiA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMCwgbWF4OiB0aGlzLnN0dWJQcmljZVZhcmlhbnQyIC0gMX0pO1xuXHRwcml2YXRlIHN0dWJQcmljZVZhcmlhbnQzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcblx0cHJpdmF0ZSBzdHViRGlzY291bnRWYXJpYW50MyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMCwgbWF4OiB0aGlzLnN0dWJQcmljZVZhcmlhbnQzIC0gMX0pO1xuXG5cdHR5cGUgPSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZTtcblx0aWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMDB9KS50b1N0cmluZygpO1xuXHR1cmwgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KTtcblx0cHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTUwMH0pO1xuXHRpbWFnZXMgPSBbXTtcbiAgbmFtZSA9IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCk7XG4gIGJyYW5kID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpO1xuXHRkZXNjcmlwdGlvbiA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgYWNjdW1zYW4gdWxsYW1jb3JwZXIgZWkgZWFtLiBTaW50IGFwcGV0ZXJlIG9jdXJyZXJldCBubyBwZXIsIGV0IGN1bSBsb3JlbSBkaXNwdXRhdGlvbmkuIFNpdCB1dCBtYWduYSBkZWxlbml0LCBhc3N1bSB2aWRpc3NlIHZvY2lidXMgc2VkIHV0LiBJbiBhcGVyaXJpIG1hbG9ydW0gYWNjdXNhbXVzIHNlYSwgbm92dW0gbWVkaW9jcml0YXRlbSBpdXMgYXQuIER1byBhZ2FtIHByb2JvIGhvbmVzdGF0aXMgdXQuIE5lYyByZWdpb25lIHNwbGVuZGlkZSBjdSwgdW51bSBncmFlY28gdml2ZW5kdW0gaW4gZHVvLidcblx0aW5fc3RvY2sgPSB0cnVlO1xuXHRjb25maWd1cmFibGVBdHRyaWJ1dGVzID0gW1xuXHRcdHtcblx0XHRcdGNvZGU6ICdjb2xvcicsXG5cdFx0XHRsYWJlbDogJ0NvbG9yJyxcblx0XHRcdG9yZGVyOiAwLFxuXHRcdFx0dmFsdWVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzAnLFxuXHRcdFx0XHRcdGxhYmVsOiAnQmx1ZScsXG5cdFx0XHRcdFx0c3dhdGNoOiB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJyMwMDAwRkYnLFxuXHRcdFx0XHRcdFx0dGh1bWJuYWlsOiBudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcxJyxcblx0XHRcdFx0XHRsYWJlbDogJ1llbGxvdycsXG5cdFx0XHRcdFx0c3dhdGNoOiB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJyNGRkZGMDAnLFxuXHRcdFx0XHRcdFx0dGh1bWJuYWlsOiBudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcyJyxcblx0XHRcdFx0XHRsYWJlbDogJ1JlZCcsXG5cdFx0XHRcdFx0c3dhdGNoOiB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJyNGRjAwMDAnLFxuXHRcdFx0XHRcdFx0dGh1bWJuYWlsOiBudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb2RlOiAnc2l6ZScsXG5cdFx0XHRsYWJlbDogJ1NpemUnLFxuXHRcdFx0b3JkZXI6IDEsXG5cdFx0XHR2YWx1ZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMCcsXG5cdFx0XHRcdFx0bGFiZWw6ICdTbWFsbCcsXG5cdFx0XHRcdFx0c3dhdGNoOiBudWxsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzEnLFxuXHRcdFx0XHRcdGxhYmVsOiAnTWVkaXVtJyxcblx0XHRcdFx0XHRzd2F0Y2g6IG51bGxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMicsXG5cdFx0XHRcdFx0bGFiZWw6ICdMYXJnZScsXG5cdFx0XHRcdFx0c3dhdGNoOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGNvZGU6ICdtYXRlcmlhbCcsXG5cdFx0XHRsYWJlbDogJ01hdGVyaWFsJyxcblx0XHRcdG9yZGVyOiAyLFxuXHRcdFx0dmFsdWVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJzAnLFxuXHRcdFx0XHRcdGxhYmVsOiAnQ290dG9uJyxcblx0XHRcdFx0XHRzd2F0Y2g6IG51bGxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnMScsXG5cdFx0XHRcdFx0bGFiZWw6ICdQb2x5ZXN0ZXInLFxuXHRcdFx0XHRcdHN3YXRjaDogbnVsbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICcyJyxcblx0XHRcdFx0XHRsYWJlbDogJ1NwYW5kZXgnLFxuXHRcdFx0XHRcdHN3YXRjaDogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRdO1xuXHR2YXJpYW50cyA9IFtcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzAnLFxuXHRcdFx0XHRzaXplOiAnMCcsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMCdcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50MSxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50MSxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50MS90aGlzLnN0dWJQcmljZVZhcmlhbnQxKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcwJyxcblx0XHRcdFx0c2l6ZTogJzEnLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMCcsXG5cdFx0XHRcdHNpemU6ICcxJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcyJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQzLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzL3RoaXMuc3R1YlByaWNlVmFyaWFudDMpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzAnLFxuXHRcdFx0XHRzaXplOiAnMicsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMCdcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50MSxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50MSxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50MS90aGlzLnN0dWJQcmljZVZhcmlhbnQxKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcxJyxcblx0XHRcdFx0c2l6ZTogJzAnLFxuXHRcdFx0XHRtYXRlcmlhbDogJzAnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDEsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDEvdGhpcy5zdHViUHJpY2VWYXJpYW50MSkgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMScsXG5cdFx0XHRcdHNpemU6ICcwJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcyJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQzLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzL3RoaXMuc3R1YlByaWNlVmFyaWFudDMpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzEnLFxuXHRcdFx0XHRzaXplOiAnMicsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMCdcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50MSxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50MSxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50MS90aGlzLnN0dWJQcmljZVZhcmlhbnQxKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXBwbGllZEF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29sb3I6ICcxJyxcblx0XHRcdFx0c2l6ZTogJzInLFxuXHRcdFx0XHRtYXRlcmlhbDogJzEnXG5cdFx0XHR9LFxuXHRcdFx0cHJpY2U6IHRoaXMuc3R1YlByaWNlVmFyaWFudDIsXG5cdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDIsXG5cdFx0XHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50VmFyaWFudDIvdGhpcy5zdHViUHJpY2VWYXJpYW50MikgKiAxMDApXG5cdFx0XHR9LFxuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpLFxuXHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdGFwcGxpZWRBdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbG9yOiAnMicsXG5cdFx0XHRcdHNpemU6ICcwJyxcblx0XHRcdFx0bWF0ZXJpYWw6ICcwJ1xuXHRcdFx0fSxcblx0XHRcdHByaWNlOiB0aGlzLnN0dWJQcmljZVZhcmlhbnQzLFxuXHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzLFxuXHRcdFx0XHRwZXJjZW50OiBNYXRoLmZsb29yKCh0aGlzLnN0dWJEaXNjb3VudFZhcmlhbnQzL3RoaXMuc3R1YlByaWNlVmFyaWFudDMpICogMTAwKVxuXHRcdFx0fSxcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KSxcblx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRhcHBsaWVkQXR0cmlidXRlczoge1xuXHRcdFx0XHRjb2xvcjogJzInLFxuXHRcdFx0XHRzaXplOiAnMicsXG5cdFx0XHRcdG1hdGVyaWFsOiAnMCdcblx0XHRcdH0sXG5cdFx0XHRwcmljZTogdGhpcy5zdHViUHJpY2VWYXJpYW50MSxcblx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnRWYXJpYW50MSxcblx0XHRcdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnRWYXJpYW50MS90aGlzLnN0dWJQcmljZVZhcmlhbnQxKSAqIDEwMClcblx0XHRcdH0sXG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNiksXG5cdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdH1cblx0XVxufVxuXG4vKipcbiAqIEZhY3RvcnkgZm9yIGNyZWF0aW5nIERhZmZDb25maWd1cmFibGVQcm9kdWN0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdD57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja0NvbmZpZ3VyYWJsZVByb2R1Y3QpO1xuICB9XG59XG4iXX0=