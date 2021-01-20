/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
/**
 * An _elementRef is needed for the Colorable mixin
 */
var /**
 * An _elementRef is needed for the Colorable mixin
 */
DaffNavbarBase = /** @class */ (function () {
    function DaffNavbarBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffNavbarBase;
}());
if (false) {
    /** @type {?} */
    DaffNavbarBase.prototype._elementRef;
    /** @type {?} */
    DaffNavbarBase.prototype._renderer;
}
/** @type {?} */
var _daffNavbarBase = daffColorMixin(DaffNavbarBase);
var DaffNavbarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DaffNavbarComponent, _super);
    function DaffNavbarComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.shadowed = false;
        /**
         * \@docs-private
         */
        _this.hostClass = true;
        return _this;
    }
    Object.defineProperty(DaffNavbarComponent.prototype, "shadowClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.shadowed;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DaffNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-navbar',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{align-items:center;display:flex;height:70px;padding:0 15px;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffNavbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffNavbarComponent.propDecorators = {
        color: [{ type: Input }],
        shadowed: [{ type: Input }],
        shadowClass: [{ type: HostBinding, args: ['class.daff-navbar--shadowed',] }],
        hostClass: [{ type: HostBinding, args: ['class.daff-navbar',] }]
    };
    return DaffNavbarComponent;
}(_daffNavbarBase));
export { DaffNavbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQThCLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBSzVGOzs7O0lBQ0Usd0JBQW1CLFdBQXVCLEVBQVMsU0FBb0I7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztJQUM3RSxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7SUFEYSxxQ0FBOEI7O0lBQUUsbUNBQTJCOzs7SUFHbkUsZUFBZSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFFdEQ7SUFNeUMsK0NBQWU7SUFxQnRELDZCQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQXZFLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUM1QjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVc7UUFkOUQsY0FBUSxHQUFHLEtBQUssQ0FBQzs7OztRQVlRLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBSW5ELENBQUM7SUFYRCxzQkFBZ0QsNENBQVc7UUFINUQ7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOztnQkFwQkgsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUV2QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWpCMEIsVUFBVTtnQkFBZSxTQUFTOzs7d0JBdUIxRCxLQUFLOzJCQUVMLEtBQUs7OEJBS0wsV0FBVyxTQUFDLDZCQUE2Qjs0QkFPekMsV0FBVyxTQUFDLG1CQUFtQjs7SUFLbEMsMEJBQUM7Q0FBQSxBQTlCRCxDQU15QyxlQUFlLEdBd0J2RDtTQXhCWSxtQkFBbUI7Ozs7OztJQUs5QixvQ0FBNEI7O0lBRTVCLHVDQUEwQjs7Ozs7SUFZMUIsd0NBQW1EOzs7OztJQUV2Qyx5Q0FBOEI7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZDb2xvcmFibGUsIERhZmZQYWxldHRlLCBkYWZmQ29sb3JNaXhpbiB9IGZyb20gJy4uLy4uL2NvcmUvY29sb3JhYmxlL2NvbG9yYWJsZSc7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgaXMgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZOYXZiYXJCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG59XG5cbmNvbnN0IF9kYWZmTmF2YmFyQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZOYXZiYXJCYXNlKVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLW5hdmJhcicsXG4gIHN0eWxlVXJsczogWycuL25hdmJhci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmF2YmFyQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZOYXZiYXJCYXNlIGltcGxlbWVudHMgRGFmZkNvbG9yYWJsZSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgbmF2YmFyXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogRGFmZlBhbGV0dGU7XG5cbiAgQElucHV0KCkgc2hhZG93ZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLW5hdmJhci0tc2hhZG93ZWQnKSBnZXQgc2hhZG93Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93ZWQ7XG4gIH07XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1uYXZiYXInKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG59XG4iXX0=