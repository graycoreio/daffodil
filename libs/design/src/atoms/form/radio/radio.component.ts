import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, forwardRef, Optional, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';

let radioUniqueId = 0;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'daff-radio',
  templateUrl: './radio.html',
  styleUrls: ['./radio.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaffRadioComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffRadioComponent implements OnInit {

  @HostBinding('attr.role') role = 'radio';
  @HostBinding('class.focused') get focusClass() {
    return this.focused === true;
  };
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled === true;
  };

  /**
   * Output event of selection being changed
   */
  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter();


  _checked = false;
  /**
   * The checked property of the radio
   */
  @Input()
	get checked() {
		return this._checked;
	}
	set checked(value: boolean) {
		if (this._checked !== value) {
      this._checked = value;
			this.selectionChange.emit(this.value);
		}
	}
  /**
   * The value of the radio
   */
  @Input() value: any;
  /**
   * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
   */
  @Input() id: string = 'daff-radio-' + radioUniqueId;
  /**
   * Name of the Radio
   */
  @Input() name: string;

  /**
   * Used for aria-label. Default to name if user does not input a label.
   */
  //tslint:disable-next-line:no-input-rename
  @Input('aria-label') label: string = name;
  /**
   * Used for aria-labelledby. 
   */
  //tslint:disable-next-line:no-input-rename
  @Input('aria-labelledby') labelledby: string;


  disabled = false;
  focused = false;

  constructor(@Optional() private radioset: DaffRadioSetComponent) {
    radioUniqueId++;
  }
  ngOnInit() {
    this.name = this.radioset ? this.radioset.name : this.name
  }



  /**
   * updates Focus styling
   */
  onFocus() {
    this.focused = true;
  }
  /**
   * updates Blur styling
   */
  onBlur() {
    this.focused = false;
  }
  /**
   * toggeles checked attribute on
   */
  select(): void {
    this.checked = true;
  }
  /**
   * toggeles checked attribute off
   */
  deselect(): void {
    this.checked = false;
  }
  onChange() {
    this.select();
  };
}
