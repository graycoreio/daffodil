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
export class DaffOrderStateModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsib3JkZXIvb3JkZXItc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFhOUQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBUmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7b0JBQ2xELGFBQWEsQ0FBQyxVQUFVLENBQUM7d0JBQ3ZCLFlBQVk7cUJBQ2IsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPcmRlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvb3JkZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBkYWZmT3JkZXJSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvb3JkZXItcmVkdWNlcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdvcmRlcicsIGRhZmZPcmRlclJlZHVjZXJzKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgT3JkZXJFZmZlY3RzXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJTdGF0ZU1vZHVsZSB7IH1cbiJdfQ==