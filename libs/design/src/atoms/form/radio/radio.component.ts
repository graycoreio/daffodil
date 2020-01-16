import {
  Component, HostBinding, Input,
  ViewChild, ElementRef,
  ChangeDetectionStrategy,
  Output, EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

let uniqueRadioId = 0;
/**
 * DaffRadioComponent provides the same functionality as a native `<input type="radio">` and contains custom styling and functionality.
 */
@Component({
  selector: 'daff-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffRadioComponent {
  constructor(private cd: ChangeDetectorRef) {}

  @HostBinding('class.daff-radio') class = true;
  @HostBinding('attr.role') role = 'radio';

  @HostBinding('class.daff-radio--selected') get isSelected() {
    return this._selected;
  }

  @HostBinding('class.daff-radio--focused') get isFocused() {
    return this._focused;
  }

  @HostBinding('attr.aria-checked') get ariaChecked() {
    return this._selected;
  }

  @Input()
  set selected(value: boolean) {
    if (typeof value === 'boolean') {
      this._selected = value;
      this.cd.markForCheck();
    } else {
      throw new Error('DaffRadioComponent expects a boolean');
    }
  }
  get selected() {
    return this._selected;
  }

  /**
   * A uniquely generated radio id, autoincremented to
   * ensure accessible radios without ids.
   */
  _uniqueRadioId = 'daff-radio' + ++uniqueRadioId;

  /**
   * Tracks the focus state of the native input.
   */
  _focused: boolean;

  /**
   * The name of the set of radios to which this radio belongs.
   */
  @Input() name: string;

  /**
   * The unique id of the radio.
   */
  @Input() id: string = this._uniqueRadioId;
  /**
   * The value of the radio.
   */
  @Input() value: any;

  /**
   * The native HTMLElement that backs the radio.
   */
  @ViewChild('nativeRadio', { static: false }) nativeRadio: ElementRef<HTMLInputElement>;

  onSelect: Function;

  _selected: boolean;

  @Output() changed: EventEmitter<any> = new EventEmitter();

  onBlur()  {
    this._focused = false;
  }

  onFocus()  {
    this._focused = true;
  }

  _onRadioClicked() {
    this.changed.emit(this.value);
  }

  focus() {
    this.nativeRadio.nativeElement.focus();
  }
}
