/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { DaffOrderMagentoService } from './order.service';
var DaffOrderMagentoDriverModule = /** @class */ (function () {
    function DaffOrderMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffOrderMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffOrderMagentoDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffOrderMagentoService
                },
            ]
        };
    };
    DaffOrderMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffOrderMagentoDriverModule;
}());
export { DaffOrderMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbIm9yZGVyLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUQ7SUFBQTtJQWlCQSxDQUFDOzs7O0lBWFEsb0NBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQsbUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJEcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyTWFnZW50b1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlck1hZ2VudG9Ecml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERhZmZPcmRlck1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZPcmRlck1hZ2VudG9Ecml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZPcmRlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk9yZGVyTWFnZW50b1NlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=