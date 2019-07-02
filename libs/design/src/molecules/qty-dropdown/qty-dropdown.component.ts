import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, Self, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import { coerceNumberProperty } from '@angular/cdk/coercion'; 

import { DaffFormFieldControl } from '../../atoms/form/form-field/public_api';
import { DaffInputComponent } from '../../atoms/form/input/public_api';
@Component({
  selector: 'daff-qty-dropdown',
  styleUrls: ['./qty-dropdown.component.scss'],
  templateUrl: './qty-dropdown.component.html',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: DaffQtyDropdownComponent,
      multi: true,
    },
    {provide: DaffFormFieldControl, useExisting: DaffQtyDropdownComponent}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffQtyDropdownComponent implements ControlValueAccessor, DaffFormFieldControl<any> {

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {}
  
  @ViewChild(DaffInputComponent, {read: ElementRef}) textfield : ElementRef;

  private _inputHasBeenShown: boolean = false;


  private _disabled: boolean = false;

  /**
   * @docs
   * The disabled state of the qty-dropdown
   */
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) { this._disabled = !!value; }

  /**
   * @docs
   * The range of numbers acceptable in a qty dropdown
   * before it becomes an input element.
   */
  @Input() dropdownRange = 10;

  private _qty: number = 1;

  /**
   * @docs
   * @deprecated
   * The internal tracking property for the value of the form control.
   * The @Input() will eventually be deprecated.
   */
  @Input()
  get qty() { return this._qty }
  set qty(value: number) { 
    this._qty = coerceNumberProperty(value, null);
  }
  
  /**
   * @docs
   * @deprecated
   * The html "id" of the element
   */
  @Input() id: number;

  /**
   * @docs
   * @deprecated
   * Event emitted when the qty changes. 
   * @see ControlValueAccessor
   */
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter<number>();

  /**
   * 
   * A helper value for easily making options for the `select`.
   */
  get dropdownItemArray() {
    return Array(this.dropdownRange-1).fill(0).map((x,i)=>i);
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
    this.qtyChanged.emit(value);
    this.onChange(value);

    if(this.valueIsOutsideOfRange()){
      this._inputHasBeenShown = true;
    };
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get showTextField() : boolean {
    return this.valueIsOutsideOfRange() || this._inputHasBeenShown;
  }

  get showSelectField(): boolean {
    return !this.showTextField;
  }

  private valueIsOutsideOfRange() {
    if(this.ngControl){
      return this.ngControl.value >= this.dropdownRange;
    }
    else {
      return this.qty >= this.dropdownRange;
    }
  }

  private regex: RegExp = new RegExp(/^[0-9]+$/g);
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft'];
  onInputKeyDown(event: KeyboardEvent) {
      if (
        this.specialKeys.indexOf(event.key) !== -1 
        || (
          (event.key == "a" || event.key== "v" || event.key == "c") 
          && (event.metaKey == true || event.ctrlKey == true )
        )
      ){
          return;
      }

      let current: string = String(this.textfield.nativeElement.value);
      let next: string = current.concat(event.key);

      if (next && !String(next).match(this.regex)) {
          event.preventDefault();
      }
  }

  onInputPaste(event: ClipboardEvent) {
    if(!String(event.clipboardData.getData('text').match(this.regex))){
      event.preventDefault();
    }
  }
}
