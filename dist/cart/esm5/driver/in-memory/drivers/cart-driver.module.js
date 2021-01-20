/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCartDriver, DaffCartBillingAddressDriver, DaffCartItemDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver, DaffCartAddressDriver } from '@daffodil/cart/driver';
import { DaffInMemoryCartService } from './cart/cart.service';
import { DaffInMemoryCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryCartItemService } from './cart-item/cart-item.service';
import { DaffInMemoryCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffInMemoryCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffInMemoryCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffInMemoryCartAddressService } from './cart-address/cart-address.service';
var DaffCartInMemoryDriverModule = /** @class */ (function () {
    function DaffCartInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCartInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCartInMemoryDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffInMemoryCartService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffInMemoryCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffInMemoryCartBillingAddressService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffInMemoryCartItemService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffInMemoryCartPaymentService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffInMemoryCartPaymentMethodsService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffInMemoryCartShippingAddressService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffInMemoryCartShippingInformationService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffInMemoryCartShippingMethodsService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffInMemoryCartOrderService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffInMemoryCartCouponService
                }
            ]
        };
    };
    DaffCartInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCartInMemoryDriverModule;
}());
export { DaffCartInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGNBQWMsRUFDZCw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQiw0QkFBNEIsRUFDNUIsNkJBQTZCLEVBQzdCLGlDQUFpQyxFQUNqQyw2QkFBNkIsRUFDN0IsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVyRjtJQUFBO0lBeURBLENBQUM7Ozs7SUFuRFEsb0NBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUUsOEJBQThCO2lCQUM1QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUscUNBQXFDO2lCQUNuRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMkJBQTJCO2lCQUN6QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUUsOEJBQThCO2lCQUM1QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUscUNBQXFDO2lCQUNuRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUNBQWlDO29CQUMxQyxXQUFXLEVBQUUsMENBQTBDO2lCQUN4RDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixXQUFXLEVBQUUsNEJBQTRCO2lCQUMxQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXhERixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBcURELG1DQUFDO0NBQUEsQUF6REQsSUF5REM7U0FwRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0RHJpdmVyLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRHJpdmVyLFxuICBEYWZmQ2FydEl0ZW1Ecml2ZXIsXG4gIERhZmZDYXJ0UGF5bWVudERyaXZlcixcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc0RyaXZlcixcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlcixcbiAgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNEcml2ZXIsXG4gIERhZmZDYXJ0T3JkZXJEcml2ZXIsXG4gIERhZmZDYXJ0Q291cG9uRHJpdmVyLFxuICBEYWZmQ2FydEFkZHJlc3NEcml2ZXJcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydFNlcnZpY2UgfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtYmlsbGluZy1hZGRyZXNzL2NhcnQtYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydFBheW1lbnRNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50LW1ldGhvZHMvY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1hZGRyZXNzL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctbWV0aG9kcy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0T3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LW9yZGVyL2NhcnQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0Q291cG9uU2VydmljZSB9IGZyb20gJy4vY2FydC1jb3Vwb24vY2FydC1jb3Vwb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0QWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtYWRkcmVzcy9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEluTWVtb3J5RHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmQ2FydEluTWVtb3J5RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0QWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydEFkZHJlc3NTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydEl0ZW1Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRJdGVtU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRQYXltZW50RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0UGF5bWVudFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRPcmRlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydE9yZGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRDb3Vwb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRDb3Vwb25TZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=