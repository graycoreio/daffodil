/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';
import { transformMagentoProduct, transformManyMagentoProducts } from './transforms/product-transformers';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
/**
 * A service for making magento apollo queries for products of type, DaffProduct.
 */
export class DaffMagentoProductService {
    /**
     * @param {?} apollo
     */
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Get an Observable of a DaffProduct by id.
     * @param {?} productId a product Id
     * @return {?}
     */
    get(productId) {
        return this.apollo.query({
            query: GetProductQuery,
            variables: {
                sku: productId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => transformMagentoProduct(result.data.products.items[0], result.data.storeConfig.secure_base_media_url))));
    }
    /**
     * Get an Observable of an array of DaffProducts.
     * @return {?}
     */
    getAll() {
        return this.apollo.query({
            query: GetAllProductsQuery
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => transformManyMagentoProducts(result.data.products.items, result.data.storeConfig.secure_base_media_url))));
    }
    //todo: add actual getBestSellers apollo call for Magento.
    //todo: move to a different bestsellers module.
    /**
     * @return {?}
     */
    getBestSellers() {
        return of(null);
    }
}
DaffMagentoProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoProductService.ctorParameters = () => [
    { type: Apollo }
];
/** @nocollapse */ DaffMagentoProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoProductService_Factory() { return new DaffMagentoProductService(i0.ɵɵinject(i1.Apollo)); }, token: DaffMagentoProductService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoProductService.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7OztBQVMxRyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBQ3BDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7Ozs7O0lBTXRDLEdBQUcsQ0FBQyxTQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFNO1lBQy9CLEtBQUssRUFBRSxlQUFlO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVixHQUFHLEVBQUUsU0FBUzthQUNkO1NBQ0QsQ0FBQyxDQUFDLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFBQyxDQUNySCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBTTtZQUMvQixLQUFLLEVBQUUsbUJBQW1CO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEVBQUMsQ0FDdkgsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUlELGNBQWM7UUFDWixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7WUFwQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYlEsTUFBTTs7Ozs7Ozs7SUFlRCwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcm9kdWN0LXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdldEFsbFByb2R1Y3RzUXVlcnkgfSBmcm9tICcuL3F1ZXJpZXMvZ2V0LWFsbC1wcm9kdWN0cyc7XG5pbXBvcnQgeyBHZXRQcm9kdWN0UXVlcnkgfSBmcm9tICcuL3F1ZXJpZXMvZ2V0LXByb2R1Y3QnO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b1Byb2R1Y3QsIHRyYW5zZm9ybU1hbnlNYWdlbnRvUHJvZHVjdHMgfSBmcm9tICcuL3RyYW5zZm9ybXMvcHJvZHVjdC10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgbWFnZW50byBhcG9sbG8gcXVlcmllcyBmb3IgcHJvZHVjdHMgb2YgdHlwZSwgRGFmZlByb2R1Y3QuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvUHJvZHVjdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUHJvZHVjdFNlcnZpY2VJbnRlcmZhY2UgeyAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBvbGxvOiBBcG9sbG8pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBPYnNlcnZhYmxlIG9mIGEgRGFmZlByb2R1Y3QgYnkgaWQuXG4gICAqIEBwYXJhbSBwcm9kdWN0SWQgYSBwcm9kdWN0IElkXG4gICAqL1xuICBnZXQocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PGFueT4oe1xuXHRcdFx0cXVlcnk6IEdldFByb2R1Y3RRdWVyeSxcblx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRza3U6IHByb2R1Y3RJZFxuXHRcdFx0fVxuXHRcdH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRyYW5zZm9ybU1hZ2VudG9Qcm9kdWN0KHJlc3VsdC5kYXRhLnByb2R1Y3RzLml0ZW1zWzBdLCByZXN1bHQuZGF0YS5zdG9yZUNvbmZpZy5zZWN1cmVfYmFzZV9tZWRpYV91cmwpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIE9ic2VydmFibGUgb2YgYW4gYXJyYXkgb2YgRGFmZlByb2R1Y3RzLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3RbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxhbnk+KHtcblx0XHRcdHF1ZXJ5OiBHZXRBbGxQcm9kdWN0c1F1ZXJ5XG5cdFx0fSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdHJhbnNmb3JtTWFueU1hZ2VudG9Qcm9kdWN0cyhyZXN1bHQuZGF0YS5wcm9kdWN0cy5pdGVtcywgcmVzdWx0LmRhdGEuc3RvcmVDb25maWcuc2VjdXJlX2Jhc2VfbWVkaWFfdXJsKSlcbiAgICApO1xuICB9XG5cbiAgLy90b2RvOiBhZGQgYWN0dWFsIGdldEJlc3RTZWxsZXJzIGFwb2xsbyBjYWxsIGZvciBNYWdlbnRvLlxuICAvL3RvZG86IG1vdmUgdG8gYSBkaWZmZXJlbnQgYmVzdHNlbGxlcnMgbW9kdWxlLlxuICBnZXRCZXN0U2VsbGVycygpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cbn1cbiJdfQ==