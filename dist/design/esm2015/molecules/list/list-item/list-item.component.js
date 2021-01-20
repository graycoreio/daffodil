/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ContentChild, ElementRef } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';
export class DaffListItemComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * Sets the role for a regular `<daff-list-item>` to listitem.
     * \@docs-private
     * @return {?}
     */
    get role() {
        return this._isAnchor() ? null : 'listitem';
    }
    ;
    /**
     * @private
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    _isAnchor() {
        return this.elementRef.nativeElement.localName === 'a';
    }
}
DaffListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-list-item' + ',' +
                    'a[daff-list-item]',
                template: "<ng-container *ngIf=\"_prefix\">\n  <ng-content select=\"[daffPrefix]\"></ng-content>\n</ng-container>\n<div class=\"daff-list-item__content\">\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"_suffix\">\n  <ng-content select=\"[daffSuffix]\"></ng-content>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DaffListItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
DaffListItemComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-list-item',] }],
    _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: false },] }],
    _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: false },] }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype.class;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype._prefix;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype._suffix;
    /**
     * @type {?}
     * @private
     */
    DaffListItemComponent.prototype.elementRef;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVVsRyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBZ0JoQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7O1FBWEwsVUFBSyxHQUFHLElBQUksQ0FBQztJQVdMLENBQUM7Ozs7OztJQU05QyxJQUE4QixJQUFJO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFTSxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBR08sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQztJQUN6RCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFDTixnQkFBZ0IsR0FBRyxHQUFHO29CQUN0QixtQkFBbUI7Z0JBQ3JCLHdTQUF5QztnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFUdUUsVUFBVTs7O29CQWdCL0UsV0FBVyxTQUFDLHNCQUFzQjtzQkFLbkMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtzQkFJbEQsWUFBWSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTttQkFRbkQsV0FBVyxTQUFDLFdBQVc7Ozs7Ozs7SUFqQnhCLHNDQUFrRDs7Ozs7SUFLbkQsd0NBQW1GOzs7OztJQUlsRix3Q0FBbUY7Ozs7O0lBRXZFLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZQcmVmaXhEaXJlY3RpdmUsIERhZmZTdWZmaXhEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3ByZWZpeC1zdWZmaXgvcHVibGljX2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcbiAgICAnZGFmZi1saXN0LWl0ZW0nICsgJywnICtcbiAgICAnYVtkYWZmLWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYWZmTGlzdEl0ZW1Db21wb25lbnQge1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbGlzdC1pdGVtJykgY2xhc3MgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRAQ29udGVudENoaWxkKERhZmZQcmVmaXhEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBfcHJlZml4OiBEYWZmUHJlZml4RGlyZWN0aXZlO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQENvbnRlbnRDaGlsZChEYWZmU3VmZml4RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgX3N1ZmZpeDogRGFmZlN1ZmZpeERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJvbGUgZm9yIGEgcmVndWxhciBgPGRhZmYtbGlzdC1pdGVtPmAgdG8gbGlzdGl0ZW0uXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQW5jaG9yKCkgPyBudWxsIDogJ2xpc3RpdGVtJztcbiAgfTtcblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIGEgbGlzdCBpdGVtIGhhcyBvbmUgb2YgdGhlIGdpdmVuIGF0dHJpYnV0ZXMuICovXG4gIHByaXZhdGUgX2lzQW5jaG9yKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5sb2NhbE5hbWUgPT09ICdhJztcbiAgfVxufVxuIl19