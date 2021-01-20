/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffAuthEffects } from './effects/auth.effects';
import { DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers } from './reducers/public_api';
export class DaffAuthStateModule {
}
DaffAuthStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
                    EffectsModule.forFeature([DaffAuthEffects]),
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImF1dGgtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRdEYsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDckUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUM1QzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvYXV0aC5lZmZlY3RzJztcbmltcG9ydCB7IERBRkZfQVVUSF9TVE9SRV9GRUFUVVJFX0tFWSwgZGFmZkF1dGhSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKERBRkZfQVVUSF9TVE9SRV9GRUFUVVJFX0tFWSwgZGFmZkF1dGhSZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYWZmQXV0aEVmZmVjdHNdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFN0YXRlTW9kdWxlIHt9XG4iXX0=