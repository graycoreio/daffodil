/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { daffSizeMixin } from '../../core/sizeable/sizeable-mixin';
/**
 * An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
 */
class DaffContainerBase {
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
    DaffContainerBase.prototype._elementRef;
    /** @type {?} */
    DaffContainerBase.prototype._renderer;
}
/** @type {?} */
const _daffContainerBase = daffSizeMixin(DaffContainerBase);
export class DaffContainerComponent extends _daffContainerBase {
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
DaffContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-container',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;margin:0 auto;padding:0;width:100%}:host.daff-xs{max-width:640px}:host.daff-sm{max-width:800px}:host.daff-md{max-width:1040px}:host.daff-lg{max-width:1340px}:host.daff-xl{max-width:1920px}"]
            }] }
];
/** @nocollapse */
DaffContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffContainerComponent.propDecorators = {
    size: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-container',] }]
};
if (false) {
    /** @type {?} */
    DaffContainerComponent.prototype.size;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffContainerComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffContainerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffContainerComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBS25FLE1BQU0saUJBQWlCOzs7OztJQUN0QixZQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Q0FDM0U7OztJQURZLHdDQUE4Qjs7SUFBRSxzQ0FBMkI7OztNQUdsRSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFRM0QsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGtCQUFrQjs7Ozs7SUFTNUQsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUNyRSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFGbEMsVUFBSyxHQUFHLElBQUksQ0FBQztJQUlsRCxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWxCZ0UsVUFBVTtZQUFFLFNBQVM7OzttQkFxQm5GLEtBQUs7b0JBS0wsV0FBVyxTQUFDLHNCQUFzQjs7OztJQUxuQyxzQ0FBK0I7Ozs7O0lBSy9CLHVDQUFrRDs7Ozs7SUFFdEMsNENBQThCOzs7OztJQUFFLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmU2l6ZUFsbFR5cGUsIERhZmZTaXplYWJsZSwgRGFmZlNpemVhYmxlRW51bSB9IGZyb20gJy4uLy4uL2NvcmUvc2l6ZWFibGUvc2l6ZWFibGUnO1xuaW1wb3J0IHsgZGFmZlNpemVNaXhpbiB9IGZyb20gJy4uLy4uL2NvcmUvc2l6ZWFibGUvc2l6ZWFibGUtbWl4aW4nO1xuXG4vKipcbiogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgU2l6ZWFibGUgbWl4aW5cbiovXG5jbGFzcyBEYWZmQ29udGFpbmVyQmFzZXtcbiBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cblxuY29uc3QgX2RhZmZDb250YWluZXJCYXNlID0gZGFmZlNpemVNaXhpbihEYWZmQ29udGFpbmVyQmFzZSk7IFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWNvbnRhaW5lcicsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIF9kYWZmQ29udGFpbmVyQmFzZSBpbXBsZW1lbnRzIERhZmZTaXplYWJsZTxEYWZmU2l6ZUFsbFR5cGU+IHtcblxuICBASW5wdXQoKSBzaXplOiBEYWZmU2l6ZUFsbFR5cGU7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1jb250YWluZXInKSBjbGFzcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cbn0iXX0=