/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { transformManyMagentoProducts } from '@daffodil/product';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import * as i0 from "@angular/core";
import * as i1 from "./category-transformer.service";
import * as i2 from "./category-page-config-transformer.service";
export class DaffMagentoCategoryResponseTransformService {
    /**
     * @param {?} magentoCategoryTransformerService
     * @param {?} magentoCategoryPageConfigurationTransformerService
     */
    constructor(magentoCategoryTransformerService, magentoCategoryPageConfigurationTransformerService) {
        this.magentoCategoryTransformerService = magentoCategoryTransformerService;
        this.magentoCategoryPageConfigurationTransformerService = magentoCategoryPageConfigurationTransformerService;
    }
    /**
     * @param {?} completeCategory
     * @return {?}
     */
    transform(completeCategory) {
        return Object.assign({ magentoCompleteCategoryResponse: completeCategory }, { category: this.magentoCategoryTransformerService.transform(completeCategory.category), categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory), products: transformManyMagentoProducts(completeCategory.products) });
    }
}
DaffMagentoCategoryResponseTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCategoryResponseTransformService.ctorParameters = () => [
    { type: DaffMagentoCategoryTransformerService },
    { type: DaffMagentoCategoryPageConfigTransformerService }
];
/** @nocollapse */ DaffMagentoCategoryResponseTransformService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryResponseTransformService_Factory() { return new DaffMagentoCategoryResponseTransformService(i0.ɵɵinject(i1.DaffMagentoCategoryTransformerService), i0.ɵɵinject(i2.DaffMagentoCategoryPageConfigTransformerService)); }, token: DaffMagentoCategoryResponseTransformService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryTransformerService;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryPageConfigurationTransformerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcmVzcG9uc2UtdHJhbnNmb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3JtZXJzL2NhdGVnb3J5LXJlc3BvbnNlLXRyYW5zZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFLE9BQU8sRUFBRSwrQ0FBK0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRzdHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBS3ZGLE1BQU0sT0FBTywyQ0FBMkM7Ozs7O0lBRXRELFlBQ1UsaUNBQXdFLEVBQ3hFLGtEQUFtRztRQURuRyxzQ0FBaUMsR0FBakMsaUNBQWlDLENBQXVDO1FBQ3hFLHVEQUFrRCxHQUFsRCxrREFBa0QsQ0FBaUQ7SUFDMUcsQ0FBQzs7Ozs7SUFFSixTQUFTLENBQUMsZ0JBQWlEO1FBQ3pELHFCQUNFLEVBQUUsK0JBQStCLEVBQUUsZ0JBQWdCLEVBQUUsSUFDckQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQ3JGLDhCQUE4QixFQUFFLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFDbkgsUUFBUSxFQUFFLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUNsRTtJQUNILENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxxQ0FBcUM7WUFIckMsK0NBQStDOzs7Ozs7OztJQVdwRCx3RkFBZ0Y7Ozs7O0lBQ2hGLHlHQUEyRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdHJhbnNmb3JtTWFueU1hZ2VudG9Qcm9kdWN0cyB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVBhZ2VDb25maWdUcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3J5LXBhZ2UtY29uZmlnLXRyYW5zZm9ybWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9jb21wbGV0ZS1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nZXQtY2F0ZWdvcnktcmVzcG9uc2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVRyYW5zZm9ybWVyU2VydmljZSB9IGZyb20gJy4vY2F0ZWdvcnktdHJhbnNmb3JtZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2F0ZWdvcnlSZXNwb25zZVRyYW5zZm9ybVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFnZW50b0NhdGVnb3J5VHJhbnNmb3JtZXJTZXJ2aWNlOiBEYWZmTWFnZW50b0NhdGVnb3J5VHJhbnNmb3JtZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFnZW50b0NhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25UcmFuc2Zvcm1lclNlcnZpY2U6IERhZmZNYWdlbnRvQ2F0ZWdvcnlQYWdlQ29uZmlnVHJhbnNmb3JtZXJTZXJ2aWNlXG4gICkge31cblxuICB0cmFuc2Zvcm0oY29tcGxldGVDYXRlZ29yeTogTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSk6IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuXHRcdFx0Li4ueyBtYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlOiBjb21wbGV0ZUNhdGVnb3J5IH0sXG4gICAgICBjYXRlZ29yeTogdGhpcy5tYWdlbnRvQ2F0ZWdvcnlUcmFuc2Zvcm1lclNlcnZpY2UudHJhbnNmb3JtKGNvbXBsZXRlQ2F0ZWdvcnkuY2F0ZWdvcnkpLFxuICAgICAgY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlOiB0aGlzLm1hZ2VudG9DYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uVHJhbnNmb3JtZXJTZXJ2aWNlLnRyYW5zZm9ybShjb21wbGV0ZUNhdGVnb3J5KSxcbiAgICAgIHByb2R1Y3RzOiB0cmFuc2Zvcm1NYW55TWFnZW50b1Byb2R1Y3RzKGNvbXBsZXRlQ2F0ZWdvcnkucHJvZHVjdHMpXG4gICAgfVxuICB9XG59XG4iXX0=