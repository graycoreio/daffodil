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
 * Mocked DaffProduct object.
 */
var /**
 * Mocked DaffProduct object.
 */
MockProduct = /** @class */ (function () {
    function MockProduct() {
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
    return MockProduct;
}());
/**
 * Mocked DaffProduct object.
 */
export { MockProduct };
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
    tslib_1.__extends(DaffProductFactory, _super);
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
    /** @nocollapse */ DaffProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductFactory_Factory() { return new DaffProductFactory(); }, token: DaffProductFactory, providedIn: "root" });
    return DaffProductFactory;
}(DaffModelFactory));
export { DaffProductFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9wcm9kdWN0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFEOzs7O0lBQUE7UUFDUyxjQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFOUUsU0FBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNsQyxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxVQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RCxDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsNFRBQTRULENBQUE7SUFDNVUsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7OztJQWhCQSxnQ0FBNkQ7Ozs7O0lBQzdELG1DQUE4RTs7SUFFOUUsMkJBQWtDOztJQUNsQyx5QkFBMEQ7O0lBQzFELDBCQUFvQzs7SUFDcEMsNEJBQXVCOztJQUN2QiwrQkFBZ0I7O0lBQ2hCLCtCQUdFOztJQUNGLDZCQUFZOztJQUNYLDJCQUFvQzs7SUFDcEMsNEJBQW9DOztJQUNwQyxrQ0FBMFU7Ozs7O0FBTTVVO0lBR3dDLDhDQUE2QjtJQUNuRTtlQUNFLGtCQUFNLFdBQVcsQ0FBQztJQUNwQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFoQ0Q7Q0FxQ0MsQUFQRCxDQUd3QyxnQkFBZ0IsR0FJdkQ7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0gfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogTW9ja2VkIERhZmZQcm9kdWN0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tQcm9kdWN0IGltcGxlbWVudHMgRGFmZlByb2R1Y3Qge1xuXHRwcml2YXRlIHN0dWJQcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG5cdHByaXZhdGUgc3R1YkRpc2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAwLCBtYXg6IHRoaXMuc3R1YlByaWNlIC0gMX0pO1xuXG5cdHR5cGUgPSBEYWZmUHJvZHVjdFR5cGVFbnVtLlNpbXBsZTtcblx0aWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMDB9KS50b1N0cmluZygpO1xuXHR1cmwgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KTtcblx0cHJpY2UgPSB0aGlzLnN0dWJQcmljZTtcblx0aW5fc3RvY2sgPSB0cnVlO1xuXHRkaXNjb3VudCA9IHtcblx0XHRhbW91bnQ6IHRoaXMuc3R1YkRpc2NvdW50LFxuXHRcdHBlcmNlbnQ6IE1hdGguZmxvb3IoKHRoaXMuc3R1YkRpc2NvdW50L3RoaXMuc3R1YlByaWNlKSAqIDEwMClcblx0fTtcblx0aW1hZ2VzID0gW107XG4gIG5hbWUgPSBmYWtlci5jb21tZXJjZS5wcm9kdWN0TmFtZSgpO1xuICBicmFuZCA9IGZha2VyLmNvbXBhbnkuY29tcGFueU5hbWUoKTtcbiAgZGVzY3JpcHRpb24gPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGFjY3Vtc2FuIHVsbGFtY29ycGVyIGVpIGVhbS4gU2ludCBhcHBldGVyZSBvY3VycmVyZXQgbm8gcGVyLCBldCBjdW0gbG9yZW0gZGlzcHV0YXRpb25pLiBTaXQgdXQgbWFnbmEgZGVsZW5pdCwgYXNzdW0gdmlkaXNzZSB2b2NpYnVzIHNlZCB1dC4gSW4gYXBlcmlyaSBtYWxvcnVtIGFjY3VzYW11cyBzZWEsIG5vdnVtIG1lZGlvY3JpdGF0ZW0gaXVzIGF0LiBEdW8gYWdhbSBwcm9ibyBob25lc3RhdGlzIHV0LiBOZWMgcmVnaW9uZSBzcGxlbmRpZGUgY3UsIHVudW0gZ3JhZWNvIHZpdmVuZHVtIGluIGR1by4nXG59XG5cbi8qKlxuICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgRGFmZlByb2R1Y3RzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZQcm9kdWN0PntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrUHJvZHVjdCk7XG4gIH1cbn1cbiJdfQ==