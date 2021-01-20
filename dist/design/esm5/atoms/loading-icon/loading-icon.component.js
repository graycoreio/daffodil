/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffLoadingIconBase = /** @class */ (function () {
    function DaffLoadingIconBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffLoadingIconBase;
}());
if (false) {
    /** @type {?} */
    DaffLoadingIconBase.prototype._elementRef;
    /** @type {?} */
    DaffLoadingIconBase.prototype._renderer;
}
/** @type {?} */
var _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary');
var DaffLoadingIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DaffLoadingIconComponent, _super);
    function DaffLoadingIconComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * The (pixel) diameter of the animation
         */
        // tslint:disable-next-line: no-inferrable-types
        _this.diameter = 60;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    Object.defineProperty(DaffLoadingIconComponent.prototype, "maxWidth", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.diameter + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DaffLoadingIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-loading-icon',
                    template: "<svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 100 100\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"46\"></circle>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}circle{-webkit-animation:1s linear infinite rotation,1s linear infinite circle-animation;animation:1s linear infinite rotation,1s linear infinite circle-animation;fill:transparent;stroke-dasharray:101.15928 400;stroke-linecap:round;stroke-width:5px;transform-origin:center}@-webkit-keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@-webkit-keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}@keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}"]
                }] }
    ];
    /** @nocollapse */
    DaffLoadingIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffLoadingIconComponent.propDecorators = {
        color: [{ type: Input }],
        diameter: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-loading-icon',] }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return DaffLoadingIconComponent;
}(_daffLoadingIconBase));
export { DaffLoadingIconComponent };
if (false) {
    /** @type {?} */
    DaffLoadingIconComponent.prototype.color;
    /**
     * The (pixel) diameter of the animation
     * @type {?}
     */
    DaffLoadingIconComponent.prototype.diameter;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLoadingIconComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffLoadingIconComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffLoadingIconComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9sb2FkaW5nLWljb24vbG9hZGluZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxjQUFjLEVBQThCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFLNUY7Ozs7SUFDRSw2QkFBbUIsV0FBdUIsRUFBUyxTQUFvQjtRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0lBQzdFLDBCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7OztJQURhLDBDQUE4Qjs7SUFBRSx3Q0FBMkI7OztJQUduRSxvQkFBb0IsR0FBRyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO0FBRTNFO0lBTThDLG9EQUFvQjtJQW9CaEUsa0NBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBdkUsWUFDRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQzVCO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVzs7Ozs7UUFiOUQsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7OztRQUtRLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBVXBELENBQUM7SUFORCxzQkFBb0MsOENBQVE7UUFIN0M7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7OztPQUFBOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHFLQUE0QztvQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFqQm1ELFVBQVU7Z0JBQUUsU0FBUzs7O3dCQW9CdEUsS0FBSzsyQkFLTCxLQUFLO3dCQUtOLFdBQVcsU0FBQyx5QkFBeUI7MkJBSXBDLFdBQVcsU0FBQyxpQkFBaUI7O0lBT2hDLCtCQUFDO0NBQUEsQUE3QkQsQ0FNOEMsb0JBQW9CLEdBdUJqRTtTQXZCWSx3QkFBd0I7OztJQUVuQyx5Q0FBNEI7Ozs7O0lBSzVCLDRDQUErQjs7Ozs7SUFLaEMseUNBQXFEOzs7OztJQVF4Qyw4Q0FBOEI7Ozs7O0lBQUUsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRhZmZDb2xvck1peGluLCBEYWZmQ29sb3JhYmxlLCBEYWZmUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUvY29sb3JhYmxlL2NvbG9yYWJsZSc7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZMb2FkaW5nSWNvbkJhc2V7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZkxvYWRpbmdJY29uQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZMb2FkaW5nSWNvbkJhc2UsICdwcmltYXJ5JykgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtbG9hZGluZy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTG9hZGluZ0ljb25Db21wb25lbnQgZXh0ZW5kcyBfZGFmZkxvYWRpbmdJY29uQmFzZSBpbXBsZW1lbnRzIERhZmZDb2xvcmFibGUge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcbiAgLyoqXG4gICAqIFRoZSAocGl4ZWwpIGRpYW1ldGVyIG9mIHRoZSBhbmltYXRpb25cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5mZXJyYWJsZS10eXBlc1xuICBASW5wdXQoKSBkaWFtZXRlcjogbnVtYmVyID0gNjA7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1sb2FkaW5nLWljb24nKSBjbGFzcyA9IHRydWU7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFtZXRlciArICdweCc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgfVxufVxuIl19