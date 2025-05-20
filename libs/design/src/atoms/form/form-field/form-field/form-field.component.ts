import {
  Component,
  ViewEncapsulation,
  ContentChild,
  AfterContentInit,
  AfterContentChecked,
  HostBinding,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffPrefixDirective } from '../../../../core/prefix-suffix/prefix.directive';
import { DaffSuffixDirective } from '../../../../core/prefix-suffix/suffix.directive';
import { DaffSkeletonableDirective } from '../../../../core/skeletonable/skeletonable.directive';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';

@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
})
export class DaffFormFieldComponent implements AfterContentInit, AfterContentChecked {
  /** @docs-private */
  @HostBinding('class.daff-form-field') class = true;

  /** @docs-private */
  get isSelectField(): boolean {
    return this._control.controlType === 'native-select';
  }

  /** @docs-private */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /** @docs-private */
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;

  /**
   * The child form control that the form field manages.
   *
   * @docs-private
   */
  @ContentChild(DaffFormFieldControl) _control: DaffFormFieldControl<unknown>;

  /**
   * Tracking property to keep a record of whether or not the
   * form field should be marked as error.
   */
  isError = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-error') get errorClass() {
    return this.isError;
  }

  /**
   * Tracking property to keep a record of whether or not the
   * form field contains any user input.
   */
  isFilled = false;

  isDisabled = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-disabled') get disabledClass() {
    return this.isDisabled;
  }

  /**
   * Tracking property to keep a record of whether or not the
   * form field should be marked as valid.
   */
  isValid = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-valid') get validClass() {
    return this.isValid;
  }

  constructor(private cd: ChangeDetectorRef) {}

  /**
   * Determines whether or not the form field should display its focused state.
   */
  get isFocused() {
    return this._control?.focused;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-focused') get focusedClass() {
    return this.isFocused;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-raised') get raisedClass() {
    return this._control?.raised || this.isFilled;
  }

  /**
   * Validate whether or not the FormField is in a "usable" state.
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

    this._control.stateChanges?.subscribe(({ focused, filled, disabled, error, valid }) => {
      this.isFilled = filled;
      this.isError = error;
      this.isDisabled = disabled;
      this.isValid = valid;

      this.cd.markForCheck();
    });
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
