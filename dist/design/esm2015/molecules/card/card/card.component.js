/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';
import { daffColorMixin } from '../../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCardBase {
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
    DaffCardBase.prototype._elementRef;
    /** @type {?} */
    DaffCardBase.prototype._renderer;
}
/** @type {?} */
const _daffCardBase = daffColorMixin(DaffCardBase);
export class DaffCardComponent extends _daffCardBase {
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
}
DaffCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-card',
                template: "<ng-content select=\"[daffCardImage]\"></ng-content>\n<div class=\"daff-card__content\">\n  <ng-content select=\"[daffCardTitle]\"></ng-content>\n  <ng-content></ng-content>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".daff-card{display:flex;flex-direction:column;border-radius:8px}.daff-card__image{display:block;border-top-left-radius:inherit;border-top-right-radius:inherit;width:100%}.daff-card__content{padding:24px;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.daff-card__content:first-child{border-top:0}.daff-card__content p{margin:0;padding:0}.daff-card__title{font-weight:700;font-size:1.25rem;line-height:1.1em;letter-spacing:0;margin-bottom:8px}@media (min-width:768px){.daff-card__title{font-size:1.5rem}}"]
            }] }
];
/** @nocollapse */
DaffCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffCardComponent.propDecorators = {
    color: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-card',] }]
};
if (false) {
    /** @type {?} */
    DaffCardComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCardComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffCardComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffCardComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2NhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQThCLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBSy9GLE1BQU0sWUFBWTs7Ozs7SUFDaEIsWUFBbUIsV0FBdUIsRUFBUyxTQUFvQjtRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0NBQzVFOzs7SUFEYSxtQ0FBOEI7O0lBQUUsaUNBQTJCOzs7TUFHbkUsYUFBYSxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFVbEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQWE7Ozs7O0lBUWxELFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFDckUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBRnZDLFVBQUssR0FBRyxJQUFJLENBQUM7SUFJN0MsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaU1BQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBdEJDLFVBQVU7WUFDVixTQUFTOzs7b0JBeUJULEtBQUs7b0JBSUosV0FBVyxTQUFDLGlCQUFpQjs7OztJQUovQixrQ0FBNEI7Ozs7O0lBSTNCLGtDQUE2Qzs7Ozs7SUFFakMsdUNBQThCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZyxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNvbG9yYWJsZSwgRGFmZlBhbGV0dGUsIGRhZmZDb2xvck1peGluIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb2xvcmFibGUvY29sb3JhYmxlJztcblxuLyoqXG4gKiBBbiBfZWxlbWVudFJlZiBhbmQgYW4gaW5zdGFuY2Ugb2YgcmVuZGVyZXIyIGFyZSBuZWVkZWQgZm9yIHRoZSBDb2xvcmFibGUgbWl4aW5cbiAqL1xuY2xhc3MgRGFmZkNhcmRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG59XG5cbmNvbnN0IF9kYWZmQ2FyZEJhc2UgPSBkYWZmQ29sb3JNaXhpbihEYWZmQ2FyZEJhc2UpXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIERhZmZDYXJkQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZDYXJkQmFzZSBpbXBsZW1lbnRzIERhZmZDb2xvcmFibGUge1xuXG5cdEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1jYXJkJykgY2xhc3MgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG59XG4iXX0=