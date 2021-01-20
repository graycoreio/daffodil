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
var DaffCategoryMagentoDriverModule = /** @class */ (function () {
    function DaffCategoryMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCategoryMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    DaffCategoryMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCategoryMagentoDriverModule;
}());
export { DaffCategoryMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9jYXRlZ29yeS1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLCtDQUErQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFOUc7SUFBQTtJQXNCQSxDQUFDOzs7O0lBaEJRLHVDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFNBQVMsRUFBRTtnQkFDYjtvQkFDQyxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMEJBQTBCO2lCQUN2QztnQkFDRCwrQ0FBK0M7Z0JBQy9DLDJDQUEyQztnQkFDM0MscUNBQXFDO2dCQUNyQyx5Q0FBeUM7Z0JBQ3pDLDRDQUE0QzthQUN6QztTQUNGLENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQWtCRCxzQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBakJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhdGVnb3J5U2VydmljZSB9IGZyb20gJy4vY2F0ZWdvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhdGVnb3J5UmVzcG9uc2VUcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktcmVzcG9uc2UtdHJhbnNmb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVRyYW5zZm9ybWVyU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2NhdGVnb3J5LXRyYW5zZm9ybWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXRlZ29yeVBhZ2VDb25maWdUcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9jYXRlZ29yeS1wYWdlLWNvbmZpZy10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeURyaXZlciB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMvY2F0ZWdvcnktZHJpdmVyLnRva2VuJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXBwbGllZFNvcnRPcHRpb25UcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBwbGllZC1zb3J0LW9wdGlvbi10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXBwbGllZEZpbHRlcnNUcmFuc2Zvcm1TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmQ2F0ZWdvcnlNYWdlbnRvRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBEYWZmQ2F0ZWdvcnlEcml2ZXIsXG5cdFx0XHRcdFx0dXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2F0ZWdvcnlTZXJ2aWNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdERhZmZNYWdlbnRvQ2F0ZWdvcnlQYWdlQ29uZmlnVHJhbnNmb3JtZXJTZXJ2aWNlLFxuXHRcdFx0XHREYWZmTWFnZW50b0NhdGVnb3J5UmVzcG9uc2VUcmFuc2Zvcm1TZXJ2aWNlLFxuXHRcdFx0XHREYWZmTWFnZW50b0NhdGVnb3J5VHJhbnNmb3JtZXJTZXJ2aWNlLFxuXHRcdFx0XHREYWZmTWFnZW50b0FwcGxpZWRGaWx0ZXJzVHJhbnNmb3JtU2VydmljZSxcblx0XHRcdFx0RGFmZk1hZ2VudG9BcHBsaWVkU29ydE9wdGlvblRyYW5zZm9ybVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=