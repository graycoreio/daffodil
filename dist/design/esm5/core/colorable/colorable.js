/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DaffPaletteEnum = {
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
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this.color = defaultColor;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () { return this._color; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                //Handle the default color
                /** @type {?} */
                var incomingColor = value || defaultColor;
                if (incomingColor !== undefined && !colorInPalette(incomingColor)) {
                    throw new TypeError(incomingColor + ' is not a valid color for the DaffPalette');
                }
                if (incomingColor !== this._color) { //Only run the dom-render if a change occurs
                    //Remove the old color
                    if (this._color) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "daff-" + this._color);
                    }
                    if (incomingColor) {
                        this._renderer.addClass(this._elementRef.nativeElement, "daff-" + incomingColor);
                    }
                    this._color = incomingColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(Base));
}
/**
 * @param {?} color
 * @return {?}
 */
export function colorInPalette(color) {
    return ((/** @type {?} */ (Object))).values(DaffPaletteEnum).includes(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImNvcmUvY29sb3JhYmxlL2NvbG9yYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxtQ0FFQzs7O0lBREcsOEJBQW1COzs7O0lBWW5CLFNBQVUsU0FBUztJQUNuQixXQUFZLFdBQVc7SUFDdkIsUUFBUyxRQUFRO0lBQ2pCLFVBQVcsVUFBVTtJQUNyQixPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixlQUFnQixnQkFBZ0I7Ozs7O0FBRXBDLDRCQUdDOzs7SUFGRyxvQ0FBd0I7O0lBQ3hCLGtDQUFxQjs7Ozs7Ozs7Ozs7OztBQVV6QixNQUFNLFVBQ0YsY0FBYyxDQUF1QyxJQUFPLEVBQUUsWUFBMEI7SUFDeEY7UUFBcUIsbUNBQUk7UUEyQnJCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUExQixnREFDYSxJQUFJLFdBRWhCO1lBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7O1FBQzlCLENBQUM7UUExQkQsc0JBQUksMEJBQUs7Ozs7WUFBVCxjQUF5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDOzs7OztZQUM3QyxVQUFVLEtBQWtCOzs7b0JBRWxCLGFBQWEsR0FBRyxLQUFLLElBQUksWUFBWTtnQkFFM0MsSUFBRyxhQUFhLEtBQUssU0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFDO29CQUM3RCxNQUFNLElBQUksU0FBUyxDQUFDLGFBQWEsR0FBRywyQ0FBMkMsQ0FBQyxDQUFDO2lCQUNwRjtnQkFFRCxJQUFHLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUUsNENBQTRDO29CQUMzRSxzQkFBc0I7b0JBQ3RCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQzt3QkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFRLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztxQkFDckY7b0JBRUQsSUFBRyxhQUFhLEVBQUM7d0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBUSxhQUFlLENBQUMsQ0FBQztxQkFDcEY7b0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7aUJBQy9CO1lBQ0wsQ0FBQzs7O1dBckI0QztRQTJCakQsY0FBQztJQUFELENBQUMsQUEvQk0sQ0FBYyxJQUFJLEdBK0J4QjtBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhO0lBQ3hDLE9BQU8sQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDaEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5cbi8qKlxuICogSW4gb3JkZXIgdG8gYmUgY29sb3JhYmxlLCBvdXIgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhpcyBwcm9wZXJ0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb2xvcmFibGUge1xuICAgIGNvbG9yOiBEYWZmUGFsZXR0ZTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIHZhbGlkIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgRGFmZkNvbG9yYWJsZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IHR5cGUgRGFmZlBhbGV0dGUgPSBcbiAgICAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdhY2NlbnQnIHwgJ3RlcnRpYXJ5JyB8IC8vVE9ETzogZGFtaWVud2ViZGV2IERlcHJlY2F0ZSBhY2NlbnRcbiAgICAnYmxhY2snIHwgJ3doaXRlJyB8IFxuICAgICd0aGVtZScgfCAndGhlbWUtY29udHJhc3QnIHwgdW5kZWZpbmVkO1xuXG5lbnVtIERhZmZQYWxldHRlRW51bSB7XG4gICAgUFJJTUFSWSA9ICdwcmltYXJ5JyxcbiAgICBTRUNPTkRBUlkgPSAnc2Vjb25kYXJ5JyxcbiAgICBBQ0NFTlQgPSAnYWNjZW50JywgLy9UT0RPOiBkYW1pZW53ZWJkZXYgRGVwcmVjYXRlIGFjY2VudFxuICAgIFRFUlRJQVJZID0gJ3RlcnRpYXJ5JyxcbiAgICBCTEFDSyA9ICdibGFjaycsXG4gICAgV0hJVEUgPSAnd2hpdGUnLFxuICAgIFRIRU1FID0gJ3RoZW1lJyxcbiAgICBUSEVNRUNPTlRSQVNUID0gJ3RoZW1lLWNvbnRyYXN0J1xufVxuaW50ZXJmYWNlIEhhc0VsZW1lbnRSZWYge1xuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xufVxuXG4vKipcbiAqIFRoaXMgc2hvdWxkIGJlIGEgdHJhaXQsIGJ1dCB0eXBlc2NyaXB0IG9ubHkgc3VwcG9ydHMgbWl4aW5zLlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMxMVxuICogXG4gKiBUdXJucyBvdXQgdGhlIG1hdGVyaWFsIHRlYW0gZm9sbG93ZWQgdGhlIHNhbWUgcGF0aCB3aXRoIHRoZSBjb2xvciBtaXhpbi5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL2NvcmUvY29tbW9uLWJlaGF2aW9ycy9jb2xvci50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gXG4gICAgZGFmZkNvbG9yTWl4aW48VCBleHRlbmRzIENvbnN0cnVjdG9yPEhhc0VsZW1lbnRSZWY+PihCYXNlOiBULCBkZWZhdWx0Q29sb3I/OiBEYWZmUGFsZXR0ZSkge1xuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgICAgICAvL1RPRE8gbW92ZSB0aGlzIGJhY2sgdG8gcHJpdmF0ZSBpbiBUeXBlc2NyaXB0IDMuMVxuICAgICAgICBfY29sb3I6IERhZmZQYWxldHRlO1xuXG4gICAgICAgIGdldCBjb2xvcigpOiBEYWZmUGFsZXR0ZXtyZXR1cm4gdGhpcy5fY29sb3I7fVxuICAgICAgICBzZXQgY29sb3IodmFsdWU6IERhZmZQYWxldHRlKSB7XG4gICAgICAgICAgICAvL0hhbmRsZSB0aGUgZGVmYXVsdCBjb2xvclxuICAgICAgICAgICAgY29uc3QgaW5jb21pbmdDb2xvciA9IHZhbHVlIHx8IGRlZmF1bHRDb2xvcjtcblxuICAgICAgICAgICAgaWYoaW5jb21pbmdDb2xvciAhPT0gdW5kZWZpbmVkICYmICFjb2xvckluUGFsZXR0ZShpbmNvbWluZ0NvbG9yKSl7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpbmNvbWluZ0NvbG9yICsgJyBpcyBub3QgYSB2YWxpZCBjb2xvciBmb3IgdGhlIERhZmZQYWxldHRlJyk7ICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGluY29taW5nQ29sb3IgIT09IHRoaXMuX2NvbG9yKXsgLy9Pbmx5IHJ1biB0aGUgZG9tLXJlbmRlciBpZiBhIGNoYW5nZSBvY2N1cnNcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSB0aGUgb2xkIGNvbG9yXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29sb3Ipe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBkYWZmLSR7dGhpcy5fY29sb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoaW5jb21pbmdDb2xvcil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYGRhZmYtJHtpbmNvbWluZ0NvbG9yfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gaW5jb21pbmdDb2xvcjtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBkZWZhdWx0Q29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvckluUGFsZXR0ZShjb2xvcjogc3RyaW5nKSA6IGJvb2xlYW57XG4gICAgcmV0dXJuICg8YW55Pk9iamVjdCkudmFsdWVzKERhZmZQYWxldHRlRW51bSkuaW5jbHVkZXMoY29sb3IpXG59Il19