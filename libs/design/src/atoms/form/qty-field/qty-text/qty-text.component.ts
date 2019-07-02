import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { DaffInputComponent } from '../../input/public_api';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DaffFormFieldControl } from '../../form-field/public_api';

@Component({
  selector: 'daff-qty-text',
  templateUrl: './qty-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: DaffFormFieldControl, useExisting: DaffQtyTextComponent}
  ]
})
export class DaffQtyTextComponent implements ControlValueAccessor, DaffFormFieldControl<number> {
 
  constructor(
    @Optional() @Self() public ngControl: NgControl, 
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  @ViewChild(DaffInputComponent) input : DaffInputComponent;

  /**
   * @docs
   * The maximum number for the text field;
   */
  @Input() max: number = 10;

  /**
   * @docs
   * The minimum number selectable.
   */
  @Input() min: number = 1;

  focused = false;

  focus() {
    this.focused = true;
    this.input.focus();
  }

  onFocus() {
    this.focused = true;
    this.onTouched({});
  }

  onBlur() {
    if(this._value == null || this._value == undefined){
      this._value = 1;
      this.changeDetectorRef.markForCheck();
    }
  }

  private regex: RegExp = new RegExp(/^[0-9]+$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
  onInputKeyDown(event: KeyboardEvent) {
    if (
      this.specialKeys.indexOf(event.key) !== -1
      || (
        (event.key == "a" || event.key == "v" || event.key == "c")
        && (event.metaKey == true || event.ctrlKey == true)
      )
    ) {
      return;
    }

    let current: string = String(this.input.ngControl.value);
    let next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  onInputPaste(event: ClipboardEvent) {
    if (!String(event.clipboardData.getData('text').match(this.regex))) {
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

  private _value: number = 1;
  private disabled: boolean = false;
  private onChange(qty: number): void {};
  private onTouched(obj: any): void {};

  /**
   * Set the initial model value.
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: number): void {
    this._value = coerceNumberProperty(value);
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
