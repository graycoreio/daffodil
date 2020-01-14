import {
  Component, ContentChild, Input, AfterContentInit, AfterContentChecked, HostBinding, ViewEncapsulation
} from '@angular/core';

import { DaffFormFieldControl } from './form-field-control';

import {
  DaffFormFieldMissingControlMessage,
  DaffFormFieldMissingNgControlMessage,
  DaffFormFieldMissingLabelMessage
} from './form-field-errors';

import { DaffFormLabelDirective } from '../form-label/form-label.directive';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';
import { daffFormFieldableMixin } from './behaviors/formfieldable/formfieldable';
import { DaffFormFieldable } from './behaviors/formfieldable/formfieldable.interface';

class DaffFormFieldableBase {
  _control: DaffFormFieldControl;
}

const _daffFormFieldBase = daffFormFieldableMixin(DaffFormFieldableBase);


/**
 * A component for managing how inputs, selects, textareas, and error messages are displayed in a form.
 */
@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffFormFieldComponent
  extends _daffFormFieldBase
  implements AfterContentInit, AfterContentChecked, DaffFormFieldable {

  faChevronDown = faChevronDown;

  /**
   * The tracking property used to determine if the parent form has been submitted,
   * and thus show an error message (even if the field hasn't been touched).
   * @deprecated
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() formSubmitted: boolean = false;

  @HostBinding('class.daff-form-field') class = true;

  /**
   * The child form control that the form-field manages
   */
  @ContentChild(DaffFormFieldControl, { static: false }) _control: DaffFormFieldControl;
  @ContentChild(DaffPrefixDirective, { static: false }) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective, { static: false }) _suffix: DaffSuffixDirective;
  @ContentChild(DaffFormLabelDirective, { static: false }) _label: DaffFormLabelDirective;

  /**
   * Handles click event on a form to focus the child control.
   */
  _onFormClick() {
    this._control.focus();
  }

  /**
   * Validate whether or not the FormField is in a "usable" state.
   */
  private _validateFormControl() {
    if (!this._control) {
      throw new Error(DaffFormFieldMissingControlMessage);
    }
    if (!this._control.ngControl) {
      throw new Error(DaffFormFieldMissingNgControlMessage);
    }
  }

  /**
   * Validates whether or not a form field is using a label.
   */
  private _enforceAccessibilityRequirements() {
    if (!this._label) {
      throw new Error(DaffFormFieldMissingLabelMessage);
    }
  }

  /**
   * Life cycle hook to verify a variety of constraints about the form-field.
   * Mostly useful for development-time validation of usage.
   */
  ngAfterContentInit() {
    this._validateFormControl();
    this._enforceAccessibilityRequirements();
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
