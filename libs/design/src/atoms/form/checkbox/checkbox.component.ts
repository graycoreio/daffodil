import {
  Component, HostBinding,
  Input,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

let uniqueCheckboxId = 0;

/**
 * The format of the value of DaffCheckbox that
 * has a distinct "value" property.
 */
export interface DaffCheckboxValueInterface {
  value: string;
  status: boolean;
}

/**
 * The `daff-checkbox` is a custom ControlValueAccessor
 * made to be compatible with the `daff-checkbox-set`.
 *
 * When used as a standalone checkbox, it should be passed its own formControl,
 * but when used in conjunction with the daff-checkbox-set, the daff-checkbox
 * should only be passed a value that identifies the checkbox, while the
 * daff-checkbox-set takes care of managing the formControl.
 */
@Component({
  selector: 'daff-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaffCheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffCheckboxComponent implements ControlValueAccessor {
  faCheck = faCheck;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  onChange: (val: DaffCheckboxValueInterface | boolean) => any;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  notifyTouched: Function;

  constructor(private _cdRef: ChangeDetectorRef) { }

  /**
   * The native HTMLElement that backs the checkbox.
   */
  @ViewChild('nativeCheckbox', { static: false }) nativeCheckbox: ElementRef<HTMLInputElement>;

  /**
   * Tracking property for whether or not the component should be rendering
   * its focused state.
   */
  focused = false;

  /**
   * A uniquely generated checkbox id, autoincremented to
   * ensure accessible checkboxes without ids.
   */
  _uniqueCheckboxId = 'daff-checkbox' + ++uniqueCheckboxId;

  /**
   * Tracking property for the state of the checkbox.
   */
  checked: boolean;

  /**
   * Sets a unique id for the checkbox input. If id is not specified, it will be auto-generated.
   */
  @Input() id: string = this._uniqueCheckboxId;

  /**
   * This is used to set the id on the form label and on the native input.
   * Note that for accessibility and browser compatibility, it must be
   * different from the "id" set on the `daff-checkbox` host
   */
  get nativeInputId() {
    return this.id + '-native-input';
  }

  /**
   * The value of the checkbox.
   * Additionally, sets the value attribute on the native the `input` element.
   */
  @Input() value: any;

  /**
   * Sets the name attribute to the `input` element.
   */
  @Input() name: string;

  /**
   * Allows users to set the `aria-labelledby` attribute which will be applied to the `input` element.
   * This will be omitted if `aria-labelledby` is defined.
   */
  @Input('aria-label') ariaLabel = '';

  /**
   * Allows users to set the `aria-labelledby` attribute which will be applied to the `input` element.
   */
  @Input('aria-labelledby') ariaLabelledby = '';

  /**
   * The tabindex sets the tabindex on the native checkbox.
   */
  @Input() tabindex: number;

  /**
   * The required attribute. For accessibility, this is passed down
   * to the native checkbox.
   */
  @Input() required: boolean;

  /**
   * A simple class for hooking into the styles of the daff-checkbox.
   */
  @HostBinding('class.daff-checkbox') class = true;

  /**
   * Implemented as a part of ControlValueAccessor
   */
  writeValue(value: boolean | DaffCheckboxValueInterface): void {
    if (typeof value === 'object' && this._valueIsValid(value)) {
      this._writeValueObject(value);
    } else if (typeof value === 'boolean') {
      this._writeValueBoolean(value);
    } else {
      throw new Error('DaffCheckboxComponent expects a DaffCheckboxValueInterface or a boolean');
    }

    this._cdRef.markForCheck();
  }

  /**
   * Confirm that the implementation properly passes values along
   * to the checkbox to prevent implementation errors.
   */
  private _valueIsValid(value: DaffCheckboxValueInterface) {
    if (!value.hasOwnProperty('value') || !value.hasOwnProperty('status')) {
      throw new Error('DaffCheckboxComponent expects an object with a `value` and a `status` property.');
    }
    if (value.value !== this.value) {
      throw new Error(`
        The value passed into the DaffCheckboxComponent through Angular forms (${value.value})
        does not match the value set in the html (${this.value})
      `);
    }
    return true;
  }

  /**
   * Implemented as a part of ControlValueAccessor
   */
  private _writeValueObject(value: DaffCheckboxValueInterface) {
    this.checked = value.status;
  }

  /**
   * Implemented as a part of ControlValueAccessor
   */
  private _writeValueBoolean(value: boolean) {
    this.checked = value;
  }

  /**
   * A utility method to focus the native checkbox element.
   */
  focus() {
    this.nativeCheckbox.nativeElement.focus();
  }

  /**
   * Implemented as a part of ControlValueAccessor
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implemented as a part of ControlValueAccessor
   */
  registerOnTouched(fn: any): void {
    this.notifyTouched = fn;
  }

  /**
   * This method handles updating the checkbox UI state when the native checkbox is focused.
   */
  onFocus() {
    this.focused = true;
    this._cdRef.markForCheck();
  }

  onBlur() {
    this.focused = false;
    this.notifyTouched();
    this._cdRef.markForCheck();
  }

  /**
   * When the native checkbox is changed, we need to stop the changed event from bubbling up
   * to the parent elements to prevent duplicate change detection runs.
   */
  _onNativeInputChanged(event: Event) {
    event.stopPropagation();
  }

  /**
   * We rely on the native browser functionality of clicking on a label[for] a given input element.
   * When this label is wrapped around the native input, it will cause a duplicate click event
   * to be fired on the label, we need to prevent that event from bubbling, causing duplicate events.
   */
  _onNativeCheckboxClicked(event: Event) {
    event.stopPropagation();
    this.toggleCheckbox();
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    if (this.onChange) {
      this.value
        ? this.onChange({ value: this.value, status: this.checked })
        : this.onChange(this.checked);
    }
  }
}
