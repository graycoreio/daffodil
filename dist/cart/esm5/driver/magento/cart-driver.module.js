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
var DaffCartMagentoDriverModule = /** @class */ (function () {
    function DaffCartMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCartMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    DaffCartMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffCartMagentoDriverModule;
}());
export { DaffCartMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLDZCQUE2QixFQUFFLGlDQUFpQyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFalUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7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dWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyLCBEYWZmQ2FydEl0ZW1Ecml2ZXIsIERhZmZDYXJ0QWRkcmVzc0RyaXZlciwgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlciwgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRHJpdmVyLCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Ecml2ZXIsIERhZmZDYXJ0UGF5bWVudERyaXZlciwgRGFmZkNhcnRQYXltZW50TWV0aG9kc0RyaXZlciwgRGFmZkNhcnRPcmRlckRyaXZlciwgRGFmZkNhcnRDb3Vwb25Ecml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0SXRlbVNlcnZpY2UgfSBmcm9tICcuL2NhcnQtaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQtbWV0aG9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydE9yZGVyU2VydmljZSB9IGZyb20gJy4vY2FydC1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydENvdXBvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtY291cG9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ1JhdGVUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtc2hpcHBpbmctcmF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2JpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydENvdXBvblJlc3BvbnNlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWNvdXBvbi1yZXNwb25zZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9iaWxsaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRJdGVtVXBkYXRlSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvY2FydC1pdGVtLXVwZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5bWVudE1ldGhvZElucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL3BheW1lbnQtbWV0aG9kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9TaGlwcGluZ01ldGhvZElucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL3NoaXBwaW5nLW1ldGhvZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydE1hZ2VudG9Ecml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERhZmZDYXJ0TWFnZW50b0RyaXZlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkNhcnRNYWdlbnRvRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0U2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRJdGVtRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0NhcnRJdGVtU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRBZGRyZXNzRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0NhcnRBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0RyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQ2FydFBheW1lbnRNZXRob2RzU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkNhcnRPcmRlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0T3JkZXJTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2FydENvdXBvbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9DYXJ0Q291cG9uU2VydmljZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIG91dHB1dCB0cmFuc2Zvcm1lcnNcbiAgICAgICAgRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc1RyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0NhcnRBZGRyZXNzVHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblRyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ1JhdGVUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvQ2FydENvdXBvblJlc3BvbnNlVHJhbnNmb3JtZXIsXG5cbiAgICAgICAgLy8gaW5wdXQgdHJhbnNmb3JtZXJzXG4gICAgICAgIERhZmZNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIsXG4gICAgICAgIERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyLFxuICAgICAgICBEYWZmTWFnZW50b0NhcnRJdGVtVXBkYXRlSW5wdXRUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9QYXltZW50TWV0aG9kSW5wdXRUcmFuc2Zvcm1lcixcbiAgICAgICAgRGFmZk1hZ2VudG9TaGlwcGluZ01ldGhvZElucHV0VHJhbnNmb3JtZXIsXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19