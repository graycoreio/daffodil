/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';
import { daffColorMixin } from '../../../core/colorable/colorable';
/** @enum {string} */
const DaffHeroLayoutEnum = {
    Centered: 'centered',
};
export { DaffHeroLayoutEnum };
/** @enum {string} */
const DaffHeroSizeEnum = {
    Compact: 'compact',
    Small: 'small' // Small will be deprecated in v1.0.0
    ,
};
export { DaffHeroSizeEnum };
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffHeroBase {
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
    DaffHeroBase.prototype._elementRef;
    /** @type {?} */
    DaffHeroBase.prototype._renderer;
}
/** @type {?} */
const _daffHeroBase = daffColorMixin(DaffHeroBase);
export class DaffHeroComponent extends _daffHeroBase {
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
        return this.layout === DaffHeroLayoutEnum.Centered;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get small() {
        return this.size === DaffHeroSizeEnum.Small;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.size === DaffHeroSizeEnum.Compact;
    }
}
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
DaffHeroComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffHeroComponent.propDecorators = {
    layout: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-hero',] }],
    centered: [{ type: HostBinding, args: ['class.daff-hero--centered',] }],
    small: [{ type: HostBinding, args: ['class.daff-hero--small',] }],
    compact: [{ type: HostBinding, args: ['class.daff-hero--compact',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2hlcm8vaGVyby9oZXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUFlLGNBQWMsRUFBaUIsTUFBTSxtQ0FBbUMsQ0FBQzs7O0lBSzdGLFVBQVcsVUFBVTs7Ozs7SUFNckIsU0FBVSxTQUFTO0lBQ25CLE9BQVEsT0FBTyxDQUFDLHFDQUFxQzs7Ozs7OztBQU12RCxNQUFNLFlBQVk7Ozs7O0lBQ2hCLFlBQW1CLFdBQXVCLEVBQVMsU0FBb0I7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztDQUM1RTs7O0lBRGEsbUNBQThCOztJQUFFLGlDQUEyQjs7O01BR25FLGFBQWEsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBU2xELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhOzs7OztJQU1sRCxZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQ3JFLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQU94QyxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBTDVDLENBQUM7Ozs7OztJQVdGLElBQThDLFFBQVE7UUFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFNRixJQUEyQyxLQUFLO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBTUYsSUFBNkMsT0FBTztRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9KQUFvQztnQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWhDNkMsVUFBVTtZQUF3QyxTQUFTOzs7cUJBbUN0RyxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFTTixXQUFXLFNBQUMsaUJBQWlCO3VCQU03QixXQUFXLFNBQUMsMkJBQTJCO29CQVF2QyxXQUFXLFNBQUMsd0JBQXdCO3NCQVFwQyxXQUFXLFNBQUMsMEJBQTBCOzs7O0lBakN0QyxtQ0FBZ0M7O0lBQ2hDLGlDQUE0Qjs7SUFDNUIsa0NBQTRCOzs7OztJQVM3QixrQ0FBNkM7Ozs7O0lBUGhDLHVDQUE4Qjs7Ozs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlBhbGV0dGUsIGRhZmZDb2xvck1peGluLCBEYWZmQ29sb3JhYmxlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb2xvcmFibGUvY29sb3JhYmxlJztcblxuLy8gRGFmZkhlcm9MYXlvdXQgd2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxuZXhwb3J0IHR5cGUgRGFmZkhlcm9MYXlvdXQgPSAnY2VudGVyZWQnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IGVudW0gRGFmZkhlcm9MYXlvdXRFbnVtIHtcbiAgQ2VudGVyZWQgPSAnY2VudGVyZWQnXG59XG5cbi8vIERhZmZIZXJvU2l6ZSB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wIGFuZCByZXBsYWNlZCB3aXRoIGEgRGFmZkNvbXBhY3RhYmxlIGludGVyZmFjZVxuZXhwb3J0IHR5cGUgRGFmZkhlcm9TaXplID0gJ2NvbXBhY3QnIHwgJ3NtYWxsJyB8IHVuZGVmaW5lZDtcbmV4cG9ydCBlbnVtIERhZmZIZXJvU2l6ZUVudW0ge1xuICBDb21wYWN0ID0gJ2NvbXBhY3QnLFxuICBTbWFsbCA9ICdzbWFsbCcgLy8gU21hbGwgd2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxufVxuXG4vKipcbiAqIEFuIF9lbGVtZW50UmVmIGFuZCBhbiBpbnN0YW5jZSBvZiByZW5kZXJlcjIgYXJlIG5lZWRlZCBmb3IgdGhlIENvbG9yYWJsZSBtaXhpblxuICovXG5jbGFzcyBEYWZmSGVyb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cblxuY29uc3QgX2RhZmZIZXJvQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZIZXJvQmFzZSlcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1oZXJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZXJvLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhZmZIZXJvQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZIZXJvQmFzZSBpbXBsZW1lbnRzIERhZmZDb2xvcmFibGUge1xuICBcbiAgQElucHV0KCkgbGF5b3V0OiBEYWZmSGVyb0xheW91dDsgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIHYxLjAuMFxuICBASW5wdXQoKSBzaXplOiBEYWZmSGVyb1NpemU7IC8vIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjBcbiAgQElucHV0KCkgY29sb3I6IERhZmZQYWxldHRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG5cbiAgLyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1oZXJvJykgY2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuXHQgKiBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1oZXJvLS1jZW50ZXJlZCcpIGdldCBjZW50ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT09IERhZmZIZXJvTGF5b3V0RW51bS5DZW50ZXJlZDtcbiAgfVxuXG4gIC8qKlxuXHQgKiBXaWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjEuMC4wXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1oZXJvLS1zbWFsbCcpIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBEYWZmSGVyb1NpemVFbnVtLlNtYWxsO1xuICB9XG5cbiAgLyoqXG5cdCAqIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2MS4wLjBcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWhlcm8tLWNvbXBhY3QnKSBnZXQgY29tcGFjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBEYWZmSGVyb1NpemVFbnVtLkNvbXBhY3Q7XG4gIH1cbn1cbiJdfQ==