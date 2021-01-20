/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DaffInMemoryBackendCategoryService = /** @class */ (function () {
    function DaffInMemoryBackendCategoryService(categoryFactory, categoryPageConfigurationFactory, productInMemoryBackendService) {
        this.categoryFactory = categoryFactory;
        this.categoryPageConfigurationFactory = categoryPageConfigurationFactory;
        this.productInMemoryBackendService = productInMemoryBackendService;
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        /** @type {?} */
        var allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);
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
        function () {
            return {
                body: {
                    category: _this.category,
                    categoryPageConfigurationState: _this.categoryPageConfigurationState,
                    products: _this.productInMemoryBackendService.products
                },
                status: STATUS.OK
            };
        }));
    };
    /**
     * @private
     * @param {?} allIds
     * @param {?} pageSize
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.getTotalPages = /**
     * @private
     * @param {?} allIds
     * @param {?} pageSize
     * @return {?}
     */
    function (allIds, pageSize) {
        return Math.ceil(allIds.length / pageSize);
    };
    /**
     * @private
     * @param {?} allIds
     * @param {?} currentPage
     * @param {?} pageSize
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.trimProductIdsToSinglePage = /**
     * @private
     * @param {?} allIds
     * @param {?} currentPage
     * @param {?} pageSize
     * @return {?}
     */
    function (allIds, currentPage, pageSize) {
        /** @type {?} */
        var tempIds = tslib_1.__spread(allIds);
        tempIds.splice(0, (currentPage - 1) * pageSize);
        tempIds.splice(pageSize, tempIds.length - pageSize);
        return tempIds;
    };
    /**
     * @private
     * @param {?} products
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.generateProductIdSubset = /**
     * @private
     * @param {?} products
     * @return {?}
     */
    function (products) {
        return randomSubset(products).map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return product.id; }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.generatePageSize = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        if (reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
            return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
        }
        return 10;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCategoryService.prototype.getCurrentPageParam = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        if (reqInfo.req.params.map && reqInfo.req.params.map.get('current_page') && reqInfo.req.params.map.get('current_page')[0]) {
            return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
        }
        return 1;
    };
    DaffInMemoryBackendCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCategoryService.ctorParameters = function () { return [
        { type: DaffCategoryFactory },
        { type: DaffCategoryPageConfigurationStateFactory },
        { type: DaffInMemoryBackendProductService }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCategoryService_Factory() { return new DaffInMemoryBackendCategoryService(i0.ɵɵinject(i1.DaffCategoryFactory), i0.ɵɵinject(i2.DaffCategoryPageConfigurationStateFactory), i0.ɵɵinject(i3.DaffInMemoryBackendProductService)); }, token: DaffInMemoryBackendCategoryService, providedIn: "root" });
    return DaffInMemoryBackendCategoryService;
}());
export { DaffInMemoryBackendCategoryService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaW5tZW1vcnktYmFja2VuZC9jYXRlZ29yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBSUwsTUFBTSxFQUNQLE1BQU0sMkJBQTJCLENBQUM7QUFHbkMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOzs7OztBQUVuSDtJQU9FLDRDQUNVLGVBQW9DLEVBQ3BDLGdDQUEyRSxFQUMzRSw2QkFBZ0U7UUFGaEUsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBMkM7UUFDM0Usa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFtQztJQUN2RSxDQUFDOzs7Ozs7SUFFSiw0REFBZTs7Ozs7SUFBZixVQUFnQixHQUFXLEVBQUUsS0FBMkI7UUFDdEQsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxxREFBUTs7O0lBQVI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRUQsZ0RBQUc7Ozs7SUFBSCxVQUFJLE9BQVk7UUFBaEIsaUJBMkJBOztZQTFCTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQztRQUVyRyxJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGdD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SUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pILE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQTlFRCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLG1CQUFtQjtnQkFDbkIseUNBQXlDO2dCQUx6QyxpQ0FBaUM7Ozs2Q0FUMUM7Q0ErRkMsQUEvRUQsSUErRUM7U0E1RVksa0NBQWtDOzs7SUFDN0Msc0RBQXVCOztJQUN2Qiw0RUFBd0Y7Ozs7O0lBR3RGLDZEQUE0Qzs7Ozs7SUFDNUMsOEVBQW1GOzs7OztJQUNuRiwyRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJbk1lbW9yeURiU2VydmljZSxcbiAgUmVxdWVzdEluZm9VdGlsaXRpZXMsXG4gIFBhcnNlZFJlcXVlc3RVcmwsXG4gIFNUQVRVU1xufSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5LCBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLCBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnQGRhZmZvZGlsL2NhdGVnb3J5JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRQcm9kdWN0U2VydmljZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcnO1xuaW1wb3J0IHsgcmFuZG9tU3Vic2V0IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeUZhY3RvcnkgfSBmcm9tICcuLi9mYWN0b3JpZXMvY2F0ZWdvcnkuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeSB9IGZyb20gJy4uL2ZhY3Rvcmllcy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXRlZ29yeVNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG4gIGNhdGVnb3J5OiBEYWZmQ2F0ZWdvcnk7XG4gIGNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTogRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxEYWZmQ2F0ZWdvcnlSZXF1ZXN0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhdGVnb3J5RmFjdG9yeTogRGFmZkNhdGVnb3J5RmFjdG9yeSxcbiAgICBwcml2YXRlIGNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25GYWN0b3J5OiBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeSxcbiAgICBwcml2YXRlIHByb2R1Y3RJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZywgdXRpbHM6IFJlcXVlc3RJbmZvVXRpbGl0aWVzKTogUGFyc2VkUmVxdWVzdFVybCB7XG4gICAgcmV0dXJuIHV0aWxzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuICB9XG5cbiAgY3JlYXRlRGIoKTogYW55IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXQocmVxSW5mbzogYW55KSB7XG5cdFx0Y29uc3QgYWxsQ2F0ZWdvcnlQcm9kdWN0SWRzID0gdGhpcy5nZW5lcmF0ZVByb2R1Y3RJZFN1YnNldCh0aGlzLnByb2R1Y3RJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlLnByb2R1Y3RzKTtcblxuICAgIHRoaXMuY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlID0gdGhpcy5jYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uRmFjdG9yeS5jcmVhdGUoe1xuXHRcdFx0aWQ6IHJlcUluZm8uaWQsXG5cdFx0XHRwYWdlX3NpemU6IHRoaXMuZ2VuZXJhdGVQYWdlU2l6ZShyZXFJbmZvKSxcblx0XHRcdGN1cnJlbnRfcGFnZTogdGhpcy5nZXRDdXJyZW50UGFnZVBhcmFtKHJlcUluZm8pLFxuXHRcdFx0dG90YWxfcGFnZXM6IHRoaXMuZ2V0VG90YWxQYWdlcyhhbGxDYXRlZ29yeVByb2R1Y3RJZHMsIHRoaXMuZ2VuZXJhdGVQYWdlU2l6ZShyZXFJbmZvKSksXG5cdFx0XHRwcm9kdWN0X2lkczogdGhpcy50cmltUHJvZHVjdElkc1RvU2luZ2xlUGFnZShhbGxDYXRlZ29yeVByb2R1Y3RJZHMsIHRoaXMuZ2V0Q3VycmVudFBhZ2VQYXJhbShyZXFJbmZvKSwgdGhpcy5nZW5lcmF0ZVBhZ2VTaXplKHJlcUluZm8pKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnlGYWN0b3J5LmNyZWF0ZSh7XG5cdFx0XHRpZDogcmVxSW5mby5pZCxcblx0XHRcdHRvdGFsX3Byb2R1Y3RzOiBhbGxDYXRlZ29yeVByb2R1Y3RJZHMubGVuZ3RoLFxuXHRcdFx0cGFnZV9zaXplOiB0aGlzLmdlbmVyYXRlUGFnZVNpemUocmVxSW5mbyksXG5cdFx0fSk7XG5cbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxuICAgICAgICAgIGNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTogdGhpcy5jYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUsXG4gICAgICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdEluTWVtb3J5QmFja2VuZFNlcnZpY2UucHJvZHVjdHNcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgIH07XG4gICAgfSk7XG5cdH1cblx0XG5cdHByaXZhdGUgZ2V0VG90YWxQYWdlcyhhbGxJZHM6IHN0cmluZ1tdLCBwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIE1hdGguY2VpbChhbGxJZHMubGVuZ3RoL3BhZ2VTaXplKTtcblx0fVxuXG5cdHByaXZhdGUgdHJpbVByb2R1Y3RJZHNUb1NpbmdsZVBhZ2UoYWxsSWRzOiBhbnlbXSwgY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuXHRcdGNvbnN0IHRlbXBJZHMgPSBbLi4uYWxsSWRzXTtcblx0XHR0ZW1wSWRzLnNwbGljZSgwLCAoY3VycmVudFBhZ2UtMSkgKiBwYWdlU2l6ZSk7XG5cdFx0dGVtcElkcy5zcGxpY2UocGFnZVNpemUsIHRlbXBJZHMubGVuZ3RoLXBhZ2VTaXplKTtcblxuXHRcdHJldHVybiB0ZW1wSWRzO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZVByb2R1Y3RJZFN1YnNldChwcm9kdWN0czogRGFmZlByb2R1Y3RbXSk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gcmFuZG9tU3Vic2V0KHByb2R1Y3RzKS5tYXAocHJvZHVjdCA9PiBwcm9kdWN0LmlkKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVQYWdlU2l6ZShyZXFJbmZvKSB7XG5cdFx0aWYocmVxSW5mby5yZXEucGFyYW1zLm1hcCAmJiByZXFJbmZvLnJlcS5wYXJhbXMubWFwLmdldCgncGFnZV9zaXplJykgJiYgcmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ3BhZ2Vfc2l6ZScpWzBdKSB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQocmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ3BhZ2Vfc2l6ZScpWzBdLCAxMCk7XG5cdFx0fVxuXHRcdHJldHVybiAxMDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0Q3VycmVudFBhZ2VQYXJhbShyZXFJbmZvKSB7XG5cdFx0aWYocmVxSW5mby5yZXEucGFyYW1zLm1hcCAmJiByZXFJbmZvLnJlcS5wYXJhbXMubWFwLmdldCgnY3VycmVudF9wYWdlJykgJiYgcmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ2N1cnJlbnRfcGFnZScpWzBdKSB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQocmVxSW5mby5yZXEucGFyYW1zLm1hcC5nZXQoJ2N1cnJlbnRfcGFnZScpWzBdLCAxMCk7XG5cdFx0fVxuXHRcdHJldHVybiAxO1xuXHR9XG59XG4iXX0=