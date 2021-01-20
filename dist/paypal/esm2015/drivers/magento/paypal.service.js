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
export class DaffMagentoPaypalService {
    /**
     * @param {?} apollo
     * @param {?} transformer
     * @param {?} config
     */
    constructor(apollo, transformer, config) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.config = config;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return this.apollo.mutate({
            mutation: GenerateTokenMutation,
            variables: {
                input: this.transformer.transformOut(tokenRequest, this.config)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            return this.transformer.transformIn(result.data.createPaypalExpressToken);
        })));
    }
}
DaffMagentoPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoPaypalService.ctorParameters = () => [
    { type: Apollo },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalTransformer,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalConfig,] }] }
];
/** @nocollapse */ DaffMagentoPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalService_Factory() { return new DaffMagentoPaypalService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffPaypalTransformer), i0.ɵɵinject(i3.DaffPaypalConfig)); }, token: DaffMagentoPaypalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUszRSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFFbkMsWUFDVSxNQUFjLEVBQ2UsV0FBNEYsRUFDakcsTUFBK0I7UUFGdkQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNlLGdCQUFXLEdBQVgsV0FBVyxDQUFpRjtRQUNqRyxXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUMvRCxDQUFDOzs7OztJQUVILGFBQWEsQ0FBQyxZQUFvQztRQUNoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUE2QjtZQUNwRCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDaEU7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQzFFLENBQUMsRUFBQyxDQUNBLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZFEsTUFBTTs0Q0FtQlosTUFBTSxTQUFDLHFCQUFxQjs0Q0FDNUIsTUFBTSxTQUFDLGdCQUFnQjs7Ozs7Ozs7SUFGdEIsMENBQXNCOzs7OztJQUN4QiwrQ0FBbUk7Ozs7O0lBQ25JLDBDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5cGFsLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxUcmFuc2Zvcm1lciB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMvcGF5cGFsLXRyYW5zZm9ybWVyLnRva2VuJztcbmltcG9ydCB7IERhZmZQYXlwYWxUcmFuc2Zvcm1lckludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5cGFsLXRyYW5zZm9ybWVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBHZW5lcmF0ZVRva2VuTXV0YXRpb24gfSBmcm9tICcuL211dGF0aW9ucy9nZW5lcmF0ZS10b2tlbic7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXNwb25zZSc7XG5pbXBvcnQgeyBNYWdlbnRvUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL3Jlc3BvbnNlL21hZ2VudG8tcGF5cGFsLXRva2VuLXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5cGFsQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcbmltcG9ydCB7IERhZmZQYXlwYWxDb25maWcgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW5zL3BheXBhbC1jb25maWcudG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b1BheXBhbFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZSB7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuXHRcdEBJbmplY3QoRGFmZlBheXBhbFRyYW5zZm9ybWVyKSBwcml2YXRlIHRyYW5zZm9ybWVyOiBEYWZmUGF5cGFsVHJhbnNmb3JtZXJJbnRlcmZhY2U8RGFmZlBheXBhbFRva2VuUmVxdWVzdCwgRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+LFxuXHRcdEBJbmplY3QoRGFmZlBheXBhbENvbmZpZykgcHJpdmF0ZSBjb25maWc6IERhZmZNYWdlbnRvUGF5cGFsQ29uZmlnXG5cdCkge31cblxuICBnZW5lcmF0ZVRva2VuKHRva2VuUmVxdWVzdDogRGFmZlBheXBhbFRva2VuUmVxdWVzdCk6IE9ic2VydmFibGU8RGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ubXV0YXRlPE1hZ2VudG9QYXlwYWxUb2tlblJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogR2VuZXJhdGVUb2tlbk11dGF0aW9uLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGlucHV0OiB0aGlzLnRyYW5zZm9ybWVyLnRyYW5zZm9ybU91dCh0b2tlblJlcXVlc3QsIHRoaXMuY29uZmlnKVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudHJhbnNmb3JtZXIudHJhbnNmb3JtSW4ocmVzdWx0LmRhdGEuY3JlYXRlUGF5cGFsRXhwcmVzc1Rva2VuKVxuXHRcdFx0fSlcbiAgICApO1xuICB9XG59XG4iXX0=