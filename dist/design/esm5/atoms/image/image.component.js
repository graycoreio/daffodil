/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
var validateProperty = (/**
 * @param {?} object
 * @param {?} prop
 * @return {?}
 */
function (object, prop) {
    if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
        throw new Error("DaffImageComponent must have a defined " + prop + " attribute.");
    }
});
var ɵ0 = validateProperty;
/** @type {?} */
var validateProperties = (/**
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function (object, props) {
    /** @type {?} */
    var invalidProps = props.filter((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        try {
            validateProperty(object, prop);
        }
        catch (e) {
            return true;
        }
        return false;
    }));
    if (invalidProps.length) {
        throw new Error("DaffImageComponent must have the " + invalidProps.join(',') + " attributes defined.");
    }
});
var ɵ1 = validateProperties;
var DaffImageComponent = /** @class */ (function () {
    function DaffImageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.load = new EventEmitter();
    }
    Object.defineProperty(DaffImageComponent.prototype, "src", {
        get: /**
         * @return {?}
         */
        function () { return this._src; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._src = value;
            validateProperty(this, 'src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "alt", {
        get: /**
         * @return {?}
         */
        function () { return this._alt; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._alt = value;
            validateProperty(this, 'alt');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () { return this._width; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            validateProperty(this, 'width');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () { return this._height; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = value;
            validateProperty(this, 'height');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffImageComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        validateProperties(this, ['src', 'alt', 'width', 'height']);
    };
    Object.defineProperty(DaffImageComponent.prototype, "paddingTop", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            if (!this.height || !this.width) {
                return undefined;
            }
            return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "maxWidth", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.width + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DaffImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-image',
                    template: "<div class=\"daff-image__wrapper\" [style.paddingTop]=\"paddingTop\">\n\t<img [src]=\"src\" [alt]=\"alt\" (load)=\"load.emit\" />\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inline-block;width:100%}:host img{position:absolute;left:0;top:0;height:auto;max-width:100%}.daff-image__wrapper{position:relative;height:0}"]
                }] }
    ];
    /** @nocollapse */
    DaffImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    DaffImageComponent.propDecorators = {
        src: [{ type: Input }],
        alt: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        load: [{ type: Output }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return DaffImageComponent;
}());
export { DaffImageComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._src;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._alt;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._width;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._height;
    /** @type {?} */
    DaffImageComponent.prototype.load;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype.sanitizer;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUVuRCxnQkFBZ0I7Ozs7O0FBQUcsVUFBQyxNQUFjLEVBQUUsSUFBWTtJQUNwRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzlFLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTBDLElBQUksZ0JBQWEsQ0FBQyxDQUFBO0tBQzdFO0FBQ0gsQ0FBQyxDQUFBOzs7SUFFSyxrQkFBa0I7Ozs7O0FBQUcsVUFBQyxNQUFjLEVBQUUsS0FBZTs7UUFDbkQsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxJQUFJO1FBQ3BDLElBQUk7WUFDRixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQztJQUVGLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFvQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBc0IsQ0FBQyxDQUFBO0tBQ2xHO0FBQ0gsQ0FBQyxDQUFBOztBQUVEO0lBcURFLDRCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVGxDLFNBQUksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVNULENBQUM7SUEzQy9DLHNCQUNJLG1DQUFHOzs7O1FBRFAsY0FDb0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDdkMsVUFBUSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FKc0M7SUFRdkMsc0JBQ0ksbUNBQUc7Ozs7UUFEUCxjQUNvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztRQUN2QyxVQUFRLEtBQWE7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDaEIsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUpzQztJQVF2QyxzQkFDSSxxQ0FBSzs7OztRQURULGNBQ3NCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQzNDLFVBQVUsS0FBYTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNsQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BSjBDO0lBUTNDLHNCQUNJLHNDQUFNOzs7O1FBRFYsY0FDdUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDN0MsVUFBVyxLQUFhO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ25CLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FKNkM7SUFROUM7O09BRUc7Ozs7O0lBQ0YscUNBQVE7Ozs7SUFBUjtRQUNFLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQU9ELHNCQUFJLDBDQUFVO1FBSGY7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUc7Z0JBQ2hDLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzFHLENBQUM7OztPQUFBO0lBS0Qsc0JBQW9DLHdDQUFRO1FBSDdDOztXQUVHOzs7OztRQUNGO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscUpBQXFDO29CQUVyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQTdCUSxZQUFZOzs7c0JBa0NsQixLQUFLO3NCQVNMLEtBQUs7d0JBU0wsS0FBSzt5QkFTTCxLQUFLO3VCQU9OLE1BQU07MkJBeUJMLFdBQVcsU0FBQyxpQkFBaUI7O0lBR2hDLHlCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FsRVksa0JBQWtCOzs7Ozs7SUFFOUIsa0NBQXFCOzs7OztJQVNwQixrQ0FBcUI7Ozs7O0lBU3JCLG9DQUF1Qjs7Ozs7SUFTdkIscUNBQXdCOztJQVN6QixrQ0FBd0Q7Ozs7O0lBUzNDLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IHZhbGlkYXRlUHJvcGVydHkgPSAob2JqZWN0OiBPYmplY3QsIHByb3A6IHN0cmluZykgPT4ge1xuICBpZiAob2JqZWN0W3Byb3BdID09PSBudWxsIHx8IG9iamVjdFtwcm9wXSA9PT0gdW5kZWZpbmVkIHx8IG9iamVjdFtwcm9wXSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYERhZmZJbWFnZUNvbXBvbmVudCBtdXN0IGhhdmUgYSBkZWZpbmVkICR7cHJvcH0gYXR0cmlidXRlLmApXG4gIH0gXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJvcGVydGllcyA9IChvYmplY3Q6IE9iamVjdCwgcHJvcHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IGludmFsaWRQcm9wcyA9IHByb3BzLmZpbHRlcihwcm9wID0+IHtcbiAgICB0cnkge1xuICAgICAgdmFsaWRhdGVQcm9wZXJ0eShvYmplY3QsIHByb3ApO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KVxuXG4gIGlmIChpbnZhbGlkUHJvcHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEYWZmSW1hZ2VDb21wb25lbnQgbXVzdCBoYXZlIHRoZSAke2ludmFsaWRQcm9wcy5qb2luKCcsJyl9IGF0dHJpYnV0ZXMgZGVmaW5lZC5gKVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgX3NyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzcmMoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NyYzsgfVxuICBzZXQgc3JjKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9zcmMgPSB2YWx1ZTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5KHRoaXMsICdzcmMnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FsdDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhbHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FsdDsgfVxuICBzZXQgYWx0KHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9hbHQgPSB2YWx1ZTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5KHRoaXMsICdhbHQnKTtcbiAgfVxuXHRcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblx0XG4gIEBJbnB1dCgpXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkdGg7IH1cbiAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIHZhbGlkYXRlUHJvcGVydHkodGhpcywgJ3dpZHRoJyk7XG4gIH1cblx0XG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuXHRcbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faGVpZ2h0OyB9XG4gIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgIHZhbGlkYXRlUHJvcGVydHkodGhpcywgJ2hlaWdodCcpO1xuXHR9XG5cblx0QE91dHB1dCgpIGxvYWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzKHRoaXMsIFsnc3JjJywgJ2FsdCcsICd3aWR0aCcsICdoZWlnaHQnXSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGdldCBwYWRkaW5nVG9wKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLmhlaWdodCB8fCAhdGhpcy53aWR0aCApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ2NhbGMoJyArIHRoaXMuaGVpZ2h0ICsgJyAvICcgKyB0aGlzLndpZHRoICsgJyAqIDEwMCUpJyk7XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgnKSBnZXQgbWF4V2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCArICdweCc7XG4gIH1cbn1cbiJdfQ==