/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ElementRef, Output, EventEmitter, Renderer2, HostBinding } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
import { daffProgressIndicatorAnimation } from './animation/progress-indicator-animation';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffProgressIndicatorBase {
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
    DaffProgressIndicatorBase.prototype._elementRef;
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._renderer;
}
/** @type {?} */
const _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary');
export class DaffProgressIndicatorComponent extends _daffProgressIndicatorBase {
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
        /**
         * The percentage completion of the progression,
         * expressed as a whole number between 0 and 100.
         *
         */
        // tslint:disable-next-line: no-inferrable-types
        this.percentage = 0;
        /**
         * An event that emits each time the progression reaches 100%
         * and the animation is finished
         */
        this.finished = new EventEmitter();
    }
    /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    onAnimationComplete(event) {
        // @ts-ignore: @angular/animations typing error on event.toState as string
        // See: https://github.com/angular/angular/issues/26507
        if (event.toState === '100' || event.toState === 100) {
            this.finished.emit();
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get fillState() {
        return {
            value: this.percentage,
            params: {
                percentage: this.percentage
            }
        };
    }
}
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
DaffProgressIndicatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffProgressIndicatorComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-progress-indicator',] }],
    color: [{ type: Input }],
    percentage: [{ type: Input }],
    finished: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsY0FBYyxFQUE4QixNQUFNLGdDQUFnQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBSzFGLE1BQU0seUJBQXlCOzs7OztJQUM3QixZQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Q0FDNUU7OztJQURhLGdEQUE4Qjs7SUFBRSw4Q0FBMkI7OztNQUduRSwwQkFBMEIsR0FBRyxjQUFjLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDO0FBV3ZGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSwwQkFBMEI7Ozs7O0lBb0Q1RSxZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQ3JFLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQS9DekIsVUFBSyxHQUFHLElBQUksQ0FBQzs7Ozs7OztRQWNsRCxlQUFVLEdBQVcsQ0FBQyxDQUFDOzs7OztRQU10QixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QjVELENBQUM7Ozs7OztJQXRCRCxtQkFBbUIsQ0FBQyxLQUFxQjtRQUN2QywwRUFBMEU7UUFDMUUsdURBQXVEO1FBQ3ZELElBQUcsS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBS0QsSUFBSSxTQUFTO1FBQ1gsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzVCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsa0lBQWtEO2dCQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsVUFBVSxFQUFFO29CQUNWLDhCQUE4QixDQUFDLElBQUk7aUJBQ3BDOzthQUNGOzs7O1lBdkJtRCxVQUFVO1lBQXdCLFNBQVM7OztvQkE2QjVGLFdBQVcsU0FBQywrQkFBK0I7b0JBTTNDLEtBQUs7eUJBUUwsS0FBSzt1QkFNTCxNQUFNOzs7Ozs7O0lBcEJQLCtDQUEyRDs7Ozs7O0lBTTNELCtDQUE0Qjs7Ozs7OztJQVE1QixvREFBZ0M7Ozs7OztJQU1oQyxrREFBNEQ7Ozs7O0lBMkJoRCxvREFBOEI7Ozs7O0lBQUUsa0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBkYWZmQ29sb3JNaXhpbiwgRGFmZkNvbG9yYWJsZSwgRGFmZlBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlL2NvbG9yYWJsZS9jb2xvcmFibGUnO1xuaW1wb3J0IHsgZGFmZlByb2dyZXNzSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24vcHJvZ3Jlc3MtaW5kaWNhdG9yLWFuaW1hdGlvbic7XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgQ29sb3JhYmxlIG1peGluXG4gKi9cbmNsYXNzIERhZmZQcm9ncmVzc0luZGljYXRvckJhc2V7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZlByb2dyZXNzSW5kaWNhdG9yQmFzZSA9IGRhZmZDb2xvck1peGluKERhZmZQcm9ncmVzc0luZGljYXRvckJhc2UsICdwcmltYXJ5JykgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIGRhZmZQcm9ncmVzc0luZGljYXRvckFuaW1hdGlvbi5maWxsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZQcm9ncmVzc0luZGljYXRvckJhc2UgaW1wbGVtZW50cyBEYWZmQ29sb3JhYmxlIHtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLXByb2dyZXNzLWluZGljYXRvcicpIGNsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICogU2VlIERhZmZDb2xvcmFibGVcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmUGFsZXR0ZTtcblxuICAvKipcbiAgICogVGhlIHBlcmNlbnRhZ2UgY29tcGxldGlvbiBvZiB0aGUgcHJvZ3Jlc3Npb24sIFxuICAgKiBleHByZXNzZWQgYXMgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqIFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIHBlcmNlbnRhZ2U6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IHRoYXQgZW1pdHMgZWFjaCB0aW1lIHRoZSBwcm9ncmVzc2lvbiByZWFjaGVzIDEwMCUgXG4gICAqIGFuZCB0aGUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZmluaXNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZW4gdGhlIHByb2dyZXNzIGFuaW1hdGlvbiBpcyBmdWxseSBjb21wbGV0ZWRcbiAgICogQHBhcmFtIGV2ZW50OiBBbmltYXRpb25FdmVudFxuICAgKi9cbiAgb25BbmltYXRpb25Db21wbGV0ZShldmVudDogQW5pbWF0aW9uRXZlbnQpIDogdm9pZCB7XG4gICAgLy8gQHRzLWlnbm9yZTogQGFuZ3VsYXIvYW5pbWF0aW9ucyB0eXBpbmcgZXJyb3Igb24gZXZlbnQudG9TdGF0ZSBhcyBzdHJpbmdcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI2NTA3XG4gICAgaWYoZXZlbnQudG9TdGF0ZSA9PT0gJzEwMCcgfHwgZXZlbnQudG9TdGF0ZSA9PT0gMTAwKSB7XG4gICAgICB0aGlzLmZpbmlzaGVkLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgZ2V0IGZpbGxTdGF0ZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5wZXJjZW50YWdlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IHRoaXMucGVyY2VudGFnZSBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==