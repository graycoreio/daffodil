import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  Optional,
  Output,
  EventEmitter,
} from '@angular/core';

import { DaffRadioSetComponent } from '../radio-set/radio-set.component';

let radioUniqueId = 0;
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'daff-radio',
  templateUrl: './radio.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffRadioComponent implements OnInit {

  /**
   * @docs-private
   */
  @HostBinding('attr.role') role = 'radio';
  /**
   * @docs-private
   */
  @HostBinding('class.focused') get focusClass() {
    return this.focused === true;
  };
  /**
   * @docs-private
   */
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled === true;
  };

  /**
   * @docs-private
   */
  _checked = false;
  /**
   * Output event of selection being changed
   */
  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter();


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
  @Input() name = '';

  /**
   * Used for aria-label. Default to name if user does not input a label.
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-label') label: string = this.name;

  /**
   * Used for aria-labelledby.
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-labelledby') labelledby: string;


  disabled = false;
  focused = false;

  constructor(@Optional() private radioset: DaffRadioSetComponent) {
    radioUniqueId++;
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    this.name = this.radioset ? this.radioset.name : this.name;
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
   * toggles checked attribute on
   */
  select(): void {
    this.checked = true;
  }
  /**
   * toggles checked attribute off
   */
  deselect(): void {
    this.checked = false;
  }
  onChange() {
    this.select();
  };
}
