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
export class DaffPaypalMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffPaypalMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3BheXBhbC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFPeEcsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUN4QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsd0JBQXdCO2lCQUN0QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUUsbUNBQW1DO2lCQUNqRDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsRHJpdmVyIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucy9wYXlwYWwtZHJpdmVyLnRva2VuJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5cGFsU2VydmljZSB9IGZyb20gJy4vcGF5cGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRyYW5zZm9ybWVyIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucy9wYXlwYWwtdHJhbnNmb3JtZXIudG9rZW4nO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9QYXlwYWxUcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybWVycy9tYWdlbnRvLXBheXBhbC10cmFuc2Zvcm1lci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXlwYWxNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmUGF5cGFsTWFnZW50b0RyaXZlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZlBheXBhbE1hZ2VudG9Ecml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZQYXlwYWxEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvUGF5cGFsU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlBheXBhbFRyYW5zZm9ybWVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b1BheXBhbFRyYW5zZm9ybWVyU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19