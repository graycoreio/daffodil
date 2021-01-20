/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProductTypeEnum, DaffCompositeProductItemInputEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct {
    constructor() {
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
}
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
export class DaffCompositeProductFactory extends DaffModelFactory {
    constructor() {
        super(MockCompositeProduct);
    }
}
DaffCompositeProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCompositeProductFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCompositeProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeProductFactory_Factory() { return new DaffCompositeProductFactory(); }, token: DaffCompositeProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY29tcG9zaXRlLXByb2R1Y3QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBd0IsbUJBQW1CLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFLMUQsTUFBTSxPQUFPLG9CQUFvQjtJQUFqQztRQUNTLGNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDckQsaUJBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM5RSxTQUFJLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBQ3JDLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUQsUUFBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFR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QztJQUNyRjtRQUNFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdCwgRGFmZlByb2R1Y3RUeXBlRW51bSwgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtSW5wdXRFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIE1vY2tlZCBEYWZmQ29tcG9zaXRlUHJvZHVjdCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrQ29tcG9zaXRlUHJvZHVjdCBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVQcm9kdWN0IHtcblx0cHJpdmF0ZSBzdHViUHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTUwMH0pO1xuXHRwcml2YXRlIHN0dWJEaXNjb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMCwgbWF4OiB0aGlzLnN0dWJQcmljZSAtIDF9KTtcblx0dHlwZSA9IERhZmZQcm9kdWN0VHlwZUVudW0uQ29tcG9zaXRlO1xuXHRpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMH0pLnRvU3RyaW5nKCk7XG5cdHVybCA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xuXHRwcmljZSA9IHRoaXMuc3R1YlByaWNlO1xuXHRpbWFnZXMgPSBbXTtcblx0ZGlzY291bnQgPSB7XG5cdFx0YW1vdW50OiB0aGlzLnN0dWJEaXNjb3VudCxcblx0XHRwZXJjZW50OiB0aGlzLnN0dWJEaXNjb3VudC90aGlzLnN0dWJQcmljZVxuXHR9O1xuXHRpbl9zdG9jayA9IHRydWU7XG4gIG5hbWUgPSBmYWtlci5jb21tZXJjZS5wcm9kdWN0TmFtZSgpO1xuICBicmFuZCA9IGZha2VyLmNvbXBhbnkuY29tcGFueU5hbWUoKTtcblx0ZGVzY3JpcHRpb24gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGFjY3Vtc2FuIHVsbGFtY29ycGVyIGVpIGVhbS4gU2ludCBhcHBldGVyZSBvY3VycmVyZXQgbm8gcGVyLCBldCBjdW0gbG9yZW0gZGlzcHV0YXRpb25pLiBTaXQgdXQgbWFnbmEgZGVsZW5pdCwgYXNzdW0gdmlkaXNzZSB2b2NpYnVzIHNlZCB1dC4gSW4gYXBlcmlyaSBtYWxvcnVtIGFjY3VzYW11cyBzZWEsIG5vdnVtIG1lZGlvY3JpdGF0ZW0gaXVzIGF0LiBEdW8gYWdhbSBwcm9ibyBob25lc3RhdGlzIHV0LiBOZWMgcmVnaW9uZSBzcGxlbmRpZGUgY3UsIHVudW0gZ3JhZWNvIHZpdmVuZHVtIGluIGR1by4nXG5cdGl0ZW1zID0gW1xuXHRcdHtcblx0XHRcdGlkOiBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDEwKSxcblx0XHRcdHJlcXVpcmVkOiBmYWtlci5yYW5kb20uYm9vbGVhbigpLFxuXHRcdFx0dGl0bGU6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCksXG5cdFx0XHRpbnB1dF90eXBlOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1JbnB1dEVudW0uc2VsZWN0LFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTApLFxuXHRcdFx0XHRcdG5hbWU6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpLFxuXHRcdFx0XHRcdHByaWNlOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSksXG5cdFx0XHRcdFx0aW1hZ2VzOiBbXSxcblx0XHRcdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRcdFx0YW1vdW50OiAwLFxuXHRcdFx0XHRcdFx0cGVyY2VudDogMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cXVhbnRpdHk6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA5fSksXG5cdFx0XHRcdFx0aXNfZGVmYXVsdDogdHJ1ZSxcblx0XHRcdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTApLFxuXHRcdFx0XHRcdG5hbWU6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpLFxuXHRcdFx0XHRcdHByaWNlOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSksXG5cdFx0XHRcdFx0aW1hZ2VzOiBbXSxcblx0XHRcdFx0XHRkaXNjb3VudDoge1xuXHRcdFx0XHRcdFx0YW1vdW50OiAwLFxuXHRcdFx0XHRcdFx0cGVyY2VudDogMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cXVhbnRpdHk6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA5fSksXG5cdFx0XHRcdFx0aXNfZGVmYXVsdDogZmFsc2UsXG5cdFx0XHRcdFx0aW5fc3RvY2s6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTApLFxuXHRcdFx0cmVxdWlyZWQ6IGZha2VyLnJhbmRvbS5ib29sZWFuKCksXG5cdFx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcblx0XHRcdGlucHV0X3R5cGU6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbUlucHV0RW51bS5zZWxlY3QsXG5cdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCksXG5cdFx0XHRcdFx0bmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKCksXG5cdFx0XHRcdFx0cHJpY2U6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KSxcblx0XHRcdFx0XHRpbWFnZXM6IFtdLFxuXHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRhbW91bnQ6IDAsXG5cdFx0XHRcdFx0XHRwZXJjZW50OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRxdWFudGl0eTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDl9KSxcblx0XHRcdFx0XHRpc19kZWZhdWx0OiB0cnVlLFxuXHRcdFx0XHRcdGluX3N0b2NrOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxMCksXG5cdFx0XHRcdFx0bmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKCksXG5cdFx0XHRcdFx0cHJpY2U6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KSxcblx0XHRcdFx0XHRpbWFnZXM6IFtdLFxuXHRcdFx0XHRcdGRpc2NvdW50OiB7XG5cdFx0XHRcdFx0XHRhbW91bnQ6IDAsXG5cdFx0XHRcdFx0XHRwZXJjZW50OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRxdWFudGl0eTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDl9KSxcblx0XHRcdFx0XHRpc19kZWZhdWx0OiBmYWxzZSxcblx0XHRcdFx0XHRpbl9zdG9jazogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRdXG59XG5cbi8qKlxuICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgRGFmZkNvbXBvc2l0ZVByb2R1Y3RzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29tcG9zaXRlUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDb21wb3NpdGVQcm9kdWN0PntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrQ29tcG9zaXRlUHJvZHVjdCk7XG4gIH1cbn1cbiJdfQ==