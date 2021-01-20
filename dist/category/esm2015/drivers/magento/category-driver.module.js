/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffCategoryDriver } from '../injection-tokens/category-driver.token';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
export class DaffCategoryMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffCategoryMagentoDriverModule,
            providers: [
                {
                    provide: DaffCategoryDriver,
                    useExisting: DaffMagentoCategoryService
                },
                DaffMagentoCategoryPageConfigTransformerService,
                DaffMagentoCategoryResponseTransformService,
                DaffMagentoCategoryTransformerService,
                DaffMagentoAppliedFiltersTransformService,
                DaffMagentoAppliedSortOptionTransformService
            ]
        };
    }
}
DaffCategoryMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9jYXRlZ29yeS1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLCtDQUErQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFPOUcsTUFBTSxPQUFPLCtCQUErQjs7OztJQUMxQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFNBQVMsRUFBRTtnQkFDYjtvQkFDQyxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMEJBQTBCO2lCQUN2QztnQkFDRCwrQ0FBK0M7Z0JBQy9DLDJDQUEyQztnQkFDM0MscUNBQXFDO2dCQUNyQyx5Q0FBeUM7Z0JBQ3pDLDRDQUE0QzthQUN6QztTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFyQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVJlc3BvbnNlVHJhbnNmb3JtU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2NhdGVnb3J5LXJlc3BvbnNlLXRyYW5zZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2F0ZWdvcnlUcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9jYXRlZ29yeS10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2F0ZWdvcnlQYWdlQ29uZmlnVHJhbnNmb3JtZXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlEcml2ZXIgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW5zL2NhdGVnb3J5LWRyaXZlci50b2tlbic7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0FwcGxpZWRTb3J0T3B0aW9uVHJhbnNmb3JtU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2FwcGxpZWQtc29ydC1vcHRpb24tdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0FwcGxpZWRGaWx0ZXJzVHJhbnNmb3JtU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2FwcGxpZWQtZmlsdGVyLXRyYW5zZm9ybWVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5TWFnZW50b0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkNhdGVnb3J5TWFnZW50b0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRGFmZkNhdGVnb3J5RHJpdmVyLFxuXHRcdFx0XHRcdHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0NhdGVnb3J5U2VydmljZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHREYWZmTWFnZW50b0NhdGVnb3J5UGFnZUNvbmZpZ1RyYW5zZm9ybWVyU2VydmljZSxcblx0XHRcdFx0RGFmZk1hZ2VudG9DYXRlZ29yeVJlc3BvbnNlVHJhbnNmb3JtU2VydmljZSxcblx0XHRcdFx0RGFmZk1hZ2VudG9DYXRlZ29yeVRyYW5zZm9ybWVyU2VydmljZSxcblx0XHRcdFx0RGFmZk1hZ2VudG9BcHBsaWVkRmlsdGVyc1RyYW5zZm9ybVNlcnZpY2UsXG5cdFx0XHRcdERhZmZNYWdlbnRvQXBwbGllZFNvcnRPcHRpb25UcmFuc2Zvcm1TZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19