import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../../atoms/form/form-field/public_api';
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
   * The range of elements acceptable in a qty dropdown
   * before it becomes an input element.
   */
  @Input() dropdownRange = 10;

  /**
   * @docs
   * @deprecated
   * The default value of the element
   * Event emitted when the qty changes
   * should just use the built in @angular/forms bindings
   */
  @Input() qty = 1;
  
  /**
   * @docs
   * @deprecated
   * The html "id" of the element
   */
  @Input() id: number;

  /**
   * @docs
   * @deprecated
   * Event emitted when the qty changes
   * should just use the built in @angular/forms bindings
   */
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(@Optional() @Self() public ngControl: NgControl) {
  }

  get controType() {
    return this.inputHasBeenShown ? "native-select" : "input";
  }

  /**
   * @docs-private
   * A helper value for easily making a `mat-option`
   */
  get dropdownItemArray() {
    return Array(this.dropdownRange-1).fill(0).map((x,i)=>i);
  }
  inputHasBeenShown: boolean = false;
  
  onChange = (qty: number) => {console.log("test1");};
  onTouched = () => {};

  writeValue(qty: number): void {
    console.log("test2");
    this.qty = qty;
    this.onChange(this.qty);
  }

  registerOnChange(fn: (qty: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangedWrapper(value: any) {
    value = parseInt(value, 10);
    this.qtyChanged.emit(value);
    this.onChange(value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get showQtyInputField() : boolean {
    if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
      return false
    } else {
      this.inputHasBeenShown = true;
      return true;
    }
  }

  private isQtyOutsideDropdownRange() {
    return this.qty >= this.dropdownRange;
  }
}
