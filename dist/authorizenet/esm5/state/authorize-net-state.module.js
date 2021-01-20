/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { daffAuthorizeNetReducers } from './reducers/authorize-net.reducers';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './reducers/authorizenet-store-feature-key';
var DaffAuthorizeNetStateModule = /** @class */ (function () {
    function DaffAuthorizeNetStateModule() {
    }
    DaffAuthorizeNetStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
                        EffectsModule.forFeature([DaffAuthorizeNetEffects]),
                    ]
                },] }
    ];
    return DaffAuthorizeNetStateModule;
}());
export { DaffAuthorizeNetStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiYXV0aG9yaXplLW5ldC1zdGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWhHO0lBQUE7SUFNMkMsQ0FBQzs7Z0JBTjNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxtQ0FBbUMsRUFBRSx3QkFBd0IsQ0FBQzt3QkFDbkYsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7cUJBQ3BEO2lCQUNGOztJQUMwQyxrQ0FBQztDQUFBLEFBTjVDLElBTTRDO1NBQS9CLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgZGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9hdXRob3JpemUtbmV0LnJlZHVjZXJzJztcbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2F1dGhvcml6ZS1uZXQuZWZmZWN0cyc7XG5pbXBvcnQgeyBEQUZGX0FVVEhPUklaRU5FVF9TVE9SRV9GRUFUVVJFX0tFWSB9IGZyb20gJy4vcmVkdWNlcnMvYXV0aG9yaXplbmV0LXN0b3JlLWZlYXR1cmUta2V5JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoREFGRl9BVVRIT1JJWkVORVRfU1RPUkVfRkVBVFVSRV9LRVksIGRhZmZBdXRob3JpemVOZXRSZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYWZmQXV0aG9yaXplTmV0RWZmZWN0c10pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRTdGF0ZU1vZHVsZSB7IH1cbiJdfQ==