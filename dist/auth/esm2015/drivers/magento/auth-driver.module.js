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
export class DaffAuthMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffAuthMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vYXV0aC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU94RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBQ3RDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSwwQkFBMEI7aUJBQ3hDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZlJlZ2lzdGVyRHJpdmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZWdpc3Rlci1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1JlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4vcmVnaXN0ZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IERhZmZMb2dpbkRyaXZlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvbG9naW4tc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9Mb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aERyaXZlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aC1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhNYWdlbnRvRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmQXV0aE1hZ2VudG9Ecml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZSZWdpc3RlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9SZWdpc3RlclNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZMb2dpbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZk1hZ2VudG9Mb2dpblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZBdXRoRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmTWFnZW50b0F1dGhTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=