/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffPaypalDriver } from '../injection-tokens/paypal-driver.token';
import { DaffMagentoPaypalService } from './paypal.service';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { DaffMagentoPaypalTransformerService } from './transformers/magento-paypal-transformer.service';
var DaffPaypalMagentoDriverModule = /** @class */ (function () {
    function DaffPaypalMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffPaypalMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffPaypalMagentoDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffMagentoPaypalService
                },
                {
                    provide: DaffPaypalTransformer,
                    useExisting: DaffMagentoPaypalTransformerService
                }
            ]
        };
    };
    DaffPaypalMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffPaypalMagentoDriverModule;
}());
export { DaffPaypalMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3BheXBhbC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFeEc7SUFBQTtJQXFCQSxDQUFDOzs7O0lBZlEscUNBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7aUJBQ3RDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFdBQVcsRUFBRSxtQ0FBbUM7aUJBQ2pEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7SUFpQkQsb0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbERyaXZlciB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMvcGF5cGFsLWRyaXZlci50b2tlbic7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1BheXBhbFNlcnZpY2UgfSBmcm9tICcuL3BheXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxUcmFuc2Zvcm1lciB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMvcGF5cGFsLXRyYW5zZm9ybWVyLnRva2VuJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5cGFsVHJhbnNmb3JtZXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvbWFnZW50by1wYXlwYWwtdHJhbnNmb3JtZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5cGFsTWFnZW50b0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGFmZlBheXBhbE1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZQYXlwYWxNYWdlbnRvRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmUGF5cGFsRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b1BheXBhbFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZQYXlwYWxUcmFuc2Zvcm1lcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9QYXlwYWxUcmFuc2Zvcm1lclNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==