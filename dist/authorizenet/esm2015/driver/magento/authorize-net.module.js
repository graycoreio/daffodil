/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetConfigToken, DaffAuthorizeNetDriver, DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import { DaffMagentoAuthorizeNetService } from './authorize-net.service';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from './authorize-net-payment-id';
export class DaffMagentoAuthorizeNetDriverModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        if (!config.apiLoginID || !config.clientKey) {
            throw Error('You must provide an apiLoginID and clientKey for Authorize.Net configuration.');
        }
        return {
            ngModule: DaffMagentoAuthorizeNetDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetConfigToken,
                    useValue: config
                },
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffMagentoAuthorizeNetService
                },
                {
                    provide: DaffAuthorizeNetPaymentId,
                    useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID
                }
            ]
        };
    }
}
DaffMagentoAuthorizeNetDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiYXV0aG9yaXplLW5ldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQTBCLDJCQUEyQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdkosT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPOUUsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE4QjtRQUM3QyxJQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDM0MsTUFBTSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQTtTQUM1RjtRQUVDLE9BQU87WUFDTCxRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLFNBQVMsRUFBRTtnQkFDYjtvQkFDQyxPQUFPLEVBQUUsMkJBQTJCO29CQUNwQyxRQUFRLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0c7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDcEMsV0FBVyxFQUFFLDhCQUE4QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0MsT0FBTyxFQUFFLHlCQUF5QjtvQkFDbEMsUUFBUSxFQUFFLGdDQUFnQztpQkFDMUM7YUFDRTtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE1QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldENvbmZpZywgRGFmZkF1dGhvcml6ZU5ldENvbmZpZ1Rva2VuLCBEYWZmQXV0aG9yaXplTmV0RHJpdmVyLCBEYWZmQXV0aG9yaXplTmV0UGF5bWVudElkIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0F1dGhvcml6ZU5ldFNlcnZpY2UgfSBmcm9tICcuL2F1dGhvcml6ZS1uZXQuc2VydmljZSc7XG5pbXBvcnQgeyBNQUdFTlRPX0FVVEhPUklaRV9ORVRfUEFZTUVOVF9JRCB9IGZyb20gJy4vYXV0aG9yaXplLW5ldC1wYXltZW50LWlkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQXV0aG9yaXplTmV0RHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEYWZmQXV0aG9yaXplTmV0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0aWYoIWNvbmZpZy5hcGlMb2dpbklEIHx8ICFjb25maWcuY2xpZW50S2V5KSB7XG5cdFx0XHR0aHJvdyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhbiBhcGlMb2dpbklEIGFuZCBjbGllbnRLZXkgZm9yIEF1dGhvcml6ZS5OZXQgY29uZmlndXJhdGlvbi4nKVxuXHRcdH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZk1hZ2VudG9BdXRob3JpemVOZXREcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IERhZmZBdXRob3JpemVOZXRDb25maWdUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogY29uZmlnXG5cdFx0XHRcdH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQXV0aG9yaXplTmV0RHJpdmVyLFxuXHRcdFx0XHRcdHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0F1dGhvcml6ZU5ldFNlcnZpY2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IERhZmZBdXRob3JpemVOZXRQYXltZW50SWQsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IE1BR0VOVE9fQVVUSE9SSVpFX05FVF9QQVlNRU5UX0lEXG5cdFx0XHRcdH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=