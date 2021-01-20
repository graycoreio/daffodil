/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
export class BasicCheckboxComponent {
    constructor() {
        this.checkboxExample = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkboxExample.setValue(true);
    }
    /**
     * @return {?}
     */
    setFalse() {
        this.checkboxExample.setValue(false);
    }
    /**
     * @return {?}
     */
    setTrue() {
        this.checkboxExample.setValue(true);
    }
}
BasicCheckboxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'basic-checkbox',
                template: "<daff-checkbox [formControl]=\"checkboxExample\" value=\"checkboxExample\">Checkbox</daff-checkbox>\n<div>\n  {{checkboxExample.value}}\n</div>\n<button daff-button color=\"primary\" (click)=\"setFalse()\">Set to false</button>\n<button daff-button (click)=\"setTrue()\">Set to true</button>"
            }] }
];
if (false) {
    /** @type {?} */
    BasicCheckboxComponent.prototype.checkboxExample;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi9jaGVja2JveC9leGFtcGxlcy8iLCJzb3VyY2VzIjpbImJhc2ljLWNoZWNrYm94L2Jhc2ljLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1JLG9CQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQVd4QyxDQUFDOzs7O0lBVEcsUUFBUTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELE9BQU87UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFoQkosU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwrU0FBOEM7YUFDakQ7Ozs7SUFFRyxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2Jhc2ljLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzaWMtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2ljQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNoZWNrYm94RXhhbXBsZSA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3hFeGFtcGxlLnNldFZhbHVlKHRydWUpO1xuICAgIH1cbiAgICBzZXRGYWxzZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja2JveEV4YW1wbGUuc2V0VmFsdWUoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRUcnVlKCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94RXhhbXBsZS5zZXRWYWx1ZSh0cnVlKTtcbiAgICB9XG59Il19