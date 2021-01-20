/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffProductFactory } from '../../factories/product.factory';
import { DaffProductImageFactory } from '../../factories/product-image.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../factories/product.factory";
import * as i2 from "../../factories/product-image.factory";
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
    /** @nocollapse */ DaffTestingProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingProductService_Factory() { return new DaffTestingProductService(i0.ɵɵinject(i1.DaffProductFactory), i0.ɵɵinject(i2.DaffProductImageFactory)); }, token: DaffTestingProductService, providedIn: "root" });
    return DaffTestingProductService;
}());
export { DaffTestingProductService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7OztBQVFoRjtJQUtFLG1DQUNVLGNBQWtDLEVBQ2xDLG1CQUE0QztRQUQ1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtJQUFHLENBQUM7SUFFMUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gsMENBQU07Ozs7O0lBQU47UUFDRSxPQUFPLEVBQUUsQ0FBQztZQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDOUUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNILGtEQUFjOzs7OztJQUFkO1FBQ0UsT0FBTyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDOUUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0gsdUNBQUc7Ozs7OztJQUFILFVBQUksU0FBaUI7UUFDbkIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOztnQkE5Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxrQkFBa0I7Z0JBQ2xCLHVCQUF1Qjs7O29DQU5oQztDQTZEQyxBQS9DRCxJQStDQztTQTVDWSx5QkFBeUI7Ozs7OztJQUdsQyxtREFBMEM7Ozs7O0lBQzFDLHdEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0RmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9wcm9kdWN0LmZhY3RvcnknO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RJbWFnZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvcHJvZHVjdC1pbWFnZS5mYWN0b3J5JztcblxuLyoqXG4gKiBUaGUgcHJvZHVjdCB0ZXN0aW5nIGRyaXZlciB0byBtb2NrIHRoZSBiYWNrZW5kIHByb2R1Y3Qgc2VydmljZS5cbiAqIFxuICogQHBhcmFtIHByb2R1Y3RGYWN0b3J5IC0gQSBEYWZmUHJvZHVjdEZhY3RvcnkgaW5zdGFuY2VcbiAqIEBwYXJhbSBwcm9kdWN0SW1hZ2VGYWN0b3J5IC0gQSBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSBpbnN0YW5jZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ1Byb2R1Y3RTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIHtcbiBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kdWN0RmFjdG9yeTogRGFmZlByb2R1Y3RGYWN0b3J5LFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlRmFjdG9yeTogRGFmZlByb2R1Y3RJbWFnZUZhY3RvcnkpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgcHJvZHVjdHMgYXMgRGFmZlByb2R1Y3RbXS5cbiAgICogXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgUHJvZHVjdFtdXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIG9mKFtcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSlcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGJlc3Qgc2VsbGluZyBwcm9kdWN0cy5cbiAgICogXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgUHJvZHVjdFtdXG4gICAqL1xuICBnZXRCZXN0U2VsbGVycygpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gb2YoW1xuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSlcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBJRFxuICAgKiBcbiAgICogQHBhcmFtIHByb2R1Y3RJZCBwcm9kdWN0IElEXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgYSBQcm9kdWN0XG4gICAqL1xuICBnZXQocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pKTtcbiAgfVxufVxuIl19