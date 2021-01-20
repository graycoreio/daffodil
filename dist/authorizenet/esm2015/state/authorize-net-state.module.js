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
export class DaffAuthorizeNetStateModule {
}
DaffAuthorizeNetStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
                    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiYXV0aG9yaXplLW5ldC1zdGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBUWhHLE1BQU0sT0FBTywyQkFBMkI7OztZQU52QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNULFdBQVcsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLEVBQUUsd0JBQXdCLENBQUM7b0JBQ25GLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2lCQUNwRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBkYWZmQXV0aG9yaXplTmV0UmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2F1dGhvcml6ZS1uZXQucmVkdWNlcnMnO1xuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvYXV0aG9yaXplLW5ldC5lZmZlY3RzJztcbmltcG9ydCB7IERBRkZfQVVUSE9SSVpFTkVUX1NUT1JFX0ZFQVRVUkVfS0VZIH0gZnJvbSAnLi9yZWR1Y2Vycy9hdXRob3JpemVuZXQtc3RvcmUtZmVhdHVyZS1rZXknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShEQUZGX0FVVEhPUklaRU5FVF9TVE9SRV9GRUFUVVJFX0tFWSwgZGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJzKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0RhZmZBdXRob3JpemVOZXRFZmZlY3RzXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldFN0YXRlTW9kdWxlIHsgfVxuIl19