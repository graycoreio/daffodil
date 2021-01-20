/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffProductDriver } from '../injection-tokens/product-driver.token';
import { DaffMagentoProductService } from './product.service';
export class DaffProductMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffProductMagentoDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffMagentoProductService
                }
            ]
        };
    }
}
DaffProductMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcHJvZHVjdC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPOUQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUN6QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUseUJBQXlCO2lCQUMzQzthQUNFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdERyaXZlciB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMvcHJvZHVjdC1kcml2ZXIudG9rZW4nO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9Qcm9kdWN0U2VydmljZSB9IGZyb20gJy4vcHJvZHVjdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0TWFnZW50b0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGFmZlByb2R1Y3RNYWdlbnRvRHJpdmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmUHJvZHVjdE1hZ2VudG9Ecml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZQcm9kdWN0RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b1Byb2R1Y3RTZXJ2aWNlXG5cdFx0XHRcdH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=