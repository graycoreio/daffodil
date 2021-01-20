/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function ControlAccessorPair() { }
if (false) {
    /** @type {?} */
    ControlAccessorPair.prototype.control;
    /** @type {?} */
    ControlAccessorPair.prototype.accessor;
}
var DaffRadioRegistry = /** @class */ (function () {
    function DaffRadioRegistry() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry.
     */
    /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.add = /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    function (control, accessor) {
        this._accessors.push({
            control: control,
            accessor: accessor
        });
    };
    /**
     * @description
     * Removes a control from the internal registry.
     */
    /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.remove = /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i]['accessor'] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @description
     * Selects a radio button.
     */
    /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.select = /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        var _this = this;
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            if (_this._isSameGroup(c, accessor) && c['accessor'] !== accessor) {
                c['accessor'].fireDeselect();
            }
        }));
    };
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype._isSameGroup = /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    function (controlPair, accessor) {
        if (!controlPair['control'].control) {
            return false;
        }
        return controlPair['control'].control.parent === accessor._control.control.parent
            && controlPair['accessor'].name === accessor.name;
    };
    DaffRadioRegistry.decorators = [
        { type: Injectable }
    ];
    return DaffRadioRegistry;
}());
export { DaffRadioRegistry };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffRadioRegistry.prototype._accessors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tcmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsiYXRvbXMvZm9ybS9yYWRpby9yZWdpc3RyeS9yYWRpby1yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyx5Q0FHQzs7O0lBRkMsc0NBQW1COztJQUNuQix1Q0FBaUQ7O0FBR25EO0lBQUE7UUFFVSxlQUFVLEdBQTBCLEVBQUUsQ0FBQztJQStDakQsQ0FBQztJQTdDQzs7O09BR0c7Ozs7Ozs7O0lBQ0gsK0JBQUc7Ozs7Ozs7SUFBSCxVQUFJLE9BQWtCLEVBQUUsUUFBZ0Q7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILGtDQUFNOzs7Ozs7SUFBTixVQUFPLFFBQWdEO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1I7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxrQ0FBTTs7Ozs7O0lBQU4sVUFBTyxRQUFnRDtRQUF2RCxpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLHdDQUFZOzs7Ozs7SUFBcEIsVUFDSSxXQUFnQyxFQUNoQyxRQUFnRDtRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2VBQzVFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOztnQkFoREYsVUFBVTs7SUFpRFgsd0JBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWhEWSxpQkFBaUI7Ozs7OztJQUM1Qix1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYWZmUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4uL2N2YS9yYWRpby1jdmEuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sQWNjZXNzb3JQYWlyIHtcbiAgY29udHJvbDogTmdDb250cm9sO1xuICBhY2Nlc3NvcjogRGFmZlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmUmFkaW9SZWdpc3RyeSB7XG4gIHByaXZhdGUgX2FjY2Vzc29yczogQ29udHJvbEFjY2Vzc29yUGFpcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBZGRzIGEgY29udHJvbCB0byB0aGUgaW50ZXJuYWwgcmVnaXN0cnkuXG4gICAqL1xuICBhZGQoY29udHJvbDogTmdDb250cm9sLCBhY2Nlc3NvcjogRGFmZlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcbiAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaCh7XG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYWNjZXNzb3I6IGFjY2Vzc29yXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZXMgYSBjb250cm9sIGZyb20gdGhlIGludGVybmFsIHJlZ2lzdHJ5LlxuICAgKi9cbiAgcmVtb3ZlKGFjY2Vzc29yOiBEYWZmUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnNbaV1bJ2FjY2Vzc29yJ10gPT09IGFjY2Vzc29yKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNlbGVjdHMgYSByYWRpbyBidXR0b24uXG4gICAqL1xuICBzZWxlY3QoYWNjZXNzb3I6IERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5fYWNjZXNzb3JzLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1NhbWVHcm91cChjLCBhY2Nlc3NvcikgJiYgY1snYWNjZXNzb3InXSAhPT0gYWNjZXNzb3IpIHtcbiAgICAgICAgY1snYWNjZXNzb3InXS5maXJlRGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzU2FtZUdyb3VwIChcbiAgICAgIGNvbnRyb2xQYWlyOiBDb250cm9sQWNjZXNzb3JQYWlyLFxuICAgICAgYWNjZXNzb3I6IERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb250cm9sUGFpclsnY29udHJvbCddLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xQYWlyWydjb250cm9sJ10uY29udHJvbC5wYXJlbnQgPT09IGFjY2Vzc29yLl9jb250cm9sLmNvbnRyb2wucGFyZW50XG4gICAgICAmJiBjb250cm9sUGFpclsnYWNjZXNzb3InXS5uYW1lID09PSBhY2Nlc3Nvci5uYW1lO1xuICB9XG59XG4iXX0=