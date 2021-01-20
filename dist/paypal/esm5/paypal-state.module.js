/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffPaypalEffects } from './effects/paypal.effects';
import { daffPaypalReducers } from './reducers/paypal-reducers';
var DaffPaypalStateModule = /** @class */ (function () {
    function DaffPaypalStateModule() {
    }
    DaffPaypalStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('paypal', daffPaypalReducers),
                        EffectsModule.forFeature([DaffPaypalEffects])
                    ]
                },] }
    ];
    return DaffPaypalStateModule;
}());
export { DaffPaypalStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXN0YXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJwYXlwYWwtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRTtJQUFBO0lBTW9DLENBQUM7O2dCQU5wQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO3dCQUNwRCxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDOUM7aUJBQ0Y7O0lBQ21DLDRCQUFDO0NBQUEsQUFOckMsSUFNcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9wYXlwYWwuZWZmZWN0cyc7XG5pbXBvcnQgeyBkYWZmUGF5cGFsUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL3BheXBhbC1yZWR1Y2Vycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdwYXlwYWwnLCBkYWZmUGF5cGFsUmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRGFmZlBheXBhbEVmZmVjdHNdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXlwYWxTdGF0ZU1vZHVsZSB7fVxuIl19