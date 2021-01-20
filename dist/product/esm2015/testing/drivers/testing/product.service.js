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
export class DaffTestingProductService {
    /**
     * @param {?} productFactory
     * @param {?} productImageFactory
     */
    constructor(productFactory, productImageFactory) {
        this.productFactory = productFactory;
        this.productImageFactory = productImageFactory;
    }
    /**
     * Get all products as DaffProduct[].
     *
     * @return {?} An Observable of Product[]
     */
    getAll() {
        return of([
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) })
        ]);
    }
    /**
     * Get all best selling products.
     *
     * @return {?} An Observable of Product[]
     */
    getBestSellers() {
        return of([
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
            this.productFactory.create({ images: this.productImageFactory.createMany(5) })
        ]);
    }
    /**
     * Get product by ID
     *
     * @param {?} productId product ID
     * @return {?} An Observable of a Product
     */
    get(productId) {
        return of(this.productFactory.create({ images: this.productImageFactory.createMany(5) }));
    }
}
DaffTestingProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingProductService.ctorParameters = () => [
    { type: DaffProductFactory },
    { type: DaffProductImageFactory }
];
/** @nocollapse */ DaffTestingProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingProductService_Factory() { return new DaffTestingProductService(i0.ɵɵinject(i1.DaffProductFactory), i0.ɵɵinject(i2.DaffProductImageFactory)); }, token: DaffTestingProductService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7OztBQVdoRixNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVwQyxZQUNVLGNBQWtDLEVBQ2xDLG1CQUE0QztRQUQ1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtJQUFHLENBQUM7Ozs7OztJQU8xRCxNQUFNO1FBQ0osT0FBTyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQzlFLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU9ELGNBQWM7UUFDWixPQUFPLEVBQUUsQ0FBQztZQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUM5RSxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBUUQsR0FBRyxDQUFDLFNBQWlCO1FBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBOUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhRLGtCQUFrQjtZQUNsQix1QkFBdUI7Ozs7Ozs7O0lBYzVCLG1EQUEwQzs7Ozs7SUFDMUMsd0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmFjdG9yaWVzL3Byb2R1Y3QuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9wcm9kdWN0LWltYWdlLmZhY3RvcnknO1xuXG4vKipcbiAqIFRoZSBwcm9kdWN0IHRlc3RpbmcgZHJpdmVyIHRvIG1vY2sgdGhlIGJhY2tlbmQgcHJvZHVjdCBzZXJ2aWNlLlxuICogXG4gKiBAcGFyYW0gcHJvZHVjdEZhY3RvcnkgLSBBIERhZmZQcm9kdWN0RmFjdG9yeSBpbnN0YW5jZVxuICogQHBhcmFtIHByb2R1Y3RJbWFnZUZhY3RvcnkgLSBBIERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5IGluc3RhbmNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nUHJvZHVjdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUHJvZHVjdFNlcnZpY2VJbnRlcmZhY2Uge1xuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RGYWN0b3J5OiBEYWZmUHJvZHVjdEZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VGYWN0b3J5OiBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSkge31cblxuICAvKipcbiAgICogR2V0IGFsbCBwcm9kdWN0cyBhcyBEYWZmUHJvZHVjdFtdLlxuICAgKiBcbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBQcm9kdWN0W11cbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gb2YoW1xuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KVxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYmVzdCBzZWxsaW5nIHByb2R1Y3RzLlxuICAgKiBcbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBQcm9kdWN0W11cbiAgICovXG4gIGdldEJlc3RTZWxsZXJzKCk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3RbXT4ge1xuICAgIHJldHVybiBvZihbXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KSxcbiAgICAgIHRoaXMucHJvZHVjdEZhY3RvcnkuY3JlYXRlKHsgaW1hZ2VzOiB0aGlzLnByb2R1Y3RJbWFnZUZhY3RvcnkuY3JlYXRlTWFueSg1KX0pLFxuICAgICAgdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSksXG4gICAgICB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZSh7IGltYWdlczogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZU1hbnkoNSl9KVxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGJ5IElEXG4gICAqIFxuICAgKiBAcGFyYW0gcHJvZHVjdElkIHByb2R1Y3QgSURcbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBhIFByb2R1Y3RcbiAgICovXG4gIGdldChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3Q+IHtcbiAgICByZXR1cm4gb2YodGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGUoeyBpbWFnZXM6IHRoaXMucHJvZHVjdEltYWdlRmFjdG9yeS5jcmVhdGVNYW55KDUpfSkpO1xuICB9XG59XG4iXX0=