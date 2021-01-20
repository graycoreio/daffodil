/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { transformManyMagentoProducts } from '@daffodil/product';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import * as i0 from "@angular/core";
import * as i1 from "./category-transformer.service";
import * as i2 from "./category-page-config-transformer.service";
var DaffMagentoCategoryResponseTransformService = /** @class */ (function () {
    function DaffMagentoCategoryResponseTransformService(magentoCategoryTransformerService, magentoCategoryPageConfigurationTransformerService) {
        this.magentoCategoryTransformerService = magentoCategoryTransformerService;
        this.magentoCategoryPageConfigurationTransformerService = magentoCategoryPageConfigurationTransformerService;
    }
    /**
     * @param {?} completeCategory
     * @return {?}
     */
    DaffMagentoCategoryResponseTransformService.prototype.transform = /**
     * @param {?} completeCategory
     * @return {?}
     */
    function (completeCategory) {
        return tslib_1.__assign({ magentoCompleteCategoryResponse: completeCategory }, { category: this.magentoCategoryTransformerService.transform(completeCategory.category), categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory), products: transformManyMagentoProducts(completeCategory.products) });
    };
    DaffMagentoCategoryResponseTransformService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCategoryResponseTransformService.ctorParameters = function () { return [
        { type: DaffMagentoCategoryTransformerService },
        { type: DaffMagentoCategoryPageConfigTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoCategoryResponseTransformService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryResponseTransformService_Factory() { return new DaffMagentoCategoryResponseTransformService(i0.ɵɵinject(i1.DaffMagentoCategoryTransformerService), i0.ɵɵinject(i2.DaffMagentoCategoryPageConfigTransformerService)); }, token: DaffMagentoCategoryResponseTransformService, providedIn: "root" });
    return DaffMagentoCategoryResponseTransformService;
}());
export { DaffMagentoCategoryResponseTransformService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryTransformerService;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryPageConfigurationTransformerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcmVzcG9uc2UtdHJhbnNmb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3JtZXJzL2NhdGVnb3J5LXJlc3BvbnNlLXRyYW5zZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUc3RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUV2RjtJQUtFLHFEQUNVLGlDQUF3RSxFQUN4RSxrREFBbUc7UUFEbkcsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUF1QztRQUN4RSx1REFBa0QsR0FBbEQsa0RBQWtELENBQWlEO0lBQzFHLENBQUM7Ozs7O0lBRUosK0RBQVM7Ozs7SUFBVCxVQUFVLGdCQUFpRDtRQUN6RCx3QkFDRSxFQUFFLCtCQUErQixFQUFFLGdCQUFnQixFQUFFLElBQ3JELFFBQVEsRUFBRSxJQUFJLENBQUMsaUNBQWlDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUNyRiw4QkFBOEIsRUFBRSxJQUFJLENBQUMsa0RBQWtELENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQ25ILFFBQVEsRUFBRSw0QkFBNEIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFDbEU7SUFDSCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxxQ0FBcUM7Z0JBSHJDLCtDQUErQzs7O3NEQUp4RDtDQTJCQyxBQWxCRCxJQWtCQztTQWZZLDJDQUEyQzs7Ozs7O0lBR3BELHdGQUFnRjs7Ozs7SUFDaEYseUdBQTJHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm1NYW55TWFnZW50b1Byb2R1Y3RzIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhdGVnb3J5UGFnZUNvbmZpZ1RyYW5zZm9ybWVyU2VydmljZSB9IGZyb20gJy4vY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBsZXRlLWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2dldC1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhdGVnb3J5VHJhbnNmb3JtZXJTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yeS10cmFuc2Zvcm1lci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXRlZ29yeVJlc3BvbnNlVHJhbnNmb3JtU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYWdlbnRvQ2F0ZWdvcnlUcmFuc2Zvcm1lclNlcnZpY2U6IERhZmZNYWdlbnRvQ2F0ZWdvcnlUcmFuc2Zvcm1lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWdlbnRvQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblRyYW5zZm9ybWVyU2VydmljZTogRGFmZk1hZ2VudG9DYXRlZ29yeVBhZ2VDb25maWdUcmFuc2Zvcm1lclNlcnZpY2VcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShjb21wbGV0ZUNhdGVnb3J5OiBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlKTogRGFmZkdldENhdGVnb3J5UmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG5cdFx0XHQuLi57IG1hZ2VudG9Db21wbGV0ZUNhdGVnb3J5UmVzcG9uc2U6IGNvbXBsZXRlQ2F0ZWdvcnkgfSxcbiAgICAgIGNhdGVnb3J5OiB0aGlzLm1hZ2VudG9DYXRlZ29yeVRyYW5zZm9ybWVyU2VydmljZS50cmFuc2Zvcm0oY29tcGxldGVDYXRlZ29yeS5jYXRlZ29yeSksXG4gICAgICBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU6IHRoaXMubWFnZW50b0NhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25UcmFuc2Zvcm1lclNlcnZpY2UudHJhbnNmb3JtKGNvbXBsZXRlQ2F0ZWdvcnkpLFxuICAgICAgcHJvZHVjdHM6IHRyYW5zZm9ybU1hbnlNYWdlbnRvUHJvZHVjdHMoY29tcGxldGVDYXRlZ29yeS5wcm9kdWN0cylcbiAgICB9XG4gIH1cbn1cbiJdfQ==