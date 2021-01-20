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
export class DaffMagentoCategoryService {
    /**
     * @param {?} apollo
     * @param {?} magentoCategoryResponseTransformer
     * @param {?} magentoAppliedFiltersTransformer
     * @param {?} magentoAppliedSortTransformer
     */
    constructor(apollo, magentoCategoryResponseTransformer, magentoAppliedFiltersTransformer, magentoAppliedSortTransformer) {
        this.apollo = apollo;
        this.magentoCategoryResponseTransformer = magentoCategoryResponseTransformer;
        this.magentoAppliedFiltersTransformer = magentoAppliedFiltersTransformer;
        this.magentoAppliedSortTransformer = magentoAppliedSortTransformer;
    }
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    get(categoryRequest) {
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
            (aggregationResult) => this.apollo.query({
                query: MagentoGetCustomAttributeMetadata,
                variables: {
                    attributes: aggregationResult.data.products.aggregations
                        .filter((/**
                     * @param {?} aggregate
                     * @return {?}
                     */
                    aggregate => aggregate.attribute_code !== 'category_id'))
                        .map((/**
                     * @param {?} aggregate
                     * @return {?}
                     */
                    aggregate => buildCustomMetadataAttribute(aggregate)))
                }
            }).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => addMetadataTypesToAggregates(response.data, aggregationResult.data))))))),
            this.apollo.query({
                query: MagentoGetProductsQuery,
                variables: this.getProductsQueryVariables(categoryRequest)
            })
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        (result) => this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data))), map((/**
         * @param {?} finalResult
         * @return {?}
         */
        (finalResult) => this.magentoCategoryResponseTransformer.transform(finalResult))));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getProductsQueryVariables(request) {
        /** @type {?} */
        const queryVariables = {
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
    }
    /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    buildCompleteCategoryResponse(categoryResponse, aggregationsAndSortsResponse, productsResponse) {
        return {
            category: categoryResponse.categoryList[0],
            products: productsResponse.products.items,
            aggregates: aggregationsAndSortsResponse.products.aggregations,
            sort_fields: aggregationsAndSortsResponse.products.sort_fields,
            total_count: productsResponse.products.total_count,
            page_info: productsResponse.products.page_info
        };
    }
}
DaffMagentoCategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCategoryService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoCategoryResponseTransformService },
    { type: DaffMagentoAppliedFiltersTransformService },
    { type: DaffMagentoAppliedSortOptionTransformService }
];
/** @nocollapse */ DaffMagentoCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryService_Factory() { return new DaffMagentoCategoryService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoCategoryResponseTransformService), i0.ɵɵinject(i3.DaffMagentoAppliedFiltersTransformService), i0.ɵɵinject(i4.DaffMagentoAppliedSortOptionTransformService)); }, token: DaffMagentoCategoryService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9jYXRlZ29yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEgsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFakgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHckYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7OztBQUsvSCxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7O0lBRXJDLFlBQ1UsTUFBYyxFQUNoQixrQ0FBK0UsRUFDL0UsZ0NBQTJFLEVBQzNFLDZCQUEyRTtRQUh6RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hCLHVDQUFrQyxHQUFsQyxrQ0FBa0MsQ0FBNkM7UUFDL0UscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUEyQztRQUMzRSxrQ0FBNkIs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Q3BDLGdCQUE2QyxFQUM3Qyw0QkFBb0UsRUFDcEUsZ0JBQTRDO1FBRTVDLE9BQU87WUFDTixRQUFRLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDekMsVUFBVSxFQUFFLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlELFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsV0FBVztZQUM5RCxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDbEQsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTO1NBQzlDLENBQUM7SUFDSCxDQUFDOzs7WUE1RUQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBdEJRLE1BQU07WUFZTiwyQ0FBMkM7WUFGM0MseUNBQXlDO1lBQ3pDLDRDQUE0Qzs7Ozs7Ozs7SUFlakQsNENBQXNCOzs7OztJQUN4Qix3RUFBdUY7Ozs7O0lBQ3ZGLHNFQUFtRjs7Ozs7SUFDbkYsbUVBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NhdGVnb3J5LXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dldC1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuaW1wb3J0IHsgTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2NvbXBsZXRlLWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9HZXRBQ2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2dldC1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q2F0ZWdvcnlRdWVyeSB9IGZyb20gJy4vcXVlcmllcy9nZXQtY2F0ZWdvcnknO1xuaW1wb3J0IHsgTWFnZW50b0dldFByb2R1Y3RzUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9nZXQtcHJvZHVjdHMtcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWFnZW50b0dldFByb2R1Y3RzUXVlcnkgfSBmcm9tICcuL3F1ZXJpZXMvZ2V0LXByb2R1Y3RzJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXBwbGllZEZpbHRlcnNUcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0FwcGxpZWRTb3J0T3B0aW9uVHJhbnNmb3JtU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2FwcGxpZWQtc29ydC1vcHRpb24tdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhdGVnb3J5UmVzcG9uc2VUcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktcmVzcG9uc2UtdHJhbnNmb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0dldFByb2R1Y3RzQnlDYXRlZ29yaWVzUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL3JlcXVlc3RzL2dldC1wcm9kdWN0cy1ieS1jYXRlZ29yaWVzLXJlcXVlc3QnO1xuaW1wb3J0IHsgTWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zIH0gZnJvbSAnLi9xdWVyaWVzL2dldC1jYXRlZ29yeS1hZ2dyZWdhdGlvbnMnO1xuaW1wb3J0IHsgTWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9nZXQtY2F0ZWdvcnktYWdncmVnYXRpb25zLXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9DdXN0b21BdHRyaWJ1dGVNZXRhZGF0YVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvY3VzdG9tLWF0dHJpYnV0ZS1tZXRhZGF0YS1yZXNwb25zZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q3VzdG9tQXR0cmlidXRlTWV0YWRhdGEgfSBmcm9tICcuL3F1ZXJpZXMvY3VzdG9tLWF0dHJpYnV0ZS1tZXRhZGF0YSc7XG5pbXBvcnQgeyBidWlsZEN1c3RvbU1ldGFkYXRhQXR0cmlidXRlLCBhZGRNZXRhZGF0YVR5cGVzVG9BZ2dyZWdhdGVzIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZXMtbWV0aG9kcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2F0ZWdvcnlTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhdGVnb3J5U2VydmljZUludGVyZmFjZSB7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuXHRcdHByaXZhdGUgbWFnZW50b0NhdGVnb3J5UmVzcG9uc2VUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXRlZ29yeVJlc3BvbnNlVHJhbnNmb3JtU2VydmljZSxcblx0XHRwcml2YXRlIG1hZ2VudG9BcHBsaWVkRmlsdGVyc1RyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0FwcGxpZWRGaWx0ZXJzVHJhbnNmb3JtU2VydmljZSxcblx0XHRwcml2YXRlIG1hZ2VudG9BcHBsaWVkU29ydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0FwcGxpZWRTb3J0T3B0aW9uVHJhbnNmb3JtU2VydmljZVxuICApIHt9XG5cblx0Ly90b2RvIHRoZSBNYWdlbnRvR2V0Q2F0ZWdvcnlRdWVyeSBuZWVkcyB0byBnZXQgaXRzIG93biBwcm9kdWN0IGlkcy5cbiAgLyoqXG4gICAqIEdldHMgYSBjYXRlZ29yeSBiYXNlZCBvbiBwYXJhbWV0ZXJzLiBEZWZhdWx0IGN1cnJlbnRfcGFnZSBpcyAxLCBhbmQgZGVmYXVsdCBwYWdlX3NpemUgaXMgMjAuXG4gICAqIEBwYXJhbSBjYXRlZ29yeVJlcXVlc3QgQSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIGdldChjYXRlZ29yeVJlcXVlc3Q6IERhZmZDYXRlZ29yeVJlcXVlc3QpOiBPYnNlcnZhYmxlPERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldEFDYXRlZ29yeVJlc3BvbnNlPih7XG5cdFx0XHRcdHF1ZXJ5OiBNYWdlbnRvR2V0Q2F0ZWdvcnlRdWVyeSxcblx0XHRcdFx0dmFyaWFibGVzOiB7IGZpbHRlcnM6IHtpZHM6IHsgZXE6IGNhdGVnb3J5UmVxdWVzdC5pZH19fVxuXHRcdFx0fSksXG4gICAgICB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZT4oe1xuXHRcdFx0XHRxdWVyeTogTWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zLFxuXHRcdFx0XHR2YXJpYWJsZXM6IHtmaWx0ZXI6IHtjYXRlZ29yeV9pZDoge2VxOiBjYXRlZ29yeVJlcXVlc3QuaWR9fX1cblx0XHRcdH0pLnBpcGUoXG5cdFx0XHRcdHN3aXRjaE1hcCgoYWdncmVnYXRpb25SZXN1bHQpOiBPYnNlcnZhYmxlPE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9uc1Jlc3BvbnNlPiA9PiBcblx0XHRcdFx0XHR0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvQ3VzdG9tQXR0cmlidXRlTWV0YWRhdGFSZXNwb25zZT4oe1xuXHRcdFx0XHRcdFx0cXVlcnk6IE1hZ2VudG9HZXRDdXN0b21BdHRyaWJ1dGVNZXRhZGF0YSxcblx0XHRcdFx0XHRcdHZhcmlhYmxlczogeyBcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczogYWdncmVnYXRpb25SZXN1bHQuZGF0YS5wcm9kdWN0cy5hZ2dyZWdhdGlvbnNcblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKGFnZ3JlZ2F0ZSA9PiBhZ2dyZWdhdGUuYXR0cmlidXRlX2NvZGUgIT09ICdjYXRlZ29yeV9pZCcpXG5cdFx0XHRcdFx0XHRcdFx0Lm1hcChhZ2dyZWdhdGUgPT4gYnVpbGRDdXN0b21NZXRhZGF0YUF0dHJpYnV0ZShhZ2dyZWdhdGUpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLnBpcGUoXG5cdFx0XHRcdFx0XHRtYXAocmVzcG9uc2UgPT4gYWRkTWV0YWRhdGFUeXBlc1RvQWdncmVnYXRlcyhyZXNwb25zZS5kYXRhLCBhZ2dyZWdhdGlvblJlc3VsdC5kYXRhKSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHQpLFxuICAgICAgdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldFByb2R1Y3RzUmVzcG9uc2U+KHtcblx0XHRcdFx0cXVlcnk6IE1hZ2VudG9HZXRQcm9kdWN0c1F1ZXJ5LFxuXHRcdFx0XHR2YXJpYWJsZXM6IHRoaXMuZ2V0UHJvZHVjdHNRdWVyeVZhcmlhYmxlcyhjYXRlZ29yeVJlcXVlc3QpXG5cdFx0XHR9KVxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3VsdCk6IE1hZ2VudG9Db21wbGV0ZUNhdGVnb3J5UmVzcG9uc2UgPT4gdGhpcy5idWlsZENvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZShyZXN1bHRbMF0uZGF0YSwgcmVzdWx0WzFdLCByZXN1bHRbMl0uZGF0YSkpLFxuXHRcdFx0bWFwKChmaW5hbFJlc3VsdDogTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSkgPT4gdGhpcy5tYWdlbnRvQ2F0ZWdvcnlSZXNwb25zZVRyYW5zZm9ybWVyLnRyYW5zZm9ybShmaW5hbFJlc3VsdCkpXG5cdFx0KTtcblx0fVxuXHRcblx0cHJpdmF0ZSBnZXRQcm9kdWN0c1F1ZXJ5VmFyaWFibGVzKHJlcXVlc3Q6IERhZmZDYXRlZ29yeVJlcXVlc3QpOiBNYWdlbnRvR2V0UHJvZHVjdHNCeUNhdGVnb3JpZXNSZXF1ZXN0IHtcblx0XHRjb25zdCBxdWVyeVZhcmlhYmxlcyA9IHtcblx0XHRcdGZpbHRlcjogdGhpcy5tYWdlbnRvQXBwbGllZEZpbHRlcnNUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVxdWVzdC5pZCwgcmVxdWVzdC5maWx0ZXJfcmVxdWVzdHMpXG5cdFx0fTtcblx0XHRpZihyZXF1ZXN0LnBhZ2Vfc2l6ZSkgcXVlcnlWYXJpYWJsZXNbJ3BhZ2VTaXplJ10gPSByZXF1ZXN0LnBhZ2Vfc2l6ZTtcblx0XHRpZihyZXF1ZXN0LmN1cnJlbnRfcGFnZSkgcXVlcnlWYXJpYWJsZXNbJ2N1cnJlbnRQYWdlJ10gPSByZXF1ZXN0LmN1cnJlbnRfcGFnZTtcblx0XHRpZihyZXF1ZXN0LmFwcGxpZWRfc29ydF9vcHRpb24gJiYgcmVxdWVzdC5hcHBsaWVkX3NvcnRfZGlyZWN0aW9uKSB7XG5cdFx0XHRxdWVyeVZhcmlhYmxlc1snc29ydCddID0gdGhpcy5tYWdlbnRvQXBwbGllZFNvcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVxdWVzdC5hcHBsaWVkX3NvcnRfb3B0aW9uLCByZXF1ZXN0LmFwcGxpZWRfc29ydF9kaXJlY3Rpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBxdWVyeVZhcmlhYmxlcztcblx0fVxuXG5cdHByaXZhdGUgYnVpbGRDb21wbGV0ZUNhdGVnb3J5UmVzcG9uc2UoXG5cdFx0Y2F0ZWdvcnlSZXNwb25zZTogTWFnZW50b0dldEFDYXRlZ29yeVJlc3BvbnNlLCBcblx0XHRhZ2dyZWdhdGlvbnNBbmRTb3J0c1Jlc3BvbnNlOiBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZSxcblx0XHRwcm9kdWN0c1Jlc3BvbnNlOiBNYWdlbnRvR2V0UHJvZHVjdHNSZXNwb25zZVxuXHQpOiBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2F0ZWdvcnk6IGNhdGVnb3J5UmVzcG9uc2UuY2F0ZWdvcnlMaXN0WzBdLFxuXHRcdFx0cHJvZHVjdHM6IHByb2R1Y3RzUmVzcG9uc2UucHJvZHVjdHMuaXRlbXMsXG5cdFx0XHRhZ2dyZWdhdGVzOiBhZ2dyZWdhdGlvbnNBbmRTb3J0c1Jlc3BvbnNlLnByb2R1Y3RzLmFnZ3JlZ2F0aW9ucyxcblx0XHRcdHNvcnRfZmllbGRzOiBhZ2dyZWdhdGlvbnNBbmRTb3J0c1Jlc3BvbnNlLnByb2R1Y3RzLnNvcnRfZmllbGRzLFxuXHRcdFx0dG90YWxfY291bnQ6IHByb2R1Y3RzUmVzcG9uc2UucHJvZHVjdHMudG90YWxfY291bnQsXG5cdFx0XHRwYWdlX2luZm86IHByb2R1Y3RzUmVzcG9uc2UucHJvZHVjdHMucGFnZV9pbmZvXG5cdFx0fTtcblx0fVxufVxuIl19