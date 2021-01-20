/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DaffHubspotFormsService, daffHubspotFormsServiceFactory, } from '@daffodil/driver/hubspot';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffContactHubspotService } from './contact.service';
import { DaffContactConfigToken } from './config/contact-config.interface';
var DaffContactHubSpotDriverModule = /** @class */ (function () {
    function DaffContactHubSpotDriverModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DaffContactHubSpotDriverModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DaffContactHubSpotDriverModule,
            providers: [
                { provide: DaffContactDriver, useClass: DaffContactHubspotService },
                { provide: DaffContactConfigToken, useValue: config },
                {
                    provide: DaffHubspotFormsService,
                    useFactory: daffHubspotFormsServiceFactory,
                    deps: [HttpClient, DOCUMENT, Router, Title, DaffContactConfigToken],
                },
            ],
        };
    };
    DaffContactHubSpotDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactHubSpotDriverModule;
}());
export { DaffContactHubSpotDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVic3BvdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2h1YnNwb3QvIiwic291cmNlcyI6WyJodWJzcG90LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUNOLHVCQUF1QixFQUN2Qiw4QkFBOEIsR0FFOUIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRTtJQUFBO0lBb0JBLENBQUM7Ozs7O0lBaEJPLHNDQUFPOzs7O0lBQWQsVUFDQyxNQUF5QjtRQUV6QixPQUFPO1lBQ04sUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2dCQUNuRSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyRDtvQkFDQyxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxVQUFVLEVBQUUsOEJBQThCO29CQUMxQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUM7aUJBQ25FO2FBQ0Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBbkJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3ZCOztJQWtCRCxxQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcblx0RGFmZkh1YnNwb3RGb3Jtc1NlcnZpY2UsXG5cdGRhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlRmFjdG9yeSxcblx0RGFmZkh1YnNwb3RDb25maWcsXG59IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvaHVic3BvdCc7XG5pbXBvcnQgeyBEYWZmQ29udGFjdERyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDb250YWN0SHVic3BvdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5cbmltcG9ydCB7IERhZmZDb250YWN0Q29uZmlnVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9jb250YWN0LWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RIdWJTcG90RHJpdmVyTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0Y29uZmlnOiBEYWZmSHVic3BvdENvbmZpZyxcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmQ29udGFjdEh1YlNwb3REcml2ZXJNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhZmZDb250YWN0SHViU3BvdERyaXZlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IERhZmZDb250YWN0RHJpdmVyLCB1c2VDbGFzczogRGFmZkNvbnRhY3RIdWJzcG90U2VydmljZSB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IERhZmZDb250YWN0Q29uZmlnVG9rZW4sIHVzZVZhbHVlOiBjb25maWcgfSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IERhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IGRhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlRmFjdG9yeSxcblx0XHRcdFx0XHRkZXBzOiBbSHR0cENsaWVudCwgRE9DVU1FTlQsIFJvdXRlciwgVGl0bGUsIERhZmZDb250YWN0Q29uZmlnVG9rZW5dLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=