/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLoginDriver, DaffRegisterDriver, DaffAuthDriver, } from '@daffodil/auth';
import { DaffInMemoryLoginService } from './login/login.service';
import { DaffInMemoryRegisterService } from './register/register.service';
import { DaffInMemoryAuthService } from './auth/auth.service';
var DaffAuthInMemoryDriverModule = /** @class */ (function () {
    function DaffAuthInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffAuthInMemoryDriverModule,
            providers: [
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffInMemoryLoginService
                },
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffInMemoryRegisterService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffInMemoryAuthService
                }
            ]
        };
    };
    DaffAuthInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffAuthInMemoryDriverModule;
}());
export { DaffAuthInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L2F1dGgtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlEO0lBQUE7SUF5QkEsQ0FBQzs7OztJQW5CUSxvQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7aUJBQ3RDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSwyQkFBMkI7aUJBQ3pDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBcUJELG1DQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIERhZmZMb2dpbkRyaXZlcixcbiAgRGFmZlJlZ2lzdGVyRHJpdmVyLFxuICBEYWZmQXV0aERyaXZlcixcbn0gZnJvbSAnQGRhZmZvZGlsL2F1dGgnO1xuXG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5UmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhJbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkF1dGhJbk1lbW9yeURyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkxvZ2luRHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlMb2dpblNlcnZpY2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZSZWdpc3RlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5UmVnaXN0ZXJTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQXV0aERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5QXV0aFNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==