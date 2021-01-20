/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCategory = /** @class */ (function () {
    function MockCategory() {
        this.id = faker.random.number({ min: 1, max: 10000 }).toString();
        this.name = faker.commerce.productMaterial();
        this.description = faker.random.words(Math.floor(Math.random() * 20));
        this.breadcrumbs = [{
                categoryId: faker.random.number({ min: 1, max: 100 }),
                categoryName: faker.commerce.productMaterial(),
                categoryLevel: faker.random.number({ min: 1, max: 5 }),
                categoryUrlKey: faker.commerce.productMaterial()
            }];
        this.children_count = faker.random.number({ min: 1, max: 10 });
        this.total_products = 1;
        this.product_ids = [faker.random.number({ min: 1, max: 100 }).toString()];
    }
    return MockCategory;
}());
export { MockCategory };
if (false) {
    /** @type {?} */
    MockCategory.prototype.id;
    /** @type {?} */
    MockCategory.prototype.name;
    /** @type {?} */
    MockCategory.prototype.description;
    /** @type {?} */
    MockCategory.prototype.breadcrumbs;
    /** @type {?} */
    MockCategory.prototype.children_count;
    /** @type {?} */
    MockCategory.prototype.total_products;
    /** @type {?} */
    MockCategory.prototype.product_ids;
}
var DaffCategoryFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCategoryFactory, _super);
    function DaffCategoryFactory() {
        return _super.call(this, MockCategory) || this;
    }
    DaffCategoryFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCategoryFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryFactory_Factory() { return new DaffCategoryFactory(); }, token: DaffCategoryFactory, providedIn: "root" });
    return DaffCategoryFactory;
}(DaffModelFactory));
export { DaffCategoryFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhdGVnb3J5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNELFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRSxnQkFBVyxHQUFHLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ25ELFlBQVksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDOUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTthQUNqRCxDQUFDLENBQUE7UUFDRixtQkFBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUN4RCxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixnQkFBVyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7SUFaQywwQkFBMEQ7O0lBQzNELDRCQUF3Qzs7SUFDeEMsbUNBQWlFOztJQUNoRSxtQ0FLRTs7SUFDRixzQ0FBd0Q7O0lBQ3hELHNDQUFtQjs7SUFDbkIsbUNBQW1FOztBQUdyRTtJQUd5QywrQ0FBOEI7SUFDckU7ZUFDRSxrQkFBTSxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBdkJEO0NBNEJDLEFBUEQsQ0FHeUMsZ0JBQWdCLEdBSXhEO1NBSlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhdGVnb3J5JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tDYXRlZ29yeSBpbXBsZW1lbnRzIERhZmZDYXRlZ29yeSB7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDAwfSkudG9TdHJpbmcoKTtcblx0bmFtZSA9IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpO1xuXHRkZXNjcmlwdGlvbiA9IGZha2VyLnJhbmRvbS53b3JkcyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkpO1xuICBicmVhZGNydW1icyA9IFt7XG4gICAgY2F0ZWdvcnlJZDogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pLFxuICAgIGNhdGVnb3J5TmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKCksXG4gICAgY2F0ZWdvcnlMZXZlbDogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDV9KSxcbiAgICBjYXRlZ29yeVVybEtleTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKClcbiAgfV1cbiAgY2hpbGRyZW5fY291bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTB9KTtcbiAgdG90YWxfcHJvZHVjdHMgPSAxO1xuICBwcm9kdWN0X2lkcyA9IFtmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSkudG9TdHJpbmcoKV07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDYXRlZ29yeT57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja0NhdGVnb3J5KTtcbiAgfVxufVxuIl19