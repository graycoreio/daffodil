import {
  Component,
  OnInit,
  Input,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

/**
 * @deprecated See {@link DaffQuantityFieldComponent}
 */
@Component({
  selector: 'daff-qty-dropdown',
  styleUrls: ['./qty-dropdown.component.scss'],
  templateUrl: './qty-dropdown.component.html',
})
export class DaffQtyDropdownComponent implements OnInit {

  private readonly dropdownRange = 9;

  @Input() qty: number;
  @Input() id: number | string;
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter<number>();

	/**
	 * @docs-private
	 */
	dropdownItemCounter: number[];
	/**
	 * @docs-private
	 */
	inputHasBeenShown: boolean;
	/**
	 * @docs-private
	 */
	onChange = (qty: number) => {};
	/**
	 * @docs-private
	 */
  onTouched = () => {};

  constructor(private renderer: Renderer2) { }

  /**
   * @docs-private
   */
  ngOnInit() {
    this.dropdownItemCounter = Array.from(Array(this.dropdownRange),(x,i)=>i);

    if (!this.qty) {
      this.qty = 1;
    }
  }

  /**
   * @docs-private
   */
  writeValue(qty: number): void {
    this.qty = qty;
    this.onChange(this.qty);
  }

  /**
   * @docs-private
   */
  registerOnChange(fn: (qty: number) => void): void {
    this.onChange = fn;
  }

  /**
   * @docs-private
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * @docs-private
   */
  setDisabledState(isDisabled: boolean): void {
    if (this.inputHasBeenShown) {
      this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
    } else {
      this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
    }
  }

  /**
   * @docs-private
   */
  get showQtyInputField(): boolean {
    if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
      return false;
    } else {
      this.inputHasBeenShown = true;
      return true;
    }
  }

  /**
   * @docs-private
   */
  onChangedWrapper(value: any) {
    value = parseInt(value, 10);
    if (value === 10) {
      this.selectInput();
    }
    this.qtyChanged.emit(value);
    this.onChange(value);
  }

  private isQtyOutsideDropdownRange() {
    return this.qty > this.dropdownRange;
  }

  private selectInput() {
    const that = this;
    setTimeout(() => {
      const input = <HTMLInputElement>document.getElementById('input_' + that.id);
      input.select();
    });
  }
}
