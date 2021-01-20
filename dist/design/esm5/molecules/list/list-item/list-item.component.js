/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ContentChild, ElementRef } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';
var DaffListItemComponent = /** @class */ (function () {
    function DaffListItemComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    Object.defineProperty(DaffListItemComponent.prototype, "role", {
        /**
         * Sets the role for a regular `<daff-list-item>` to listitem.
           * @docs-private
         */
        get: /**
         * Sets the role for a regular `<daff-list-item>` to listitem.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._isAnchor() ? null : 'listitem';
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @private
     * @return {?}
     */
    DaffListItemComponent.prototype._getHostElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    /** Gets whether a list item has one of the given attributes. */
    /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    DaffListItemComponent.prototype._isAnchor = /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.localName === 'a';
    };
    DaffListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-list-item' + ',' +
                        'a[daff-list-item]',
                    template: "<ng-container *ngIf=\"_prefix\">\n  <ng-content select=\"[daffPrefix]\"></ng-content>\n</ng-container>\n<div class=\"daff-list-item__content\">\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"_suffix\">\n  <ng-content select=\"[daffSuffix]\"></ng-content>\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DaffListItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DaffListItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-list-item',] }],
        _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: false },] }],
        _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: false },] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffListItemComponent;
}());
export { DaffListItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRztJQXdCRSwrQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7OztRQVhMLFVBQUssR0FBRyxJQUFJLENBQUM7SUFXTCxDQUFDO0lBTTlDLHNCQUE4Qix1Q0FBSTtRQUpsQzs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBQUEsQ0FBQzs7Ozs7SUFFTSwrQ0FBZTs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELGdFQUFnRTs7Ozs7O0lBQ3hELHlDQUFTOzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQztJQUN6RCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFDTixnQkFBZ0IsR0FBRyxHQUFHO3dCQUN0QixtQkFBbUI7b0JBQ3JCLHdTQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVR1RSxVQUFVOzs7d0JBZ0IvRSxXQUFXLFNBQUMsc0JBQXNCOzBCQUtuQyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUlsRCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQVFuRCxXQUFXLFNBQUMsV0FBVzs7SUFZMUIsNEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQWxDWSxxQkFBcUI7Ozs7OztJQUtoQyxzQ0FBa0Q7Ozs7O0lBS25ELHdDQUFtRjs7Ozs7SUFJbEYsd0NBQW1GOzs7OztJQUV2RSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmUHJlZml4RGlyZWN0aXZlLCBEYWZmU3VmZml4RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9wcmVmaXgtc3VmZml4L3B1YmxpY19hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XG4gICAgJ2RhZmYtbGlzdC1pdGVtJyArICcsJyArXG4gICAgJ2FbZGFmZi1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgRGFmZkxpc3RJdGVtQ29tcG9uZW50IHtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWxpc3QtaXRlbScpIGNsYXNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QENvbnRlbnRDaGlsZChEYWZmUHJlZml4RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgX3ByZWZpeDogRGFmZlByZWZpeERpcmVjdGl2ZTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBDb250ZW50Q2hpbGQoRGFmZlN1ZmZpeERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9zdWZmaXg6IERhZmZTdWZmaXhEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb2xlIGZvciBhIHJlZ3VsYXIgYDxkYWZmLWxpc3QtaXRlbT5gIHRvIGxpc3RpdGVtLlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FuY2hvcigpID8gbnVsbCA6ICdsaXN0aXRlbSc7XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciBhIGxpc3QgaXRlbSBoYXMgb25lIG9mIHRoZSBnaXZlbiBhdHRyaWJ1dGVzLiAqL1xuICBwcml2YXRlIF9pc0FuY2hvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubG9jYWxOYW1lID09PSAnYSc7XG4gIH1cbn1cbiJdfQ==