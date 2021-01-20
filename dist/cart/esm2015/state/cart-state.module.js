/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DaffCartStateModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = (/** @type {?} */ ({}))) {
        return {
            ngModule: DaffCartStateModule,
            providers: [
                {
                    provide: DAFF_CART_STATE_CONFIG,
                    useValue: Object.assign({}, daffCartStateConfigurationDefault, config)
                }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImNhcnQtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUNOLHNDQUFzQyxFQUN0Qyx1Q0FBdUMsRUFDdkMsc0NBQXNDLEVBQ3JDLHFDQUFxQyxFQUNyQyxtQ0FBbUMsRUFDbkMsNkJBQTZCLEVBQzlCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBOEIsc0JBQXNCLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWdDeEgsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFxQyxtQkFBQSxFQUFFLEVBQU87UUFDM0QsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsb0JBQ0gsaUNBQWlDLEVBQ2pDLE1BQU0sQ0FDVjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQTVDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDO29CQUNoRCxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2QixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3dCQUM3Qiw4QkFBOEI7d0JBQzlCLHNCQUFzQjt3QkFDdEIsa0NBQWtDO3dCQUNsQyw4QkFBOEI7d0JBQzlCLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3QixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3FCQUMxQixDQUFDO2lCQUNGO2dCQUNELFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUNsRSxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUN6RCxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUNuRSxFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUNsRSxFQUFFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUNqRSxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUMvRCxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUM1RCxFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUN2RCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2lCQUMxRDthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG5cdERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsLFxuXHREYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwsXG5cdERhZmZDYXJ0U2hpcHBpbmdNZXRob2RHdWFyZFJlZGlyZWN0VXJsLFxuICBEYWZmQ2FydFBheW1lbnRNZXRob2RHdWFyZFJlZGlyZWN0VXJsLFxuICBEYWZmQ2FydE9yZGVyUmVzdWx0R3VhcmRSZWRpcmVjdFVybCxcbiAgRGFmZkNhcnRJdGVtc0d1YXJkUmVkaXJlY3RVcmxcbn0gZnJvbSAnLi9ndWFyZHMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmRW1wdHlDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybCwgRGFmZkNhcnRSZXNvbHZlclJlZGlyZWN0VXJsIH0gZnJvbSAnLi9yZXNvbHZlcnMvcHVibGljX2FwaSc7XG5cbmltcG9ydCB7IGRhZmZDYXJ0UmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhcnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1FZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtaXRlbS5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtYmlsbGluZy1hZGRyZXNzLmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtcGF5bWVudC5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhcnQtcGF5bWVudC1tZXRob2RzLmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkNhcnRPcmRlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1vcmRlci5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0Q291cG9uRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWNvdXBvbi5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzc0VmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1hZGRyZXNzLmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWUgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvY2FydC1pdGVtLXN0YXRlLWRlYm91bmNlLXRpbWUnO1xuaW1wb3J0IHsgRGFmZkNhcnRSZXNvbHZlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC1yZXNvbHZlci5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uLCBEQUZGX0NBUlRfU1RBVEVfQ09ORklHLCBkYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbkRlZmF1bHQgfSBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnY2FydCcsIGRhZmZDYXJ0UmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICBEYWZmQ2FydEVmZmVjdHMsXG4gICAgICBEYWZmQ2FydEl0ZW1FZmZlY3RzLFxuICAgICAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0VmZmVjdHMsXG4gICAgICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0VmZmVjdHMsXG4gICAgICBEYWZmQ2FydEFkZHJlc3NFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0UGF5bWVudEVmZmVjdHMsXG4gICAgICBEYWZmQ2FydFBheW1lbnRNZXRob2RzRWZmZWN0cyxcbiAgICAgIERhZmZDYXJ0T3JkZXJFZmZlY3RzLFxuICAgICAgRGFmZkNhcnRDb3Vwb25FZmZlY3RzLFxuICAgICAgRGFmZkNhcnRSZXNvbHZlckVmZmVjdHMsXG5cdFx0XSksXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwsIHVzZVZhbHVlOiAnLycgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZDYXJ0SXRlbXNHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwsIHVzZVZhbHVlOiAnLycgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydFBheW1lbnRNZXRob2RHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG5cdFx0eyBwcm92aWRlOiBEYWZmQ2FydE9yZGVyUmVzdWx0R3VhcmRSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkVtcHR5Q2FydFJlc29sdmVyUmVkaXJlY3RVcmwsIHVzZVZhbHVlOiAnLycgfSxcblx0XHR7IHByb3ZpZGU6IERhZmZDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuXHRcdHsgcHJvdmlkZTogRGFmZkNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWUsIHVzZVZhbHVlOiA0MDAwIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFN0YXRlTW9kdWxlIHsgXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGFmZkNhcnRTdGF0ZUNvbmZpZ3VyYXRpb24gPSB7fSBhcyBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERhZmZDYXJ0U3RhdGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZDYXJ0U3RhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERBRkZfQ0FSVF9TVEFURV9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgIC4uLmRhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uRGVmYXVsdCxcbiAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19