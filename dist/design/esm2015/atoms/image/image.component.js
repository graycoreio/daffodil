/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
const validateProperty = (/**
 * @param {?} object
 * @param {?} prop
 * @return {?}
 */
(object, prop) => {
    if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
        throw new Error(`DaffImageComponent must have a defined ${prop} attribute.`);
    }
});
const ɵ0 = validateProperty;
/** @type {?} */
const validateProperties = (/**
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
(object, props) => {
    /** @type {?} */
    const invalidProps = props.filter((/**
     * @param {?} prop
     * @return {?}
     */
    prop => {
        try {
            validateProperty(object, prop);
        }
        catch (e) {
            return true;
        }
        return false;
    }));
    if (invalidProps.length) {
        throw new Error(`DaffImageComponent must have the ${invalidProps.join(',')} attributes defined.`);
    }
});
const ɵ1 = validateProperties;
export class DaffImageComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.load = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get src() { return this._src; }
    /**
     * @param {?} value
     * @return {?}
     */
    set src(value) {
        this._src = value;
        validateProperty(this, 'src');
    }
    /**
     * @return {?}
     */
    get alt() { return this._alt; }
    /**
     * @param {?} value
     * @return {?}
     */
    set alt(value) {
        this._alt = value;
        validateProperty(this, 'alt');
    }
    /**
     * @return {?}
     */
    get width() { return this._width; }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        validateProperty(this, 'width');
    }
    /**
     * @return {?}
     */
    get height() { return this._height; }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = value;
        validateProperty(this, 'height');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        validateProperties(this, ['src', 'alt', 'width', 'height']);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get paddingTop() {
        if (!this.height || !this.width) {
            return undefined;
        }
        return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get maxWidth() {
        return this.width + 'px';
    }
}
DaffImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-image',
                template: "<div class=\"daff-image__wrapper\" [style.paddingTop]=\"paddingTop\">\n\t<img [src]=\"src\" [alt]=\"alt\" (load)=\"load.emit\" />\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-block;width:100%}:host img{position:absolute;left:0;top:0;height:auto;max-width:100%}.daff-image__wrapper{position:relative;height:0}"]
            }] }
];
/** @nocollapse */
DaffImageComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
DaffImageComponent.propDecorators = {
    src: [{ type: Input }],
    alt: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    load: [{ type: Output }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUVuRCxnQkFBZ0I7Ozs7O0FBQUcsQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDeEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM5RSxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxJQUFJLGFBQWEsQ0FBQyxDQUFBO0tBQzdFO0FBQ0gsQ0FBQyxDQUFBOzs7TUFFSyxrQkFBa0I7Ozs7O0FBQUcsQ0FBQyxNQUFjLEVBQUUsS0FBZSxFQUFFLEVBQUU7O1VBQ3ZELFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTTs7OztJQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLElBQUk7WUFDRixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQztJQUVGLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0tBQ2xHO0FBQ0gsQ0FBQyxDQUFBOztBQVFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUErQzdCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFUbEMsU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBU1QsQ0FBQzs7OztJQTNDL0MsSUFDSSxHQUFHLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDdkMsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQ0ksR0FBRyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZDLElBQUksR0FBRyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUNJLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7OztJQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFDSSxNQUFNLEtBQWEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDN0MsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFPQSxRQUFRO1FBQ04sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUM3RCxDQUFDOzs7OztJQU9ELElBQUksVUFBVTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRztZQUNoQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7OztJQUtELElBQW9DLFFBQVE7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixxSkFBcUM7Z0JBRXJDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQTdCUSxZQUFZOzs7a0JBa0NsQixLQUFLO2tCQVNMLEtBQUs7b0JBU0wsS0FBSztxQkFTTCxLQUFLO21CQU9OLE1BQU07dUJBeUJMLFdBQVcsU0FBQyxpQkFBaUI7Ozs7Ozs7SUE3RC9CLGtDQUFxQjs7Ozs7SUFTcEIsa0NBQXFCOzs7OztJQVNyQixvQ0FBdUI7Ozs7O0lBU3ZCLHFDQUF3Qjs7SUFTekIsa0NBQXdEOzs7OztJQVMzQyx1Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5ID0gKG9iamVjdDogT2JqZWN0LCBwcm9wOiBzdHJpbmcpID0+IHtcbiAgaWYgKG9iamVjdFtwcm9wXSA9PT0gbnVsbCB8fCBvYmplY3RbcHJvcF0gPT09IHVuZGVmaW5lZCB8fCBvYmplY3RbcHJvcF0gPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEYWZmSW1hZ2VDb21wb25lbnQgbXVzdCBoYXZlIGEgZGVmaW5lZCAke3Byb3B9IGF0dHJpYnV0ZS5gKVxuICB9IFxufVxuXG5jb25zdCB2YWxpZGF0ZVByb3BlcnRpZXMgPSAob2JqZWN0OiBPYmplY3QsIHByb3BzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBpbnZhbGlkUHJvcHMgPSBwcm9wcy5maWx0ZXIocHJvcCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlUHJvcGVydHkob2JqZWN0LCBwcm9wKTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSlcblxuICBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRGFmZkltYWdlQ29tcG9uZW50IG11c3QgaGF2ZSB0aGUgJHtpbnZhbGlkUHJvcHMuam9pbignLCcpfSBhdHRyaWJ1dGVzIGRlZmluZWQuYClcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwcml2YXRlIF9zcmM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgc3JjKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zcmM7IH1cbiAgc2V0IHNyYyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fc3JjID0gdmFsdWU7XG4gICAgdmFsaWRhdGVQcm9wZXJ0eSh0aGlzLCAnc3JjJyk7XG4gIH1cblxuICBwcml2YXRlIF9hbHQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgYWx0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9hbHQ7IH1cbiAgc2V0IGFsdCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fYWx0ID0gdmFsdWU7XG4gICAgdmFsaWRhdGVQcm9wZXJ0eSh0aGlzLCAnYWx0Jyk7XG4gIH1cblx0XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cdFxuICBASW5wdXQoKVxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3dpZHRoOyB9XG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5KHRoaXMsICd3aWR0aCcpO1xuICB9XG5cdFxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcblx0XG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2hlaWdodDsgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5KHRoaXMsICdoZWlnaHQnKTtcblx0fVxuXG5cdEBPdXRwdXQoKSBsb2FkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyh0aGlzLCBbJ3NyYycsICdhbHQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBnZXQgcGFkZGluZ1RvcCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5oZWlnaHQgfHwgIXRoaXMud2lkdGggKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdjYWxjKCcgKyB0aGlzLmhlaWdodCArICcgLyAnICsgdGhpcy53aWR0aCArICcgKiAxMDAlKScpO1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4LXdpZHRoJykgZ2V0IG1heFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKyAncHgnO1xuICB9XG59XG4iXX0=