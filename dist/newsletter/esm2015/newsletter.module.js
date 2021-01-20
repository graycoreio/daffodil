/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/newsletter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DaffNewsletterEffects } from './effects/newsletter.effects';
export class DaffNewsletterModule {
}
DaffNewsletterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    StoreModule.forFeature('newsletter', reducer),
                    EffectsModule.forFeature([
                        DaffNewsletterEffects
                    ])
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci8iLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBV3JFLE1BQU0sT0FBTyxvQkFBb0I7OztZQVRoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO29CQUM3QyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2QixxQkFBcUI7cUJBQ3RCLENBQUM7aUJBQ047YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL25ld3NsZXR0ZXIucmVkdWNlcidcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9uZXdzbGV0dGVyLmVmZmVjdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnbmV3c2xldHRlcicsIHJlZHVjZXIpLFxuICAgICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICAgICBEYWZmTmV3c2xldHRlckVmZmVjdHNcbiAgICAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyTW9kdWxlIHsgfVxuIl19