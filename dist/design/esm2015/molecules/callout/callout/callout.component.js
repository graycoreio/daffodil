/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';
import { daffColorMixin } from '../../../core/colorable/colorable';
/** @enum {string} */
const DaffCalloutLayoutEnum = {
    Centered: 'centered',
};
export { DaffCalloutLayoutEnum };
/** @enum {string} */
const DaffCalloutSizeEnum = {
    Compact: 'compact',
};
export { DaffCalloutSizeEnum };
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCalloutBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffCalloutBase.prototype._elementRef;
    /** @type {?} */
    DaffCalloutBase.prototype._renderer;
}
/** @type {?} */
const _daffCalloutBase = daffColorMixin(DaffCalloutBase);
export class DaffCalloutComponent extends _daffCalloutBase {
    // Will be deprecated in v1.0.0
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get centered() {
        return this.layout === DaffCalloutLayoutEnum.Centered;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.size === DaffCalloutSizeEnum.Compact;
    }
}
DaffCalloutComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-callout',
                template: "<ng-content select=\"[daffCalloutTitle]\"></ng-content>\n<ng-content select=\"[daffCalloutSubtitle]\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".daff-callout{display:block;padding:75px 25px}@media (min-width:480px){.daff-callout{padding:100px 50px}}.daff-callout__title{font-weight:700;font-size:2.25rem;line-height:1.1em;letter-spacing:-.5px;margin:0;max-width:1040px;width:100%}@media (min-width:768px){.daff-callout__title{font-size:3rem}}.daff-callout__subtitle{font-size:1.25rem;margin:15px 0 0;max-width:600px;padding:0;width:100%}.daff-callout--centered .daff-callout__title{margin:0 auto;text-align:center}.daff-callout--centered .daff-callout__subtitle{margin:10px auto 0;text-align:center}.daff-callout--compact{padding:25px}@media (min-width:480px){.daff-callout--centered .daff-callout__subtitle{margin:25px auto 0}.daff-callout--compact{padding:25px 50px}}"]
            }] }
];
/** @nocollapse */
DaffCalloutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffCalloutComponent.propDecorators = {
    color: [{ type: Input }],
    layout: [{ type: Input }],
    size: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-callout',] }],
    centered: [{ type: HostBinding, args: ['class.daff-callout--centered',] }],
    compact: [{ type: HostBinding, args: ['class.daff-callout--compact',] }]
};
if (false) {
    /** @type {?} */
    DaffCalloutComponent.prototype.color;
    /** @type {?} */
    DaffCalloutComponent.prototype.layout;
    /** @type {?} */
    DaffCalloutComponent.prototype.size;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCalloutComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffCalloutComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffCalloutComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2NhbGxvdXQvY2FsbG91dC9jYWxsb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUE4QixjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0lBSzdGLFVBQVcsVUFBVTs7Ozs7SUFNckIsU0FBVSxTQUFTOzs7Ozs7QUFNckIsTUFBTSxlQUFlOzs7OztJQUNuQixZQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Q0FDNUU7OztJQURhLHNDQUE4Qjs7SUFBRSxvQ0FBMkI7OztNQUduRSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBU3hELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7Ozs7OztJQUt4RCxZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQ3JFLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQU9yQyxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBTC9DLENBQUM7Ozs7OztJQVdGLElBQWlELFFBQVE7UUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFNRixJQUFnRCxPQUFPO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQzs7O1lBbkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsNEpBQXVDO2dCQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBL0I2QyxVQUFVO1lBQXdDLFNBQVM7OztvQkFpQ3RHLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQVNOLFdBQVcsU0FBQyxvQkFBb0I7dUJBTWhDLFdBQVcsU0FBQyw4QkFBOEI7c0JBUTFDLFdBQVcsU0FBQyw2QkFBNkI7Ozs7SUF6QnpDLHFDQUE0Qjs7SUFDNUIsc0NBQW1DOztJQUNuQyxvQ0FBK0I7Ozs7O0lBU2hDLHFDQUFnRDs7Ozs7SUFQbkMsMENBQThCOzs7OztJQUFFLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ29sb3JhYmxlLCBEYWZmUGFsZXR0ZSwgZGFmZkNvbG9yTWl4aW4gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbG9yYWJsZS9jb2xvcmFibGUnO1xuXG4vLyBEYWZmQ2FsbG91dExheW91dCB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5leHBvcnQgdHlwZSBEYWZmQ2FsbG91dExheW91dCA9ICdjZW50ZXJlZCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgZW51bSBEYWZmQ2FsbG91dExheW91dEVudW0ge1xuICBDZW50ZXJlZCA9ICdjZW50ZXJlZCdcbn1cblxuLy8gRGFmZkNhbGxvdXRTaXplIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjAgYW5kIHJlcGxhY2VkIHdpdGggYSBEYWZmQ29tcGFjdGFibGUgaW50ZXJmYWNlXG5leHBvcnQgdHlwZSBEYWZmQ2FsbG91dFNpemUgPSAnY29tcGFjdCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgZW51bSBEYWZmQ2FsbG91dFNpemVFbnVtIHtcbiAgQ29tcGFjdCA9ICdjb21wYWN0J1xufVxuXG4vKipcbiAqIEFuIF9lbGVtZW50UmVmIGFuZCBhbiBpbnN0YW5jZSBvZiByZW5kZXJlcjIgYXJlIG5lZWRlZCBmb3IgdGhlIENvbG9yYWJsZSBtaXhpblxuICovXG5jbGFzcyBEYWZmQ2FsbG91dEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cblxuY29uc3QgX2RhZmZDYWxsb3V0QmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZDYWxsb3V0QmFzZSlcblxuIEBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtY2FsbG91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxsb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsbG91dC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FsbG91dENvbXBvbmVudCBleHRlbmRzIF9kYWZmQ2FsbG91dEJhc2UgaW1wbGVtZW50cyBEYWZmQ29sb3JhYmxlIHtcbiAgQElucHV0KCkgY29sb3I6IERhZmZQYWxldHRlO1xuICBASW5wdXQoKSBsYXlvdXQ6IERhZmZDYWxsb3V0TGF5b3V0OyAvLyBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG4gIEBJbnB1dCgpIHNpemU6IERhZmZDYWxsb3V0U2l6ZTsgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG5cbiAgLyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1jYWxsb3V0JykgY2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuXHQgKiBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1jYWxsb3V0LS1jZW50ZXJlZCcpIGdldCBjZW50ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT09IERhZmZDYWxsb3V0TGF5b3V0RW51bS5DZW50ZXJlZDtcbiAgfVxuXG4gIC8qKlxuXHQgKiBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1jYWxsb3V0LS1jb21wYWN0JykgZ2V0IGNvbXBhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gRGFmZkNhbGxvdXRTaXplRW51bS5Db21wYWN0O1xuICB9XG59XG4iXX0=