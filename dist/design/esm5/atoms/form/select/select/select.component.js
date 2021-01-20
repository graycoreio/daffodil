/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Optional, Self, Input, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../../form-field/form-field-control';
var DaffNativeSelectComponent = /** @class */ (function () {
    function DaffNativeSelectComponent(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        this.controlType = 'native-select';
        this.focused = false;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.focus = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.blur = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    DaffNativeSelectComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'select[daff-native-select]',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'daff-native-select'
                    },
                    encapsulation: ViewEncapsulation.None,
                    providers: [{ provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent }],
                    styles: [".daff-native-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:padding-box;border:0;box-shadow:none;font-size:1rem;line-height:1.5rem;margin:0;min-width:45px;width:100%}.daff-native-select:focus{border:0;box-shadow:none;outline:0}"]
                }] }
    ];
    /** @nocollapse */
    DaffNativeSelectComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: ElementRef }
    ]; };
    DaffNativeSelectComponent.propDecorators = {
        formSubmitted: [{ type: Input }],
        focus: [{ type: HostListener, args: ['focus',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return DaffNativeSelectComponent;
}());
export { DaffNativeSelectComponent };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.controlType;
    /**
     * Has the form been submitted.
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.formSubmitted;
    /** @type {?} */
    DaffNativeSelectComponent.prototype.focused;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    DaffNativeSelectComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL3NlbGVjdC9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUzRTtJQXNDRSxtQ0FJMkIsU0FBb0IsRUFDdkMsV0FBeUM7UUFEdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7Ozs7UUEzQmpELGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBTS9CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFzQmIsQ0FBQztJQXBCSjs7T0FFRzs7Ozs7SUFDcUIseUNBQUs7Ozs7SUFBNUI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUY7O09BRUc7Ozs7O0lBQ29CLHdDQUFJOzs7O0lBQTFCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQVVELDJDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7O2dCQWhERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsb0JBQW9CO3FCQUM5QjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFDLENBQUM7O2lCQUNyRjs7OztnQkFkUSxTQUFTLHVCQThDZixRQUFRLFlBQUksSUFBSTtnQkEvQzJDLFVBQVU7OztnQ0EwQnRFLEtBQUs7d0JBTUosWUFBWSxTQUFDLE9BQU87dUJBT3BCLFlBQVksU0FBQyxNQUFNOztJQWdCdEIsZ0NBQUM7Q0FBQSxBQWxERCxJQWtEQztTQXRDWSx5QkFBeUI7Ozs7OztJQUlwQyxnREFBOEI7Ozs7O0lBSy9CLGtEQUFnQzs7SUFDaEMsNENBQWdCOzs7OztJQW9CZiw4Q0FBK0M7Ozs7O0lBQy9DLGdEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhZmZGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnLi4vLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWxlY3RbZGFmZi1uYXRpdmUtc2VsZWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2RhZmYtbmF0aXZlLXNlbGVjdCdcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IERhZmZGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogRGFmZk5hdGl2ZVNlbGVjdENvbXBvbmVudH1dLFxufSlcblxuZXhwb3J0IGNsYXNzIERhZmZOYXRpdmVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBEYWZmRm9ybUZpZWxkQ29udHJvbCB7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBjb250cm9sVHlwZSA9ICduYXRpdmUtc2VsZWN0Jztcblx0XG4gIC8qKlxuXHQgKiBIYXMgdGhlIGZvcm0gYmVlbiBzdWJtaXR0ZWQuXG4gICAqL1xuXHRASW5wdXQoKSBmb3JtU3VibWl0dGVkOiBib29sZWFuO1xuXHRmb2N1c2VkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgZm9jdXMoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdExpc3RlbmVyKCdibHVyJykgYmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuXHRcdC8qKlxuXHRcdCAqIEBkb2NzLXByaXZhdGVcblx0XHQgKi9cblx0XHRAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgXG5cdFx0cHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PlxuXHQpIHt9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG59XG4iXX0=