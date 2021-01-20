/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { DaffCheckboxSetComponent } from '@daffodil/design';
var CheckboxSetComponent = /** @class */ (function () {
    function CheckboxSetComponent() {
        this.checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
        this.selectedValues = [];
    }
    /**
     * @return {?}
     */
    CheckboxSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.checkboxArray.setValue([false, false, false]);
    };
    /**
     * @return {?}
     */
    CheckboxSetComponent.prototype.displayList = /**
     * @return {?}
     */
    function () {
        this.selectedValues = this.checkboxSet.getValues();
    };
    CheckboxSetComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'checkbox-set',
                    template: "<daff-checkbox-set [formArray]=\"checkboxArray\">\n  <daff-checkbox [formControl]=\"checkboxArray.at(0)\" value=\"option1\">Option 1 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(1)\" value=\"option2\">Option 2 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(2)\" value=\"option3\">Option 3 </daff-checkbox>\n</daff-checkbox-set>\n\n<div>\n  {{checkboxArray.value}}\n</div>\n<button daff-button color=\"secondary\" (click)=\"displayList()\">Get List of Values</button>\n<div>\n  List of selected values: {{selectedValues}}\n</div>"
                }] }
    ];
    CheckboxSetComponent.propDecorators = {
        checkboxSet: [{ type: ViewChild, args: [DaffCheckboxSetComponent, { static: false },] }]
    };
    return CheckboxSetComponent;
}());
export { CheckboxSetComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckboxSetComponent.prototype.checkboxSet;
    /** @type {?} */
    CheckboxSetComponent.prototype.checkboxArray;
    /** @type {?} */
    CheckboxSetComponent.prototype.selectedValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vY2hlY2tib3gvZXhhbXBsZXMvIiwic291cmNlcyI6WyJjaGVja2JveC1zZXQvY2hlY2tib3gtc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU1RDtJQUFBO1FBU0ksa0JBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLEVBQUUsSUFBSSxXQUFXLEVBQUUsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQVF4QixDQUFDOzs7O0lBTkcsdUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELDBDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUN0RCxDQUFDOztnQkFqQkosU0FBUyxTQUFDOztvQkFFUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsd2tCQUE0QztpQkFDL0M7Ozs4QkFHSSxTQUFTLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQVcxRCwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksb0JBQW9COzs7Ozs7SUFFN0IsMkNBQzhDOztJQUM5Qyw2Q0FBeUY7O0lBQ3pGLDhDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYWZmQ2hlY2tib3hTZXRDb21wb25lbnQgfSBmcm9tICdAZGFmZm9kaWwvZGVzaWduJztcblxuQENvbXBvbmVudCh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtc2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtc2V0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKERhZmZDaGVja2JveFNldENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJpdmF0ZSBjaGVja2JveFNldDogRGFmZkNoZWNrYm94U2V0Q29tcG9uZW50O1xuICAgIGNoZWNrYm94QXJyYXkgPSBuZXcgRm9ybUFycmF5KFtuZXcgRm9ybUNvbnRyb2woKSwgbmV3IEZvcm1Db250cm9sKCksIG5ldyBGb3JtQ29udHJvbCgpXSk7XG4gICAgc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94QXJyYXkuc2V0VmFsdWUoW2ZhbHNlLCBmYWxzZSwgZmFsc2VdKTtcbiAgICB9XG4gICAgZGlzcGxheUxpc3QoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmNoZWNrYm94U2V0LmdldFZhbHVlcygpXG4gICAgfVxufSJdfQ==