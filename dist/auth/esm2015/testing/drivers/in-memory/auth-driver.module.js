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
export class DaffAuthInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffAuthInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L2F1dGgtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTzlELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFDdkMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7aUJBQ3RDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSwyQkFBMkI7aUJBQ3pDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmTG9naW5Ecml2ZXIsXG4gIERhZmZSZWdpc3RlckRyaXZlcixcbiAgRGFmZkF1dGhEcml2ZXIsXG59IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcblxuaW1wb3J0IHsgRGFmZkluTWVtb3J5TG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeVJlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRoSW5NZW1vcnlEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZBdXRoSW5NZW1vcnlEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZMb2dpbkRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5TG9naW5TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmUmVnaXN0ZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeVJlZ2lzdGVyU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkF1dGhEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeUF1dGhTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=