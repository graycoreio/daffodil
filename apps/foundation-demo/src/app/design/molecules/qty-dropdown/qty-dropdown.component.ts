import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent implements OnInit {

  @Input() qty: number;
  @Input() id: number;

  static readonly dropdownRange = 9;
  dropdownItemCounter: number[];
  inputHasBeenShown: boolean;
  onChange = (qty: number) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.dropdownItemCounter = Array.from(Array(QtyDropdownComponent.dropdownRange),(x,i)=>i);
  }

  writeValue(qty: number): void {
    this.qty = qty;
    this.onChange(this.qty);
  }

  registerOnChange(fn: (qty: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.inputHasBeenShown) {
      this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
    } else {
      this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
    }
  }

  get showQtyInputField() : boolean {
    if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
      return false
    } else {
      this.inputHasBeenShown = true;
      return true;
    }
  }

  onChangedWrapper(value: any) {
    value = parseInt(value);
    if (value === 10) {
      this.selectInput();
    }
    this.onChange(value);
  }

  private isQtyOutsideDropdownRange() {    
    return this.qty > QtyDropdownComponent.dropdownRange;
  }

  private selectInput() {
    let that = this;
    setTimeout(function() {
      let input = document.getElementById("input_" + that.id) as HTMLInputElement;
      input.select();
    });
  }
}
