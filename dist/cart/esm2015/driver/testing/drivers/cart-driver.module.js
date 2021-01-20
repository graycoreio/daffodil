/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCartDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartCouponDriver, DaffCartOrderDriver, DaffCartPaymentDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartPaymentMethodsDriver, DaffCartItemDriver } from '@daffodil/cart/driver';
import { DaffTestingCartService } from './cart/cart.service';
import { DaffTestingCartAddressService } from './cart-address/cart-address.service';
import { DaffTestingCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffTestingCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffTestingCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffTestingCartOrderService } from './cart-order/cart-order.service';
import { DaffTestingCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffTestingCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import { DaffTestingCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffTestingCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffTestingCartItemService } from './cart-item/cart-item.service';
export class DaffTestingCartDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffTestingCartDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffTestingCartService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffTestingCartItemService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffTestingCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffTestingCartBillingAddressService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffTestingCartShippingAddressService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffTestingCartCouponService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffTestingCartOrderService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffTestingCartPaymentService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffTestingCartShippingInformationService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffTestingCartShippingMethodsService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffTestingCartPaymentMethodsService
                },
            ]
        };
    }
}
DaffTestingCartDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLDRCQUE0QixFQUM1Qiw2QkFBNkIsRUFDN0Isb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ25CLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDMUgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPM0UsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFFLDBCQUEwQjtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtpQkFDMUM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsV0FBVyxFQUFFLHlDQUF5QztpQkFDdkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4REYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnREcml2ZXIsXG4gIERhZmZDYXJ0QWRkcmVzc0RyaXZlcixcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlcixcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsXG4gIERhZmZDYXJ0Q291cG9uRHJpdmVyLFxuICBEYWZmQ2FydE9yZGVyRHJpdmVyLFxuICBEYWZmQ2FydFBheW1lbnREcml2ZXIsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlcixcbiAgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNEcml2ZXIsXG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsXG4gIERhZmZDYXJ0SXRlbURyaXZlclxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0L2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1hZGRyZXNzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1iaWxsaW5nLWFkZHJlc3MvY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MvY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0Q291cG9uU2VydmljZSB9IGZyb20gJy4vY2FydC1jb3Vwb24vY2FydC1jb3Vwb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRPcmRlclNlcnZpY2UgfSBmcm9tICcuL2NhcnQtb3JkZXIvY2FydC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctbWV0aG9kcy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtcGF5bWVudC1tZXRob2RzL2NhcnQtcGF5bWVudC1tZXRob2RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0SXRlbVNlcnZpY2UgfSBmcm9tICcuL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnREcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZUZXN0aW5nQ2FydERyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0SXRlbURyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0SXRlbVNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0QWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0QWRkcmVzc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0Q291cG9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRDb3Vwb25TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydE9yZGVyRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRPcmRlclNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0UGF5bWVudFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFBheW1lbnRNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=