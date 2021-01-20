/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProductTypeEnum, DaffCompositeProductItemInputEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * Mocked DaffCompositeProduct object.
 */
var /**
 * Mocked DaffCompositeProduct object.
 */
MockCompositeProduct = /** @class */ (function () {
    function MockCompositeProduct() {
        this.stubPrice = faker.random.number({ min: 1, max: 1500 });
        this.stubDiscount = faker.random.number({ min: 0, max: this.stubPrice - 1 });
        this.type = DaffProductTypeEnum.Composite;
        this.id = faker.random.number({ min: 1, max: 10000 }).toString();
        this.url = faker.random.alphaNumeric(16);
        this.price = this.stubPrice;
        this.images = [];
        this.discount = {
            amount: this.stubDiscount,
            percent: this.stubDiscount / this.stubPrice
        };
        this.in_stock = true;
        this.name = faker.commerce.productName();
        this.brand = faker.company.companyName();
        this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
        this.items = [
            {
                id: faker.random.alphaNumeric(10),
                required: faker.random.boolean(),
                title: faker.commerce.productName(),
                input_type: DaffCompositeProductItemInputEnum.select,
                options: [
                    {
                        id: faker.random.alphaNumeric(10),
                        name: faker.commerce.productMaterial(),
                        price: faker.random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        is_default: true,
                        in_stock: true
                    },
                    {
                        id: faker.random.alphaNumeric(10),
                        name: faker.commerce.productMaterial(),
                        price: faker.random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        is_default: false,
                        in_stock: true
                    }
                ]
            },
            {
                id: faker.random.alphaNumeric(10),
                required: faker.random.boolean(),
                title: faker.commerce.productName(),
                input_type: DaffCompositeProductItemInputEnum.select,
                options: [
                    {
                        id: faker.random.alphaNumeric(10),
                        name: faker.commerce.productMaterial(),
                        price: faker.random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        is_default: true,
                        in_stock: true
                    },
                    {
                        id: faker.random.alphaNumeric(10),
                        name: faker.commerce.productMaterial(),
                        price: faker.random.number({ min: 1, max: 100 }),
                        images: [],
                        discount: {
                            amount: 0,
                            percent: 0
                        },
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        is_default: false,
                        in_stock: true
                    }
                ]
            }
        ];
    }
    return MockCompositeProduct;
}());
/**
 * Mocked DaffCompositeProduct object.
 */
export { MockCompositeProduct };
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
    tslib_1.__extends(DaffCompositeProductFactory, _super);
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
    /** @nocollapse */ DaffCompositeProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeProductFactory_Factory() { return new DaffCompositeProductFactory(); }, token: DaffCompositeProductFactory, providedIn: "root" });
    return DaffCompositeProductFactory;
}(DaffModelFactory));
export { DaffCompositeProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY29tcG9zaXRlLXByb2R1Y3QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQXdCLG1CQUFtQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFEOzs7O0lBQUE7UUFDUyxjQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDOUUsU0FBSSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztRQUNyQyxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxVQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFHO1lBQ1YsTUFB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QXNDO0lBQ3JGO2VBQ0Usa0JBQU0sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7c0NBckdEO0NBMEdDLEFBUEQsQ0FHaUQsZ0JBQWdCLEdBSWhFO1NBSlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtLCBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1JbnB1dEVudW0gfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogTW9ja2VkIERhZmZDb21wb3NpdGVQcm9kdWN0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tDb21wb3NpdGVQcm9kdWN0IGltcGxlbWVudHMgRGFmZkNvbXBvc2l0ZVByb2R1Y3Qge1xuXHRwcml2YXRlIHN0dWJQcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG5cdHByaXZhdGUgc3R1YkRpc2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAwLCBtYXg6IHRoaXMuc3R1YlByaWNlIC0gMX0pO1xuXHR0eXBlID0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGU7XG5cdGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDAwfSkudG9TdHJpbmcoKTtcblx0dXJsID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG5cdHByaWNlID0gdGhpcy5zdHViUHJpY2U7XG5cdGltYWdlcyA9IFtdO1xuXHRkaXNjb3VudCA9IHtcblx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50LFxuXHRcdHBlcmNlbnQ6IHRoaXMuc3R1YkRpc2NvdW50L3RoaXMuc3R1YlByaWNlXG5cdH07XG5cdGluX3N0b2NrID0gdHJ1ZTtcbiAgbmFtZSA9IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCk7XG4gIGJyYW5kID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpO1xuXHRkZXNjcmlwdGlvbiA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgYWNjdW1zYW4gdWxsYW1jb3JwZXIgZWkgZWFtLiBTaW50IGFwcGV0ZXJlIG9jdXJyZXJldCBubyBwZXIsIGV0IGN1bSBsb3JlbSBkaXNwdXRhdGlvbmkuIFNpdCB1dCBtYWduYSBkZWxlbml0LCBhc3N1bSB2aWRpc3NlIHZvY2lidXMgc2VkIHV0LiBJbiBhcGVyaXJpIG1hbG9ydW0gYWNjdXNhbXVzIHNlYSwgbm92dW0gbWVkaW9jcml0YXRlbSBpdXMgYXQuIER1byBhZ2FtIHByb2JvIGhvbmVzdGF0aXMgdXQuIE5lYyByZWdpb25lIHNwbGVuZGlkZSBjdSwgdW51bSBncmFlY28gdml2ZW5kdW0gaW4gZHVvLidcblx0aXRlbXMgPSBbXG5cdFx0e1xuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTApLFxuXHRcdFx0cmVxdWlyZWQ6IGZha2VyLnJhbmRvbS5ib29sZWFuKCksXG5cdFx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcblx0XHRcdGlucHV0X3R5cGU6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbUlucHV0RW51bS5zZWxlY3QsXG5cdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCksXG5cdFx0XHRcdFx0bmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKCksXG5cdFx0XHRcdFx0cHJpY2U6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KSxcblx0XHRcdFx0XHRpbWFnZXM6IFtdLFxuXHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRhbW91bnQ6IDAsXG5cdFx0XHRcdFx0XHRwZXJjZW50OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRxdWFudGl0eTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDl9KSxcblx0XHRcdFx0XHRpc19kZWZhdWx0OiB0cnVlLFxuXHRcdFx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCksXG5cdFx0XHRcdFx0bmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKCksXG5cdFx0XHRcdFx0cHJpY2U6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KSxcblx0XHRcdFx0XHRpbWFnZXM6IFtdLFxuXHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRhbW91bnQ6IDAsXG5cdFx0XHRcdFx0XHRwZXJjZW50OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRxdWFudGl0eTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDl9KSxcblx0XHRcdFx0XHRpc19kZWZhdWx0OiBmYWxzZSxcblx0XHRcdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCksXG5cdFx0XHRyZXF1aXJlZDogZmFrZXIucmFuZG9tLmJvb2xlYW4oKSxcblx0XHRcdHRpdGxlOiBmYWtlci5jb21tZXJjZS5wcm9kdWN0TmFtZSgpLFxuXHRcdFx0aW5wdXRfdHlwZTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtSW5wdXRFbnVtLnNlbGVjdCxcblx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDEwKSxcblx0XHRcdFx0XHRuYW1lOiBmYWtlci5jb21tZXJjZS5wcm9kdWN0TWF0ZXJpYWwoKSxcblx0XHRcdFx0XHRwcmljZTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pLFxuXHRcdFx0XHRcdGltYWdlczogW10sXG5cdFx0XHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0XHRcdGFtb3VudDogMCxcblx0XHRcdFx0XHRcdHBlcmNlbnQ6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHF1YW50aXR5OiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogOX0pLFxuXHRcdFx0XHRcdGlzX2RlZmF1bHQ6IHRydWUsXG5cdFx0XHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDEwKSxcblx0XHRcdFx0XHRuYW1lOiBmYWtlci5jb21tZXJjZS5wcm9kdWN0TWF0ZXJpYWwoKSxcblx0XHRcdFx0XHRwcmljZTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pLFxuXHRcdFx0XHRcdGltYWdlczogW10sXG5cdFx0XHRcdFx0ZGlzY291bnQ6IHtcblx0XHRcdFx0XHRcdGFtb3VudDogMCxcblx0XHRcdFx0XHRcdHBlcmNlbnQ6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHF1YW50aXR5OiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogOX0pLFxuXHRcdFx0XHRcdGlzX2RlZmF1bHQ6IGZhbHNlLFxuXHRcdFx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZvciBjcmVhdGluZyBEYWZmQ29tcG9zaXRlUHJvZHVjdHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb21wb3NpdGVQcm9kdWN0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tDb21wb3NpdGVQcm9kdWN0KTtcbiAgfVxufVxuIl19