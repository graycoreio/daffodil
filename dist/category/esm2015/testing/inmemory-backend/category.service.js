/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { randomSubset } from '@daffodil/core';
import { DaffCategoryFactory } from '../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../factories/category-page-configuration-state.factory';
import * as i0 from "@angular/core";
import * as i1 from "../factories/category.factory";
import * as i2 from "../factories/category-page-configuration-state.factory";
import * as i3 from "@daffodil/product/testing";
export class DaffInMemoryBackendCategoryService {
    /**
     * @param {?} categoryFactory
     * @param {?} categoryPageConfigurationFactory
     * @param {?} productInMemoryBackendService
     */
    constructor(categoryFactory, categoryPageConfigurationFactory, productInMemoryBackendService) {
        this.categoryFactory = categoryFactory;
        this.categoryPageConfigurationFactory = categoryPageConfigurationFactory;
        this.productInMemoryBackendService = productInMemoryBackendService;
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * @return {?}
     */
    createDb() {
        return {};
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        /** @type {?} */
        const allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);
        this.categoryPageConfigurationState = this.categoryPageConfigurationFactory.create({
            id: reqInfo.id,
            page_size: this.generatePageSize(reqInfo),
            current_page: this.getCurrentPageParam(reqInfo),
            total_pages: this.getTotalPages(allCategoryProductIds, this.generatePageSize(reqInfo)),
            product_ids: this.trimProductIdsToSinglePage(allCategoryProductIds, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo))
        });
        this.category = this.categoryFactory.create({
            id: reqInfo.id,
            total_products: allCategoryProductIds.length,
            page_size: this.generatePageSize(reqInfo),
        });
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            return {
                body: {
                    category: this.category,
                    categoryPageConfigurationState: this.categoryPageConfigurationState,
                    products: this.productInMemoryBackendService.products
                },
                status: STATUS.OK
            };
        }));
    }
    /**
     * @private
     * @param {?} allIds
     * @param {?} pageSize
     * @return {?}
     */
    getTotalPages(allIds, pageSize) {
        return Math.ceil(allIds.length / pageSize);
    }
    /**
     * @private
     * @param {?} allIds
     * @param {?} currentPage
     * @param {?} pageSize
     * @return {?}
     */
    trimProductIdsToSinglePage(allIds, currentPage, pageSize) {
        /** @type {?} */
        const tempIds = [...allIds];
        tempIds.splice(0, (currentPage - 1) * pageSize);
        tempIds.splice(pageSize, tempIds.length - pageSize);
        return tempIds;
    }
    /**
     * @private
     * @param {?} products
     * @return {?}
     */
    generateProductIdSubset(products) {
        return randomSubset(products).map((/**
         * @param {?} product
         * @return {?}
         */
        product => product.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    generatePageSize(reqInfo) {
        if (reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
            return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
        }
        return 10;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCurrentPageParam(reqInfo) {
        if (reqInfo.req.params.map && reqInfo.req.params.map.get('current_page') && reqInfo.req.params.map.get('current_page')[0]) {
            return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
        }
        return 1;
    }
}
DaffInMemoryBackendCategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCategoryService.ctorParameters = () => [
    { type: DaffCategoryFactory },
    { type: DaffCategoryPageConfigurationStateFactory },
    { type: DaffInMemoryBackendProductService }
];
/** @nocollapse */ DaffInMemoryBackendCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCategoryService_Factory() { return new DaffInMemoryBackendCategoryService(i0.ɵɵinject(i1.DaffCategoryFactory), i0.ɵɵinject(i2.DaffCategoryPageConfigurationStateFactory), i0.ɵɵinject(i3.DaffInMemoryBackendProductService)); }, token: DaffInMemoryBackendCategoryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendCategoryService.prototype.category;
    /** @type {?} */
    DaffInMemoryBackendCategoryService.prototype.categoryPageConfigurationState;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCategoryService.prototype.categoryFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCategoryService.prototype.categoryPageConfigurationFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCategoryService.prototype.productInMemoryBackendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaW5tZW1vcnktYmFja2VuZC9jYXRlZ29yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUduQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7Ozs7O0FBS25ILE1BQU0sT0FBTyxrQ0FBa0M7Ozs7OztJQUk3QyxZQUNVLGVBQW9DLEVBQ3BDLGdDQUEyRSxFQUMzRSw2QkFBZ0U7UUFGaEUsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBMkM7UUFDM0Usa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFtQztJQUN2RSxDQUFDOzs7Ozs7SUFFSixlQUFlLENBQUMsR0FBVyxFQUFFLEtBQTJCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBWTs7Y0FDVixxQkFBcUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQztRQUVyRyxJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQztZ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QUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6SCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDOzs7WUE5RUQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsbUJBQW1CO1lBQ25CLHlDQUF5QztZQUx6QyxpQ0FBaUM7Ozs7O0lBV3hDLHNEQUF1Qjs7SUFDdkIsNEVBQXdGOzs7OztJQUd0Riw2REFBNEM7Ozs7O0lBQzVDLDhFQUFtRjs7Ozs7SUFDbkYsMkVBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSW5NZW1vcnlEYlNlcnZpY2UsXG4gIFJlcXVlc3RJbmZvVXRpbGl0aWVzLFxuICBQYXJzZWRSZXF1ZXN0VXJsLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeSwgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSwgRGFmZkNhdGVnb3J5UmVxdWVzdCB9IGZyb20gJ0BkYWZmb2RpbC9jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nJztcbmltcG9ydCB7IHJhbmRvbVN1YnNldCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGYWN0b3J5IH0gZnJvbSAnLi4vZmFjdG9yaWVzL2NhdGVnb3J5LmZhY3RvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi9mYWN0b3JpZXMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2F0ZWdvcnlTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuICBjYXRlZ29yeTogRGFmZkNhdGVnb3J5O1xuICBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU6IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8RGFmZkNhdGVnb3J5UmVxdWVzdD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXRlZ29yeUZhY3Rvcnk6IERhZmZDYXRlZ29yeUZhY3RvcnksXG4gICAgcHJpdmF0ZSBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uRmFjdG9yeTogRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW5NZW1vcnlCYWNrZW5kU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHV0aWxzOiBSZXF1ZXN0SW5mb1V0aWxpdGllcyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuICAgIHJldHVybiB1dGlscy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgfVxuXG4gIGNyZWF0ZURiKCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0KHJlcUluZm86IGFueSkge1xuXHRcdGNvbnN0IGFsbENhdGVnb3J5UHJvZHVjdElkcyA9IHRoaXMuZ2VuZXJhdGVQcm9kdWN0SWRTdWJzZXQodGhpcy5wcm9kdWN0SW5NZW1vcnlCYWNrZW5kU2VydmljZS5wcm9kdWN0cyk7XG5cbiAgICB0aGlzLmNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSA9IHRoaXMuY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvbkZhY3RvcnkuY3JlYXRlKHtcblx0XHRcdGlkOiByZXFJbmZvLmlkLFxuXHRcdFx0cGFnZV9zaXplOiB0aGlzLmdlbmVyYXRlUGFnZVNpemUocmVxSW5mbyksXG5cdFx0XHRjdXJyZW50X3BhZ2U6IHRoaXMuZ2V0Q3VycmVudFBhZ2VQYXJhbShyZXFJbmZvKSxcblx0XHRcdHRvdGFsX3BhZ2VzOiB0aGlzLmdldFRvdGFsUGFnZXMoYWxsQ2F0ZWdvcnlQcm9kdWN0SWRzLCB0aGlzLmdlbmVyYXRlUGFnZVNpemUocmVxSW5mbykpLFxuXHRcdFx0cHJvZHVjdF9pZHM6IHRoaXMudHJpbVByb2R1Y3RJZHNUb1NpbmdsZVBhZ2UoYWxsQ2F0ZWdvcnlQcm9kdWN0SWRzLCB0aGlzLmdldEN1cnJlbnRQYWdlUGFyYW0ocmVxSW5mbyksIHRoaXMuZ2VuZXJhdGVQYWdlU2l6ZShyZXFJbmZvKSlcblx0XHR9KTtcblxuXHRcdHRoaXMuY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5RmFjdG9yeS5jcmVhdGUoe1xuXHRcdFx0aWQ6IHJlcUluZm8uaWQsXG5cdFx0XHR0b3RhbF9wcm9kdWN0czogYWxsQ2F0ZWdvcnlQcm9kdWN0SWRzLmxlbmd0aCxcblx0XHRcdHBhZ2Vfc2l6ZTogdGhpcy5nZW5lcmF0ZVBhZ2VTaXplKHJlcUluZm8pLFxuXHRcdH0pO1xuXG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcbiAgICAgICAgICBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU6IHRoaXMuY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlLnByb2R1Y3RzXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICB9O1xuICAgIH0pO1xuXHR9XG5cdFxuXHRwcml2YXRlIGdldFRvdGFsUGFnZXMoYWxsSWRzOiBzdHJpbmdbXSwgcGFnZVNpemU6IG51bWJlcikge1xuXHRcdHJldHVybiBNYXRoLmNlaWwoYWxsSWRzLmxlbmd0aC9wYWdlU2l6ZSk7XG5cdH1cblxuXHRwcml2YXRlIHRyaW1Qcm9kdWN0SWRzVG9TaW5nbGVQYWdlKGFsbElkczogYW55W10sIGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpIHtcblx0XHRjb25zdCB0ZW1wSWRzID0gWy4uLmFsbElkc107XG5cdFx0dGVtcElkcy5zcGxpY2UoMCwgKGN1cnJlbnRQYWdlLTEpICogcGFnZVNpemUpO1xuXHRcdHRlbXBJZHMuc3BsaWNlKHBhZ2VTaXplLCB0ZW1wSWRzLmxlbmd0aC1wYWdlU2l6ZSk7XG5cblx0XHRyZXR1cm4gdGVtcElkcztcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVQcm9kdWN0SWRTdWJzZXQocHJvZHVjdHM6IERhZmZQcm9kdWN0W10pOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHJhbmRvbVN1YnNldChwcm9kdWN0cykubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlUGFnZVNpemUocmVxSW5mbykge1xuXHRcdGlmKHJlcUluZm8ucmVxLnBhcmFtcy5tYXAgJiYgcmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ3BhZ2Vfc2l6ZScpICYmIHJlcUluZm8ucmVxLnBhcmFtcy5tYXAuZ2V0KCdwYWdlX3NpemUnKVswXSkge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHJlcUluZm8ucmVxLnBhcmFtcy5tYXAuZ2V0KCdwYWdlX3NpemUnKVswXSwgMTApO1xuXHRcdH1cblx0XHRyZXR1cm4gMTA7XG5cdH1cblxuXHRwcml2YXRlIGdldEN1cnJlbnRQYWdlUGFyYW0ocmVxSW5mbykge1xuXHRcdGlmKHJlcUluZm8ucmVxLnBhcmFtcy5tYXAgJiYgcmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ2N1cnJlbnRfcGFnZScpICYmIHJlcUluZm8ucmVxLnBhcmFtcy5tYXAuZ2V0KCdjdXJyZW50X3BhZ2UnKVswXSkge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHJlcUluZm8ucmVxLnBhcmFtcy5tYXAuZ2V0KCdjdXJyZW50X3BhZ2UnKVswXSwgMTApO1xuXHRcdH1cblx0XHRyZXR1cm4gMTtcblx0fVxufVxuIl19