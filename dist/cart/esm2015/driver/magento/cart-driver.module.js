/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCartDriver, DaffCartItemDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartShippingMethodsDriver, DaffCartShippingInformationDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver } from '@daffodil/cart/driver';
import { DaffMagentoCartService } from './cart.service';
import { DaffMagentoCartItemService } from './cart-item.service';
import { DaffMagentoCartAddressService } from './cart-address.service';
import { DaffMagentoCartBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartShippingMethodsService } from './cart-shipping-methods.service';
import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';
import { DaffMagentoCartPaymentService } from './cart-payment.service';
import { DaffMagentoCartShippingInformationService } from './cart-shipping-information.service';
import { DaffMagentoCartOrderService } from './cart-order.service';
import { DaffMagentoCartCouponService } from './cart-coupon.service';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { DaffMagentoCartAddressTransformer } from './transforms/outputs/cart-address.service';
import { DaffMagentoCartShippingInformationTransformer } from './transforms/outputs/cart-shipping-information.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';
import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
export class DaffCartMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffCartMagentoDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffMagentoCartService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffMagentoCartItemService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffMagentoCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffMagentoCartBillingAddressService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffMagentoCartShippingAddressService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffMagentoCartShippingMethodsService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffMagentoCartShippingInformationService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffMagentoCartPaymentService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffMagentoCartPaymentMethodsService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffMagentoCartOrderService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffMagentoCartCouponService
                },
                // output transformers
                DaffMagentoBillingAddressTransformer,
                DaffMagentoCartAddressTransformer,
                DaffMagentoCartPaymentTransformer,
                DaffMagentoCartShippingInformationTransformer,
                DaffMagentoCartShippingRateTransformer,
                DaffMagentoCartTransformer,
                DaffMagentoShippingAddressTransformer,
                DaffMagentoCartCouponResponseTransformer,
                // input transformers
                DaffMagentoCartAddressInputTransformer,
                DaffMagentoShippingAddressInputTransformer,
                DaffMagentoBillingAddressInputTransformer,
                DaffMagentoCartItemUpdateInputTransformer,
                DaffMagentoPaymentMethodInputTransformer,
                DaffMagentoShippingMethodInputTransformer,
            ]
        };
    }
}
DaffCartMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLDZCQUE2QixFQUFFLGlDQUFpQyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFalUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckUsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUYsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdkgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFN0csT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUcsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFPeEcsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFFLDBCQUEwQjtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsV0FBVyxFQUFFLHlDQUF5QztpQkFDdkQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtpQkFDM0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtpQkFDMUM7Z0JBRUQsc0JBQXNCO2dCQUN0QixvQ0FBb0M7Z0JBQ3BDLGlDQUFpQztnQkFDakMsaUNBQWlDO2dCQUNqQyw2Q0FBNkM7Z0JBQzdDLHNDQUFzQztnQkFDdEMsMEJBQTBCO2dCQUMxQixxQ0FBcUM7Z0JBQ3JDLHdDQUF3QztnQkFFeEMscUJBQXFCO2dCQUNyQixzQ0FBc0M7Z0JBQ3RDLDBDQUEwQztnQkFDMUMseUNBQXlDO2dCQUN6Qyx5Q0FBeUM7Z0JBQ3pDLHdDQUF3QztnQkFDeEMseUNBQXlDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTFFRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlciwgRGFmZkNhcnRJdGVtRHJpdmVyLCBEYWZmQ2FydEFkZHJlc3NEcml2ZXIsIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NEcml2ZXIsIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRHJpdmVyLCBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0RyaXZlciwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyLCBEYWZmQ2FydFBheW1lbnREcml2ZXIsIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsIERhZmZDYXJ0T3JkZXJEcml2ZXIsIERhZmZDYXJ0Q291cG9uRHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2VydmljZSB9IGZyb20gJy4vY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWJpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRQYXltZW50U2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRPcmRlclNlcnZpY2UgfSBmcm9tICcuL2NhcnQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRDb3Vwb25TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWNvdXBvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXNoaXBwaW5nLXJhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRQYXltZW50VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXBheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9iaWxsaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRBZGRyZXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ0luZm9ybWF0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRDb3Vwb25SZXNwb25zZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC1jb3Vwb24tcmVzcG9uc2Uuc2VydmljZSc7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2NhcnQtaXRlbS11cGRhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1BheW1lbnRNZXRob2RJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9wYXltZW50LW1ldGhvZC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdNZXRob2RJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9zaGlwcGluZy1tZXRob2Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmQ2FydE1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZDYXJ0TWFnZW50b0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0SXRlbURyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0SXRlbVNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0QWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFBheW1lbnREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFBheW1lbnRTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFBheW1lbnRNZXRob2RzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0NhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0T3JkZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydE9yZGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRDb3Vwb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydENvdXBvblNlcnZpY2VcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBvdXRwdXQgdHJhbnNmb3JtZXJzXG4gICAgICAgIERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc1RyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0NhcnRQYXltZW50VHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25UcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc1RyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0NhcnRDb3Vwb25SZXNwb25zZVRyYW5zZm9ybWVyLFxuXG4gICAgICAgIC8vIGlucHV0IHRyYW5zZm9ybWVyc1xuICAgICAgICBEYWZmTWFnZW50b0NhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0VHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvUGF5bWVudE1ldGhvZElucHV0VHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvU2hpcHBpbmdNZXRob2RJbnB1dFRyYW5zZm9ybWVyLFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==