/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
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
        this.id = faker.random.number({ min: 1, max: 10000 }).toString();
        this.url = productImageUrlsList[faker.random.number(productImageUrlsList.length - 1)];
        this.label = faker.lorem.sentence();
    }
    return MockProductImage;
}());
/**
 * Mocked DaffProductImage object.
 */
export { MockProductImage };
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
    tslib_1.__extends(DaffProductImageFactory, _super);
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
    /** @nocollapse */ DaffProductImageFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductImageFactory_Factory() { return new DaffProductImageFactory(); }, token: DaffProductImageFactory, providedIn: "root" });
    return DaffProductImageFactory;
}(DaffModelFactory));
export { DaffProductImageFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9wcm9kdWN0LWltYWdlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztJQUVwRCxvQkFBb0IsR0FBYTtJQUNyQyx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0NBQzNCOzs7O0FBS0Q7Ozs7SUFBQTtRQUNFLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUQsUUFBRyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlFLFVBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsOEJBQTBEOztJQUMxRCwrQkFBOEU7O0lBQzlFLGlDQUErQjs7Ozs7QUFNakM7SUFHNkMsbURBQWtDO0lBQzdFO2VBQ0Usa0JBQU0sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7a0NBN0hEO0NBa0lDLEFBUEQsQ0FHNkMsZ0JBQWdCLEdBSTVEO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RJbWFnZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5jb25zdCBwcm9kdWN0SW1hZ2VVcmxzTGlzdDogc3RyaW5nW10gPSBbXG4gICcvYXNzZXRzL3Byb2R1Y3RzLzAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMS5qcGcnLFxuICAnL2Fzc2V0cy9wcm9kdWN0cy8yLmpwZycsXG4gICcvYXNzZXRzL3Byb2R1Y3RzLzMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNC5qcGcnLFxuICAnL2Fzc2V0cy9wcm9kdWN0cy81LmpwZycsXG4gICcvYXNzZXRzL3Byb2R1Y3RzLzYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNy5qcGcnLFxuICAnL2Fzc2V0cy9wcm9kdWN0cy84LmpwZycsXG4gICcvYXNzZXRzL3Byb2R1Y3RzLzkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMjkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMzkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNDkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNTkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNjkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvNzkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvODkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTAuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTEuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTIuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTMuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTQuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTUuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTYuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTcuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTguanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvOTkuanBnJyxcbiAgJy9hc3NldHMvcHJvZHVjdHMvMTAwLmpwZydcbl07XG5cbi8qKlxuICogTW9ja2VkIERhZmZQcm9kdWN0SW1hZ2Ugb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTW9ja1Byb2R1Y3RJbWFnZSBpbXBsZW1lbnRzIERhZmZQcm9kdWN0SW1hZ2Uge1xuICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMH0pLnRvU3RyaW5nKCk7XG4gIHVybCA9IHByb2R1Y3RJbWFnZVVybHNMaXN0W2Zha2VyLnJhbmRvbS5udW1iZXIocHJvZHVjdEltYWdlVXJsc0xpc3QubGVuZ3RoLTEpXVxuICBsYWJlbCA9IGZha2VyLmxvcmVtLnNlbnRlbmNlKCk7XG59XG5cbi8qKlxuICogQSBmYWN0b3J5IGZvciBjcmVhdGluZyBEYWZmUHJvZHVjdEltYWdlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlByb2R1Y3RJbWFnZT4ge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tQcm9kdWN0SW1hZ2UpO1xuICB9XG59XG4iXX0=