/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * In order to be colorable, our class must implement this property
 * @record
 */
export function DaffColorable() { }
if (false) {
    /** @type {?} */
    DaffColorable.prototype.color;
}
/** @enum {string} */
const DaffPaletteEnum = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    ACCENT: 'accent',
    TERTIARY: 'tertiary',
    BLACK: 'black',
    WHITE: 'white',
    THEME: 'theme',
    THEMECONTRAST: 'theme-contrast',
};
/**
 * @record
 */
function HasElementRef() { }
if (false) {
    /** @type {?} */
    HasElementRef.prototype._elementRef;
    /** @type {?} */
    HasElementRef.prototype._renderer;
}
/**
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 *
 * Turns out the material team followed the same path with the color mixin.
 * https://github.com/angular/material2/blob/master/src/lib/core/common-behaviors/color.ts
 * @template T
 * @param {?} Base
 * @param {?=} defaultColor
 * @return {?}
 */
export function daffColorMixin(Base, defaultColor) {
    return class extends Base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            //Handle the default color
            /** @type {?} */
            const incomingColor = value || defaultColor;
            if (incomingColor !== undefined && !colorInPalette(incomingColor)) {
                throw new TypeError(incomingColor + ' is not a valid color for the DaffPalette');
            }
            if (incomingColor !== this._color) { //Only run the dom-render if a change occurs
                //Remove the old color
                if (this._color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._color}`);
                }
                if (incomingColor) {
                    this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingColor}`);
                }
                this._color = incomingColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this.color = defaultColor;
        }
    };
}
/**
 * @param {?} color
 * @return {?}
 */
export function colorInPalette(color) {
    return ((/** @type {?} */ (Object))).values(DaffPaletteEnum).includes(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImNvcmUvY29sb3JhYmxlL2NvbG9yYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLG1DQUVDOzs7SUFERyw4QkFBbUI7Ozs7SUFZbkIsU0FBVSxTQUFTO0lBQ25CLFdBQVksV0FBVztJQUN2QixRQUFTLFFBQVE7SUFDakIsVUFBVyxVQUFVO0lBQ3JCLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTztJQUNmLGVBQWdCLGdCQUFnQjs7Ozs7QUFFcEMsNEJBR0M7OztJQUZHLG9DQUF3Qjs7SUFDeEIsa0NBQXFCOzs7Ozs7Ozs7Ozs7O0FBVXpCLE1BQU0sVUFDRixjQUFjLENBQXVDLElBQU8sRUFBRSxZQUEwQjtJQUN4RixPQUFPLEtBQU0sU0FBUSxJQUFJOzs7O1FBSXJCLElBQUksS0FBSyxLQUFnQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDOzs7OztRQUM3QyxJQUFJLEtBQUssQ0FBQyxLQUFrQjs7O2tCQUVsQixhQUFhLEdBQUcsS0FBSyxJQUFJLFlBQVk7WUFFM0MsSUFBRyxhQUFhLEtBQUssU0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFDO2dCQUM3RCxNQUFNLElBQUksU0FBUyxDQUFDLGFBQWEsR0FBRywyQ0FBMkMsQ0FBQyxDQUFDO2FBQ3BGO1lBRUQsSUFBRyxhQUFhLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUFFLDRDQUE0QztnQkFDM0Usc0JBQXNCO2dCQUN0QixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDckY7Z0JBRUQsSUFBRyxhQUFhLEVBQUM7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxhQUFhLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRjtnQkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQzthQUMvQjtRQUNMLENBQUM7Ozs7UUFFRCxZQUFZLEdBQUcsSUFBVztZQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzlCLENBQUM7S0FDSixDQUFBO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQWE7SUFDeEMsT0FBTyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yJztcblxuLyoqXG4gKiBJbiBvcmRlciB0byBiZSBjb2xvcmFibGUsIG91ciBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGlzIHByb3BlcnR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbG9yYWJsZSB7XG4gICAgY29sb3I6IERhZmZQYWxldHRlO1xufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgdmFsaWQgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBEYWZmQ29sb3JhYmxlIGNvbXBvbmVudFxuICovXG5leHBvcnQgdHlwZSBEYWZmUGFsZXR0ZSA9IFxuICAgICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2FjY2VudCcgfCAndGVydGlhcnknIHwgLy9UT0RPOiBkYW1pZW53ZWJkZXYgRGVwcmVjYXRlIGFjY2VudFxuICAgICdibGFjaycgfCAnd2hpdGUnIHwgXG4gICAgJ3RoZW1lJyB8ICd0aGVtZS1jb250cmFzdCcgfCB1bmRlZmluZWQ7XG5cbmVudW0gRGFmZlBhbGV0dGVFbnVtIHtcbiAgICBQUklNQVJZID0gJ3ByaW1hcnknLFxuICAgIFNFQ09OREFSWSA9ICdzZWNvbmRhcnknLFxuICAgIEFDQ0VOVCA9ICdhY2NlbnQnLCAvL1RPRE86IGRhbWllbndlYmRldiBEZXByZWNhdGUgYWNjZW50XG4gICAgVEVSVElBUlkgPSAndGVydGlhcnknLFxuICAgIEJMQUNLID0gJ2JsYWNrJyxcbiAgICBXSElURSA9ICd3aGl0ZScsXG4gICAgVEhFTUUgPSAndGhlbWUnLFxuICAgIFRIRU1FQ09OVFJBU1QgPSAndGhlbWUtY29udHJhc3QnXG59XG5pbnRlcmZhY2UgSGFzRWxlbWVudFJlZiB7XG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjI7XG59XG5cbi8qKlxuICogVGhpcyBzaG91bGQgYmUgYSB0cmFpdCwgYnV0IHR5cGVzY3JpcHQgb25seSBzdXBwb3J0cyBtaXhpbnMuXG4gKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzExXG4gKiBcbiAqIFR1cm5zIG91dCB0aGUgbWF0ZXJpYWwgdGVhbSBmb2xsb3dlZCB0aGUgc2FtZSBwYXRoIHdpdGggdGhlIGNvbG9yIG1peGluLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvY29yZS9jb21tb24tYmVoYXZpb3JzL2NvbG9yLnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBcbiAgICBkYWZmQ29sb3JNaXhpbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SGFzRWxlbWVudFJlZj4+KEJhc2U6IFQsIGRlZmF1bHRDb2xvcj86IERhZmZQYWxldHRlKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIC8vVE9ETyBtb3ZlIHRoaXMgYmFjayB0byBwcml2YXRlIGluIFR5cGVzY3JpcHQgMy4xXG4gICAgICAgIF9jb2xvcjogRGFmZlBhbGV0dGU7XG5cbiAgICAgICAgZ2V0IGNvbG9yKCk6IERhZmZQYWxldHRle3JldHVybiB0aGlzLl9jb2xvcjt9XG4gICAgICAgIHNldCBjb2xvcih2YWx1ZTogRGFmZlBhbGV0dGUpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIHRoZSBkZWZhdWx0IGNvbG9yXG4gICAgICAgICAgICBjb25zdCBpbmNvbWluZ0NvbG9yID0gdmFsdWUgfHwgZGVmYXVsdENvbG9yO1xuXG4gICAgICAgICAgICBpZihpbmNvbWluZ0NvbG9yICE9PSB1bmRlZmluZWQgJiYgIWNvbG9ySW5QYWxldHRlKGluY29taW5nQ29sb3IpKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGluY29taW5nQ29sb3IgKyAnIGlzIG5vdCBhIHZhbGlkIGNvbG9yIGZvciB0aGUgRGFmZlBhbGV0dGUnKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaW5jb21pbmdDb2xvciAhPT0gdGhpcy5fY29sb3IpeyAvL09ubHkgcnVuIHRoZSBkb20tcmVuZGVyIGlmIGEgY2hhbmdlIG9jY3Vyc1xuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSBvbGQgY29sb3JcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jb2xvcil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYGRhZmYtJHt0aGlzLl9jb2xvcn1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpbmNvbWluZ0NvbG9yKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZGFmZi0ke2luY29taW5nQ29sb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IgPSBpbmNvbWluZ0NvbG9yO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRlZmF1bHRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9ySW5QYWxldHRlKGNvbG9yOiBzdHJpbmcpIDogYm9vbGVhbntcbiAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS52YWx1ZXMoRGFmZlBhbGV0dGVFbnVtKS5pbmNsdWRlcyhjb2xvcilcbn0iXX0=