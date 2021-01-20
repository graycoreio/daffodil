/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';
import { DaffTestingNavigationService } from './navigation.service';
var DaffNavigationTestingDriverModule = /** @class */ (function () {
    function DaffNavigationTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNavigationTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNavigationTestingDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffTestingNavigationService
                }
            ]
        };
    };
    DaffNavigationTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationTestingDriverModule;
}());
export { DaffNavigationTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRTtJQUFBO0lBaUJBLENBQUM7Ozs7SUFYUSx5Q0FBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtpQkFDMUM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQWFELHdDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25Ecml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmVGVzdGluZ05hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25UZXN0aW5nRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmTmF2aWdhdGlvblRlc3RpbmdEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZOYXZpZ2F0aW9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ05hdmlnYXRpb25TZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=