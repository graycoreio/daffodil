/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers/contact.reducer';
import { DaffContactEffects } from './effects/contact.effects';
export class DaffContactStateModule {
}
DaffContactStateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    StoreModule.forFeature('contact', reducer),
                    EffectsModule.forFeature([DaffContactEffects])
                ],
                providers: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9zdGF0ZS8iLCJzb3VyY2VzIjpbImNvbnRhY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFVL0QsTUFBTSxPQUFPLHNCQUFzQjs7O1lBUmxDLFFBQVEsU0FBQztnQkFDVCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNSLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztvQkFDMUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7aUJBQzlDO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2NvbnRhY3QucmVkdWNlcic7XG5pbXBvcnQgeyBEYWZmQ29udGFjdEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY29udGFjdC5lZmZlY3RzJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0aW1wb3J0czogW1xuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2NvbnRhY3QnLCByZWR1Y2VyKSxcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0RhZmZDb250YWN0RWZmZWN0c10pXG5cdF0sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0U3RhdGVNb2R1bGUgeyB9XG4iXX0=