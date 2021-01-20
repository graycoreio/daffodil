/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { DaffCheckboxSetComponent } from '@daffodil/design';
export class CheckboxSetComponent {
    constructor() {
        this.checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
        this.selectedValues = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkboxArray.setValue([false, false, false]);
    }
    /**
     * @return {?}
     */
    displayList() {
        this.selectedValues = this.checkboxSet.getValues();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vY2hlY2tib3gvZXhhbXBsZXMvIiwic291cmNlcyI6WyJjaGVja2JveC1zZXQvY2hlY2tib3gtc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBU0ksa0JBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLEVBQUUsSUFBSSxXQUFXLEVBQUUsRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQVF4QixDQUFDOzs7O0lBTkcsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3RELENBQUM7OztZQWpCSixTQUFTLFNBQUM7O2dCQUVQLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix3a0JBQTRDO2FBQy9DOzs7MEJBR0ksU0FBUyxTQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQUF0RCwyQ0FDOEM7O0lBQzlDLDZDQUF5Rjs7SUFDekYsOENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhZmZDaGVja2JveFNldENvbXBvbmVudCB9IGZyb20gJ0BkYWZmb2RpbC9kZXNpZ24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1zZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1zZXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94U2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoRGFmZkNoZWNrYm94U2V0Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIGNoZWNrYm94U2V0OiBEYWZmQ2hlY2tib3hTZXRDb21wb25lbnQ7XG4gICAgY2hlY2tib3hBcnJheSA9IG5ldyBGb3JtQXJyYXkoW25ldyBGb3JtQ29udHJvbCgpLCBuZXcgRm9ybUNvbnRyb2woKSwgbmV3IEZvcm1Db250cm9sKCldKTtcbiAgICBzZWxlY3RlZFZhbHVlcyA9IFtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3hBcnJheS5zZXRWYWx1ZShbZmFsc2UsIGZhbHNlLCBmYWxzZV0pO1xuICAgIH1cbiAgICBkaXNwbGF5TGlzdCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMuY2hlY2tib3hTZXQuZ2V0VmFsdWVzKClcbiAgICB9XG59Il19