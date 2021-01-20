/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers/contact.reducer';
import { DaffContactEffects } from './effects/contact.effects';
var DaffContactStateModule = /** @class */ (function () {
    function DaffContactStateModule() {
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
    return DaffContactStateModule;
}());
export { DaffContactStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9zdGF0ZS8iLCJzb3VyY2VzIjpbImNvbnRhY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0Q7SUFBQTtJQVFzQyxDQUFDOztnQkFSdEMsUUFBUSxTQUFDO29CQUNULFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3dCQUMxQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDOUM7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2I7O0lBQ3FDLDZCQUFDO0NBQUEsQUFSdkMsSUFRdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9jb250YWN0LnJlZHVjZXInO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3RFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NvbnRhY3QuZWZmZWN0cyc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGltcG9ydHM6IFtcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdjb250YWN0JywgcmVkdWNlciksXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYWZmQ29udGFjdEVmZmVjdHNdKVxuXHRdLFxuXHRwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFN0YXRlTW9kdWxlIHsgfVxuIl19