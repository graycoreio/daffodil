/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffInMemoryContactService } from './contact.service';
var DaffContactInMemoryDriverModule = /** @class */ (function () {
    function DaffContactInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffContactInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffContactInMemoryDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffInMemoryContactService,
                },
            ],
        };
    };
    DaffContactInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactInMemoryDriverModule;
}());
export { DaffContactInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb250YWN0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJpbi1tZW1vcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0Q7SUFBQTtJQWVBLENBQUM7Ozs7SUFYTyx1Q0FBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7YUFDRDtTQUNELENBQUM7SUFDSCxDQUFDOztnQkFkRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN2Qjs7SUFhRCxzQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmQ29udGFjdERyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L2RyaXZlcic7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlDb250YWN0U2VydmljZSB9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0SW5NZW1vcnlEcml2ZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhZmZDb250YWN0SW5NZW1vcnlEcml2ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IERhZmZDb250YWN0RHJpdmVyLFxuXHRcdFx0XHRcdHVzZUNsYXNzOiBEYWZmSW5NZW1vcnlDb250YWN0U2VydmljZSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19