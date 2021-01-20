/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLoginDriver, DaffRegisterDriver, DaffAuthDriver, } from '@daffodil/auth';
import { DaffTestingLoginService } from './login/login.service';
import { DaffTestingRegisterService } from './register/register.service';
import { DaffTestingAuthService } from './auth/auth.service';
export class DaffAuthTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffAuthTestingDriverModule,
            providers: [
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffTestingLoginService
                },
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffTestingRegisterService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffTestingAuthService
                }
            ]
        };
    }
}
DaffAuthTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9hdXRoLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU83RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBQ3RDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMEJBQTBCO2lCQUN4QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgRGFmZkxvZ2luRHJpdmVyLFxuICBEYWZmUmVnaXN0ZXJEcml2ZXIsXG4gIERhZmZBdXRoRHJpdmVyLFxufSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5cbmltcG9ydCB7IERhZmZUZXN0aW5nTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFRlc3RpbmdEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZBdXRoVGVzdGluZ0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkxvZ2luRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ0xvZ2luU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlJlZ2lzdGVyRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ1JlZ2lzdGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkF1dGhEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQXV0aFNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==