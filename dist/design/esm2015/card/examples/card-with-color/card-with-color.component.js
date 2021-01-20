/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
export class CardWithColorComponent {
    constructor() {
        this.color = 'primary';
        this.colorControl = new FormControl('primary');
    }
}
CardWithColorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'card-with-color',
                template: "<daff-card [color]=\"colorControl.value\">\n  <img daffCardImage src=\"/assets/card/uber-logo-dark.svg\" />\n  <h4 daffCardTitle>Title</h4>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  Some other content\n</daff-card>\n\n<select [formControl]=\"colorControl\">\n    <option value=\"primary\">Primary</option>\n    <option value=\"secondary\">Secondary</option>\n    <option value=\"tertiary\">Tertiary</option>\n    <option value=\"white\">White</option>\n    <option value=\"black\">Black</option>\n    <option value=\"theme\">Theme</option>\n    <option value=\"theme-contrast\">Theme Contrast</option>\n</select>",
                styles: [`
    daff-card {
      max-width: 400px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    CardWithColorComponent.prototype.color;
    /** @type {?} */
    CardWithColorComponent.prototype.colorControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC13aXRoLWNvbG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vY2FyZC9leGFtcGxlcy8iLCJzb3VyY2VzIjpbImNhcmQtd2l0aC1jb2xvci9jYXJkLXdpdGgtY29sb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVk3QyxNQUFNLE9BQU8sc0JBQXNCO0lBVm5DO1FBV0UsVUFBSyxHQUFnQixTQUFTLENBQUM7UUFFL0IsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBZEEsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw0b0JBQStDO3lCQUN0Qzs7OztHQUlSO2FBQ0Y7Ozs7SUFFQyx1Q0FBK0I7O0lBRS9CLDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGFsZXR0ZSB9IGZyb20gJ0BkYWZmb2RpbC9kZXNpZ24nO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY2FyZC13aXRoLWNvbG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtd2l0aC1jb2xvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICBkYWZmLWNhcmQge1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB9IFxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkV2l0aENvbG9yQ29tcG9uZW50IHtcbiAgY29sb3I6IERhZmZQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIGNvbG9yQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ByaW1hcnknKTtcbn1cbiJdfQ==