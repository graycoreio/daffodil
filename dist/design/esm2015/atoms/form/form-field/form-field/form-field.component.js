/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ContentChild, Input } from '@angular/core';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export class DaffFormFieldComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.faChevronDown = faChevronDown;
        /**
         * The tracking property used to determine if the parent form has been submitted,
         * and thus show an error message (even if the field hasn't been touched).
         *
         * @deprecated
         */
        // tslint:disable-next-line: no-inferrable-types
        this.formSubmitted = false;
        /**
         * Tracking property to keep a record of whether or not the
         * form field should be marked as error.
         */
        this.isError = false;
        /**
         * Tracking property to keep a record of whether or not the
         * form field should be marked as valid.
         */
        this.isValid = false;
    }
    /**
     * Keeps the state of the form field consistent with its child DaffFormControl
     *
     * TODO: consider whether or not this can be refactored to some kind of
     * observable to remove unnecessary change detection.
     *
     * \@docs-private
     * @return {?}
     */
    ngDoCheck() {
        if (this._control) {
            this.isError = this._control.ngControl.errors && (this._control.ngControl.touched);
            this.isValid = !this._control.ngControl.errors && this._control.ngControl.touched;
        }
    }
    /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     * @private
     * @return {?}
     */
    _validateFormControl() {
        if (!this._control) {
            throw new Error(DaffFormFieldMissingControlMessage);
        }
    }
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    ngAfterContentInit() {
        this._validateFormControl();
    }
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    ngAfterContentChecked() {
        this._validateFormControl();
    }
}
DaffFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-form-field',
                template: "<div class=\"daff-form-field__control\" [class.daff-error]=\"isError\" [class.daff-valid]=\"isValid\">\n  <ng-content></ng-content>\n  <div class=\"daff-form-field__icon\" *ngIf=\"_control.controlType=='native-select'\">\n    <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n  </div>\n</div>\n<ng-content select=\"daff-error-message\"></ng-content>\n",
                host: {
                    'class': 'daff-form-field'
                },
                encapsulation: ViewEncapsulation.None,
                styles: [".daff-form-field{display:block;position:relative}.daff-form-field__control{border-radius:3px;display:inline-block;font-size:1rem;height:inherit;line-height:1.5rem;padding:10px 15px;width:100%}.daff-form-field__icon{display:inline-block;pointer-events:none;position:absolute;right:15px}"]
            }] }
];
DaffFormFieldComponent.propDecorators = {
    formSubmitted: [{ type: Input }],
    _control: [{ type: ContentChild, args: [DaffFormFieldControl, { static: false },] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFormFieldComponent.prototype.faChevronDown;
    /**
     * The tracking property used to determine if the parent form has been submitted,
     * and thus show an error message (even if the field hasn't been touched).
     *
     * @deprecated
     * @type {?}
     */
    DaffFormFieldComponent.prototype.formSubmitted;
    /**
     * The child form control that the form-field manages
     * \@docs-private
     * @type {?}
     */
    DaffFormFieldComponent.prototype._control;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as error.
     * @type {?}
     */
    DaffFormFieldComponent.prototype.isError;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as valid.
     * @type {?}
     */
    DaffFormFieldComponent.prototype.isValid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsiYXRvbXMvZm9ybS9mb3JtLWZpZWxkL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQVcsWUFBWSxFQUFFLEtBQUssRUFBeUMsTUFBTSxlQUFlLENBQUM7QUFDbEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBWWxFLE1BQU0sT0FBTyxzQkFBc0I7SUFWbkM7Ozs7UUFlRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7UUFTckIsa0JBQWEsR0FBWSxLQUFLLENBQUM7Ozs7O1FBWXhDLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7O1FBTWhCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFnRGxCLENBQUM7Ozs7Ozs7Ozs7SUF0Q0MsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQzs7Ozs7OztJQU1PLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFTRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7Ozs7O0lBU0QscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdVdBQTBDO2dCQUUxQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGlCQUFpQjtpQkFDM0I7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7NEJBZ0JFLEtBQUs7dUJBTUwsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQWZyRCwrQ0FBOEI7Ozs7Ozs7O0lBUzlCLCtDQUF3Qzs7Ozs7O0lBTXhDLDBDQUFzRjs7Ozs7O0lBTXRGLHlDQUFnQjs7Ozs7O0lBTWhCLHlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIERvQ2hlY2ssIENvbnRlbnRDaGlsZCwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnLi4vZm9ybS1maWVsZC1jb250cm9sJztcbmltcG9ydCB7IERhZmZGb3JtRmllbGRNaXNzaW5nQ29udHJvbE1lc3NhZ2UgfSBmcm9tICcuLi9mb3JtLWZpZWxkLWVycm9ycyc7XG5cbmltcG9ydCB7IGZhQ2hldnJvbkRvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWZvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdkYWZmLWZvcm0tZmllbGQnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYWZmRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGZhQ2hldnJvbkRvd24gPSBmYUNoZXZyb25Eb3duO1xuXG4gIC8qKlxuICAgKiBUaGUgdHJhY2tpbmcgcHJvcGVydHkgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIHBhcmVudCBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZCxcbiAgICogYW5kIHRodXMgc2hvdyBhbiBlcnJvciBtZXNzYWdlIChldmVuIGlmIHRoZSBmaWVsZCBoYXNuJ3QgYmVlbiB0b3VjaGVkKS5cbiAgICogXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgZm9ybVN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY2hpbGQgZm9ybSBjb250cm9sIHRoYXQgdGhlIGZvcm0tZmllbGQgbWFuYWdlc1xuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBAQ29udGVudENoaWxkKERhZmZGb3JtRmllbGRDb250cm9sLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NvbnRyb2w6IERhZmZGb3JtRmllbGRDb250cm9sO1xuXG4gIC8qKlxuICAgKiBUcmFja2luZyBwcm9wZXJ0eSB0byBrZWVwIGEgcmVjb3JkIG9mIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgKiBmb3JtIGZpZWxkIHNob3VsZCBiZSBtYXJrZWQgYXMgZXJyb3IuXG4gICAqL1xuICBpc0Vycm9yID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRyYWNraW5nIHByb3BlcnR5IHRvIGtlZXAgYSByZWNvcmQgb2Ygd2hldGhlciBvciBub3QgdGhlXG4gICAqIGZvcm0gZmllbGQgc2hvdWxkIGJlIG1hcmtlZCBhcyB2YWxpZC5cbiAgICovXG4gIGlzVmFsaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogS2VlcHMgdGhlIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkIGNvbnNpc3RlbnQgd2l0aCBpdHMgY2hpbGQgRGFmZkZvcm1Db250cm9sXG4gICAqIFxuICAgKiBUT0RPOiBjb25zaWRlciB3aGV0aGVyIG9yIG5vdCB0aGlzIGNhbiBiZSByZWZhY3RvcmVkIHRvIHNvbWUga2luZCBvZiBcbiAgICogb2JzZXJ2YWJsZSB0byByZW1vdmUgdW5uZWNlc3NhcnkgY2hhbmdlIGRldGVjdGlvbi5cblx0ICogXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCkge1xuICAgICAgdGhpcy5pc0Vycm9yID0gdGhpcy5fY29udHJvbC5uZ0NvbnRyb2wuZXJyb3JzICYmICh0aGlzLl9jb250cm9sLm5nQ29udHJvbC50b3VjaGVkKTtcbiAgICAgIHRoaXMuaXNWYWxpZCA9ICF0aGlzLl9jb250cm9sLm5nQ29udHJvbC5lcnJvcnMgJiYgdGhpcy5fY29udHJvbC5uZ0NvbnRyb2wudG91Y2hlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgd2hldGhlciBvciBub3QgdGhlIEZvcm1GaWVsZCBpcyBpbiBcbiAgICogYSBcInVzYWJsZVwiIHN0YXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdGVGb3JtQ29udHJvbCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRyb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihEYWZmRm9ybUZpZWxkTWlzc2luZ0NvbnRyb2xNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlmZSBjeWNsZSBob29rIHRvIHZlcmlmeSB0aGF0IHRoZSBmb3JtIGZpZWxkIGhhcyBhbiBhY2NlcHRhYmxlXG4gICAqIGNoaWxkIGNvbnRyb2wgaW5zdGFuY2UuIE1vc3RseSB1c2VmdWwgZm9yIGRldmVsb3BtZW50LXRpbWUgXG4gICAqIHZhbGlkYXRpb24gb2YgdXNhZ2UuXG5cdCAqIFxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVGb3JtQ29udHJvbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpZmUgY3ljbGUgaG9vayB0byB2ZXJpZnkgdGhhdCB0aGUgZm9ybSBmaWVsZCBoYXMgYW4gYWNjZXB0YWJsZVxuICAgKiBjaGlsZCBjb250cm9sIGluc3RhbmNlLiBNb3N0bHkgdXNlZnVsIGZvciBkZXZlbG9wbWVudC10aW1lIFxuICAgKiB2YWxpZGF0aW9uIG9mIHVzYWdlLlxuXHQgKiBcblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlRm9ybUNvbnRyb2woKTtcbiAgfVxufSJdfQ==