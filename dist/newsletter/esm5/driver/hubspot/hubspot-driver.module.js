/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';
import { DaffNewsletterHubspotService } from './newsletter.service';
import { DaffNewsletterDriver } from '../interfaces/newsletter-service.interface';
import { DaffNewsletterConfigToken } from './config/newsletter-config.interface';
var DaffNewsletterHubSpotDriverModule = /** @class */ (function () {
    function DaffNewsletterHubSpotDriverModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DaffNewsletterHubSpotDriverModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DaffNewsletterHubSpotDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffNewsletterHubspotService,
                },
                {
                    provide: DaffNewsletterConfigToken,
                    useValue: config,
                },
                {
                    provide: DaffHubspotFormsService,
                    useFactory: daffHubspotFormsServiceFactory,
                    deps: [
                        HttpClient,
                        DOCUMENT,
                        Router,
                        Title,
                        DaffNewsletterConfigToken
                    ],
                }
            ],
        };
    };
    DaffNewsletterHubSpotDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffNewsletterHubSpotDriverModule;
}());
export { DaffNewsletterHubSpotDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVic3BvdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJkcml2ZXIvaHVic3BvdC9odWJzcG90LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFxQix1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGO0lBQUE7SUFnQ0EsQ0FBQzs7Ozs7SUE1Qk8seUNBQU87Ozs7SUFBZCxVQUNDLE1BQXlCO1FBRXpCLE9BQU87WUFDTixRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixRQUFRLEVBQUUsNEJBQTRCO2lCQUN0QztnQkFDRDtvQkFDQyxPQUFPLEVBQUUseUJBQXlCO29CQUNsQyxRQUFRLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0Q7b0JBQ00sT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsVUFBVSxFQUFFLDhCQUE4QjtvQkFDMUMsSUFBSSxFQUFFO3dCQUNKLFVBQVU7d0JBQ1YsUUFBUTt3QkFDUixNQUFNO3dCQUNOLEtBQUs7d0JBQ0wseUJBQXlCO3FCQUMxQjtpQkFDRjthQUNMO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQS9CRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN2Qjs7SUE4QkQsd0NBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTdCWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERhZmZIdWJzcG90Q29uZmlnLCBEYWZmSHVic3BvdEZvcm1zU2VydmljZSwgZGFmZkh1YnNwb3RGb3Jtc1NlcnZpY2VGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9odWJzcG90JztcblxuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJIdWJzcG90U2VydmljZSB9IGZyb20gJy4vbmV3c2xldHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyRHJpdmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9uZXdzbGV0dGVyLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyQ29uZmlnVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9uZXdzbGV0dGVyLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJIdWJTcG90RHJpdmVyTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoXG5cdFx0Y29uZmlnOiBEYWZmSHVic3BvdENvbmZpZyxcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxEYWZmTmV3c2xldHRlckh1YlNwb3REcml2ZXJNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhZmZOZXdzbGV0dGVySHViU3BvdERyaXZlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRGFmZk5ld3NsZXR0ZXJEcml2ZXIsXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IERhZmZOZXdzbGV0dGVySHVic3BvdFNlcnZpY2UsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBEYWZmTmV3c2xldHRlckNvbmZpZ1Rva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBjb25maWcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmSHVic3BvdEZvcm1zU2VydmljZSwgXG4gICAgICAgICAgdXNlRmFjdG9yeTogZGFmZkh1YnNwb3RGb3Jtc1NlcnZpY2VGYWN0b3J5LCBcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgRE9DVU1FTlQsIFxuICAgICAgICAgICAgUm91dGVyLCBcbiAgICAgICAgICAgIFRpdGxlLCBcbiAgICAgICAgICAgIERhZmZOZXdzbGV0dGVyQ29uZmlnVG9rZW5cbiAgICAgICAgICBdLFxuICAgICAgICB9XG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==