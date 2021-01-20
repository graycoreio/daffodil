/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { DaffOrderMagentoService } from './order.service';
export class DaffOrderMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffOrderMagentoDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffOrderMagentoService
                },
            ]
        };
    }
}
DaffOrderMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbIm9yZGVyLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPMUQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUN2QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLHVCQUF1QjtpQkFDckM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyRHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyL2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZPcmRlck1hZ2VudG9TZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmT3JkZXJNYWdlbnRvRHJpdmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmT3JkZXJNYWdlbnRvRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmT3JkZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZPcmRlck1hZ2VudG9TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19