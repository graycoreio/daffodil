/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffLoadingIconBase {
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
    DaffLoadingIconBase.prototype._elementRef;
    /** @type {?} */
    DaffLoadingIconBase.prototype._renderer;
}
/** @type {?} */
const _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary');
export class DaffLoadingIconComponent extends _daffLoadingIconBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * The (pixel) diameter of the animation
         */
        // tslint:disable-next-line: no-inferrable-types
        this.diameter = 60;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get maxWidth() {
        return this.diameter + 'px';
    }
}
DaffLoadingIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-loading-icon',
                template: "<svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 100 100\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"46\"></circle>\n</svg>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}circle{-webkit-animation:1s linear infinite rotation,1s linear infinite circle-animation;animation:1s linear infinite rotation,1s linear infinite circle-animation;fill:transparent;stroke-dasharray:101.15928 400;stroke-linecap:round;stroke-width:5px;transform-origin:center}@-webkit-keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@-webkit-keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}@keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}"]
            }] }
];
/** @nocollapse */
DaffLoadingIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffLoadingIconComponent.propDecorators = {
    color: [{ type: Input }],
    diameter: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-loading-icon',] }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9sb2FkaW5nLWljb24vbG9hZGluZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGNBQWMsRUFBOEIsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUs1RixNQUFNLG1CQUFtQjs7Ozs7SUFDdkIsWUFBbUIsV0FBdUIsRUFBUyxTQUFvQjtRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0NBQzVFOzs7SUFEYSwwQ0FBOEI7O0lBQUUsd0NBQTJCOzs7TUFHbkUsb0JBQW9CLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQztBQVEzRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsb0JBQW9COzs7OztJQW9CaEUsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUNyRSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7O1FBYjlELGFBQVEsR0FBVyxFQUFFLENBQUM7Ozs7UUFLUSxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBVXBELENBQUM7Ozs7O0lBTkQsSUFBb0MsUUFBUTtRQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscUtBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFqQm1ELFVBQVU7WUFBRSxTQUFTOzs7b0JBb0J0RSxLQUFLO3VCQUtMLEtBQUs7b0JBS04sV0FBVyxTQUFDLHlCQUF5Qjt1QkFJcEMsV0FBVyxTQUFDLGlCQUFpQjs7OztJQWQ5Qix5Q0FBNEI7Ozs7O0lBSzVCLDRDQUErQjs7Ozs7SUFLaEMseUNBQXFEOzs7OztJQVF4Qyw4Q0FBOEI7Ozs7O0lBQUUsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRhZmZDb2xvck1peGluLCBEYWZmQ29sb3JhYmxlLCBEYWZmUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUvY29sb3JhYmxlL2NvbG9yYWJsZSc7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZMb2FkaW5nSWNvbkJhc2V7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZkxvYWRpbmdJY29uQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZMb2FkaW5nSWNvbkJhc2UsICdwcmltYXJ5JykgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtbG9hZGluZy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTG9hZGluZ0ljb25Db21wb25lbnQgZXh0ZW5kcyBfZGFmZkxvYWRpbmdJY29uQmFzZSBpbXBsZW1lbnRzIERhZmZDb2xvcmFibGUge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcbiAgLyoqXG4gICAqIFRoZSAocGl4ZWwpIGRpYW1ldGVyIG9mIHRoZSBhbmltYXRpb25cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5mZXJyYWJsZS10eXBlc1xuICBASW5wdXQoKSBkaWFtZXRlcjogbnVtYmVyID0gNjA7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1sb2FkaW5nLWljb24nKSBjbGFzcyA9IHRydWU7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFtZXRlciArICdweCc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgfVxufVxuIl19