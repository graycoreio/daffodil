/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding, ElementRef } from '@angular/core';
/** @enum {string} */
var DaffListModeEnum = {
    Multiline: 'multi-line',
    Link: 'link',
    Navigation: 'navigation',
};
export { DaffListModeEnum };
/** @enum {string} */
var DaffListTypeEnum = {
    Default: 'daff-list',
    Nav: 'daff-nav-list',
};
var DaffListComponent = /** @class */ (function () {
    function DaffListComponent(elementRef) {
        this.elementRef = elementRef;
    }
    Object.defineProperty(DaffListComponent.prototype, "list", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "multiline", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Multiline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "link", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "navigation", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Navigation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "listType", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._getHostElement().localName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "nav", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Nav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "role", {
        /**
         * Sets the role for a `<daff-nav-list>` to navigation.
           * @docs-private
         */
        get: /**
         * Sets the role for a `<daff-nav-list>` to navigation.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @private
     * @return {?}
     */
    DaffListComponent.prototype._getHostElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
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
    DaffListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DaffListComponent.propDecorators = {
        mode: [{ type: Input }],
        list: [{ type: HostBinding, args: ['class.daff-list',] }],
        multiline: [{ type: HostBinding, args: ['class.daff-list--multi-line',] }],
        link: [{ type: HostBinding, args: ['class.daff-list--link',] }],
        navigation: [{ type: HostBinding, args: ['class.daff-list--navigation',] }],
        nav: [{ type: HostBinding, args: ['class.daff-nav-list',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffListComponent;
}());
export { DaffListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2xpc3QvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBUXBILFdBQVksWUFBWTtJQUN4QixNQUFPLE1BQU07SUFDYixZQUFhLFlBQVk7Ozs7O0lBTXpCLFNBQVUsV0FBVztJQUNyQixLQUFNLGVBQWU7O0FBR3ZCO0lBc0RFLDJCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQW5DOUMsc0JBQW9DLG1DQUFJO1FBSHpDOztXQUVHOzs7OztRQUNGO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFnRCx3Q0FBUztRQUp6RDs7O2FBR0s7Ozs7Ozs7UUFDTDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBMEMsbUNBQUk7UUFKOUM7OzthQUdLOzs7Ozs7O1FBQ0w7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBTUQsc0JBQWdELHlDQUFVO1FBSjFEOzs7YUFHSzs7Ozs7OztRQUNMO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLHVDQUFRO1FBSGI7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFPRixzQkFBd0Msa0NBQUc7UUFINUM7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBTUQsc0JBQThCLG1DQUFJO1FBSmxDOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUFBLENBQUM7Ozs7O0lBRU0sMkNBQWU7Ozs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUNOLFdBQVcsR0FBRyxHQUFHO3dCQUNqQixlQUFlO29CQUNqQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkE1Qm1GLFVBQVU7Ozt1QkFrQzNGLEtBQUs7dUJBS0wsV0FBVyxTQUFDLGlCQUFpQjs0QkFRN0IsV0FBVyxTQUFDLDZCQUE2Qjt1QkFRekMsV0FBVyxTQUFDLHVCQUF1Qjs2QkFRbkMsV0FBVyxTQUFDLDZCQUE2QjtzQkFnQnpDLFdBQVcsU0FBQyxxQkFBcUI7dUJBUWpDLFdBQVcsU0FBQyxXQUFXOztJQU8xQix3QkFBQztDQUFBLEFBMUVELElBMEVDO1NBaEVZLGlCQUFpQjs7Ozs7OztJQUk1QixpQ0FBNEI7Ozs7O0lBd0NoQix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIERhZmZMaXN0TW9kZSB3aWxsIGJlIGNvbXBsZXRlbHkgZGVwcmVjYXRlZCBpbiB2MS4wLjBcbiAqICovXG5leHBvcnQgdHlwZSBEYWZmTGlzdE1vZGUgPSAnbXVsdGktbGluZScgfCAnbGluaycgfCAnbmF2aWdhdGlvbicgfCB1bmRlZmluZWQ7XG5leHBvcnQgZW51bSBEYWZmTGlzdE1vZGVFbnVtIHtcbiAgTXVsdGlsaW5lID0gJ211bHRpLWxpbmUnLFxuICBMaW5rID0gJ2xpbmsnLFxuICBOYXZpZ2F0aW9uID0gJ25hdmlnYXRpb24nXG59XG5cbmV4cG9ydCB0eXBlIERhZmZMaXN0VHlwZSA9ICdkYWZmLWxpc3QnIHwgJ2RhZmYtbmF2LWxpc3QnO1xuXG5lbnVtIERhZmZMaXN0VHlwZUVudW0ge1xuICBEZWZhdWx0ID0gJ2RhZmYtbGlzdCcsXG4gIE5hdiA9ICdkYWZmLW5hdi1saXN0J1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XG4gICAgJ2RhZmYtbGlzdCcgKyAnLCcgK1xuICAgICdkYWZmLW5hdi1saXN0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIERhZmZMaXN0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqICovXG4gIEBJbnB1dCgpIG1vZGU6IERhZmZMaXN0TW9kZTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWxpc3QnKSBnZXQgbGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0VHlwZSA9PT0gRGFmZkxpc3RUeXBlRW51bS5EZWZhdWx0O1xuICB9XG5cbiAgLyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWxpc3QtLW11bHRpLWxpbmUnKSBnZXQgbXVsdGlsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IERhZmZMaXN0TW9kZUVudW0uTXVsdGlsaW5lO1xuICB9XG5cbiAgLyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWxpc3QtLWxpbmsnKSBnZXQgbGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBEYWZmTGlzdE1vZGVFbnVtLkxpbms7XG4gIH1cblxuICAvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbGlzdC0tbmF2aWdhdGlvbicpIGdldCBuYXZpZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IERhZmZMaXN0TW9kZUVudW0uTmF2aWdhdGlvbjtcbiAgfVxuXHRcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGdldCBsaXN0VHlwZSgpOiBEYWZmTGlzdFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmxvY2FsTmFtZTtcbiAgIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1uYXYtbGlzdCcpIGdldCBuYXYoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFR5cGUgPT09IERhZmZMaXN0VHlwZUVudW0uTmF2O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJvbGUgZm9yIGEgYDxkYWZmLW5hdi1saXN0PmAgdG8gbmF2aWdhdGlvbi5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0VHlwZSA9PT0gRGFmZkxpc3RUeXBlRW51bS5OYXYgPyAnbmF2aWdhdGlvbicgOiAnbGlzdCc7XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=