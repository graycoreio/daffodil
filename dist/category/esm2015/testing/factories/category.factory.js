/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCategory {
    constructor() {
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
}
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
export class DaffCategoryFactory extends DaffModelFactory {
    constructor() {
        super(MockCategory);
    }
}
DaffCategoryFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCategoryFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCategoryFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryFactory_Factory() { return new DaffCategoryFactory(); }, token: DaffCategoryFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhdGVnb3J5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNELFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRSxnQkFBVyxHQUFHLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ25ELFlBQVksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDOUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQ3BELGNBQWMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTthQUNqRCxDQUFDLENBQUE7UUFDRixtQkFBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUN4RCxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixnQkFBVyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUFBOzs7SUFaQywwQkFBMEQ7O0lBQzNELDRCQUF3Qzs7SUFDeEMsbUNBQWlFOztJQUNoRSxtQ0FLRTs7SUFDRixzQ0FBd0Q7O0lBQ3hELHNDQUFtQjs7SUFDbkIsbUNBQW1FOztBQU1yRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQThCO0lBQ3JFO1FBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ2F0ZWdvcnkgaW1wbGVtZW50cyBEYWZmQ2F0ZWdvcnkge1xuICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMH0pLnRvU3RyaW5nKCk7XG5cdG5hbWUgPSBmYWtlci5jb21tZXJjZS5wcm9kdWN0TWF0ZXJpYWwoKTtcblx0ZGVzY3JpcHRpb24gPSBmYWtlci5yYW5kb20ud29yZHMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApKTtcbiAgYnJlYWRjcnVtYnMgPSBbe1xuICAgIGNhdGVnb3J5SWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KSxcbiAgICBjYXRlZ29yeU5hbWU6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpLFxuICAgIGNhdGVnb3J5TGV2ZWw6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA1fSksXG4gICAgY2F0ZWdvcnlVcmxLZXk6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpXG4gIH1dXG4gIGNoaWxkcmVuX2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIHRvdGFsX3Byb2R1Y3RzID0gMTtcbiAgcHJvZHVjdF9pZHMgPSBbZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pLnRvU3RyaW5nKCldO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ2F0ZWdvcnk+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tDYXRlZ29yeSk7XG4gIH1cbn1cbiJdfQ==