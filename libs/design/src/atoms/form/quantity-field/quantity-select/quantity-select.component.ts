import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffNativeSelectComponent } from '../../native-select/public_api';

/**
 * Create an array of numbers from min to max, not including max.
 */
export const makeValueArray = (min: number, max: number, increment: number) =>
  Array(max - min).fill(0).map((x, i) => (i * increment) + min);

@Component({
  selector: 'daff-quantity-select',
  templateUrl: './quantity-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffQuantitySelectComponent {

  @ViewChild(DaffNativeSelectComponent) select: DaffNativeSelectComponent;

  /**
   * @docs
   * The minimum number selectable.
   */
  @Input() min = 1;

  /**
   * @docs
   * The maximum number selectable;
   */
  @Input() max = 10;

  /**
   * @docs
   * Property used to determine whether or not the DaffQuantitySelectComponent is
   * used in a situation whether the `max` isn't a true max.
   */
  @Input() extendable = true;

  /**
   * The amount to increment between "min" and "max".
   */
  private increment = 1;

  _value = 1;

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.ngControl.control.patchValue(this._value);
    this.changeDetectorRef.markForCheck();
  }

  constructor(public ngControl: NgControl, private changeDetectorRef: ChangeDetectorRef) {}

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(e) {
    this.value = e.target.value;
  }

  get focused(): boolean {
    return this.select.focused;
  }

  focus() {
    this.select.focus();
  }

  onFocus() {
    this.ngControl.control.markAsTouched();
  }

  /**
   * A helper function for easily making options for the `select`.
   */
  get valueArray() {
    return makeValueArray(this.min, this.max, this.increment);
  }
}
