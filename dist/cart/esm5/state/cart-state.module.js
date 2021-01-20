/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffCartBillingAddressGuardRedirectUrl, DaffCartShippingAddressGuardRedirectUrl, DaffCartShippingMethodGuardRedirectUrl, DaffCartPaymentMethodGuardRedirectUrl, DaffCartOrderResultGuardRedirectUrl, DaffCartItemsGuardRedirectUrl } from './guards/public_api';
import { DaffEmptyCartResolverRedirectUrl, DaffCartResolverRedirectUrl } from './resolvers/public_api';
import { daffCartReducers } from './reducers/public_api';
import { DaffCartEffects } from './effects/cart.effects';
import { DaffCartItemEffects } from './effects/cart-item.effects';
import { DaffCartBillingAddressEffects } from './effects/cart-billing-address.effects';
import { DaffCartShippingAddressEffects } from './effects/cart-shipping-address.effects';
import { DaffCartShippingInformationEffects } from './effects/cart-shipping-information.effects';
import { DaffCartShippingMethodsEffects } from './effects/cart-shipping-methods.effects';
import { DaffCartPaymentEffects } from './effects/cart-payment.effects';
import { DaffCartPaymentMethodsEffects } from './effects/cart-payment-methods.effects';
import { DaffCartOrderEffects } from './effects/cart-order.effects';
import { DaffCartCouponEffects } from './effects/cart-coupon.effects';
import { DaffCartAddressEffects } from './effects/cart-address.effects';
import { DaffCartItemStateDebounceTime } from './injection-tokens/cart-item-state-debounce-time';
import { DaffCartResolverEffects } from './effects/cart-resolver.effects';
import { DAFF_CART_STATE_CONFIG, daffCartStateConfigurationDefault } from './config/config';
var DaffCartStateModule = /** @class */ (function () {
    function DaffCartStateModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DaffCartStateModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = (/** @type {?} */ ({})); }
        return {
            ngModule: DaffCartStateModule,
            providers: [
                {
                    provide: DAFF_CART_STATE_CONFIG,
                    useValue: tslib_1.__assign({}, daffCartStateConfigurationDefault, config)
                }
            ]
        };
    };
    DaffCartStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('cart', daffCartReducers),
                        EffectsModule.forFeature([
                            DaffCartEffects,
                            DaffCartItemEffects,
                            DaffCartBillingAddressEffects,
                            DaffCartShippingAddressEffects,
                            DaffCartAddressEffects,
                            DaffCartShippingInformationEffects,
                            DaffCartShippingMethodsEffects,
                            DaffCartPaymentEffects,
                            DaffCartPaymentMethodsEffects,
                            DaffCartOrderEffects,
                            DaffCartCouponEffects,
                            DaffCartResolverEffects,
                        ]),
                    ],
                    providers: [
                        { provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
                        { provide: DaffCartItemsGuardRedirectUrl, useValue: '/' },
                        { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
                        { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
                        { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
                        { provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
                        { provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
                        { provide: DaffCartResolverRedirectUrl, useValue: '/' },
                        { provide: DaffCartItemStateDebounceTime, useValue: 4000 }
                    ]
                },] }
    ];
    return DaffCartStateModule;
}());
export { DaffCartStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImNhcnQtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFDTixzQ0FBc0MsRUFDdEMsdUNBQXVDLEVBQ3ZDLHNDQUFzQyxFQUNyQyxxQ0FBcUMsRUFDckMsbUNBQW1DLEVBQ25DLDZCQUE2QixFQUM5QixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQThCLHNCQUFzQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEg7SUFBQTtJQTZDQSxDQUFDOzs7OztJQWRRLDJCQUFPOzs7O0lBQWQsVUFBZSxNQUE4QztRQUE5Qyx1QkFBQSxFQUFBLDRCQUFxQyxFQUFFLEVBQU87UUFDM0QsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsdUJBQ0gsaUNBQWlDLEVBQ2pDLE1BQU0sQ0FDVjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7O2dCQTVDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDO3dCQUNoRCxhQUFhLENBQUMsVUFBVSxDQUFDOzRCQUN2QixlQUFlOzRCQUNmLG1CQUFtQjs0QkFDbkIsNkJBQTZCOzRCQUM3Qiw4QkFBOEI7NEJBQzlCLHNCQUFzQjs0QkFDdEIsa0NBQWtDOzRCQUNsQyw4QkFBOEI7NEJBQzlCLHNCQUFzQjs0QkFDdEIsNkJBQTZCOzRCQUM3QixvQkFBb0I7NEJBQ3BCLHFCQUFxQjs0QkFDckIsdUJBQXVCO3lCQUMxQixDQUFDO3FCQUNGO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUNsRSxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUN6RCxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUNuRSxFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUNsRSxFQUFFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUNqRSxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUMvRCxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUM1RCxFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO3dCQUN2RCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3FCQUMxRDtpQkFDRDs7SUFnQkQsMEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQWZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQge1xuXHREYWZmQ2FydEJpbGxpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCxcblx0RGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsLFxuXHREYWZmQ2FydFNoaXBwaW5nTWV0aG9kR3VhcmRSZWRpcmVjdFVybCxcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kR3VhcmRSZWRpcmVjdFVybCxcbiAgRGFmZkNhcnRPcmRlclJlc3VsdEd1YXJkUmVkaXJlY3RVcmwsXG4gIERhZmZDYXJ0SXRlbXNHdWFyZFJlZGlyZWN0VXJsXG59IGZyb20gJy4vZ3VhcmRzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkVtcHR5Q2FydFJlc29sdmVyUmVkaXJlY3RVcmwsIERhZmZDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybCB9IGZyb20gJy4vcmVzb2x2ZXJzL3B1YmxpY19hcGknO1xuXG5pbXBvcnQgeyBkYWZmQ2FydFJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDYXJ0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWl0ZW0uZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25FZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0VmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1zaGlwcGluZy1tZXRob2RzLmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LXBheW1lbnQuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2RzRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0T3JkZXJFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtb3JkZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydENvdXBvbkVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1jb3Vwb24uZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtYWRkcmVzcy5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtaXRlbS1zdGF0ZS1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IERhZmZDYXJ0UmVzb2x2ZXJFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtcmVzb2x2ZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbiwgREFGRl9DQVJUX1NUQVRFX0NPTkZJRywgZGFmZkNhcnRTdGF0ZUNvbmZpZ3VyYXRpb25EZWZhdWx0IH0gZnJvbSAnLi9jb25maWcvY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2NhcnQnLCBkYWZmQ2FydFJlZHVjZXJzKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgRGFmZkNhcnRFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRJdGVtRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRBZGRyZXNzRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkVmZmVjdHMsXG4gICAgICBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0VmZmVjdHMsXG4gICAgICBEYWZmQ2FydFBheW1lbnRFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRQYXltZW50TWV0aG9kc0VmZmVjdHMsXG4gICAgICBEYWZmQ2FydE9yZGVyRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0Q291cG9uRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0UmVzb2x2ZXJFZmZlY3RzLFxuXHRcdF0pLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydEl0ZW1zR3VhcmRSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kR3VhcmRSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkNhcnRQYXltZW50TWV0aG9kR3VhcmRSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkNhcnRPcmRlclJlc3VsdEd1YXJkUmVkaXJlY3RVcmwsIHVzZVZhbHVlOiAnLycgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZFbXB0eUNhcnRSZXNvbHZlclJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydFJlc29sdmVyUmVkaXJlY3RVcmwsIHVzZVZhbHVlOiAnLycgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZDYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lLCB1c2VWYWx1ZTogNDAwMCB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTdGF0ZU1vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uID0ge30gYXMgYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmQ2FydFN0YXRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmQ2FydFN0YXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEQUZGX0NBUlRfU1RBVEVfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICAuLi5kYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbkRlZmF1bHQsXG4gICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==