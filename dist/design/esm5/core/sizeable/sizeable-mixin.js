/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
 * @template T
 * @param {?} Base
 * @param {?=} defaultSize
 * @return {?}
 */
export function daffSizeMixin(Base, defaultSize) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this.size = defaultSize;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "size", {
            get: /**
             * @return {?}
             */
            function () { return this._size; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Handles the default size
                /** @type {?} */
                var incomingSize = value || defaultSize;
                if (incomingSize !== this._size) { //Only run the dom-render if a change occurs
                    //Remove the old size
                    if (this._size) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "daff-" + this._size);
                    }
                    if (incomingSize) {
                        this._renderer.addClass(this._elementRef.nativeElement, "daff-" + incomingSize);
                    }
                    this._size = incomingSize;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(Base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZWFibGUtbWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsiY29yZS9zaXplYWJsZS9zaXplYWJsZS1taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLDRCQUdDOzs7SUFGQSxvQ0FBd0I7O0lBQ3hCLGtDQUFxQjs7Ozs7Ozs7QUFHdEIsTUFBTSxVQUNGLGFBQWEsQ0FBdUMsSUFBTyxFQUFFLFdBQTZCO0lBQzFGO1FBQXFCLG1DQUFJO1FBdUJyQjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsZ0RBQ2EsSUFBSSxXQUVoQjtZQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDOztRQUM1QixDQUFDO1FBdEJELHNCQUFJLHlCQUFJOzs7O1lBQVIsY0FBNEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzs7Ozs7WUFDL0MsVUFBUyxLQUFzQjs7O29CQUVyQixZQUFZLEdBQUcsS0FBSyxJQUFJLFdBQVc7Z0JBRXpDLElBQUcsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSw0Q0FBNEM7b0JBQ3pFLHFCQUFxQjtvQkFDckIsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO3dCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVEsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO3FCQUNwRjtvQkFFRCxJQUFHLFlBQVksRUFBQzt3QkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFRLFlBQWMsQ0FBQyxDQUFDO3FCQUNuRjtvQkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztpQkFDN0I7WUFDTCxDQUFDOzs7V0FqQjhDO1FBdUJuRCxjQUFDO0lBQUQsQ0FBQyxBQTNCTSxDQUFjLElBQUksR0EyQnhCO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZTaXplQWxsVHlwZSB9IGZyb20gJy4vc2l6ZWFibGUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi9jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEhhc0VsZW1lbnRSZWYge1xuXHRfZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblx0X3JlbmRlcmVyOiBSZW5kZXJlcjI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBcbiAgICBkYWZmU2l6ZU1peGluPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxIYXNFbGVtZW50UmVmPj4oQmFzZTogVCwgZGVmYXVsdFNpemU/OiBEYWZmU2l6ZUFsbFR5cGUpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICAgICAgLy9UT0RPIG1vdmUgdGhpcyBiYWNrIHRvIHByaXZhdGUgaW4gVHlwZXNjcmlwdCAzLjFcbiAgICAgICAgX3NpemU6IERhZmZTaXplQWxsVHlwZTtcblxuICAgICAgICBnZXQgc2l6ZSgpOiBEYWZmU2l6ZUFsbFR5cGV7cmV0dXJuIHRoaXMuX3NpemU7fVxuICAgICAgICBzZXQgc2l6ZSh2YWx1ZTogRGFmZlNpemVBbGxUeXBlKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGVzIHRoZSBkZWZhdWx0IHNpemVcbiAgICAgICAgICAgIGNvbnN0IGluY29taW5nU2l6ZSA9IHZhbHVlIHx8IGRlZmF1bHRTaXplO1xuXG4gICAgICAgICAgICBpZihpbmNvbWluZ1NpemUgIT09IHRoaXMuX3NpemUpeyAvL09ubHkgcnVuIHRoZSBkb20tcmVuZGVyIGlmIGEgY2hhbmdlIG9jY3Vyc1xuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSBvbGQgc2l6ZVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX3NpemUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBkYWZmLSR7dGhpcy5fc2l6ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpbmNvbWluZ1NpemUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBkYWZmLSR7aW5jb21pbmdTaXplfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSBpbmNvbWluZ1NpemU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBkZWZhdWx0U2l6ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=