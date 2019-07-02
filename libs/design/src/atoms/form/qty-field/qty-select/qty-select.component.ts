import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../../form-field/public_api';
import { DaffNativeSelectComponent } from '../../select/public_api';

@Component({
  selector: 'daff-qty-select',
  templateUrl: './qty-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: DaffFormFieldControl, useExisting: DaffQtySelectComponent }
  ]
})
export class DaffQtySelectComponent implements ControlValueAccessor, DaffFormFieldControl<number> {

  @ViewChild(DaffNativeSelectComponent) select : DaffNativeSelectComponent;

  constructor( 
    @Optional() @Self() public ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef
    ){
      if (this.ngControl != null) {
        this.ngControl.valueAccessor = this;
      }
    }

  /**
   * The amount to increment between "min" and "max".
   */
  private increment: number = 1;

  get focused () {
    return this.select.focused;
  }

  focus() {
    this.select.focus();
  }


  /**
   * @docs
   * The maximum number selectable;
   */
  @Input() max: number = 10;

  /**
   * @docs
   * The minimum number selectable.
   */
  @Input() min: number = 1;

  /**
   * @docs 
   * Property used to determine whether or not the DaffQtySelectComponent is
   * used in a situation whether the `max` isn't a true max.
   */
  @Input() extendable = true;

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(e) {
    this.onChange(e);
  }


  _value: number = 1;
  private disabled: boolean = false;
  private onChange(qty: number): void { };
  private onTouched(qty: number): void { };

  /**
   * A helper function for easily making options for the `select`.
   */
  get valueArray() {
    return makeValueArray(this.min, this.max, this.increment);
  }

  writeValue(value: number): void {
    this._value = value;
    this.changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

export const makeValueArray = (min: number, max: number, increment: number) => {
  return Array(max - 1).fill(0).map((x, i) => i);
}
