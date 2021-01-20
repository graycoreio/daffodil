/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffNewsletterDriver } from '@daffodil/newsletter';
import { DaffTestingNewsletterService } from './newsletter.service';
var DaffNewsletterTestingDriverModule = /** @class */ (function () {
    function DaffNewsletterTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNewsletterTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNewsletterTestingDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffTestingNewsletterService
                }
            ]
        };
    };
    DaffNewsletterTestingDriverModule.decorators = [
        { type: NgModule }
    ];
    return DaffNewsletterTestingDriverModule;
}());
export { DaffNewsletterTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL3Rlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRTtJQUFBO0lBYUEsQ0FBQzs7OztJQVhRLHlDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixRQUFRLEVBQUUsNEJBQTRCO2lCQUN2QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQVpGLFFBQVE7O0lBYVQsd0NBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJEcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvbmV3c2xldHRlcic7XG5pbXBvcnQgeyBEYWZmVGVzdGluZ05ld3NsZXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZXdzbGV0dGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyVGVzdGluZ0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZk5ld3NsZXR0ZXJUZXN0aW5nRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmTmV3c2xldHRlckRyaXZlcixcbiAgICAgICAgICB1c2VDbGFzczogRGFmZlRlc3RpbmdOZXdzbGV0dGVyU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19