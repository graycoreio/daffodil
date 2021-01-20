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
export class DaffCartInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffCartInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGNBQWMsRUFDZCw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQiw0QkFBNEIsRUFDNUIsNkJBQTZCLEVBQzdCLGlDQUFpQyxFQUNqQyw2QkFBNkIsRUFDN0IsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU9yRixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBQ3ZDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUUsOEJBQThCO2lCQUM1QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUscUNBQXFDO2lCQUNuRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMkJBQTJCO2lCQUN6QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUUsOEJBQThCO2lCQUM1QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxXQUFXLEVBQUUscUNBQXFDO2lCQUNuRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUNBQWlDO29CQUMxQyxXQUFXLEVBQUUsMENBQTBDO2lCQUN4RDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixXQUFXLEVBQUUsNEJBQTRCO2lCQUMxQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXhERixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydERyaXZlcixcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlcixcbiAgRGFmZkNhcnRJdGVtRHJpdmVyLFxuICBEYWZmQ2FydFBheW1lbnREcml2ZXIsXG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRHJpdmVyLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Ecml2ZXIsXG4gIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyLFxuICBEYWZmQ2FydE9yZGVyRHJpdmVyLFxuICBEYWZmQ2FydENvdXBvbkRyaXZlcixcbiAgRGFmZkNhcnRBZGRyZXNzRHJpdmVyXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0L2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWJpbGxpbmctYWRkcmVzcy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRJdGVtU2VydmljZSB9IGZyb20gJy4vY2FydC1pdGVtL2NhcnQtaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRQYXltZW50U2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50L2NhcnQtcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtcGF5bWVudC1tZXRob2RzL2NhcnQtcGF5bWVudC1tZXRob2RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctYWRkcmVzcy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMvY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydE9yZGVyU2VydmljZSB9IGZyb20gJy4vY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydENvdXBvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtY291cG9uL2NhcnQtY291cG9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q2FydEFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MvY2FydC1hZGRyZXNzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkNhcnRJbk1lbW9yeURyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydEFkZHJlc3NEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydEJpbGxpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRJdGVtRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0SXRlbVNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydFBheW1lbnRTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFBheW1lbnRNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0T3JkZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNhcnRPcmRlclNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0Q291cG9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlDYXJ0Q291cG9uU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19