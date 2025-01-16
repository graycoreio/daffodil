import {
  Component,
  ViewEncapsulation,
  DoCheck,
  ContentChild,
  Input,
  AfterContentInit,
  AfterContentChecked,
  HostBinding,
} from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';

// ChangeDetection is ignored because this component needs to be refactored
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class DaffFormFieldComponent implements DoCheck, AfterContentInit, AfterContentChecked {

  /**
   * @docs-private
   */
  faChevronDown = faChevronDown;

  @HostBinding('class.daff-form-field') class = true;

  /**
   * The tracking property used to determine if the parent form has been submitted,
   * and thus show an error message (even if the field hasn't been touched).
   *
   * @deprecated Deprecated in version 0.78.0. Will be removed in version 1.0.0.
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() formSubmitted: boolean = false;

  /**
   * The child form control that the form-field manages
   *
   * @docs-private
   */
  @ContentChild(DaffFormFieldControl) _control: DaffFormFieldControl;

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
   * @docs
   *
   * Determines whether or not the form field should display its focused state.
   */
  get isFocused() {
    return this._control?.focused;
  }

  /**
   * Keeps the state of the form field consistent with its child DaffFormControl
   *
   * TODO: consider whether or not this can be refactored to some kind of
   * observable to remove unnecessary change detection.
   *
   * @docs-private
   */
  ngDoCheck() {
    if(this._control?.ngControl) {
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
   *
   * @docs-private
   */
  ngAfterContentInit() {
    this._validateFormControl();
  }

  /**
   * Life cycle hook to verify that the form field has an acceptable
   * child control instance. Mostly useful for development-time
   * validation of usage.
   *
   * @docs-private
   */
  ngAfterContentChecked() {
    this._validateFormControl();
  }
}
