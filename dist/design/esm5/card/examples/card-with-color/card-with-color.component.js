/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
var CardWithColorComponent = /** @class */ (function () {
    function CardWithColorComponent() {
        this.color = 'primary';
        this.colorControl = new FormControl('primary');
    }
    CardWithColorComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'card-with-color',
                    template: "<daff-card [color]=\"colorControl.value\">\n  <img daffCardImage src=\"/assets/card/uber-logo-dark.svg\" />\n  <h4 daffCardTitle>Title</h4>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  Some other content\n</daff-card>\n\n<select [formControl]=\"colorControl\">\n    <option value=\"primary\">Primary</option>\n    <option value=\"secondary\">Secondary</option>\n    <option value=\"tertiary\">Tertiary</option>\n    <option value=\"white\">White</option>\n    <option value=\"black\">Black</option>\n    <option value=\"theme\">Theme</option>\n    <option value=\"theme-contrast\">Theme Contrast</option>\n</select>",
                    styles: ["\n    daff-card {\n      max-width: 400px;\n    } \n  "]
                }] }
    ];
    return CardWithColorComponent;
}());
export { CardWithColorComponent };
if (false) {
    /** @type {?} */
    CardWithColorComponent.prototype.color;
    /** @type {?} */
    CardWithColorComponent.prototype.colorControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC13aXRoLWNvbG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vY2FyZC9leGFtcGxlcy8iLCJzb3VyY2VzIjpbImNhcmQtd2l0aC1jb2xvci9jYXJkLXdpdGgtY29sb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO1FBV0UsVUFBSyxHQUFnQixTQUFTLENBQUM7UUFFL0IsaUJBQVksR0FBZ0IsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBZEEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0b0JBQStDOzZCQUN0Qyx3REFJUjtpQkFDRjs7SUFLRCw2QkFBQztDQUFBLEFBZEQsSUFjQztTQUpZLHNCQUFzQjs7O0lBQ2pDLHVDQUErQjs7SUFFL0IsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQYWxldHRlIH0gZnJvbSAnQGRhZmZvZGlsL2Rlc2lnbic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdjYXJkLXdpdGgtY29sb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC13aXRoLWNvbG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIGRhZmYtY2FyZCB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH0gXG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRXaXRoQ29sb3JDb21wb25lbnQge1xuICBjb2xvcjogRGFmZlBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgY29sb3JDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgncHJpbWFyeScpO1xufVxuIl19