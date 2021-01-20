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
var DaffNewsletterModule = /** @class */ (function () {
    function DaffNewsletterModule() {
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
    return DaffNewsletterModule;
}());
export { DaffNewsletterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci8iLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXJFO0lBQUE7SUFTb0MsQ0FBQzs7Z0JBVHBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7d0JBQzdDLGFBQWEsQ0FBQyxVQUFVLENBQUM7NEJBQ3ZCLHFCQUFxQjt5QkFDdEIsQ0FBQztxQkFDTjtpQkFDRjs7SUFDbUMsMkJBQUM7Q0FBQSxBQVRyQyxJQVNxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9uZXdzbGV0dGVyLnJlZHVjZXInXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvbmV3c2xldHRlci5lZmZlY3RzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ25ld3NsZXR0ZXInLCByZWR1Y2VyKSxcbiAgICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgICAgRGFmZk5ld3NsZXR0ZXJFZmZlY3RzXG4gICAgICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlck1vZHVsZSB7IH1cbiJdfQ==