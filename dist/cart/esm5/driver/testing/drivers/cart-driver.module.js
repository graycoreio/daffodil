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
var DaffTestingCartDriverModule = /** @class */ (function () {
    function DaffTestingCartDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffTestingCartDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    DaffTestingCartDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffTestingCartDriverModule;
}());
export { DaffTestingCartDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLDRCQUE0QixFQUM1Qiw2QkFBNkIsRUFDN0Isb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ25CLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDMUgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFM0U7SUFBQTtJQXlEQSxDQUFDOzs7O0lBbkRRLG1DQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFFLDBCQUEwQjtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtpQkFDMUM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsV0FBVyxFQUFFLHlDQUF5QztpQkFDdkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4REYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQXFERCxrQ0FBQztDQUFBLEFBekRELElBeURDO1NBcERZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydERyaXZlcixcbiAgRGFmZkNhcnRBZGRyZXNzRHJpdmVyLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRHJpdmVyLFxuICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0RyaXZlcixcbiAgRGFmZkNhcnRDb3Vwb25Ecml2ZXIsXG4gIERhZmZDYXJ0T3JkZXJEcml2ZXIsXG4gIERhZmZDYXJ0UGF5bWVudERyaXZlcixcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyLFxuICBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0RyaXZlcixcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc0RyaXZlcixcbiAgRGFmZkNhcnRJdGVtRHJpdmVyXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydFNlcnZpY2UgfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydEFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MvY2FydC1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWJpbGxpbmctYWRkcmVzcy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctYWRkcmVzcy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRDb3Vwb25TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydE9yZGVyU2VydmljZSB9IGZyb20gJy4vY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0UGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL2NhcnQtcGF5bWVudC9jYXJ0LXBheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1tZXRob2RzL2NhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ2FydFBheW1lbnRNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50LW1ldGhvZHMvY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ0NhcnRJdGVtU2VydmljZSB9IGZyb20gJy4vY2FydC1pdGVtL2NhcnQtaXRlbS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydERyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZlRlc3RpbmdDYXJ0RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0U2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRJdGVtRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRJdGVtU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRBZGRyZXNzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRDb3Vwb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydENvdXBvblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0T3JkZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydE9yZGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRQYXltZW50RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRQYXltZW50U2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQ2FydFBheW1lbnRNZXRob2RzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==