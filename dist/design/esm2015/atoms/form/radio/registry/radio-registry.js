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
export class DaffRadioRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    add(control, accessor) {
        this._accessors.push({
            control: control,
            accessor: accessor
        });
    }
    /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i]['accessor'] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    select(accessor) {
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (this._isSameGroup(c, accessor) && c['accessor'] !== accessor) {
                c['accessor'].fireDeselect();
            }
        }));
    }
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    _isSameGroup(controlPair, accessor) {
        if (!controlPair['control'].control) {
            return false;
        }
        return controlPair['control'].control.parent === accessor._control.control.parent
            && controlPair['accessor'].name === accessor.name;
    }
}
DaffRadioRegistry.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffRadioRegistry.prototype._accessors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tcmVnaXN0cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsiYXRvbXMvZm9ybS9yYWRpby9yZWdpc3RyeS9yYWRpby1yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyx5Q0FHQzs7O0lBRkMsc0NBQW1COztJQUNuQix1Q0FBaUQ7O0FBSW5ELE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFFVSxlQUFVLEdBQTBCLEVBQUUsQ0FBQztJQStDakQsQ0FBQzs7Ozs7Ozs7SUF6Q0MsR0FBRyxDQUFDLE9BQWtCLEVBQUUsUUFBZ0Q7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxRQUFnRDtRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNSO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBTUQsTUFBTSxDQUFDLFFBQWdEO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUNoRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQ2hCLFdBQWdDLEVBQ2hDLFFBQWdEO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ25DLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU07ZUFDNUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7OztZQWhERixVQUFVOzs7Ozs7O0lBRVQsdUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGFmZlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi9jdmEvcmFkaW8tY3ZhLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbEFjY2Vzc29yUGFpciB7XG4gIGNvbnRyb2w6IE5nQ29udHJvbDtcbiAgYWNjZXNzb3I6IERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZlJhZGlvUmVnaXN0cnkge1xuICBwcml2YXRlIF9hY2Nlc3NvcnM6IENvbnRyb2xBY2Nlc3NvclBhaXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWRkcyBhIGNvbnRyb2wgdG8gdGhlIGludGVybmFsIHJlZ2lzdHJ5LlxuICAgKi9cbiAgYWRkKGNvbnRyb2w6IE5nQ29udHJvbCwgYWNjZXNzb3I6IERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goe1xuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjY2Vzc29yOiBhY2Nlc3NvclxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmVzIGEgY29udHJvbCBmcm9tIHRoZSBpbnRlcm5hbCByZWdpc3RyeS5cbiAgICovXG4gIHJlbW92ZShhY2Nlc3NvcjogRGFmZlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBpZiAodGhpcy5fYWNjZXNzb3JzW2ldWydhY2Nlc3NvciddID09PSBhY2Nlc3Nvcikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZWxlY3RzIGEgcmFkaW8gYnV0dG9uLlxuICAgKi9cbiAgc2VsZWN0KGFjY2Vzc29yOiBEYWZmUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xuICAgIHRoaXMuX2FjY2Vzc29ycy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTYW1lR3JvdXAoYywgYWNjZXNzb3IpICYmIGNbJ2FjY2Vzc29yJ10gIT09IGFjY2Vzc29yKSB7XG4gICAgICAgIGNbJ2FjY2Vzc29yJ10uZmlyZURlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1NhbWVHcm91cCAoXG4gICAgICBjb250cm9sUGFpcjogQ29udHJvbEFjY2Vzc29yUGFpcixcbiAgICAgIGFjY2Vzc29yOiBEYWZmUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIGlmICghY29udHJvbFBhaXJbJ2NvbnRyb2wnXS5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sUGFpclsnY29udHJvbCddLmNvbnRyb2wucGFyZW50ID09PSBhY2Nlc3Nvci5fY29udHJvbC5jb250cm9sLnBhcmVudFxuICAgICAgJiYgY29udHJvbFBhaXJbJ2FjY2Vzc29yJ10ubmFtZSA9PT0gYWNjZXNzb3IubmFtZTtcbiAgfVxufVxuIl19