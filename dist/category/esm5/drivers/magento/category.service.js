/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { MagentoGetCategoryQuery } from './queries/get-category';
import { MagentoGetProductsQuery } from './queries/get-products';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { MagentoGetCategoryAggregations } from './queries/get-category-aggregations';
import { MagentoGetCustomAttributeMetadata } from './queries/custom-attribute-metadata';
import { buildCustomMetadataAttribute, addMetadataTypesToAggregates } from './transformers/custom-metadata-attributes-methods';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./transformers/category-response-transform.service";
import * as i3 from "./transformers/applied-filter-transformer.service";
import * as i4 from "./transformers/applied-sort-option-transformer.service";
var DaffMagentoCategoryService = /** @class */ (function () {
    function DaffMagentoCategoryService(apollo, magentoCategoryResponseTransformer, magentoAppliedFiltersTransformer, magentoAppliedSortTransformer) {
        this.apollo = apollo;
        this.magentoCategoryResponseTransformer = magentoCategoryResponseTransformer;
        this.magentoAppliedFiltersTransformer = magentoAppliedFiltersTransformer;
        this.magentoAppliedSortTransformer = magentoAppliedSortTransformer;
    }
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param categoryRequest A DaffCategoryRequest object.
     */
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.get = 
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    function (categoryRequest) {
        var _this = this;
        return combineLatest([
            this.apollo.query({
                query: MagentoGetCategoryQuery,
                variables: { filters: { ids: { eq: categoryRequest.id } } }
            }),
            this.apollo.query({
                query: MagentoGetCategoryAggregations,
                variables: { filter: { category_id: { eq: categoryRequest.id } } }
            }).pipe(switchMap((/**
             * @param {?} aggregationResult
             * @return {?}
             */
            function (aggregationResult) {
                return _this.apollo.query({
                    query: MagentoGetCustomAttributeMetadata,
                    variables: {
                        attributes: aggregationResult.data.products.aggregations
                            .filter((/**
                         * @param {?} aggregate
                         * @return {?}
                         */
                        function (aggregate) { return aggregate.attribute_code !== 'category_id'; }))
                            .map((/**
                         * @param {?} aggregate
                         * @return {?}
                         */
                        function (aggregate) { return buildCustomMetadataAttribute(aggregate); }))
                    }
                }).pipe(map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return addMetadataTypesToAggregates(response.data, aggregationResult.data); })));
            }))),
            this.apollo.query({
                query: MagentoGetProductsQuery,
                variables: this.getProductsQueryVariables(categoryRequest)
            })
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data); })), map((/**
         * @param {?} finalResult
         * @return {?}
         */
        function (finalResult) { return _this.magentoCategoryResponseTransformer.transform(finalResult); })));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.getProductsQueryVariables = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var queryVariables = {
            filter: this.magentoAppliedFiltersTransformer.transform(request.id, request.filter_requests)
        };
        if (request.page_size)
            queryVariables['pageSize'] = request.page_size;
        if (request.current_page)
            queryVariables['currentPage'] = request.current_page;
        if (request.applied_sort_option && request.applied_sort_direction) {
            queryVariables['sort'] = this.magentoAppliedSortTransformer.transform(request.applied_sort_option, request.applied_sort_direction);
        }
        return queryVariables;
    };
    /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.buildCompleteCategoryResponse = /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    function (categoryResponse, aggregationsAndSortsResponse, productsResponse) {
        return {
            category: categoryResponse.categoryList[0],
            products: productsResponse.products.items,
            aggregates: aggregationsAndSortsResponse.products.aggregations,
            sort_fields: aggregationsAndSortsResponse.products.sort_fields,
            total_count: productsResponse.products.total_count,
            page_info: productsResponse.products.page_info
        };
    };
    DaffMagentoCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCategoryService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoCategoryResponseTransformService },
        { type: DaffMagentoAppliedFiltersTransformService },
        { type: DaffMagentoAppliedSortOptionTransformService }
    ]; };
    /** @nocollapse */ DaffMagentoCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryService_Factory() { return new DaffMagentoCategoryService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoCategoryResponseTransformService), i0.ɵɵinject(i3.DaffMagentoAppliedFiltersTransformService), i0.ɵɵinject(i4.DaffMagentoAppliedSortOptionTransformService)); }, token: DaffMagentoCategoryService, providedIn: "root" });
    return DaffMagentoCategoryService;
}());
export { DaffMagentoCategoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoCategoryResponseTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoAppliedFiltersTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoAppliedSortTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9jYXRlZ29yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEgsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFakgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHckYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7OztBQUUvSDtJQUtFLG9DQUNVLE1BQWMsRUFDaEIsa0NBQStFLEVBQy9FLGdDQUEyRSxFQUMzRSw2QkFBMkU7UUFIekUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQix1Q0FBa0MsR0FBbEMsa0NBQWtDLENBQTZDO1FBQy9FLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBMkM7UUFDM0Usa0NBQTZCLEdBQTdCLDZCQUE2QixDQUE4QztJQUNo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QUFtQixFQUFFLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ25JO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7Ozs7SUFFTyxrRUFBNkI7Ozs7Ozs7SUFBckMsVUFDQyxnQkFBNkMsRUFDN0MsNEJBQW9FLEVBQ3BFLGdCQUE0QztRQUU1QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDMUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ3pDLFVBQVUsRUFBRSw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUM5RCxXQUFXLEVBQUUsNEJBQTRCLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDOUQsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXO1lBQ2xELFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUztTQUM5QyxDQUFDO0lBQ0gsQ0FBQzs7Z0JBNUVELFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBdEJRLE1BQU07Z0JBWU4sMkNBQTJDO2dCQUYzQyx5Q0FBeUM7Z0JBQ3pDLDRDQUE0Qzs7O3FDQWRyRDtDQW9HQyxBQTdFRCxJQTZFQztTQTFFWSwwQkFBMEI7Ozs7OztJQUduQyw0Q0FBc0I7Ozs7O0lBQ3hCLHdFQUF1Rjs7Ozs7SUFDdkYsc0VBQW1GOzs7OztJQUNuRixtRUFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2F0ZWdvcnktc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkdldENhdGVnb3J5UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2V0LWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvY29tcGxldGUtY2F0ZWdvcnktcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWFnZW50b0dldEFDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvZ2V0LWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9HZXRDYXRlZ29yeVF1ZXJ5IH0gZnJvbSAnLi9xdWVyaWVzL2dldC1jYXRlZ29yeSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0UHJvZHVjdHNSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2dldC1wcm9kdWN0cy1yZXNwb25zZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0UHJvZHVjdHNRdWVyeSB9IGZyb20gJy4vcXVlcmllcy9nZXQtcHJvZHVjdHMnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9BcHBsaWVkRmlsdGVyc1RyYW5zZm9ybVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9hcHBsaWVkLWZpbHRlci10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXBwbGllZFNvcnRPcHRpb25UcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBwbGllZC1zb3J0LW9wdGlvbi10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2F0ZWdvcnlSZXNwb25zZVRyYW5zZm9ybVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9jYXRlZ29yeS1yZXNwb25zZS10cmFuc2Zvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0UHJvZHVjdHNCeUNhdGVnb3JpZXNSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvcmVxdWVzdHMvZ2V0LXByb2R1Y3RzLWJ5LWNhdGVnb3JpZXMtcmVxdWVzdCc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnMgfSBmcm9tICcuL3F1ZXJpZXMvZ2V0LWNhdGVnb3J5LWFnZ3JlZ2F0aW9ucyc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2dldC1jYXRlZ29yeS1hZ2dyZWdhdGlvbnMtcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWFnZW50b0N1c3RvbUF0dHJpYnV0ZU1ldGFkYXRhUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9jdXN0b20tYXR0cmlidXRlLW1ldGFkYXRhLXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9HZXRDdXN0b21BdHRyaWJ1dGVNZXRhZGF0YSB9IGZyb20gJy4vcXVlcmllcy9jdXN0b20tYXR0cmlidXRlLW1ldGFkYXRhJztcbmltcG9ydCB7IGJ1aWxkQ3VzdG9tTWV0YWRhdGFBdHRyaWJ1dGUsIGFkZE1ldGFkYXRhVHlwZXNUb0FnZ3JlZ2F0ZXMgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9jdXN0b20tbWV0YWRhdGEtYXR0cmlidXRlcy1tZXRob2RzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXRlZ29yeVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG5cdFx0cHJpdmF0ZSBtYWdlbnRvQ2F0ZWdvcnlSZXNwb25zZVRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhdGVnb3J5UmVzcG9uc2VUcmFuc2Zvcm1TZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFnZW50b0FwcGxpZWRGaWx0ZXJzVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQXBwbGllZEZpbHRlcnNUcmFuc2Zvcm1TZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFnZW50b0FwcGxpZWRTb3J0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQXBwbGllZFNvcnRPcHRpb25UcmFuc2Zvcm1TZXJ2aWNlXG4gICkge31cblxuXHQvL3RvZG8gdGhlIE1hZ2VudG9HZXRDYXRlZ29yeVF1ZXJ5IG5lZWRzIHRvIGdldCBpdHMgb3duIHByb2R1Y3QgaWRzLlxuICAvKipcbiAgICogR2V0cyBhIGNhdGVnb3J5IGJhc2VkIG9uIHBhcmFtZXRlcnMuIERlZmF1bHQgY3VycmVudF9wYWdlIGlzIDEsIGFuZCBkZWZhdWx0IHBhZ2Vfc2l6ZSBpcyAyMC5cbiAgICogQHBhcmFtIGNhdGVnb3J5UmVxdWVzdCBBIERhZmZDYXRlZ29yeVJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgZ2V0KGNhdGVnb3J5UmVxdWVzdDogRGFmZkNhdGVnb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8RGFmZkdldENhdGVnb3J5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0QUNhdGVnb3J5UmVzcG9uc2U+KHtcblx0XHRcdFx0cXVlcnk6IE1hZ2VudG9HZXRDYXRlZ29yeVF1ZXJ5LFxuXHRcdFx0XHR2YXJpYWJsZXM6IHsgZmlsdGVyczoge2lkczogeyBlcTogY2F0ZWdvcnlSZXF1ZXN0LmlkfX19XG5cdFx0XHR9KSxcbiAgICAgIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9uc1Jlc3BvbnNlPih7XG5cdFx0XHRcdHF1ZXJ5OiBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnMsXG5cdFx0XHRcdHZhcmlhYmxlczoge2ZpbHRlcjoge2NhdGVnb3J5X2lkOiB7ZXE6IGNhdGVnb3J5UmVxdWVzdC5pZH19fVxuXHRcdFx0fSkucGlwZShcblx0XHRcdFx0c3dpdGNoTWFwKChhZ2dyZWdhdGlvblJlc3VsdCk6IE9ic2VydmFibGU8TWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zUmVzcG9uc2U+ID0+IFxuXHRcdFx0XHRcdHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9DdXN0b21BdHRyaWJ1dGVNZXRhZGF0YVJlc3BvbnNlPih7XG5cdFx0XHRcdFx0XHRxdWVyeTogTWFnZW50b0dldEN1c3RvbUF0dHJpYnV0ZU1ldGFkYXRhLFxuXHRcdFx0XHRcdFx0dmFyaWFibGVzOiB7IFxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBhZ2dyZWdhdGlvblJlc3VsdC5kYXRhLnByb2R1Y3RzLmFnZ3JlZ2F0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoYWdncmVnYXRlID0+IGFnZ3JlZ2F0ZS5hdHRyaWJ1dGVfY29kZSAhPT0gJ2NhdGVnb3J5X2lkJylcblx0XHRcdFx0XHRcdFx0XHQubWFwKGFnZ3JlZ2F0ZSA9PiBidWlsZEN1c3RvbU1ldGFkYXRhQXR0cmlidXRlKGFnZ3JlZ2F0ZSkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkucGlwZShcblx0XHRcdFx0XHRcdG1hcChyZXNwb25zZSA9PiBhZGRNZXRhZGF0YVR5cGVzVG9BZ2dyZWdhdGVzKHJlc3BvbnNlLmRhdGEsIGFnZ3JlZ2F0aW9uUmVzdWx0LmRhdGEpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSxcblx0XHRcdCksXG4gICAgICB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0UHJvZHVjdHNSZXNwb25zZT4oe1xuXHRcdFx0XHRxdWVyeTogTWFnZW50b0dldFByb2R1Y3RzUXVlcnksXG5cdFx0XHRcdHZhcmlhYmxlczogdGhpcy5nZXRQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzKGNhdGVnb3J5UmVxdWVzdClcblx0XHRcdH0pXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgocmVzdWx0KTogTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSA9PiB0aGlzLmJ1aWxkQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlKHJlc3VsdFswXS5kYXRhLCByZXN1bHRbMV0sIHJlc3VsdFsyXS5kYXRhKSksXG5cdFx0XHRtYXAoKGZpbmFsUmVzdWx0OiBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlKSA9PiB0aGlzLm1hZ2VudG9DYXRlZ29yeVJlc3BvbnNlVHJhbnNmb3JtZXIudHJhbnNmb3JtKGZpbmFsUmVzdWx0KSlcblx0XHQpO1xuXHR9XG5cdFxuXHRwcml2YXRlIGdldFByb2R1Y3RzUXVlcnlWYXJpYWJsZXMocmVxdWVzdDogRGFmZkNhdGVnb3J5UmVxdWVzdCk6IE1hZ2VudG9HZXRQcm9kdWN0c0J5Q2F0ZWdvcmllc1JlcXVlc3Qge1xuXHRcdGNvbnN0IHF1ZXJ5VmFyaWFibGVzID0ge1xuXHRcdFx0ZmlsdGVyOiB0aGlzLm1hZ2VudG9BcHBsaWVkRmlsdGVyc1RyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXF1ZXN0LmlkLCByZXF1ZXN0LmZpbHRlcl9yZXF1ZXN0cylcblx0XHR9O1xuXHRcdGlmKHJlcXVlc3QucGFnZV9zaXplKSBxdWVyeVZhcmlhYmxlc1sncGFnZVNpemUnXSA9IHJlcXVlc3QucGFnZV9zaXplO1xuXHRcdGlmKHJlcXVlc3QuY3VycmVudF9wYWdlKSBxdWVyeVZhcmlhYmxlc1snY3VycmVudFBhZ2UnXSA9IHJlcXVlc3QuY3VycmVudF9wYWdlO1xuXHRcdGlmKHJlcXVlc3QuYXBwbGllZF9zb3J0X29wdGlvbiAmJiByZXF1ZXN0LmFwcGxpZWRfc29ydF9kaXJlY3Rpb24pIHtcblx0XHRcdHF1ZXJ5VmFyaWFibGVzWydzb3J0J10gPSB0aGlzLm1hZ2VudG9BcHBsaWVkU29ydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXF1ZXN0LmFwcGxpZWRfc29ydF9vcHRpb24sIHJlcXVlc3QuYXBwbGllZF9zb3J0X2RpcmVjdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHF1ZXJ5VmFyaWFibGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBidWlsZENvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZShcblx0XHRjYXRlZ29yeVJlc3BvbnNlOiBNYWdlbnRvR2V0QUNhdGVnb3J5UmVzcG9uc2UsIFxuXHRcdGFnZ3JlZ2F0aW9uc0FuZFNvcnRzUmVzcG9uc2U6IE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9uc1Jlc3BvbnNlLFxuXHRcdHByb2R1Y3RzUmVzcG9uc2U6IE1hZ2VudG9HZXRQcm9kdWN0c1Jlc3BvbnNlXG5cdCk6IE1hZ2VudG9Db21wbGV0ZUNhdGVnb3J5UmVzcG9uc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjYXRlZ29yeTogY2F0ZWdvcnlSZXNwb25zZS5jYXRlZ29yeUxpc3RbMF0sXG5cdFx0XHRwcm9kdWN0czogcHJvZHVjdHNSZXNwb25zZS5wcm9kdWN0cy5pdGVtcyxcblx0XHRcdGFnZ3JlZ2F0ZXM6IGFnZ3JlZ2F0aW9uc0FuZFNvcnRzUmVzcG9uc2UucHJvZHVjdHMuYWdncmVnYXRpb25zLFxuXHRcdFx0c29ydF9maWVsZHM6IGFnZ3JlZ2F0aW9uc0FuZFNvcnRzUmVzcG9uc2UucHJvZHVjdHMuc29ydF9maWVsZHMsXG5cdFx0XHR0b3RhbF9jb3VudDogcHJvZHVjdHNSZXNwb25zZS5wcm9kdWN0cy50b3RhbF9jb3VudCxcblx0XHRcdHBhZ2VfaW5mbzogcHJvZHVjdHNSZXNwb25zZS5wcm9kdWN0cy5wYWdlX2luZm9cblx0XHR9O1xuXHR9XG59XG4iXX0=