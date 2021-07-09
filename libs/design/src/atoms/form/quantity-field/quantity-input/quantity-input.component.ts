import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import { DaffFormFieldControl } from '../../form-field/public_api';
import { DaffInputComponent } from '../../input/public_api';

@Component({
  selector: 'daff-quantity-input',
  templateUrl: './quantity-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DaffFormFieldControl,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: DaffQuantityInputComponent,
    },
  ],
})
export class DaffQuantityInputComponent implements ControlValueAccessor, DaffFormFieldControl {
  @ViewChild(DaffInputComponent) input: DaffInputComponent;

  /**
   * @docs
   * The minimum number for the quantity input field
   */
  @Input() min = 1;

  /**
   * @docs
   * The maximum number for the quantity input field
   */
  @Input() max = 10;

  focused = false;
  disabled = false;
  value = 1;
  private readonly digitOnlyRegex = new RegExp(/^[0-9]+$/g);
  private readonly specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
  private onChange(quantity: number): void {};
  private onTouched(obj: any): void {};

  onInputKeyDown(event: KeyboardEvent) {
    if (
      this.specialKeys.indexOf(event.key) !== -1
      || (
        (event.key === 'a' || event.key === 'v' || event.key === 'c')
        && (event.metaKey === true || event.ctrlKey === true)
      )
    ) {
      return;
    }

    const current = String(this.input.ngControl.value || '');
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.digitOnlyRegex)) {
      event.preventDefault();
    }
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  focus() {
    this.focused = true;
    this.input.focus();
  }

  onFocus() {
    this.focused = true;
    this.onTouched({});
  }

  onBlur() {
    if(this.value === null || this.value === undefined){
      this.value = 1;
      this.changeDetectorRef.markForCheck();
    }
  }

  onInputPaste(event: ClipboardEvent) {
    if (!String(event.clipboardData.getData('input').match(this.digitOnlyRegex))) {
      event.preventDefault();
    }
  }

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(e) {
    this.onChange(e);
  }

  /**
   * Set the initial model value.
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: number): void {
    this.value = coerceNumberProperty(value);
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Registers a callback to be triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   */
  registerOnChange(fn: any): void {
    this.onChange(fn);
  }

  /**
   * Registers a callback to be triggered when control has been touched.
   * Implemented as part of ControlValueAccessor.
   */
  registerOnTouched(fn: any): void {
    this.onTouched(fn);
  }

  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
