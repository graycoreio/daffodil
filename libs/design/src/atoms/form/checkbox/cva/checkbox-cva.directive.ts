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

import { DaffCheckboxComponent } from '../checkbox.component';

/**
 * A directive for binding the DaffCheckboxComponent and the Control Value Accessor.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'daff-checkbox[ngModel], daff-checkbox[formControl], daff-checkbox[formControlName]',
  standalone: false,
})
export class DaffCheckboxControlValueAccessorDirective implements OnInit, ControlValueAccessor {
  _onChange: (val: any) => void;
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
    private _checkbox: DaffCheckboxComponent,
  ) {
    if (this._control != null) {
      this._control.valueAccessor = this;
    }
  }


  /**
   * A lifecycle method called when the directive is initialized.
   */
  ngOnInit(): void {
    // See the note about `writeValue` usage.
    this.writeValue(this._control.value);

    // Watch for user events on the component to update the state
    this._checkbox.becameChecked.subscribe(
      () => {
        this._onChange(true);
      },
    );
    this._checkbox.becameUnchecked.subscribe(
      () => {
        this._onChange(false);
      },
    );
  }

  /**
   * writes a new value down into the component.
   */
  writeValue(value: any): void {
    value = !!value;
    if (value === true) {
      this.fireSelect();
    } else {
      this.fireDeselect();
    }
  }

  /**
   * Registers the change handler
   */
  registerOnChange(fn: any): void {
    this._onChange = (val) => {
      fn(val);
    };
  }

  /**
   * Registers the touched handler
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * Sets the disabled state.
   */
  setDisabledState?(isDisabled: boolean): void {
    this._checkbox.disabled = isDisabled;
  }

  /**
   * calls the child checkbox's select function
   */
  fireSelect() {
    this._checkbox.select();
  }

  /**
   * calls the child checkbox's deselect function
   */
  fireDeselect() {
    this._checkbox.deselect();
  }

}
