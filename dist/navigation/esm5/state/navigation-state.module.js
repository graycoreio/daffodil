/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { daffNavigationReducers } from './reducers/navigation-reducers';
import { DaffNavigationEffects } from './effects/navigation.effects';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './reducers/public_api';
var DaffNavigationStateModule = /** @class */ (function () {
    function DaffNavigationStateModule() {
    }
    DaffNavigationStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
                        EffectsModule.forFeature([DaffNavigationEffects]),
                    ]
                },] }
    ];
    return DaffNavigationStateModule;
}());
export { DaffNavigationStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi9zdGF0ZS8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRTtJQUFBO0lBTXlDLENBQUM7O2dCQU56QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUNBQWlDLEVBQUUsc0JBQXNCLENBQUM7d0JBQ2pGLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3FCQUNsRDtpQkFDRjs7SUFDd0MsZ0NBQUM7Q0FBQSxBQU4xQyxJQU0wQztTQUE3Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IGRhZmZOYXZpZ2F0aW9uUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL25hdmlnYXRpb24tcmVkdWNlcnMnO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25FZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL25hdmlnYXRpb24uZWZmZWN0cyc7XG5pbXBvcnQgeyBEQUZGX05BVklHQVRJT05fU1RPUkVfRkVBVFVSRV9LRVkgfSBmcm9tICcuL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShEQUZGX05BVklHQVRJT05fU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZOYXZpZ2F0aW9uUmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRGFmZk5hdmlnYXRpb25FZmZlY3RzXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25TdGF0ZU1vZHVsZSB7IH1cbiJdfQ==