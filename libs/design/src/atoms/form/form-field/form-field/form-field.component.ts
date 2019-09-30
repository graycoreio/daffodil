import { Component, ViewEncapsulation, DoCheck, ContentChild, Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';

@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    'class': 'daff-form-field'
  },
  encapsulation: ViewEncapsulation.None
})

export class DaffFormFieldComponent implements DoCheck, AfterContentInit, AfterContentChecked {

  /**
   * The tracking property used to determine if the parent form has been submitted,
   * and thus show an error message (even if the field hasn't been touched).
   * 
   * @deprecated
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() formSubmitted: boolean = false;

  /**
   * The child form control that the form-field manages
   */
  @ContentChild(DaffFormFieldControl, { static: false }) _control: DaffFormFieldControl<any>;

  /**
   * Tracking property to keep a record of whether or not the
   * form field should be marked as error.
   */
  isError = false;

  /**
   * Tracking property to keep a record of whether or not the
   * form field should be marked as valid.
   */
  isValid = false;

  /**
   * Keeps the state of the form field consistent with its child DaffFormControl
   * 
   * TODO: consider whether or not this can be refactored to some kind of 
   * observable to remove unnecessary change detection.
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
   */
  private _validateFormControl() {
    if (!this._control) {
      throw new Error(DaffFormFieldMissingControlMessage);
    }
  }

  /**
   * Life cycle hook to verify that the form field has an acceptable
   * child control instance. Mostly useful for development-time 
   * validation of usage.
   */
  ngAfterContentInit() {
    this._validateFormControl();
  }

  /**
   * Life cycle hook to verify that the form field has an acceptable
   * child control instance. Mostly useful for development-time 
   * validation of usage.
   */
  ngAfterContentChecked() {
    this._validateFormControl();
  }
}