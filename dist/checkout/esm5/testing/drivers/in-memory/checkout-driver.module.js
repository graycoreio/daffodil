/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCheckoutDriver } from '@daffodil/checkout';
import { DaffInMemoryCheckoutService } from './checkout.service';
var DaffCheckoutInMemoryDriverModule = /** @class */ (function () {
    function DaffCheckoutInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCheckoutInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCheckoutInMemoryDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffInMemoryCheckoutService
                }
            ]
        };
    };
    DaffCheckoutInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCheckoutInMemoryDriverModule;
}());
export { DaffCheckoutInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9pbi1tZW1vcnkvY2hlY2tvdXQtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLHdDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMkJBQTJCO2lCQUN6QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQsdUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmQ2hlY2tvdXREcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuXG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDaGVja291dFNlcnZpY2UgfSBmcm9tICcuL2NoZWNrb3V0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNoZWNrb3V0SW5NZW1vcnlEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZDaGVja291dEluTWVtb3J5RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQ2hlY2tvdXREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUNoZWNrb3V0U2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19