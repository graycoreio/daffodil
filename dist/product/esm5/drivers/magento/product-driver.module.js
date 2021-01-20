/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';
var DaffProductMagentoDriverModule = /** @class */ (function () {
    function DaffProductMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffProductMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffProductMagentoDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffMagentoProductService
                }
            ]
        };
    };
    DaffProductMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffProductMagentoDriverModule;
}());
export { DaffProductMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcHJvZHVjdC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUQ7SUFBQTtJQWlCQSxDQUFDOzs7O0lBWFEsc0NBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSx5QkFBeUI7aUJBQzNDO2FBQ0U7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7SUFhRCxxQ0FBQztDQUFBLEFBakJELElBaUJDO1NBWlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0RHJpdmVyIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucy9wcm9kdWN0LWRyaXZlci50b2tlbic7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1Byb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmUHJvZHVjdE1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZQcm9kdWN0TWFnZW50b0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlByb2R1Y3REcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvUHJvZHVjdFNlcnZpY2Vcblx0XHRcdFx0fVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==