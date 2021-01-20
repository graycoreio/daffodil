/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Output, EventEmitter, Renderer2, HostBinding } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
import { daffProgressIndicatorAnimation } from './animation/progress-indicator-animation';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffProgressIndicatorBase = /** @class */ (function () {
    function DaffProgressIndicatorBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffProgressIndicatorBase;
}());
if (false) {
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._elementRef;
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._renderer;
}
/** @type {?} */
var _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary');
var DaffProgressIndicatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DaffProgressIndicatorComponent, _super);
    function DaffProgressIndicatorComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        /**
         * The percentage completion of the progression,
         * expressed as a whole number between 0 and 100.
         *
         */
        // tslint:disable-next-line: no-inferrable-types
        _this.percentage = 0;
        /**
         * An event that emits each time the progression reaches 100%
         * and the animation is finished
         */
        _this.finished = new EventEmitter();
        return _this;
    }
    /**
     * Calculates when the progress animation is fully completed
     * @param event: AnimationEvent
     */
    /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    DaffProgressIndicatorComponent.prototype.onAnimationComplete = /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // @ts-ignore: @angular/animations typing error on event.toState as string
        // See: https://github.com/angular/angular/issues/26507
        if (event.toState === '100' || event.toState === 100) {
            this.finished.emit();
        }
    };
    Object.defineProperty(DaffProgressIndicatorComponent.prototype, "fillState", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return {
                value: this.percentage,
                params: {
                    percentage: this.percentage
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    DaffProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-progress-indicator',
                    template: "<div class=\"daff-progress-indicator__fill\" [@fill]=\"fillState\" (@fill.done)=\"onAnimationComplete($event)\"></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        daffProgressIndicatorAnimation.fill
                    ],
                    styles: [":host{display:flex;height:3px;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffProgressIndicatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffProgressIndicatorComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-progress-indicator',] }],
        color: [{ type: Input }],
        percentage: [{ type: Input }],
        finished: [{ type: Output }]
    };
    return DaffProgressIndicatorComponent;
}(_daffProgressIndicatorBase));
export { DaffProgressIndicatorComponent };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.class;
    /**
     * The color of the progress indicator
     * See DaffColorable
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.color;
    /**
     * The percentage completion of the progression,
     * expressed as a whole number between 0 and 100.
     *
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.percentage;
    /**
     * An event that emits each time the progression reaches 100%
     * and the animation is finished
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.finished;
    /**
     * @type {?}
     * @private
     */
    DaffProgressIndicatorComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffProgressIndicatorComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEksT0FBTyxFQUFFLGNBQWMsRUFBOEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUsxRjs7OztJQUNFLG1DQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFDN0UsZ0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0lBRGEsZ0RBQThCOztJQUFFLDhDQUEyQjs7O0lBR25FLDBCQUEwQixHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUM7QUFFdkY7SUFTb0QsMERBQTBCO0lBb0Q1RSx3Q0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUF2RSxZQUNFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FDNUI7UUFGbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBL0N6QixXQUFLLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O1FBY2xELGdCQUFVLEdBQVcsQ0FBQyxDQUFDOzs7OztRQU10QixjQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBNkI1RCxDQUFDO0lBMUJEOzs7T0FHRzs7Ozs7O0lBQ0gsNERBQW1COzs7OztJQUFuQixVQUFvQixLQUFxQjtRQUN2QywwRUFBMEU7UUFDMUUsdURBQXVEO1FBQ3ZELElBQUcsS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFLRCxzQkFBSSxxREFBUztRQUhkOztXQUVHOzs7OztRQUNGO1lBQ0UsT0FBTztnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ3RCLE1BQU0sRUFBRTtvQkFDTixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQzVCO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGtJQUFrRDtvQkFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRTt3QkFDViw4QkFBOEIsQ0FBQyxJQUFJO3FCQUNwQzs7aUJBQ0Y7Ozs7Z0JBdkJtRCxVQUFVO2dCQUF3QixTQUFTOzs7d0JBNkI1RixXQUFXLFNBQUMsK0JBQStCO3dCQU0zQyxLQUFLOzZCQVFMLEtBQUs7MkJBTUwsTUFBTTs7SUE4QlQscUNBQUM7Q0FBQSxBQWhFRCxDQVNvRCwwQkFBMEIsR0F1RDdFO1NBdkRZLDhCQUE4Qjs7Ozs7O0lBS3pDLCtDQUEyRDs7Ozs7O0lBTTNELCtDQUE0Qjs7Ozs7OztJQVE1QixvREFBZ0M7Ozs7OztJQU1oQyxrREFBNEQ7Ozs7O0lBMkJoRCxvREFBOEI7Ozs7O0lBQUUsa0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBkYWZmQ29sb3JNaXhpbiwgRGFmZkNvbG9yYWJsZSwgRGFmZlBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlL2NvbG9yYWJsZS9jb2xvcmFibGUnO1xuaW1wb3J0IHsgZGFmZlByb2dyZXNzSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24vcHJvZ3Jlc3MtaW5kaWNhdG9yLWFuaW1hdGlvbic7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZQcm9ncmVzc0luZGljYXRvckJhc2V7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZlByb2dyZXNzSW5kaWNhdG9yQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZQcm9ncmVzc0luZGljYXRvckJhc2UsICdwcmltYXJ5JykgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIGRhZmZQcm9ncmVzc0luZGljYXRvckFuaW1hdGlvbi5maWxsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZQcm9ncmVzc0luZGljYXRvckJhc2UgaW1wbGVtZW50cyBEYWZmQ29sb3JhYmxlIHtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLXByb2dyZXNzLWluZGljYXRvcicpIGNsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICogU2VlIERhZmZDb2xvcmFibGVcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcblxuICAvKipcbiAgICogVGhlIHBlcmNlbnRhZ2UgY29tcGxldGlvbiBvZiB0aGUgcHJvZ3Jlc3Npb24sIFxuICAgKiBleHByZXNzZWQgYXMgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqIFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIHBlcmNlbnRhZ2U6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IHRoYXQgZW1pdHMgZWFjaCB0aW1lIHRoZSBwcm9ncmVzc2lvbiByZWFjaGVzIDEwMCUgXG4gICAqIGFuZCB0aGUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZmluaXNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZW4gdGhlIHByb2dyZXNzIGFuaW1hdGlvbiBpcyBmdWxseSBjb21wbGV0ZWRcbiAgICogQHBhcmFtIGV2ZW50OiBBbmltYXRpb25FdmVudFxuICAgKi9cbiAgb25BbmltYXRpb25Db21wbGV0ZShldmVudDogQW5pbWF0aW9uRXZlbnQpIDogdm9pZCB7XG4gICAgLy8gQHRzLWlnbm9yZTogQGFuZ3VsYXIvYW5pbWF0aW9ucyB0eXBpbmcgZXJyb3Igb24gZXZlbnQudG9TdGF0ZSBhcyBzdHJpbmdcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI2NTA3XG4gICAgaWYoZXZlbnQudG9TdGF0ZSA9PT0gJzEwMCcgfHwgZXZlbnQudG9TdGF0ZSA9PT0gMTAwKSB7XG4gICAgICB0aGlzLmZpbmlzaGVkLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgZ2V0IGZpbGxTdGF0ZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5wZXJjZW50YWdlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IHRoaXMucGVyY2VudGFnZSBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==