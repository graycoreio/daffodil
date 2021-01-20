/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffNavbarBase {
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
    DaffNavbarBase.prototype._elementRef;
    /** @type {?} */
    DaffNavbarBase.prototype._renderer;
}
/** @type {?} */
const _daffNavbarBase = daffColorMixin(DaffNavbarBase);
export class DaffNavbarComponent extends _daffNavbarBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadowed = false;
        /**
         * \@docs-private
         */
        this.hostClass = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get shadowClass() {
        return this.shadowed;
    }
    ;
}
DaffNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-navbar',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{align-items:center;display:flex;height:70px;padding:0 15px;width:100%}"]
            }] }
];
/** @nocollapse */
DaffNavbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffNavbarComponent.propDecorators = {
    color: [{ type: Input }],
    shadowed: [{ type: Input }],
    shadowClass: [{ type: HostBinding, args: ['class.daff-navbar--shadowed',] }],
    hostClass: [{ type: HostBinding, args: ['class.daff-navbar',] }]
};
if (false) {
    /**
     * The color of the navbar
     * @type {?}
     */
    DaffNavbarComponent.prototype.color;
    /** @type {?} */
    DaffNavbarComponent.prototype.shadowed;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNavbarComponent.prototype.hostClass;
    /**
     * @type {?}
     * @private
     */
    DaffNavbarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffNavbarComponent.prototype.renderer;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBOEIsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFLNUYsTUFBTSxjQUFjOzs7OztJQUNsQixZQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Q0FDNUU7OztJQURhLHFDQUE4Qjs7SUFBRSxtQ0FBMkI7OztNQUduRSxlQUFlLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQVF0RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTs7Ozs7SUFxQnRELFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFDckUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBZDlELGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFZUSxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBSW5ELENBQUM7Ozs7O0lBWEQsSUFBZ0QsV0FBVztRQUN6RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUFBLENBQUM7OztZQXBCSCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWpCMEIsVUFBVTtZQUFlLFNBQVM7OztvQkF1QjFELEtBQUs7dUJBRUwsS0FBSzswQkFLTCxXQUFXLFNBQUMsNkJBQTZCO3dCQU96QyxXQUFXLFNBQUMsbUJBQW1COzs7Ozs7O0lBZGhDLG9DQUE0Qjs7SUFFNUIsdUNBQTBCOzs7OztJQVkxQix3Q0FBbUQ7Ozs7O0lBRXZDLHlDQUE4Qjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZkNvbG9yYWJsZSwgRGFmZlBhbGV0dGUsIGRhZmZDb2xvck1peGluIH0gZnJvbSAnLi4vLi4vY29yZS9jb2xvcmFibGUvY29sb3JhYmxlJztcblxuLyoqXG4gKiBBbiBfZWxlbWVudFJlZiBpcyBuZWVkZWQgZm9yIHRoZSBDb2xvcmFibGUgbWl4aW5cbiAqL1xuY2xhc3MgRGFmZk5hdmJhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cblxuY29uc3QgX2RhZmZOYXZiYXJCYXNlID0gZGFmZkNvbG9yTWl4aW4oRGFmZk5hdmJhckJhc2UpXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtbmF2YmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhZmZOYXZiYXJDb21wb25lbnQgZXh0ZW5kcyBfZGFmZk5hdmJhckJhc2UgaW1wbGVtZW50cyBEYWZmQ29sb3JhYmxlIHtcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBuYXZiYXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcblxuICBASW5wdXQoKSBzaGFkb3dlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbmF2YmFyLS1zaGFkb3dlZCcpIGdldCBzaGFkb3dDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dlZDtcbiAgfTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLW5hdmJhcicpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==