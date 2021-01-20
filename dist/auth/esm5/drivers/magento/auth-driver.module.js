/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRegisterDriver } from '../interfaces/register-service.interface';
import { DaffMagentoRegisterService } from './register.service';
import { DaffLoginDriver } from '../interfaces/login-service.interface';
import { DaffMagentoLoginService } from './login.service';
import { DaffAuthDriver } from '../interfaces/auth-service.interface';
import { DaffMagentoAuthService } from './auth.service';
var DaffAuthMagentoDriverModule = /** @class */ (function () {
    function DaffAuthMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffAuthMagentoDriverModule,
            providers: [
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffMagentoRegisterService
                },
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffMagentoLoginService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffMagentoAuthService
                }
            ]
        };
    };
    DaffAuthMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffAuthMagentoDriverModule;
}());
export { DaffAuthMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vYXV0aC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RDtJQUFBO0lBeUJBLENBQUM7Ozs7SUFuQlEsbUNBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSwwQkFBMEI7aUJBQ3hDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQXFCRCxrQ0FBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmUmVnaXN0ZXJEcml2ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3JlZ2lzdGVyLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRGFmZkxvZ2luRHJpdmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2dpbi1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0xvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XG5cbmltcG9ydCB7IERhZmZBdXRoRHJpdmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hdXRoLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aE1hZ2VudG9Ecml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZBdXRoTWFnZW50b0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlJlZ2lzdGVyRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b1JlZ2lzdGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkxvZ2luRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0xvZ2luU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkF1dGhEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZNYWdlbnRvQXV0aFNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==