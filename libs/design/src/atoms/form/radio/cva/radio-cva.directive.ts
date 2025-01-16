import {
  Directive,
  Input,
  OnInit,
  Self,
  Optional,
  forwardRef,
} from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { DaffRadioComponent } from '../radio.component';
import { DaffRadioRegistry } from '../registry/radio-registry';

/**
 * ControlValueAccessor functionality for the DaffRadio
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'daff-radio[ngModel], daff-radio[formControl], daff-radio[formControlName]',
  standalone: false,
})
export class DaffRadioControlValueAccessorDirective implements OnInit, ControlValueAccessor {
  _onChange: () => void;
  _onTouched: () => void;

  /**
   * The value of the ControlValueAccessor
   */
  @Input() value: any;

  /**
   * The name of the ControlValueAccessor
   */
  @Input() name: string;

  constructor(
    @Optional() @Self() public _control: NgControl,
    private _registry: DaffRadioRegistry,
    private _radio: DaffRadioComponent,
  ) {
    if (this._control != null) {
      this._control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.writeValue(this._control.value);
    this._registry.add(this._control, this);

    this._radio.selectionChange.subscribe(
      value => value ? this._onChange() : null,
    );
  }
  /**
   *
   * writeValue function from the CVA interface
   */
  writeValue(value: any): void {
    // the this._onChange null check here is necessary because of an ongoing bug in angular forms
    // where writeValue can be called before the component initializes: https://github.com/angular/angular/issues/29218
    if (this.value === value && this._onChange) {
      this._onChange();
      this.fireSelect();
    }
  }

  /**
   * registerOnChange implemented from the CVA interface
   */
  registerOnChange(fn: any): void {
    this._onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }

  /**
   * registerOnTouch implemented from the CVA interface
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * sets the disabled state.
   */
  setDisabledState?(isDisabled: boolean): void {
    this._radio.disabled = isDisabled;
  }

  /**
    calls select function for the radio
   */
  fireSelect() {
    this._radio.select();
  }

  /**
    calls deselect function for the radio
   */
  fireDeselect() {
    this._radio.deselect();
  }
}
