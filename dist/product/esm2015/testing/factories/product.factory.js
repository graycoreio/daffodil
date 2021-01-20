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
 * Mocked DaffProduct object.
 */
export class MockProduct {
    constructor() {
        this.stubPrice = faker.random.number({ min: 1, max: 1500 });
        this.stubDiscount = faker.random.number({ min: 0, max: this.stubPrice - 1 });
        this.type = DaffProductTypeEnum.Simple;
        this.id = faker.random.number({ min: 1, max: 10000 }).toString();
        this.url = faker.random.alphaNumeric(16);
        this.price = this.stubPrice;
        this.in_stock = true;
        this.discount = {
            amount: this.stubDiscount,
            percent: Math.floor((this.stubDiscount / this.stubPrice) * 100)
        };
        this.images = [];
        this.name = faker.commerce.productName();
        this.brand = faker.company.companyName();
        this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
    }
}
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
export class DaffProductFactory extends DaffModelFactory {
    constructor() {
        super(MockProduct);
    }
}
DaffProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffProductFactory.ctorParameters = () => [];
/** @nocollapse */ DaffProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductFactory_Factory() { return new DaffProductFactory(); }, token: DaffProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9wcm9kdWN0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFLMUQsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFDUyxjQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFOUUsU0FBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNsQyxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxVQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RCxDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsNFRBQTRULENBQUE7SUFDNVUsQ0FBQztDQUFBOzs7Ozs7SUFoQkEsZ0NBQTZEOzs7OztJQUM3RCxtQ0FBOEU7O0lBRTlFLDJCQUFrQzs7SUFDbEMseUJBQTBEOztJQUMxRCwwQkFBb0M7O0lBQ3BDLDRCQUF1Qjs7SUFDdkIsK0JBQWdCOztJQUNoQiwrQkFHRTs7SUFDRiw2QkFBWTs7SUFDWCwyQkFBb0M7O0lBQ3BDLDRCQUFvQzs7SUFDcEMsa0NBQTBVOzs7OztBQVM1VSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQTZCO0lBQ25FO1FBQ0UsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCwgRGFmZlByb2R1Y3RUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBNb2NrZWQgRGFmZlByb2R1Y3Qgb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTW9ja1Byb2R1Y3QgaW1wbGVtZW50cyBEYWZmUHJvZHVjdCB7XG5cdHByaXZhdGUgc3R1YlByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcblx0cHJpdmF0ZSBzdHViRGlzY291bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDAsIG1heDogdGhpcy5zdHViUHJpY2UgLSAxfSk7XG5cblx0dHlwZSA9IERhZmZQcm9kdWN0VHlwZUVudW0uU2ltcGxlO1xuXHRpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMH0pLnRvU3RyaW5nKCk7XG5cdHVybCA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xuXHRwcmljZSA9IHRoaXMuc3R1YlByaWNlO1xuXHRpbl9zdG9jayA9IHRydWU7XG5cdGRpc2NvdW50ID0ge1xuXHRcdGFtb3VudDogdGhpcy5zdHViRGlzY291bnQsXG5cdFx0cGVyY2VudDogTWF0aC5mbG9vcigodGhpcy5zdHViRGlzY291bnQvdGhpcy5zdHViUHJpY2UpICogMTAwKVxuXHR9O1xuXHRpbWFnZXMgPSBbXTtcbiAgbmFtZSA9IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCk7XG4gIGJyYW5kID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpO1xuICBkZXNjcmlwdGlvbiA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgYWNjdW1zYW4gdWxsYW1jb3JwZXIgZWkgZWFtLiBTaW50IGFwcGV0ZXJlIG9jdXJyZXJldCBubyBwZXIsIGV0IGN1bSBsb3JlbSBkaXNwdXRhdGlvbmkuIFNpdCB1dCBtYWduYSBkZWxlbml0LCBhc3N1bSB2aWRpc3NlIHZvY2lidXMgc2VkIHV0LiBJbiBhcGVyaXJpIG1hbG9ydW0gYWNjdXNhbXVzIHNlYSwgbm92dW0gbWVkaW9jcml0YXRlbSBpdXMgYXQuIER1byBhZ2FtIHByb2JvIGhvbmVzdGF0aXMgdXQuIE5lYyByZWdpb25lIHNwbGVuZGlkZSBjdSwgdW51bSBncmFlY28gdml2ZW5kdW0gaW4gZHVvLidcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZvciBjcmVhdGluZyBEYWZmUHJvZHVjdHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlByb2R1Y3Q+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tQcm9kdWN0KTtcbiAgfVxufVxuIl19