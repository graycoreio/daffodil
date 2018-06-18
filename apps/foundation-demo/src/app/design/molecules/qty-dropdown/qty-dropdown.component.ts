import { Component, OnInit, Renderer2, forwardRef, ElementRef, ViewChild, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QtyDropdownComponent),
      multi: true
    }
  ]
})
export class QtyDropdownComponent implements OnInit, ControlValueAccessor {
  @ViewChild('qtySelect') selectEl: ElementRef;
  @ViewChild('qtyInput') inputEl: ElementRef;

  _qtyControl: FormControl = new FormControl(1);

  //A filler array
  static readonly dropdownItemCounter: number[] = [
    1,2,3,4,5,6,7,8,9
  ];

  get dropdownRange() : number {
    return QtyDropdownComponent.dropdownItemCounter.length;
  }

  //A local state keeper for managing whether
  //or not a user has been shown a textfield yet.
  inputHasBeenShown: boolean = false;

  //on-change handler
  onChange = (qty: number) => {};

  //on-touched handler
  onTouched = () => {};

  get showQtyInputField() : boolean {
    return this._qtyControl.value >= this.dropdownRange || this.inputHasBeenShown;
  }

  ngOnInit() {
    this._qtyControl.valueChanges.subscribe((val) => {
      this.onQtyChanged(val);
    })
  }

  writeValue(value: number): void {
    if (value !== undefined && value !== null) {
      this._qtyControl.patchValue(value);
    }
  }

  registerOnChange(fn: (qty: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  /**
   * Trigger internal changes and push form values up.
   * @param value : any
   */
  onQtyChanged(value: any) {
    value = parseInt(value);
    this.onChange(value);

    if (value > this.dropdownRange) {
      this.updateVisibility();
      this.focusInput();
    }
  }

  //Todo
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this._qtyControl.disable() : this._qtyControl.enable();
  }

  private updateVisibility() {
    this.inputHasBeenShown = true;
  }

  private focusInput() {
    setTimeout(function() {
      this.inputEl.nativeElement.focus();
    }.bind(this),0);
  }
}
