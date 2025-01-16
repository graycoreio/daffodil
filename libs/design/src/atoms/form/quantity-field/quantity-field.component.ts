import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  Self,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import { DaffQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffQuantitySelectComponent } from './quantity-select/quantity-select.component';
import { DaffFormFieldControl } from '../form-field/form-field-control';

@Component({
  selector: 'daff-quantity-field',
  templateUrl: './quantity-field.component.html',
  providers: [
    {
      provide: DaffFormFieldControl,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: DaffQuantityFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffQuantityFieldComponent implements ControlValueAccessor, DaffFormFieldControl {

  @ViewChild(DaffQuantityInputComponent) input: DaffQuantityInputComponent;
  @ViewChild(DaffQuantitySelectComponent) select: DaffQuantitySelectComponent;

  /**
   * @docs
   * The minimum valid value of the quantity field.
   * Must be greater than or equal to 1.
   */
  @Input() min = 1;

  /**
   * @docs
   * The maximum valid value of the quantity field.
   * Must be greater than min.
   */
  @Input() max = 500;

  /**
   * @docs
   * The range of numbers acceptable in a quantity dropdown
   * before it becomes an input element.
   */
  @Input() selectMax = 10;

  @Input() id = '';

  get focused(): boolean {
    return !!(this.input?.focused || this.select?.focused);
  }

  disabled = false;
  private _quantity = 1;
  private _inputHasBeenShown = false;

  get quantity() {
    return this._quantity;
  }
  set quantity(value: number) {
    this._quantity = coerceNumberProperty(value, 1);
  }

  /**
   * Returns the lesser of max and selectMax.
   */
  get _maxFloor(): number {
    return Math.min(this.max, this.selectMax);
  }

  get controlType() {
    // TODO: use enum
    return this.showInputField
      ? 'native-input'
      : 'native-select';
  }

  get showInputField(): boolean {
    const ret = this._inputHasBeenShown || (this.ngControl
      ? this.ngControl.value >= this.selectMax
      : this.quantity >= this.selectMax);

    if (ret) {
      this._inputHasBeenShown = true;
    }

    return ret;
  }

  get showSelectField(): boolean {
    return !this.showInputField;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private cd: ChangeDetectorRef,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  private onChange(quantity: number): void {};
  private onTouched(quantity: number): void {};

  writeValue(quantity: number): void {
    this.quantity = quantity;
    this.cd.markForCheck();
  }

  registerOnChange(fn: (quantity: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focus() {
    if(this.select) {
      this.select.focus();
    }
    if(this.input) {
      this.input.focus();
    }
  }
}
