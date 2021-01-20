/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export class BasicRadioComponent {
    constructor() {
        this.radioGroup = new FormGroup({
            race: new FormControl('Zerg')
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BasicRadioComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'basic-radio',
                template: "<h2>Basic Radio</h2>\n<daff-radio-set [formGroup]=\"radioGroup\" name=\"race\">\n  <daff-radio formControlName=\"race\" value=\"Terran\">Terran</daff-radio>\n  <daff-radio formControlName=\"race\" value=\"Protoss\">Protoss</daff-radio>\n  <daff-radio formControlName=\"race\" value=\"Zerg\">Zerg</daff-radio>\n</daff-radio-set>\n<div>\n  The best race to play as is: {{this.radioGroup.get('race').value}}\n</div>"
            }] }
];
/** @nocollapse */
BasicRadioComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    BasicRadioComponent.prototype.radioGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi9yYWRpby9leGFtcGxlcy8iLCJzb3VyY2VzIjpbImJhc2ljLXJhZGlvL2Jhc2ljLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3hELE1BQU0sT0FBTyxtQkFBbUI7SUFLNUI7UUFIQSxlQUFVLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDdkIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNoQyxDQUFDLENBQUM7SUFFSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWRKLFNBQVMsU0FBQzs7Z0JBRVAsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHdhQUEyQzthQUM5Qzs7Ozs7O0lBR0cseUNBRUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnYmFzaWMtcmFkaW8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNpYy1yYWRpby5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzaWNSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByYWRpb0dyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIHJhY2U6IG5ldyBGb3JtQ29udHJvbCgnWmVyZycpXG4gICAgfSk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufSJdfQ==