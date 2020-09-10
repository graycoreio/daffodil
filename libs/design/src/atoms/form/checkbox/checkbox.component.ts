import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core';

let checkboxIdNum = 0;

@Component({
  selector: 'daff-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DaffCheckboxComponent {
  @ViewChild('inputElement', {static: true, read: ElementRef}) nativeCheckbox: ElementRef<HTMLInputElement>;
  /**
   * The name of the checkbox.
   */
  @Input() name: string;
  /**
   * The value of the checkbox.
   */
  @Input() value: any;
  /**
   * Boolean value to determine whether or not the checkbox is checked.
   */
  _checked = false;
  @Input()
  get checked() {
    return this._checked;
  }
  set checked(value: boolean) {
    if (this._checked === value) {
      return;
    }
    if (value === true) {
      this.nativeCheckbox.nativeElement.checked = true;
      this.becameChecked.emit(this._checked);
    }
    else {
      this.nativeCheckbox.nativeElement.checked = false;
      this.becameUnchecked.emit();
    }

    this._checked = value;
  }
  /**
   * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
   */
  @Input() id: string = 'daff-checkbox-' + checkboxIdNum;
  /**
   * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
   */
  //tslint:disable-next-line:no-input-rename
  @Input('aria-label') label: string = name;
  /**
   * The aria-labeledby of the checkbox.
   */
  //tslint:disable-next-line:no-input-rename
  @Input('aria-labelledby') labeledBy: string;

  /**
   * Event on whether or not the selection has changed.
   */
  @Output() becameChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() becameUnchecked: EventEmitter<void> = new EventEmitter();

  /**
   * Whether the checkbox is focused
   */
  focused: boolean;
  /**
   * Whether the checkbox is disabled.
  */
  disabled: boolean;

  /**
   * The role of the component. Set to "checkbox".
   */
  @HostBinding('attr.role') role = 'checkbox';


  _onChange(val: Event) {
    (val.target as HTMLInputElement).checked ? this.select() : this.deselect();
  };
  @HostBinding('class.focused') get focusClass() {
    return this.focused === true;
  };
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled === true;
  };
  /**
   * Sets focused to false.
   */
  onBlur() {
    this.focused = false;
  }
  /**
   * Sets focused to true.
   */
  onFocus() {
    this.focused = true;
  }

  constructor(private _cdRef: ChangeDetectorRef) {
    /**
     * Increments id number on new checkbox. Gurantees unique ID on generation.
     */
    checkboxIdNum++;
  }
  /**
   * Sets checked to true.
  */
  select() {
    this.checked = true;
    this._cdRef.markForCheck();
  }
  /**
   * Sets checked to false
  */
  deselect() {
    this.checked = false;
    this._cdRef.markForCheck();
  }
}