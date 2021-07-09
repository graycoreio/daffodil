import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';
import { DaffQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffQuantitySelectComponent } from './quantity-select/quantity-select.component';

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
})
export class DaffQuantityFieldComponent implements ControlValueAccessor, DaffFormFieldControl {

  @ViewChild(DaffQuantityInputComponent) input: DaffQuantityInputComponent;
  @ViewChild(DaffQuantitySelectComponent) select: DaffQuantitySelectComponent;

  /**
   * @docs
   * The minimum valid value of the quantity field.
   */
  @Input() min = 0;

  /**
   * @docs
   * The maximum valid value of the quantity field.
   */
  @Input() max = 500;

  /**
   * @docs
   * The range of numbers acceptable in a quantity dropdown
   * before it becomes an input element.
   */
  @Input() selectMax = 10;

  focused = false;
  disabled = false;
  private _inputHasBeenShown = false;
  private _quantity = 1;

  get quantity() {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = coerceNumberProperty(value, 1);
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  private onChange(quantity: number): void {};
  private onTouched(quantity: number): void {};

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(fn: (quantity: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangedWrapper(value: any) {
    this.quantity = value;
    this.onChange(value);

    if(this.valueIsOutsideOfRange()){
      this._inputHasBeenShown = true;
    };
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
    this.focused = true;
  }

  get showInputField(): boolean {
    return this.valueIsOutsideOfRange() || this._inputHasBeenShown;
  }

  get showSelectField(): boolean {
    return !this.showInputField;
  }

  private valueIsOutsideOfRange() {
    if(this.ngControl){
      return this.ngControl.value >= this.selectMax;
    } else {
      return this.quantity >= this.selectMax;
    }
  }
}
