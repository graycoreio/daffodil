/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { GenerateTokenMutation } from './mutations/generate-token';
import { DaffPaypalConfig } from '../injection-tokens/paypal-config.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "../injection-tokens/paypal-transformer.token";
import * as i3 from "../injection-tokens/paypal-config.token";
var DaffMagentoPaypalService = /** @class */ (function () {
    function DaffMagentoPaypalService(apollo, transformer, config) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.config = config;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffMagentoPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        var _this = this;
        return this.apollo.mutate({
            mutation: GenerateTokenMutation,
            variables: {
                input: this.transformer.transformOut(tokenRequest, this.config)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return _this.transformer.transformIn(result.data.createPaypalExpressToken);
        })));
    };
    DaffMagentoPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoPaypalService.ctorParameters = function () { return [
        { type: Apollo },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalTransformer,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalConfig,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalService_Factory() { return new DaffMagentoPaypalService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffPaypalTransformer), i0.ɵɵinject(i3.DaffPaypalConfig)); }, token: DaffMagentoPaypalService, providedIn: "root" });
    return DaffMagentoPaypalService;
}());
export { DaffMagentoPaypalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUUzRTtJQUtFLGtDQUNVLE1BQWMsRUFDZSxXQUE0RixFQUNqRyxNQUErQjtRQUZ2RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2UsZ0JBQVcsR0FBWCxXQUFXLENBQWlGO1FBQ2pHLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQy9ELENBQUM7Ozs7O0lBRUgsZ0RBQWE7Ozs7SUFBYixVQUFjLFlBQW9DO1FBQWxELGlCQVdDO1FBVkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBNkI7WUFDcEQsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2hFO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ1osT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDMUUsQ0FBQyxFQUFDLENBQ0EsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRRLE1BQU07Z0RBbUJaLE1BQU0sU0FBQyxxQkFBcUI7Z0RBQzVCLE1BQU0sU0FBQyxnQkFBZ0I7OzttQ0F2QjFCO0NBc0NDLEFBdkJELElBdUJDO1NBcEJZLHdCQUF3Qjs7Ozs7O0lBR2pDLDBDQUFzQjs7Ozs7SUFDeEIsK0NBQW1JOzs7OztJQUNuSSwwQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheXBhbC1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVHJhbnNmb3JtZXIgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW5zL3BheXBhbC10cmFuc2Zvcm1lci50b2tlbic7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVHJhbnNmb3JtZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheXBhbC10cmFuc2Zvcm1lci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR2VuZXJhdGVUb2tlbk11dGF0aW9uIH0gZnJvbSAnLi9tdXRhdGlvbnMvZ2VuZXJhdGUtdG9rZW4nO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWFnZW50b1BheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9yZXNwb25zZS9tYWdlbnRvLXBheXBhbC10b2tlbi1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1BheXBhbENvbmZpZyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZyc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsQ29uZmlnIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucy9wYXlwYWwtY29uZmlnLnRva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9QYXlwYWxTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlBheXBhbFNlcnZpY2VJbnRlcmZhY2Uge1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcblx0XHRASW5qZWN0KERhZmZQYXlwYWxUcmFuc2Zvcm1lcikgcHJpdmF0ZSB0cmFuc2Zvcm1lcjogRGFmZlBheXBhbFRyYW5zZm9ybWVySW50ZXJmYWNlPERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPixcblx0XHRASW5qZWN0KERhZmZQYXlwYWxDb25maWcpIHByaXZhdGUgY29uZmlnOiBEYWZmTWFnZW50b1BheXBhbENvbmZpZ1xuXHQpIHt9XG5cbiAgZ2VuZXJhdGVUb2tlbih0b2tlblJlcXVlc3Q6IERhZmZQYXlwYWxUb2tlblJlcXVlc3QpOiBPYnNlcnZhYmxlPERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLm11dGF0ZTxNYWdlbnRvUGF5cGFsVG9rZW5SZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IEdlbmVyYXRlVG9rZW5NdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpbnB1dDogdGhpcy50cmFuc2Zvcm1lci50cmFuc2Zvcm1PdXQodG9rZW5SZXF1ZXN0LCB0aGlzLmNvbmZpZylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRyYW5zZm9ybWVyLnRyYW5zZm9ybUluKHJlc3VsdC5kYXRhLmNyZWF0ZVBheXBhbEV4cHJlc3NUb2tlbilcblx0XHRcdH0pXG4gICAgKTtcbiAgfVxufVxuIl19