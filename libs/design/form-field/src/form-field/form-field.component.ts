import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ContentChild,
  AfterContentInit,
  AfterContentChecked,
  HostBinding,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  isDevMode,
  ElementRef,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffSkeletonableDirective,
  DaffFormLabelDirective,
} from '@daffodil/design';

import { DaffFormFieldActionDirective } from '../action/action.directive';
import { DaffErrorMessageComponent } from '../error-message/error-message.component';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffHintComponent } from '../hint/hint.component';
import { DaffFormFieldLabelDirective } from '../label/label.directive';

let daffFormFieldId = 0;

export type DaffFormFieldApperanace = 'fluid' | 'fixed';

enum DaffFormFieldApperanaceEnum {
  Fluid = 'fluid',
  Fixed = 'fixed',
}

export const DaffFormFieldMissingControlMessage = 'A DaffFormFieldComponent must contain a DaffFormFieldControl';

@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
  ],
  hostDirectives: [
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
})
export class DaffFormFieldComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {
  /** @docs-private */
  @HostBinding('class.daff-form-field') class = true;

  /** @docs-private */
  get isSelectField() {
    return this._control.controlType === 'native-select' || this._control.controlType === 'custom-select';
  }

  /**
   * @docs-private
   */
  @HostBinding('class.is-select') get selectClass() {
    return this.isSelectField;
  }

  constructor(private cd: ChangeDetectorRef, public elementRef: ElementRef) {}

  /** @docs-private */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   */
  @HostBinding('class.has-prefix') get hasPrefixClass() {
    return this._prefix;
  }

  /** @docs-private */
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;

  /**
   * @docs-private
   */
  @HostBinding('class.has-suffix') get hasSuffixClass() {
    return this._suffix || this._action;
  }

  /**
   * @docs-private
   *
   * The child form control that the form field manages.
   */
  @ContentChild(DaffFormFieldControl) _control: DaffFormFieldControl<unknown>;

  /**
   * @docs-private
   * @deprecated Deprecated in version 0.86.0. Will be removed in v1.0.0.
   */
  @ContentChild(DaffFormLabelDirective) _formLabelDirective: DaffFormLabelDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffFormFieldLabelDirective) _formFieldLabelDirective: DaffFormFieldLabelDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffFormFieldActionDirective) _action: DaffFormFieldActionDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffHintComponent) private _hint: DaffHintComponent;

  /**
   * @docs-private
   */
  @ContentChild(DaffErrorMessageComponent) private _error: DaffErrorMessageComponent;

  /**
   * @docs-private
   *
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
   * @docs-private
   *
   * Tracking property to keep a record of whether or not the
   * form field contains any user input.
   */
  isFilled = false;

  /**
   * @docs-private
   *
   * Tracking property to keep a record of whether or not the
   * form field should be marked as disabled.
   */
  isDisabled = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-disabled') get disabledClass() {
    return this.isDisabled;
  }

  /**
   * @docs-private
   *
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

  /**
   * @docs-private
   *
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

  private _appearance: DaffFormFieldApperanace = DaffFormFieldApperanaceEnum.Fluid;

  /**
   * The appearance style of a form field, whether the label is fluid or fixed.
   */
  @Input()
  get appearance() {
    return this._appearance;
  }

  set appearance(value: DaffFormFieldApperanace) {
    if(value === null || value === undefined || <unknown>value === '') {
      this._appearance = DaffFormFieldApperanaceEnum.Fluid;
    } else {
      this._appearance = value;
    }
  };

  /**
   * @docs-private
   */
  @HostBinding('class.fluid') get fluidClass() {
    return this._appearance === DaffFormFieldApperanaceEnum.Fluid;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.fixed') get fixedClass() {
    return this._appearance === DaffFormFieldApperanaceEnum.Fixed;
  }

  /**
   * @docs-private
   */
  get isFixed() {
    return this._appearance === DaffFormFieldApperanaceEnum.Fixed;
  }

  /**
   * The unique id of the form field. Defaults to an autogenerated value. When using this,
   * it's your responsibility to ensure that the id for each form field is unique.
   *
   * It gets assigned to the `for` attribute on the `<label>` inside of the form field.
   */
  @Input() id = 'daff-form-field-' + ++daffFormFieldId;

  /**
   * @docs-private
   */
  hasHint(): boolean {
    return this._hint ? true : false;
  }

  /**
   * @docs-private
   */
  hintId = this.id + '-hint';

  /**
   * @docs-private
   */
  hasErrorMessage(): boolean {
    return this._error ? true : false;
  }

  /**
   * @docs-private
   */
  errorMessageId = this.id + '-error';

  /**
   * @docs-private
   */
  get autoLabelId() {
    return this._control.supportsAutoLabelling ? this.id : null;
  }

  /**
   * @docs-private
   */
  get customId() {
    return this._control.supportsAutoLabelling ? null : this.id;
  }

  /**
   * @docs-private
   *
   * Displays a console warning if the `DaffFormFieldLabelDirective` is not used on controls (native HTML control elements) that support auto-labelling.
   */
  ngAfterViewInit() {
    if (isDevMode()) {
      if (!this._formFieldLabelDirective && this._control.supportsAutoLabelling && !(this._control.id)) {
        console.warn(
          `Accessibility Warning: The form field with id "${this.id}" uses a control that supports auto-labelling, but no <daff-form-label> component was found.\n\n` +
          `1. Add a <daff-form-label> component (recommended)\n` +
          `2. OR manually set an 'id' on your input and matching 'for' attribute on your <label>.\n\n` +
          `Why this matters: Proper labelling ensures assistive technologies can identify form fields correctly.`,
        );
      }

      if(this._suffix && this._action && !this.isFixed) {
        console.warn(
          `UI consideration for form field with id "${this.id}":\n\n` + `In a fluid appearance, avoid using suffix alongside an action.`,
        );
      };
    }
  }

  /**
   * Validates whether or not the form field is in a "usable" state.
   */
  private _validateFormControl() {
    if (!this._control) {
      throw new Error(DaffFormFieldMissingControlMessage);
    }
  }

  /**
   * @docs-private
   *
   * Lifecycle hook to verify that the form field has an acceptable
   * child control instance. Mostly useful for development-time
   * validation of usage.
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
   * @docs-private
   *
   * Lifecycle hook to verify that the form field has an acceptable
   * child control instance. Mostly useful for development-time
   * validation of usage.
   */
  ngAfterContentChecked() {
    this._validateFormControl();
  }
}
