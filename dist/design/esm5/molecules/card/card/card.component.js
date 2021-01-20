/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';
import { daffColorMixin } from '../../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffCardBase = /** @class */ (function () {
    function DaffCardBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffCardBase;
}());
if (false) {
    /** @type {?} */
    DaffCardBase.prototype._elementRef;
    /** @type {?} */
    DaffCardBase.prototype._renderer;
}
/** @type {?} */
var _daffCardBase = daffColorMixin(DaffCardBase);
var DaffCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCardComponent, _super);
    function DaffCardComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
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
    DaffCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffCardComponent.propDecorators = {
        color: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-card',] }]
    };
    return DaffCardComponent;
}(_daffCardBase));
export { DaffCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2NhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUE4QixjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUsvRjs7OztJQUNFLHNCQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFDN0UsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0lBRGEsbUNBQThCOztJQUFFLGlDQUEyQjs7O0lBR25FLGFBQWEsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBRWxEO0lBUXVDLDZDQUFhO0lBUWxELDJCQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQXZFLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUM1QjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFGdkMsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFJN0MsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsaU1BQW9DO29CQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkF0QkMsVUFBVTtnQkFDVixTQUFTOzs7d0JBeUJULEtBQUs7d0JBSUosV0FBVyxTQUFDLGlCQUFpQjs7SUFLaEMsd0JBQUM7Q0FBQSxBQW5CRCxDQVF1QyxhQUFhLEdBV25EO1NBWFksaUJBQWlCOzs7SUFFN0Isa0NBQTRCOzs7OztJQUkzQixrQ0FBNkM7Ozs7O0lBRWpDLHVDQUE4Qjs7Ozs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDb2xvcmFibGUsIERhZmZQYWxldHRlLCBkYWZmQ29sb3JNaXhpbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29sb3JhYmxlL2NvbG9yYWJsZSc7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZDYXJkQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZkNhcmRCYXNlID0gZGFmZkNvbG9yTWl4aW4oRGFmZkNhcmRCYXNlKVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FyZENvbXBvbmVudCBleHRlbmRzIF9kYWZmQ2FyZEJhc2UgaW1wbGVtZW50cyBEYWZmQ29sb3JhYmxlIHtcblxuXHRASW5wdXQoKSBjb2xvcjogRGFmZlBhbGV0dGU7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtY2FyZCcpIGNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgfVxufVxuIl19