/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffAuthEffects } from './effects/auth.effects';
import { DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers } from './reducers/public_api';
var DaffAuthStateModule = /** @class */ (function () {
    function DaffAuthStateModule() {
    }
    DaffAuthStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
                        EffectsModule.forFeature([DaffAuthEffects]),
                    ]
                },] }
    ];
    return DaffAuthStateModule;
}());
export { DaffAuthStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImF1dGgtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEY7SUFBQTtJQU1rQyxDQUFDOztnQkFObEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLDJCQUEyQixFQUFFLGdCQUFnQixDQUFDO3dCQUNyRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzVDO2lCQUNGOztJQUNpQywwQkFBQztDQUFBLEFBTm5DLElBTW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkF1dGhFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2F1dGguZWZmZWN0cyc7XG5pbXBvcnQgeyBEQUZGX0FVVEhfU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZBdXRoUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShEQUZGX0FVVEhfU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZBdXRoUmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRGFmZkF1dGhFZmZlY3RzXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhTdGF0ZU1vZHVsZSB7fVxuIl19