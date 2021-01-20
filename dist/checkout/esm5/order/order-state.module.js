/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';
import { daffOrderReducers } from './reducers/order-reducers';
/**
 * @deprecated
 */
var DaffOrderStateModule = /** @class */ (function () {
    function DaffOrderStateModule() {
    }
    DaffOrderStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('order', daffOrderReducers),
                        EffectsModule.forFeature([
                            OrderEffects
                        ])
                    ]
                },] }
    ];
    return DaffOrderStateModule;
}());
export { DaffOrderStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsib3JkZXIvb3JkZXItc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFLOUQ7SUFBQTtJQVFvQyxDQUFDOztnQkFScEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQzt3QkFDbEQsYUFBYSxDQUFDLFVBQVUsQ0FBQzs0QkFDdkIsWUFBWTt5QkFDYixDQUFDO3FCQUNIO2lCQUNGOztJQUNtQywyQkFBQztDQUFBLEFBUnJDLElBUXFDO1NBQXhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT3JkZXJFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL29yZGVyLmVmZmVjdHMnO1xuaW1wb3J0IHsgZGFmZk9yZGVyUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL29yZGVyLXJlZHVjZXJzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnb3JkZXInLCBkYWZmT3JkZXJSZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcbiAgICAgIE9yZGVyRWZmZWN0c1xuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyU3RhdGVNb2R1bGUgeyB9XG4iXX0=