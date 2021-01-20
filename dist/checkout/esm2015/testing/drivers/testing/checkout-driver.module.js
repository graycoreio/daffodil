/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCheckoutDriver } from '@daffodil/checkout';
import { DaffTestingCheckoutService } from './checkout.service';
export class DaffCheckoutTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffCheckoutTestingDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffTestingCheckoutService
                }
            ]
        };
    }
}
DaffCheckoutTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZHJpdmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL2NoZWNrb3V0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9oRSxNQUFNLE9BQU8sK0JBQStCOzs7O0lBQzFDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSwwQkFBMEI7aUJBQ3hDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZDaGVja291dERyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5cbmltcG9ydCB7IERhZmZUZXN0aW5nQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDaGVja291dFRlc3RpbmdEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZDaGVja291dFRlc3RpbmdEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZDaGVja291dERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdDaGVja291dFNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==