import { __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { random, commerce, company, lorem, image } from 'faker/locale/en_US';
import { DaffProductTypeEnum, DaffCompositeProductItemInputEnum, DaffProductDriver, DaffProductFacade, DaffProductGridFacade, DaffConfigurableProductFacade, DaffCompositeProductFacade, DaffBestSellersFacade, MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import { of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mocked DaffProduct object.
 */
var /**
 * Mocked DaffProduct object.
 */
MockProduct = /** @class */ (function () {
    function MockProduct() {
        this.stubPrice = random.number({ min: 1, max: 1500 });
        this.stubDiscount = random.number({ min: 0, max: this.stubPrice - 1 });
        this.type = DaffProductTypeEnum.Simple;
        this.id = random.number({ min: 1, max: 10000 }).toString();
        this.url = random.alphaNumeric(16);
        this.price = this.stubPrice;
        this.in_stock = true;
        this.discount = {
            amount: this.stubDiscount,
            percent: Math.floor((this.stubDiscount / this.stubPrice) * 100)
        };
        this.images = [];
        this.name = commerce.productName();
        this.brand = company.companyName();
        this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
    }
    return MockProduct;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockProduct.prototype.stubPrice;
    /**
     * @type {?}
     * @private
     */
    MockProduct.prototype.stubDiscount;
    /** @type {?} */
    MockProduct.prototype.type;
    /** @type {?} */
    MockProduct.prototype.id;
    /** @type {?} */
    MockProduct.prototype.url;
    /** @type {?} */
    MockProduct.prototype.price;
    /** @type {?} */
    MockProduct.prototype.in_stock;
    /** @type {?} */
    MockProduct.prototype.discount;
    /** @type {?} */
    MockProduct.prototype.images;
    /** @type {?} */
    MockProduct.prototype.name;
    /** @type {?} */
    MockProduct.prototype.brand;
    /** @type {?} */
    MockProduct.prototype.description;
}
/**
 * Factory for creating DaffProducts.
 */
var DaffProductFactory = /** @class */ (function (_super) {
    __extends(DaffProductFactory, _super);
    function DaffProductFactory() {
        return _super.call(this, MockProduct) || this;
    }
    DaffProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffProductFactory_Factory() { return new DaffProductFactory(); }, token: DaffProductFactory, providedIn: "root" });
    return DaffProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mocked DaffCompositeProduct object.
 */
var /**
 * Mocked DaffCompositeProduct object.
 */
MockCompositeProduct = /** @class */ (function () {
    function MockCompositeProduct() {
        this.stubPrice = random.number({ min: 1, max: 1500 });
        this.stubDiscount = random.number({ min: 0, max: this.stubPrice - 1 });
        this.type = DaffProductTypeEnum.Composite;
        this.id = random.number({ min: 1, max: 10000 }).toString();
        this.url = random.alphaNumeric(16);
        this.price = this.stubPrice;
        this.images = [];
        this.discount = {
            amount: this.stubDiscount,
            percent: this.stubDiscount / this.stubPrice
        };
        this.in_stock = true;
        this.name = commerce.productName();
        this.brand = company.companyName();
        this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
        this.items = [
            {
                id: random.alphaNumeric(10),
                required: random.boolean(),
                title: commerce.productName(),
                input_type: DaffCompositeProductItemInputEnum.select,
                options: [
                    {
                        id: random.alphaNumeric(10),
                        name: commerce.productMaterial(),
                        price: random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: random.number({ min: 1, max: 9 }),
                        is_default: true,
                        in_stock: true
                    },
                    {
                        id: random.alphaNumeric(10),
                        name: commerce.productMaterial(),
                        price: random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: random.number({ min: 1, max: 9 }),
                        is_default: false,
                        in_stock: true
                    }
                ]
            },
            {
                id: random.alphaNumeric(10),
                required: random.boolean(),
                title: commerce.productName(),
                input_type: DaffCompositeProductItemInputEnum.select,
                options: [
                    {
                        id: random.alphaNumeric(10),
                        name: commerce.productMaterial(),
                        price: random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: random.number({ min: 1, max: 9 }),
                        is_default: true,
                        in_stock: true
                    },
                    {
                        id: random.alphaNumeric(10),
                        name: commerce.productMaterial(),
                        price: random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: random.number({ min: 1, max: 9 }),
                        is_default: false,
                        in_stock: true
                    }
                ]
            }
        ];
    }
    return MockCompositeProduct;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockCompositeProduct.prototype.stubPrice;
    /**
     * @type {?}
     * @private
     */
    MockCompositeProduct.prototype.stubDiscount;
    /** @type {?} */
    MockCompositeProduct.prototype.type;
    /** @type {?} */
    MockCompositeProduct.prototype.id;
    /** @type {?} */
    MockCompositeProduct.prototype.url;
    /** @type {?} */
    MockCompositeProduct.prototype.price;
    /** @type {?} */
    MockCompositeProduct.prototype.images;
    /** @type {?} */
    MockCompositeProduct.prototype.discount;
    /** @type {?} */
    MockCompositeProduct.prototype.in_stock;
    /** @type {?} */
    MockCompositeProduct.prototype.name;
    /** @type {?} */
    MockCompositeProduct.prototype.brand;
    /** @type {?} */
    MockCompositeProduct.prototype.description;
    /** @type {?} */
    MockCompositeProduct.prototype.items;
}
/**
 * Factory for creating DaffCompositeProducts.
 */
var DaffCompositeProductFactory = /** @class */ (function (_super) {
    __extends(DaffCompositeProductFactory, _super);
    function DaffCompositeProductFactory() {
        return _super.call(this, MockCompositeProduct) || this;
    }
    DaffCompositeProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCompositeProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCompositeProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCompositeProductFactory_Factory() { return new DaffCompositeProductFactory(); }, token: DaffCompositeProductFactory, providedIn: "root" });
    return DaffCompositeProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mocked DaffConfigurableProduct object.
 */
var /**
 * Mocked DaffConfigurableProduct object.
 */
MockConfigurableProduct = /** @class */ (function () {
    function MockConfigurableProduct() {
        this.stubPriceVariant1 = random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant1 = random.number({ min: 0, max: this.stubPriceVariant1 - 1 });
        this.stubPriceVariant2 = random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant2 = random.number({ min: 0, max: this.stubPriceVariant2 - 1 });
        this.stubPriceVariant3 = random.number({ min: 1, max: 1500 });
        this.stubDiscountVariant3 = random.number({ min: 0, max: this.stubPriceVariant3 - 1 });
        this.type = DaffProductTypeEnum.Configurable;
        this.id = random.number({ min: 1, max: 10000 }).toString();
        this.url = random.alphaNumeric(16);
        this.price = random.number({ min: 1, max: 1500 });
        this.images = [];
        this.name = commerce.productName();
        this.brand = company.companyName();
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
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
                id: random.alphaNumeric(16),
                in_stock: true
            }
        ];
    }
    return MockConfigurableProduct;
}());
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
    __extends(DaffConfigurableProductFactory, _super);
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
    /** @nocollapse */ DaffConfigurableProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffConfigurableProductFactory_Factory() { return new DaffConfigurableProductFactory(); }, token: DaffConfigurableProductFactory, providedIn: "root" });
    return DaffConfigurableProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var productImageUrlsList = [
    '/assets/products/0.jpg',
    '/assets/products/1.jpg',
    '/assets/products/2.jpg',
    '/assets/products/3.jpg',
    '/assets/products/4.jpg',
    '/assets/products/5.jpg',
    '/assets/products/6.jpg',
    '/assets/products/7.jpg',
    '/assets/products/8.jpg',
    '/assets/products/9.jpg',
    '/assets/products/10.jpg',
    '/assets/products/11.jpg',
    '/assets/products/12.jpg',
    '/assets/products/13.jpg',
    '/assets/products/14.jpg',
    '/assets/products/15.jpg',
    '/assets/products/16.jpg',
    '/assets/products/17.jpg',
    '/assets/products/18.jpg',
    '/assets/products/19.jpg',
    '/assets/products/20.jpg',
    '/assets/products/21.jpg',
    '/assets/products/22.jpg',
    '/assets/products/23.jpg',
    '/assets/products/24.jpg',
    '/assets/products/25.jpg',
    '/assets/products/26.jpg',
    '/assets/products/27.jpg',
    '/assets/products/28.jpg',
    '/assets/products/29.jpg',
    '/assets/products/30.jpg',
    '/assets/products/31.jpg',
    '/assets/products/32.jpg',
    '/assets/products/33.jpg',
    '/assets/products/34.jpg',
    '/assets/products/35.jpg',
    '/assets/products/36.jpg',
    '/assets/products/37.jpg',
    '/assets/products/38.jpg',
    '/assets/products/39.jpg',
    '/assets/products/40.jpg',
    '/assets/products/41.jpg',
    '/assets/products/42.jpg',
    '/assets/products/43.jpg',
    '/assets/products/44.jpg',
    '/assets/products/45.jpg',
    '/assets/products/46.jpg',
    '/assets/products/47.jpg',
    '/assets/products/48.jpg',
    '/assets/products/49.jpg',
    '/assets/products/50.jpg',
    '/assets/products/51.jpg',
    '/assets/products/52.jpg',
    '/assets/products/53.jpg',
    '/assets/products/54.jpg',
    '/assets/products/55.jpg',
    '/assets/products/56.jpg',
    '/assets/products/57.jpg',
    '/assets/products/58.jpg',
    '/assets/products/59.jpg',
    '/assets/products/60.jpg',
    '/assets/products/61.jpg',
    '/assets/products/62.jpg',
    '/assets/products/63.jpg',
    '/assets/products/64.jpg',
    '/assets/products/65.jpg',
    '/assets/products/66.jpg',
    '/assets/products/67.jpg',
    '/assets/products/68.jpg',
    '/assets/products/69.jpg',
    '/assets/products/70.jpg',
    '/assets/products/71.jpg',
    '/assets/products/72.jpg',
    '/assets/products/73.jpg',
    '/assets/products/74.jpg',
    '/assets/products/75.jpg',
    '/assets/products/76.jpg',
    '/assets/products/77.jpg',
    '/assets/products/78.jpg',
    '/assets/products/79.jpg',
    '/assets/products/80.jpg',
    '/assets/products/81.jpg',
    '/assets/products/82.jpg',
    '/assets/products/83.jpg',
    '/assets/products/84.jpg',
    '/assets/products/85.jpg',
    '/assets/products/86.jpg',
    '/assets/products/87.jpg',
    '/assets/products/88.jpg',
    '/assets/products/89.jpg',
    '/assets/products/90.jpg',
    '/assets/products/91.jpg',
    '/assets/products/92.jpg',
    '/assets/products/93.jpg',
    '/assets/products/94.jpg',
    '/assets/products/95.jpg',
    '/assets/products/96.jpg',
    '/assets/products/97.jpg',
    '/assets/products/98.jpg',
    '/assets/products/99.jpg',
    '/assets/products/100.jpg'
];
/**
 * Mocked DaffProductImage object.
 */
var /**
 * Mocked DaffProductImage object.
 */
MockProductImage = /** @class */ (function () {
    function MockProductImage() {
        this.id = random.number({ min: 1, max: 10000 }).toString();
        this.url = productImageUrlsList[random.number(productImageUrlsList.length - 1)];
        this.label = lorem.sentence();
    }
    return MockProductImage;
}());
if (false) {
    /** @type {?} */
    MockProductImage.prototype.id;
    /** @type {?} */
    MockProductImage.prototype.url;
    /** @type {?} */
    MockProductImage.prototype.label;
}
/**
 * A factory for creating DaffProductImage.
 */
var DaffProductImageFactory = /** @class */ (function (_super) {
    __extends(DaffProductImageFactory, _super);
    function DaffProductImageFactory() {
        return _super.call(this, MockProductImage) || this;
    }
    DaffProductImageFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffProductImageFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffProductImageFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffProductImageFactory_Factory() { return new DaffProductImageFactory(); }, token: DaffProductImageFactory, providedIn: "root" });
    return DaffProductImageFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An in-memory service that stubs out the backend services for getting products.
 *
 * \@Param productFactory: DaffProductFactory instance
 * \@Param productImageFactory: DaffProductImageFactory instance
 * \@Param products: An array of Products
 */
var DaffInMemoryBackendProductService = /** @class */ (function () {
    function DaffInMemoryBackendProductService(productFactory, productImageFactory) {
        this.productFactory = productFactory;
        this.productImageFactory = productImageFactory;
        this.products = [
            this.productFactory.create({ id: '1001', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1002', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1003', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1004', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1005', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1006', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1007', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1008', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1009', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1010', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1011', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1012', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1013', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1014', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1015', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1016', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1017', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1018', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1019', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1020', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1021', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1022', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1023', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1024', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1025', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1026', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1027', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1028', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1029', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1030', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1031', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1032', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1033', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1034', images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ id: '1035', images: this.productImageFactory.createMany(5) })
        ];
    }
    /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param url initial url
     * @param utils utility to parse url
     * @returns ParsedRequestUrl
     */
    /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param {?} url initial url
     * @param {?} utils utility to parse url
     * @return {?} ParsedRequestUrl
     */
    DaffInMemoryBackendProductService.prototype.parseRequestUrl = /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param {?} url initial url
     * @param {?} utils utility to parse url
     * @return {?} ParsedRequestUrl
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @returns A fake database of an array of products
     */
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @return {?} A fake database of an array of products
     */
    DaffInMemoryBackendProductService.prototype.createDb = /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @return {?} A fake database of an array of products
     */
    function () {
        return {
            products: this.products
        };
    };
    /**
     * Returns products based on the url given.
     *
     * @param reqInfo request object
     * @returns An http response object
     */
    /**
     * Returns products based on the url given.
     *
     * @param {?} reqInfo request object
     * @return {?} An http response object
     */
    DaffInMemoryBackendProductService.prototype.get = /**
     * Returns products based on the url given.
     *
     * @param {?} reqInfo request object
     * @return {?} An http response object
     */
    function (reqInfo) {
        var _this = this;
        if (reqInfo.id === 'best-sellers') {
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                return {
                    body: _this.products.slice(0, 4),
                    status: STATUS.OK
                };
            }));
        }
        return undefined;
    };
    DaffInMemoryBackendProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendProductService.ctorParameters = function () { return [
        { type: DaffProductFactory },
        { type: DaffProductImageFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendProductService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendProductService_Factory() { return new DaffInMemoryBackendProductService(ɵɵinject(DaffProductFactory), ɵɵinject(DaffProductImageFactory)); }, token: DaffInMemoryBackendProductService, providedIn: "root" });
    return DaffInMemoryBackendProductService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryBackendProductService.prototype.products;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendProductService.prototype.productFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendProductService.prototype.productImageFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The product testing driver to mock the backend product service.
 *
 * @param productFactory - A DaffProductFactory instance
 * @param productImageFactory - A DaffProductImageFactory instance
 */
var DaffTestingProductService = /** @class */ (function () {
    function DaffTestingProductService(productFactory, productImageFactory) {
        this.productFactory = productFactory;
        this.productImageFactory = productImageFactory;
    }
    /**
     * Get all products as DaffProduct[].
     *
     * @returns An Observable of Product[]
     */
    /**
     * Get all products as DaffProduct[].
     *
     * @return {?} An Observable of Product[]
     */
    DaffTestingProductService.prototype.getAll = /**
     * Get all products as DaffProduct[].
     *
     * @return {?} An Observable of Product[]
     */
    function () {
        return of([
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) })
        ]);
    };
    /**
     * Get all best selling products.
     *
     * @returns An Observable of Product[]
     */
    /**
     * Get all best selling products.
     *
     * @return {?} An Observable of Product[]
     */
    DaffTestingProductService.prototype.getBestSellers = /**
     * Get all best selling products.
     *
     * @return {?} An Observable of Product[]
     */
    function () {
        return of([
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) })
        ]);
    };
    /**
     * Get product by ID
     *
     * @param productId product ID
     * @returns An Observable of a Product
     */
    /**
     * Get product by ID
     *
     * @param {?} productId product ID
     * @return {?} An Observable of a Product
     */
    DaffTestingProductService.prototype.get = /**
     * Get product by ID
     *
     * @param {?} productId product ID
     * @return {?} An Observable of a Product
     */
    function (productId) {
        return of(this.productFactory.create({ images: this.productImageFactory.createMany(5) }));
    };
    DaffTestingProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingProductService.ctorParameters = function () { return [
        { type: DaffProductFactory },
        { type: DaffProductImageFactory }
    ]; };
    /** @nocollapse */ DaffTestingProductService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingProductService_Factory() { return new DaffTestingProductService(ɵɵinject(DaffProductFactory), ɵɵinject(DaffProductImageFactory)); }, token: DaffTestingProductService, providedIn: "root" });
    return DaffTestingProductService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingProductService.prototype.productFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingProductService.prototype.productImageFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The product inmemory driver to mock the product backend service.
 *
 * \@Param HttpClient
 */
var DaffInMemoryProductService = /** @class */ (function () {
    function DaffInMemoryProductService(http) {
        this.http = http;
        this.url = '/api/products/';
    }
    /**
     * Gets all products.
     *
     * @returns An Observable of DaffProduct[]
     */
    /**
     * Gets all products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    DaffInMemoryProductService.prototype.getAll = /**
     * Gets all products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    function () {
        return this.http.get(this.url);
    };
    /**
     * Gets all best selling products.
     *
     * @returns An Observable of DaffProduct[]
     */
    /**
     * Gets all best selling products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    DaffInMemoryProductService.prototype.getBestSellers = /**
     * Gets all best selling products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    function () {
        return this.http.get(this.url + 'best-sellers');
    };
    /**
     * Get a product by ID.
     *
     * @param productId string - product ID
     * @returns An Observable of a DaffProduct
     */
    /**
     * Get a product by ID.
     *
     * @param {?} productId string - product ID
     * @return {?} An Observable of a DaffProduct
     */
    DaffInMemoryProductService.prototype.get = /**
     * Get a product by ID.
     *
     * @param {?} productId string - product ID
     * @return {?} An Observable of a DaffProduct
     */
    function (productId) {
        return this.http.get(this.url + productId);
    };
    DaffInMemoryProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryProductService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryProductService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryProductService_Factory() { return new DaffInMemoryProductService(ɵɵinject(HttpClient)); }, token: DaffInMemoryProductService, providedIn: "root" });
    return DaffInMemoryProductService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryProductService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryProductService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Module for providing the DaffInMemoryProductService driver to your application.
 */
var DaffProductInMemoryDriverModule = /** @class */ (function () {
    function DaffProductInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffProductInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffProductInMemoryDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffInMemoryProductService
                }
            ]
        };
    };
    DaffProductInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffProductInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Module for providing DaffProductTestingService driver as the backend product service to your application.
 */
var DaffProductTestingDriverModule = /** @class */ (function () {
    function DaffProductTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffProductTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffProductTestingDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffTestingProductService
                }
            ]
        };
    };
    DaffProductTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffProductTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffProductFacade = /** @class */ (function () {
    function MockDaffProductFacade() {
        this.loading$ = new BehaviorSubject(false);
        /**
         * @deprecated use getProduct instead.
         */
        this.product$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.hasDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountAmount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountPercent = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.isOutOfStock = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffProductFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffProductFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffProductFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffProductFacade_Factory() { return new MockDaffProductFacade(); }, token: MockDaffProductFacade, providedIn: "root" });
    return MockDaffProductFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffProductFacade.prototype.loading$;
    /**
     * @deprecated use getProduct instead.
     * @type {?}
     */
    MockDaffProductFacade.prototype.product$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffProductGridFacade = /** @class */ (function () {
    function MockDaffProductGridFacade() {
        this.loading$ = new BehaviorSubject(false);
        this.products$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffProductGridFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffProductGridFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffProductGridFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffProductGridFacade_Factory() { return new MockDaffProductGridFacade(); }, token: MockDaffProductGridFacade, providedIn: "root" });
    return MockDaffProductGridFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffProductGridFacade.prototype.loading$;
    /** @type {?} */
    MockDaffProductGridFacade.prototype.products$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffConfigurableProductFacade = /** @class */ (function () {
    function MockDaffConfigurableProductFacade() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getAllAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject({});
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getAllVariants = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject([]);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getAppliedAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject({});
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMinimumPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMaximumPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMinimumDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMaximumDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMinimumPercentDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMaximumPercentDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.isPriceRanged = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.hasDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getSelectableAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject({});
    };
    ;
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.getMatchingVariants = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject([]);
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffConfigurableProductFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffConfigurableProductFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffConfigurableProductFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffConfigurableProductFacade_Factory() { return new MockDaffConfigurableProductFacade(); }, token: MockDaffConfigurableProductFacade, providedIn: "root" });
    return MockDaffConfigurableProductFacade;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffCompositeProductFacade = /** @class */ (function () {
    function MockDaffCompositeProductFacade() {
    }
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getRequiredItemPricesForConfiguration = /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    function (id, configuration) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getOptionalItemPricesForConfiguration = /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    function (id, configuration) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getPricesAsCurrentlyConfigured = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.getAppliedOptions = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject({});
    };
    /**
     * @param {?} id
     * @param {?} item_id
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.isItemRequired = /**
     * @param {?} id
     * @param {?} item_id
     * @return {?}
     */
    function (id, item_id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    /**
     * @param {?} priceRange
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.hasDiscount = /**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return false;
    };
    ;
    /**
     * @param {?} priceRange
     * @return {?}
     */
    MockDaffCompositeProductFacade.prototype.hasPriceRange = /**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return false;
    };
    ;
    MockDaffCompositeProductFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffCompositeProductFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffCompositeProductFacade_Factory() { return new MockDaffCompositeProductFacade(); }, token: MockDaffCompositeProductFacade, providedIn: "root" });
    return MockDaffCompositeProductFacade;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffBestSellersFacade = /** @class */ (function () {
    function MockDaffBestSellersFacade() {
        this.loading$ = new BehaviorSubject(false);
        this.bestSellers$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffBestSellersFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    MockDaffBestSellersFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffBestSellersFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffBestSellersFacade_Factory() { return new MockDaffBestSellersFacade(); }, token: MockDaffBestSellersFacade, providedIn: "root" });
    return MockDaffBestSellersFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffBestSellersFacade.prototype.loading$;
    /** @type {?} */
    MockDaffBestSellersFacade.prototype.bestSellers$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffProductTestingModule = /** @class */ (function () {
    function DaffProductTestingModule() {
    }
    DaffProductTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffProductFacade, useExisting: MockDaffProductFacade },
                        { provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
                        { provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
                        { provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
                        { provide: DaffBestSellersFacade, useExisting: MockDaffBestSellersFacade },
                    ]
                },] }
    ];
    return DaffProductTestingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCoreProduct = /** @class */ (function () {
    function MockMagentoCoreProduct() {
        this.__typename = MagentoProductTypeEnum.SimpleProduct;
        this.id = random.number({ min: 1, max: 1000 });
        this.url_key = random.alphaNumeric(16);
        this.name = random.word();
        this.sku = random.alphaNumeric(16);
        this.stock_status = MagentoProductStockStatusEnum.InStock;
        this.image = {
            __typename: 'ProductImage',
            label: random.words(3),
            url: image.imageUrl()
        };
        this.thumbnail = {
            __typename: 'ProductImage',
            label: random.words(3),
            url: image.imageUrl()
        };
        this.description = {
            __typename: 'ComplexTextValue',
            html: random.words(5)
        };
        this.price_range = {
            __typename: 'PriceRange',
            maximum_price: {
                __typename: 'ProductPrice',
                regular_price: {
                    __typename: 'Money',
                    value: random.number({ min: 100, max: 1000 }),
                    currency: null
                },
                discount: {
                    __typename: 'ProductDiscount',
                    amount_off: random.number({ min: 1, max: 99 }),
                    percent_off: random.number({ min: 1, max: 99 })
                }
            }
        };
        this.short_description = {
            __typename: 'ComplexTextValue',
            html: random.words(3)
        };
        this.media_gallery_entries = [];
    }
    return MockMagentoCoreProduct;
}());
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
    __extends(MagentoCoreProductFactory, _super);
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
    /** @nocollapse */ MagentoCoreProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCoreProductFactory_Factory() { return new MagentoCoreProductFactory(); }, token: MagentoCoreProductFactory, providedIn: "root" });
    return MagentoCoreProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoSimpleProduct = /** @class */ (function (_super) {
    __extends(MockMagentoSimpleProduct, _super);
    function MockMagentoSimpleProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoProductTypeEnum.SimpleProduct;
        return _this;
    }
    return MockMagentoSimpleProduct;
}(MockMagentoCoreProduct));
if (false) {
    /** @type {?} */
    MockMagentoSimpleProduct.prototype.__typename;
}
var MagentoSimpleProductFactory = /** @class */ (function (_super) {
    __extends(MagentoSimpleProductFactory, _super);
    function MagentoSimpleProductFactory() {
        return _super.call(this, MockMagentoSimpleProduct) || this;
    }
    MagentoSimpleProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoSimpleProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoSimpleProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoSimpleProductFactory_Factory() { return new MagentoSimpleProductFactory(); }, token: MagentoSimpleProductFactory, providedIn: "root" });
    return MagentoSimpleProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoBundledProduct = /** @class */ (function (_super) {
    __extends(MockMagentoBundledProduct, _super);
    function MockMagentoBundledProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoProductTypeEnum.BundledProduct;
        _this.items = [];
        return _this;
    }
    return MockMagentoBundledProduct;
}(MockMagentoCoreProduct));
if (false) {
    /** @type {?} */
    MockMagentoBundledProduct.prototype.__typename;
    /** @type {?} */
    MockMagentoBundledProduct.prototype.items;
}
var MagentoBundledProductFactory = /** @class */ (function (_super) {
    __extends(MagentoBundledProductFactory, _super);
    function MagentoBundledProductFactory() {
        return _super.call(this, MockMagentoBundledProduct) || this;
    }
    MagentoBundledProductFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoBundledProductFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoBundledProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoBundledProductFactory_Factory() { return new MagentoBundledProductFactory(); }, token: MagentoBundledProductFactory, providedIn: "root" });
    return MagentoBundledProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoConfigurableProduct = /** @class */ (function (_super) {
    __extends(MockMagentoConfigurableProduct, _super);
    function MockMagentoConfigurableProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.priceVariant1 = random.number({ min: 1, max: 1000 });
        _this.discountVariant1 = random.number({ min: 0, max: _this.priceVariant1 - 1 });
        _this.priceVariant2 = random.number({ min: 1, max: 1000 });
        _this.discountVariant2 = random.number({ min: 0, max: _this.priceVariant2 - 1 });
        _this.priceVariant3 = random.number({ min: 1, max: 1000 });
        _this.discountVariant3 = random.number({ min: 0, max: _this.priceVariant3 - 1 });
        _this.__typename = MagentoProductTypeEnum.ConfigurableProduct;
        _this.configurable_options = [
            {
                attribute_code: 'color',
                attribute_id: random.alphaNumeric(12),
                id: random.alphaNumeric(12),
                label: 'Color',
                position: 0,
                product_id: random.number({ min: 1, max: 1000 }),
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
                    id: random.number({ min: 1, max: 1000 }),
                    url_key: random.alphaNumeric(16),
                    name: random.word(),
                    sku: random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
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
                    id: random.number({ min: 1, max: 1000 }),
                    url_key: random.alphaNumeric(16),
                    name: random.word(),
                    sku: random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
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
                    id: random.number({ min: 1, max: 1000 }),
                    url_key: random.alphaNumeric(16),
                    name: random.word(),
                    sku: random.alphaNumeric(16),
                    stock_status: MagentoProductStockStatusEnum.InStock,
                    image: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
                    },
                    thumbnail: {
                        __typename: 'ProductImage',
                        label: random.words(3),
                        url: image.imageUrl()
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
    __extends(MagentoConfigurableProductFactory, _super);
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
    /** @nocollapse */ MagentoConfigurableProductFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoConfigurableProductFactory_Factory() { return new MagentoConfigurableProductFactory(); }, token: MagentoConfigurableProductFactory, providedIn: "root" });
    return MagentoConfigurableProductFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCompositeProductFactory, DaffConfigurableProductFactory, DaffInMemoryBackendProductService, DaffInMemoryProductService, DaffProductFactory, DaffProductImageFactory, DaffProductInMemoryDriverModule, DaffProductTestingDriverModule, DaffProductTestingModule, DaffTestingProductService, MagentoBundledProductFactory, MagentoConfigurableProductFactory, MagentoSimpleProductFactory as MagentoProductFactory, MagentoSimpleProductFactory, MockDaffBestSellersFacade, MockDaffCompositeProductFacade, MockDaffConfigurableProductFacade, MockDaffProductFacade, MockDaffProductGridFacade };
//# sourceMappingURL=daffodil-product-testing.js.map
