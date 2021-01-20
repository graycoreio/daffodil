/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffProductFacade, DaffProductGridFacade, DaffConfigurableProductFacade, DaffCompositeProductFacade, DaffBestSellersFacade } from '@daffodil/product';
import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';
import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';
import { MockDaffBestSellersFacade } from './mock-best-sellers.facade';
var DaffProductTestingModule = /** @class */ (function () {
    function DaffProductTestingModule() {
    }
    DaffProductTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffProductFacade, useExisting: MockDaffProductFacade },
                        { provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
                        { provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
                        { provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
                        { provide: DaffBestSellersFacade, useExisting: MockDaffBestSellersFacade },
                    ]
                },] }
    ];
    return DaffProductTestingModule;
}());
export { DaffProductTestingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10ZXN0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJoZWxwZXJzL3Byb2R1Y3QtdGVzdGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0osT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkU7SUFBQTtJQVN3QyxDQUFDOztnQkFUeEMsUUFBUSxTQUFDO29CQUNULFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUU7d0JBQ2xFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRTt3QkFDMUUsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsV0FBVyxFQUFFLGlDQUFpQyxFQUFFO3dCQUMxRixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsOEJBQThCLEVBQUU7d0JBQ3BGLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRTtxQkFDMUU7aUJBQ0Q7O0lBQ3VDLCtCQUFDO0NBQUEsQUFUekMsSUFTeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0RmFjYWRlLCBEYWZmUHJvZHVjdEdyaWRGYWNhZGUsIERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlLCBEYWZmQ29tcG9zaXRlUHJvZHVjdEZhY2FkZSwgRGFmZkJlc3RTZWxsZXJzRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBNb2NrRGFmZlByb2R1Y3RGYWNhZGUgfSBmcm9tICcuL21vY2stcHJvZHVjdC1mYWNhZGUnO1xuaW1wb3J0IHsgTW9ja0RhZmZQcm9kdWN0R3JpZEZhY2FkZSB9IGZyb20gJy4vbW9jay1wcm9kdWN0LWdyaWQtZmFjYWRlJztcbmltcG9ydCB7IE1vY2tEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZSB9IGZyb20gJy4vbW9jay1jb25maWd1cmFibGUtcHJvZHVjdC1mYWNhZGUnO1xuaW1wb3J0IHsgTW9ja0RhZmZDb21wb3NpdGVQcm9kdWN0RmFjYWRlIH0gZnJvbSAnLi9tb2NrLWNvbXBvc2l0ZS1wcm9kdWN0LWZhY2FkZSc7XG5pbXBvcnQgeyBNb2NrRGFmZkJlc3RTZWxsZXJzRmFjYWRlIH0gZnJvbSAnLi9tb2NrLWJlc3Qtc2VsbGVycy5mYWNhZGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IERhZmZQcm9kdWN0RmFjYWRlLCB1c2VFeGlzdGluZzogTW9ja0RhZmZQcm9kdWN0RmFjYWRlIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmUHJvZHVjdEdyaWRGYWNhZGUsIHVzZUV4aXN0aW5nOiBNb2NrRGFmZlByb2R1Y3RHcmlkRmFjYWRlIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZSwgdXNlRXhpc3Rpbmc6IE1vY2tEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZSB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RGYWNhZGUsIHVzZUV4aXN0aW5nOiBNb2NrRGFmZkNvbXBvc2l0ZVByb2R1Y3RGYWNhZGUgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZCZXN0U2VsbGVyc0ZhY2FkZSwgdXNlRXhpc3Rpbmc6IE1vY2tEYWZmQmVzdFNlbGxlcnNGYWNhZGUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdFRlc3RpbmdNb2R1bGUgeyB9XG4iXX0=