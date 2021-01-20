/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers } from './reducers/public_api';
import { DaffOrderEffects } from './effects/order.effects';
import { DaffPlacedOrderGuardRedirectUrl } from './guards/public_api';
var DaffOrderStateModule = /** @class */ (function () {
    function DaffOrderStateModule() {
    }
    DaffOrderStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        EffectsModule.forFeature([
                            DaffOrderEffects,
                        ]),
                        StoreModule.forFeature(DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers),
                    ],
                    providers: [
                        { provide: DaffPlacedOrderGuardRedirectUrl, useValue: '/' },
                    ]
                },] }
    ];
    return DaffOrderStateModule;
}());
export { DaffOrderStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsib3JkZXItc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RTtJQUFBO0lBV21DLENBQUM7O2dCQVhuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWEsQ0FBQyxVQUFVLENBQUM7NEJBQ3ZCLGdCQUFnQjt5QkFDakIsQ0FBQzt3QkFDRixXQUFXLENBQUMsVUFBVSxDQUFDLDRCQUE0QixFQUFFLGlCQUFpQixDQUFDO3FCQUN4RTtvQkFDRCxTQUFTLEVBQUU7d0JBQ1gsRUFBRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtxQkFDMUQ7aUJBQ0Y7O0lBQ2tDLDJCQUFDO0NBQUEsQUFYcEMsSUFXb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEQUZGX09SREVSX1NUT1JFX0ZFQVRVUkVfS0VZLCBkYWZmT3JkZXJSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL29yZGVyLmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZlBsYWNlZE9yZGVyR3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vZ3VhcmRzL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcbiAgICAgIERhZmZPcmRlckVmZmVjdHMsXG4gICAgXSksXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShEQUZGX09SREVSX1NUT1JFX0ZFQVRVUkVfS0VZLCBkYWZmT3JkZXJSZWR1Y2VycyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRGFmZlBsYWNlZE9yZGVyR3VhcmRSZWRpcmVjdFVybCwgdXNlVmFsdWU6ICcvJyB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclN0YXRlTW9kdWxlIHt9XG4iXX0=