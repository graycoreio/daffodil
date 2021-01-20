/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    return class extends Base {
        /**
         * @return {?}
         */
        get size() { return this._size; }
        /**
         * @param {?} value
         * @return {?}
         */
        set size(value) {
            // Handles the default size
            /** @type {?} */
            const incomingSize = value || defaultSize;
            if (incomingSize !== this._size) { //Only run the dom-render if a change occurs
                //Remove the old size
                if (this._size) {
                    this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._size}`);
                }
                if (incomingSize) {
                    this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingSize}`);
                }
                this._size = incomingSize;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this.size = defaultSize;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZWFibGUtbWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsiY29yZS9zaXplYWJsZS9zaXplYWJsZS1taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsNEJBR0M7OztJQUZBLG9DQUF3Qjs7SUFDeEIsa0NBQXFCOzs7Ozs7OztBQUd0QixNQUFNLFVBQ0YsYUFBYSxDQUF1QyxJQUFPLEVBQUUsV0FBNkI7SUFDMUYsT0FBTyxLQUFNLFNBQVEsSUFBSTs7OztRQUlyQixJQUFJLElBQUksS0FBb0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzs7Ozs7UUFDL0MsSUFBSSxJQUFJLENBQUMsS0FBc0I7OztrQkFFckIsWUFBWSxHQUFHLEtBQUssSUFBSSxXQUFXO1lBRXpDLElBQUcsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSw0Q0FBNEM7Z0JBQ3pFLHFCQUFxQjtnQkFDckIsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO29CQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3BGO2dCQUVELElBQUcsWUFBWSxFQUFDO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFFBQVEsWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDbkY7Z0JBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7YUFDN0I7UUFDTCxDQUFDOzs7O1FBRUQsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUM1QixDQUFDO0tBQ0osQ0FBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmU2l6ZUFsbFR5cGUgfSBmcm9tICcuL3NpemVhYmxlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBIYXNFbGVtZW50UmVmIHtcblx0X2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cdF9yZW5kZXJlcjogUmVuZGVyZXIyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gXG4gICAgZGFmZlNpemVNaXhpbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8SGFzRWxlbWVudFJlZj4+KEJhc2U6IFQsIGRlZmF1bHRTaXplPzogRGFmZlNpemVBbGxUeXBlKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIC8vVE9ETyBtb3ZlIHRoaXMgYmFjayB0byBwcml2YXRlIGluIFR5cGVzY3JpcHQgMy4xXG4gICAgICAgIF9zaXplOiBEYWZmU2l6ZUFsbFR5cGU7XG5cbiAgICAgICAgZ2V0IHNpemUoKTogRGFmZlNpemVBbGxUeXBle3JldHVybiB0aGlzLl9zaXplO31cbiAgICAgICAgc2V0IHNpemUodmFsdWU6IERhZmZTaXplQWxsVHlwZSkge1xuICAgICAgICAgICAgLy8gSGFuZGxlcyB0aGUgZGVmYXVsdCBzaXplXG4gICAgICAgICAgICBjb25zdCBpbmNvbWluZ1NpemUgPSB2YWx1ZSB8fCBkZWZhdWx0U2l6ZTtcblxuICAgICAgICAgICAgaWYoaW5jb21pbmdTaXplICE9PSB0aGlzLl9zaXplKXsgLy9Pbmx5IHJ1biB0aGUgZG9tLXJlbmRlciBpZiBhIGNoYW5nZSBvY2N1cnNcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSB0aGUgb2xkIHNpemVcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9zaXplKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZGFmZi0ke3RoaXMuX3NpemV9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoaW5jb21pbmdTaXplKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZGFmZi0ke2luY29taW5nU2l6ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gaW5jb21pbmdTaXplO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gZGVmYXVsdFNpemU7XG4gICAgICAgIH1cbiAgICB9XG59Il19