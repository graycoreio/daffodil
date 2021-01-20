/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding, ElementRef } from '@angular/core';
/** @enum {string} */
const DaffListModeEnum = {
    Multiline: 'multi-line',
    Link: 'link',
    Navigation: 'navigation',
};
export { DaffListModeEnum };
/** @enum {string} */
const DaffListTypeEnum = {
    Default: 'daff-list',
    Nav: 'daff-nav-list',
};
export class DaffListComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get list() {
        return this.listType === DaffListTypeEnum.Default;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get multiline() {
        return this.mode === DaffListModeEnum.Multiline;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get link() {
        return this.mode === DaffListModeEnum.Link;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get navigation() {
        return this.mode === DaffListModeEnum.Navigation;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get listType() {
        return this._getHostElement().localName;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get nav() {
        return this.listType === DaffListTypeEnum.Nav;
    }
    /**
     * Sets the role for a `<daff-nav-list>` to navigation.
     * \@docs-private
     * @return {?}
     */
    get role() {
        return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
    }
    ;
    /**
     * @private
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}
DaffListComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-list' + ',' +
                    'daff-nav-list',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".daff-list{display:block;margin:0;padding:0}.daff-list .daff-list-item{display:flex;padding:12px 16px}.daff-list .daff-list-item__content{flex-grow:1}.daff-list .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5em;margin:0;padding:0}.daff-list .daff-list-item__content :nth-child(n+2){font-size:1rem;margin:0;padding:0}.daff-list .daff-list-item .daff-prefix,.daff-list .daff-list-item .daff-suffix{display:flex;align-items:center}.daff-list .daff-list-item .daff-prefix{margin-right:24px}.daff-list .daff-list-item .daff-suffix{margin-left:24px}.daff-list__subheader{font-weight:700;text-transform:uppercase;font-size:1rem;padding:0 0 25px}.daff-list--link a,.daff-list--navigation a{text-decoration:none}.daff-list--link a:hover,.daff-list--navigation a:hover{color:#474747}.daff-list--multi-line .daff-list-item{padding:15px 0}.daff-list--multi-line .daff-list-item:first-of-type{padding:0 0 15px}.daff-list--multi-line .daff-list-item:last-of-type{padding:15px 0 0}.daff-list--multi-line .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5rem;margin:0 0 10px;padding:0}.daff-list--multi-line .daff-list-item__content :nth-child(n+2){margin:0;padding:0}.daff-nav-list{display:block;margin:0;padding:0}.daff-nav-list .daff-list-item{display:flex;padding:12px 16px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;text-decoration:none}.daff-nav-list .daff-list-item__content{flex-grow:1}.daff-nav-list .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5em;margin:0;padding:0}.daff-nav-list .daff-list-item__content :nth-child(n+2){font-size:1rem;margin:0;padding:0}.daff-nav-list .daff-list-item .daff-prefix,.daff-nav-list .daff-list-item .daff-suffix{display:flex;align-items:center}.daff-nav-list .daff-list-item .daff-prefix{margin-right:24px}.daff-nav-list .daff-list-item .daff-suffix{margin-left:24px}"]
            }] }
];
/** @nocollapse */
DaffListComponent.ctorParameters = () => [
    { type: ElementRef }
];
DaffListComponent.propDecorators = {
    mode: [{ type: Input }],
    list: [{ type: HostBinding, args: ['class.daff-list',] }],
    multiline: [{ type: HostBinding, args: ['class.daff-list--multi-line',] }],
    link: [{ type: HostBinding, args: ['class.daff-list--link',] }],
    navigation: [{ type: HostBinding, args: ['class.daff-list--navigation',] }],
    nav: [{ type: HostBinding, args: ['class.daff-nav-list',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /**
     * @deprecated
     *
     * @type {?}
     */
    DaffListComponent.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    DaffListComponent.prototype.elementRef;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2xpc3QvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBUXBILFdBQVksWUFBWTtJQUN4QixNQUFPLE1BQU07SUFDYixZQUFhLFlBQVk7Ozs7O0lBTXpCLFNBQVUsV0FBVztJQUNyQixLQUFNLGVBQWU7O0FBYXZCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUE0QzVCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7OztJQW5DOUMsSUFBb0MsSUFBSTtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFNRCxJQUFnRCxTQUFTO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQzs7Ozs7OztJQU1ELElBQTBDLElBQUk7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBTUQsSUFBZ0QsVUFBVTtRQUN4RCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBS0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBT0YsSUFBd0MsR0FBRztRQUN6QyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQU1ELElBQThCLElBQUk7UUFDaEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDeEUsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRU0sZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUNOLFdBQVcsR0FBRyxHQUFHO29CQUNqQixlQUFlO2dCQUNqQixRQUFRLEVBQUUsMkJBQTJCO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBNUJtRixVQUFVOzs7bUJBa0MzRixLQUFLO21CQUtMLFdBQVcsU0FBQyxpQkFBaUI7d0JBUTdCLFdBQVcsU0FBQyw2QkFBNkI7bUJBUXpDLFdBQVcsU0FBQyx1QkFBdUI7eUJBUW5DLFdBQVcsU0FBQyw2QkFBNkI7a0JBZ0J6QyxXQUFXLFNBQUMscUJBQXFCO21CQVFqQyxXQUFXLFNBQUMsV0FBVzs7Ozs7Ozs7SUFyRHhCLGlDQUE0Qjs7Ozs7SUF3Q2hCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogRGFmZkxpc3RNb2RlIHdpbGwgYmUgY29tcGxldGVseSBkZXByZWNhdGVkIGluIHYxLjAuMFxuICogKi9cbmV4cG9ydCB0eXBlIERhZmZMaXN0TW9kZSA9ICdtdWx0aS1saW5lJyB8ICdsaW5rJyB8ICduYXZpZ2F0aW9uJyB8IHVuZGVmaW5lZDtcbmV4cG9ydCBlbnVtIERhZmZMaXN0TW9kZUVudW0ge1xuICBNdWx0aWxpbmUgPSAnbXVsdGktbGluZScsXG4gIExpbmsgPSAnbGluaycsXG4gIE5hdmlnYXRpb24gPSAnbmF2aWdhdGlvbidcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkxpc3RUeXBlID0gJ2RhZmYtbGlzdCcgfCAnZGFmZi1uYXYtbGlzdCc7XG5cbmVudW0gRGFmZkxpc3RUeXBlRW51bSB7XG4gIERlZmF1bHQgPSAnZGFmZi1saXN0JyxcbiAgTmF2ID0gJ2RhZmYtbmF2LWxpc3QnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcbiAgICAnZGFmZi1saXN0JyArICcsJyArXG4gICAgJ2RhZmYtbmF2LWxpc3QnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgRGFmZkxpc3RDb21wb25lbnQge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogKi9cbiAgQElucHV0KCkgbW9kZTogRGFmZkxpc3RNb2RlO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbGlzdCcpIGdldCBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSBEYWZmTGlzdFR5cGVFbnVtLkRlZmF1bHQ7XG4gIH1cblxuICAvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbGlzdC0tbXVsdGktbGluZScpIGdldCBtdWx0aWxpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gRGFmZkxpc3RNb2RlRW51bS5NdWx0aWxpbmU7XG4gIH1cblxuICAvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbGlzdC0tbGluaycpIGdldCBsaW5rKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IERhZmZMaXN0TW9kZUVudW0uTGluaztcbiAgfVxuXG4gIC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqIEBkZXByZWNhdGVkXG4gICAqICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1saXN0LS1uYXZpZ2F0aW9uJykgZ2V0IG5hdmlnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gRGFmZkxpc3RNb2RlRW51bS5OYXZpZ2F0aW9uO1xuICB9XG5cdFxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgZ2V0IGxpc3RUeXBlKCk6IERhZmZMaXN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvc3RFbGVtZW50KCkubG9jYWxOYW1lO1xuICAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLW5hdi1saXN0JykgZ2V0IG5hdigpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0VHlwZSA9PT0gRGFmZkxpc3RUeXBlRW51bS5OYXY7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcm9sZSBmb3IgYSBgPGRhZmYtbmF2LWxpc3Q+YCB0byBuYXZpZ2F0aW9uLlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSBEYWZmTGlzdFR5cGVFbnVtLk5hdiA/ICduYXZpZ2F0aW9uJyA6ICdsaXN0JztcbiAgfTtcblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==