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
export const MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = {
    navigationTreeQueryDepth: 3
};
export class DaffNavigationMagentoDriverModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION) {
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
    }
}
DaffNavigationMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHlCQUF5QixHQUMxQixNQUFNLDZCQUE2QixDQUFDO0FBRXJDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hHLE9BQU8sRUFBd0MsbUNBQW1DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFFckksTUFBTSxPQUFPLHdDQUF3QyxHQUF5QztJQUM1Rix3QkFBd0IsRUFBRSxDQUFDO0NBQzVCO0FBT0QsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7SUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUErQyx3Q0FBd0M7UUFDcEcsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFdBQVcsRUFBRSw0QkFBNEI7aUJBQzFDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLFdBQVcsRUFBRSx1Q0FBdUM7aUJBQ3JEO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQ0FBbUM7b0JBQzVDLFFBQVEsRUFBRSxNQUFNLENBQUMsd0JBQXdCO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmTmF2aWdhdGlvbkRyaXZlcixcbiAgRGFmZk5hdmlnYXRpb25UcmFuc2Zvcm1lcixcbn0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9OYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvTmF2aWdhdGlvblRyYW5zZm9ybWVyU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL25hdmlnYXRpb24tdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgTWFnZW50b05hdmlnYXRpb25Ecml2ZXJDb25maWd1cmF0aW9uLCBNQUdFTlRPX05BVklHQVRJT05fVFJFRV9RVUVSWV9ERVBUSCB9IGZyb20gJy4vaW50ZXJmYWNlcy9uYXZpZ2F0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgTUFHRU5UT19OQVZJR0FUSU9OX0RFRkFVTFRfQ09ORklHVVJBVElPTjogTWFnZW50b05hdmlnYXRpb25Ecml2ZXJDb25maWd1cmF0aW9uID0ge1xuICBuYXZpZ2F0aW9uVHJlZVF1ZXJ5RGVwdGg6IDNcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZOYXZpZ2F0aW9uTWFnZW50b0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTWFnZW50b05hdmlnYXRpb25Ecml2ZXJDb25maWd1cmF0aW9uID0gTUFHRU5UT19OQVZJR0FUSU9OX0RFRkFVTFRfQ09ORklHVVJBVElPTik6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGFmZk5hdmlnYXRpb25NYWdlbnRvRHJpdmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmTmF2aWdhdGlvbk1hZ2VudG9Ecml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZOYXZpZ2F0aW9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b05hdmlnYXRpb25TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b05hdmlnYXRpb25UcmFuc2Zvcm1lclNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE1BR0VOVE9fTkFWSUdBVElPTl9UUkVFX1FVRVJZX0RFUFRILFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcubmF2aWdhdGlvblRyZWVRdWVyeURlcHRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=