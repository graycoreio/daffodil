/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffTestingContactService } from './contact.service';
var DaffContactTestingDriverModule = /** @class */ (function () {
    function DaffContactTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffContactTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffContactTestingDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffTestingContactService,
                },
            ],
        };
    };
    DaffContactTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactTestingDriverModule;
}());
export { DaffContactTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbInRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUQ7SUFBQTtJQWVBLENBQUM7Ozs7SUFYTyxzQ0FBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLHlCQUF5QjtpQkFDbkM7YUFDRDtTQUNELENBQUM7SUFDSCxDQUFDOztnQkFkRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN2Qjs7SUFhRCxxQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3REcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdC9kcml2ZXInO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdDb250YWN0U2VydmljZSB9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0VGVzdGluZ0RyaXZlck1vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogRGFmZkNvbnRhY3RUZXN0aW5nRHJpdmVyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBEYWZmQ29udGFjdERyaXZlcixcblx0XHRcdFx0XHR1c2VDbGFzczogRGFmZlRlc3RpbmdDb250YWN0U2VydmljZSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19