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
export class DaffOrderStateModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsib3JkZXItc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWF0RSxNQUFNLE9BQU8sb0JBQW9COzs7WUFYaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2QixnQkFBZ0I7cUJBQ2pCLENBQUM7b0JBQ0YsV0FBVyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsRUFBRSxpQkFBaUIsQ0FBQztpQkFDeEU7Z0JBQ0QsU0FBUyxFQUFFO29CQUNYLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7aUJBQzFEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERBRkZfT1JERVJfU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZPcmRlclJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZPcmRlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvb3JkZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmUGxhY2VkT3JkZXJHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9ndWFyZHMvcHVibGljX2FwaSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgRGFmZk9yZGVyRWZmZWN0cyxcbiAgICBdKSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKERBRkZfT1JERVJfU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZPcmRlclJlZHVjZXJzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBEYWZmUGxhY2VkT3JkZXJHdWFyZFJlZGlyZWN0VXJsLCB1c2VWYWx1ZTogJy8nIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyU3RhdGVNb2R1bGUge31cbiJdfQ==