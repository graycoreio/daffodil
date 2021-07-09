import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import { DaffFormFieldControl } from '../../form-field/public_api';
import { DaffNativeSelectComponent } from '../../select/public_api';

export const makeValueArray = (min: number, max: number, increment: number) =>
  Array(max - min + 1).fill(0).map((x, i) => (i * increment) + min);

@Component({
  selector: 'daff-quantity-select',
  templateUrl: './quantity-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DaffFormFieldControl,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: DaffQuantitySelectComponent,
    },
  ],
})
export class DaffQuantitySelectComponent implements ControlValueAccessor, DaffFormFieldControl {

  @ViewChild(DaffNativeSelectComponent) select: DaffNativeSelectComponent;

  /**
   * @docs
   * The minimum number selectable.
   */
  @Input() min = 1;

  /**
   * @docs
   * The maximum number selectable;
   */
  @Input() max = 10;

  /**
   * @docs
   * Property used to determine whether or not the DaffQuantitySelectComponent is
   * used in a situation whether the `max` isn't a true max.
   */
  @Input() extendable = true;

  /**
   * The amount to increment between "min" and "max".
   */
  private increment = 1;

  _value = 1;
  disabled = false;
  private onChange(quantity: number): void { };
  private onTouched(quantity: number): void { };

  constructor(@Optional() @Self() public ngControl: NgControl, private changeDetectorRef: ChangeDetectorRef) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(e) {
    this.onChange(e);
  }

  get focused() {
    return this.select.focused;
  }

  focus() {
    this.select.focus();
  }

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
