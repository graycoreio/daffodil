/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationDriver, DaffNavigationTransformer, } from '@daffodil/navigation/driver';
import { DaffMagentoNavigationService } from './navigation.service';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';
import { MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from './interfaces/navigation-config.interface';
/** @type {?} */
export var MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = {
    navigationTreeQueryDepth: 3
};
var DaffNavigationMagentoDriverModule = /** @class */ (function () {
    function DaffNavigationMagentoDriverModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DaffNavigationMagentoDriverModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION; }
        return {
            ngModule: DaffNavigationMagentoDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffMagentoNavigationService
                },
                {
                    provide: DaffNavigationTransformer,
                    useExisting: DaffMagentoNavigationTransformerService
                },
                {
                    provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
                    useValue: config.navigationTreeQueryDepth
                }
            ]
        };
    };
    DaffNavigationMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationMagentoDriverModule;
}());
export { DaffNavigationMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHlCQUF5QixHQUMxQixNQUFNLDZCQUE2QixDQUFDO0FBRXJDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hHLE9BQU8sRUFBd0MsbUNBQW1DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFFckksTUFBTSxLQUFPLHdDQUF3QyxHQUF5QztJQUM1Rix3QkFBd0IsRUFBRSxDQUFDO0NBQzVCO0FBRUQ7SUFBQTtJQXlCQSxDQUFDOzs7OztJQW5CUSx5Q0FBTzs7OztJQUFkLFVBQWUsTUFBdUY7UUFBdkYsdUJBQUEsRUFBQSxpREFBdUY7UUFDcEcsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFdBQVcsRUFBRSw0QkFBNEI7aUJBQzFDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLFdBQVcsRUFBRSx1Q0FBdUM7aUJBQ3JEO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQ0FBbUM7b0JBQzVDLFFBQVEsRUFBRSxNQUFNLENBQUMsd0JBQXdCO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBcUJELHdDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIERhZmZOYXZpZ2F0aW9uRHJpdmVyLFxuICBEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVyLFxufSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b05hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9OYXZpZ2F0aW9uVHJhbnNmb3JtZXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvbmF2aWdhdGlvbi10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBNYWdlbnRvTmF2aWdhdGlvbkRyaXZlckNvbmZpZ3VyYXRpb24sIE1BR0VOVE9fTkFWSUdBVElPTl9UUkVFX1FVRVJZX0RFUFRIIH0gZnJvbSAnLi9pbnRlcmZhY2VzL25hdmlnYXRpb24tY29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBNQUdFTlRPX05BVklHQVRJT05fREVGQVVMVF9DT05GSUdVUkFUSU9OOiBNYWdlbnRvTmF2aWdhdGlvbkRyaXZlckNvbmZpZ3VyYXRpb24gPSB7XG4gIG5hdmlnYXRpb25UcmVlUXVlcnlEZXB0aDogM1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25NYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBNYWdlbnRvTmF2aWdhdGlvbkRyaXZlckNvbmZpZ3VyYXRpb24gPSBNQUdFTlRPX05BVklHQVRJT05fREVGQVVMVF9DT05GSUdVUkFUSU9OKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmTmF2aWdhdGlvbk1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZOYXZpZ2F0aW9uTWFnZW50b0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZk5hdmlnYXRpb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvTmF2aWdhdGlvblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZOYXZpZ2F0aW9uVHJhbnNmb3JtZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvTmF2aWdhdGlvblRyYW5zZm9ybWVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTUFHRU5UT19OQVZJR0FUSU9OX1RSRUVfUVVFUllfREVQVEgsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5uYXZpZ2F0aW9uVHJlZVF1ZXJ5RGVwdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==