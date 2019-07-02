import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, Self, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import { coerceNumberProperty } from '@angular/cdk/coercion'; 
import { DaffFormFieldControl } from '../form-field/public_api';
import { DaffQtyTextComponent } from './qty-text/qty-text.component';
import { DaffQtySelectComponent } from './qty-select/qty-select.component';


@Component({
  selector: 'daff-qty-field',
  templateUrl: './qty-field.component.html',
  providers: [
    {provide: DaffFormFieldControl, useExisting: DaffQtyFieldComponent}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffQtyFieldComponent implements ControlValueAccessor, DaffFormFieldControl<any> {

  @ViewChild(DaffQtyTextComponent) input : DaffQtyTextComponent;
  @ViewChild(DaffQtySelectComponent) select : DaffQtySelectComponent;

  /**
   * @docs
   * The maximum valid value of the qty field.
   */
  @Input() max = 500;

  /**
   * @docs
   * The range of numbers acceptable in a qty dropdown
   * before it becomes an input element.
   */
  @Input() selectMax = 10;

  private _inputHasBeenShown: boolean = false;


  private _qty: number = 1;

  get qty() { return this._qty }
  set qty(value: number) { 
      this._qty = coerceNumberProperty(value, 1);
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  private onChange(qty: number): void {};
  private onTouched(qty: number): void {};

  writeValue(qty: number): void {
    this.qty = qty;
  }

  registerOnChange(fn: (qty: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangedWrapper(value: any) {
    this.qty = value;
    this.onChange(value);

    if(this.valueIsOutsideOfRange()){
      this._inputHasBeenShown = true;
    };
  }

  setDisabledState(isDisabled: boolean): void {
    
  }

  focused = false;

  focus() {
    if(this.select) this.select.focus();
    if(this.input) this.input.focus();
    this.focused = true;
  }

  get showTextField() : boolean {
    return this.valueIsOutsideOfRange() || this._inputHasBeenShown;
  }

  get showSelectField(): boolean {
    return !this.showTextField;
  }

  private valueIsOutsideOfRange() {
    if(this.ngControl){
      return this.ngControl.value >= this.selectMax;
    }
    else {
      return this.qty >= this.selectMax;
    }
  }
}
