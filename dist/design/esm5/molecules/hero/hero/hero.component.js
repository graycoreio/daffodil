/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';
import { daffColorMixin } from '../../../core/colorable/colorable';
/** @enum {string} */
var DaffHeroLayoutEnum = {
    Centered: 'centered',
};
export { DaffHeroLayoutEnum };
/** @enum {string} */
var DaffHeroSizeEnum = {
    Compact: 'compact',
    Small: 'small' // Small will be deprecated in v1.0.0
    ,
};
export { DaffHeroSizeEnum };
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffHeroBase = /** @class */ (function () {
    function DaffHeroBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffHeroBase;
}());
if (false) {
    /** @type {?} */
    DaffHeroBase.prototype._elementRef;
    /** @type {?} */
    DaffHeroBase.prototype._renderer;
}
/** @type {?} */
var _daffHeroBase = daffColorMixin(DaffHeroBase);
var DaffHeroComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DaffHeroComponent, _super);
    function DaffHeroComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    Object.defineProperty(DaffHeroComponent.prototype, "centered", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.layout === DaffHeroLayoutEnum.Centered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffHeroComponent.prototype, "small", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.size === DaffHeroSizeEnum.Small;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffHeroComponent.prototype, "compact", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.size === DaffHeroSizeEnum.Compact;
        },
        enumerable: true,
        configurable: true
    });
    DaffHeroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-hero',
                    template: "<ng-content select=\"[daffHeroTitle]\"></ng-content>\n<ng-content select=\"[daffHeroSubtitle]\"></ng-content>\n<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-hero{display:block;padding:75px 25px}@media (min-width:480px){.daff-hero{padding:100px 50px}}.daff-hero__title{font-weight:700;font-size:3.25rem;line-height:1.1em;letter-spacing:-1.5px;margin:0;max-width:1040px;overflow-wrap:break-word;width:100%}@media (min-width:768px){.daff-hero__title{font-size:4rem}}.daff-hero__subtitle{font-size:1.5rem;font-weight:400;margin:15px 0 0;max-width:700px;width:100%}.daff-hero__subtitle+*{margin-top:50px}.daff-hero--centered .daff-hero__title{margin:0 auto;text-align:center}.daff-hero--centered .daff-hero__subtitle{margin:25px auto 0;text-align:center}.daff-hero--compact,.daff-hero--small{padding:50px 25px}@media (min-width:480px){.daff-hero--compact,.daff-hero--small{padding:50px}}"]
                }] }
    ];
    /** @nocollapse */
    DaffHeroComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffHeroComponent.propDecorators = {
        layout: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-hero',] }],
        centered: [{ type: HostBinding, args: ['class.daff-hero--centered',] }],
        small: [{ type: HostBinding, args: ['class.daff-hero--small',] }],
        compact: [{ type: HostBinding, args: ['class.daff-hero--compact',] }]
    };
    return DaffHeroComponent;
}(_daffHeroBase));
export { DaffHeroComponent };
if (false) {
    /** @type {?} */
    DaffHeroComponent.prototype.layout;
    /** @type {?} */
    DaffHeroComponent.prototype.size;
    /** @type {?} */
    DaffHeroComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffHeroComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffHeroComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffHeroComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2hlcm8vaGVyby9oZXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBZSxjQUFjLEVBQWlCLE1BQU0sbUNBQW1DLENBQUM7OztJQUs3RixVQUFXLFVBQVU7Ozs7O0lBTXJCLFNBQVUsU0FBUztJQUNuQixPQUFRLE9BQU8sQ0FBQyxxQ0FBcUM7Ozs7Ozs7QUFNdkQ7Ozs7SUFDRSxzQkFBbUIsV0FBdUIsRUFBUyxTQUFvQjtRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0lBQzdFLG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7OztJQURhLG1DQUE4Qjs7SUFBRSxpQ0FBMkI7OztJQUduRSxhQUFhLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUVsRDtJQU91Qyw2Q0FBYTtJQU1sRCwyQkFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUF2RSxZQUNFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FDNUI7UUFGbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBT3hDLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBTDVDLENBQUM7SUFXRixzQkFBOEMsdUNBQVE7UUFKckQ7OzthQUdFOzs7Ozs7UUFDSDtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFNRixzQkFBMkMsb0NBQUs7UUFKL0M7OzthQUdFOzs7Ozs7UUFDSDtZQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFNRixzQkFBNkMsc0NBQU87UUFKbkQ7OzthQUdFOzs7Ozs7UUFDSDtZQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9KQUFvQztvQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBaEM2QyxVQUFVO2dCQUF3QyxTQUFTOzs7eUJBbUN0RyxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFTTixXQUFXLFNBQUMsaUJBQWlCOzJCQU03QixXQUFXLFNBQUMsMkJBQTJCO3dCQVF2QyxXQUFXLFNBQUMsd0JBQXdCOzBCQVFwQyxXQUFXLFNBQUMsMEJBQTBCOztJQUd4Qyx3QkFBQztDQUFBLEFBN0NELENBT3VDLGFBQWEsR0FzQ25EO1NBdENZLGlCQUFpQjs7O0lBRTVCLG1DQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBNEI7Ozs7O0lBUzdCLGtDQUE2Qzs7Ozs7SUFQaEMsdUNBQThCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGFsZXR0ZSwgZGFmZkNvbG9yTWl4aW4sIERhZmZDb2xvcmFibGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbG9yYWJsZS9jb2xvcmFibGUnO1xuXG4vLyBEYWZmSGVyb0xheW91dCB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5leHBvcnQgdHlwZSBEYWZmSGVyb0xheW91dCA9ICdjZW50ZXJlZCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgZW51bSBEYWZmSGVyb0xheW91dEVudW0ge1xuICBDZW50ZXJlZCA9ICdjZW50ZXJlZCdcbn1cblxuLy8gRGFmZkhlcm9TaXplIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjAgYW5kIHJlcGxhY2VkIHdpdGggYSBEYWZmQ29tcGFjdGFibGUgaW50ZXJmYWNlXG5leHBvcnQgdHlwZSBEYWZmSGVyb1NpemUgPSAnY29tcGFjdCcgfCAnc21hbGwnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IGVudW0gRGFmZkhlcm9TaXplRW51bSB7XG4gIENvbXBhY3QgPSAnY29tcGFjdCcsXG4gIFNtYWxsID0gJ3NtYWxsJyAvLyBTbWFsbCB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG59XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZIZXJvQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZkhlcm9CYXNlID0gZGFmZkNvbG9yTWl4aW4oRGFmZkhlcm9CYXNlKVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWhlcm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlcm8uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkhlcm9Db21wb25lbnQgZXh0ZW5kcyBfZGFmZkhlcm9CYXNlIGltcGxlbWVudHMgRGFmZkNvbG9yYWJsZSB7XG4gIFxuICBASW5wdXQoKSBsYXlvdXQ6IERhZmZIZXJvTGF5b3V0OyAvLyBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG4gIEBJbnB1dCgpIHNpemU6IERhZmZIZXJvU2l6ZTsgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxuICBASW5wdXQoKSBjb2xvcjogRGFmZlBhbGV0dGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cblxuICAvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWhlcm8nKSBjbGFzcyA9IHRydWU7XG5cbiAgLyoqXG5cdCAqIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjBcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWhlcm8tLWNlbnRlcmVkJykgZ2V0IGNlbnRlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmxheW91dCA9PT0gRGFmZkhlcm9MYXlvdXRFbnVtLkNlbnRlcmVkO1xuICB9XG5cbiAgLyoqXG5cdCAqIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjBcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWhlcm8tLXNtYWxsJykgZ2V0IHNtYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IERhZmZIZXJvU2l6ZUVudW0uU21hbGw7XG4gIH1cblxuICAvKipcblx0ICogV2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtaGVyby0tY29tcGFjdCcpIGdldCBjb21wYWN0KCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IERhZmZIZXJvU2l6ZUVudW0uQ29tcGFjdDtcbiAgfVxufVxuIl19