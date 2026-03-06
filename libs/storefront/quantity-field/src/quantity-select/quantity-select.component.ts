import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  input,
  output,
  effect,
  computed,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DaffNativeSelectComponent } from '@daffodil/design/native-select';

/**
 * @docs-private
 *
 * Create an array of numbers from min to max, not including max.
 */
export const makeValueArray = (min: number, max: number, increment: number) =>
  Array(max - min).fill(0).map((x, i) => (i * increment) + min);

@Component({
  selector: 'daff-sf-quantity-select',
  templateUrl: './quantity-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffNativeSelectComponent,
    ReactiveFormsModule,
  ],
})
export class DaffSfQuantitySelectComponent {
  @ViewChild(DaffNativeSelectComponent) select: DaffNativeSelectComponent;

  /**
   * A new control for the nested native select.
   * We don't bind the native select directly to the inherited form control
   * to avoid triggering updates on the input event.
   * Instead, we listen for the change event and manually patch form control values.
   */
  _selectControl = new UntypedFormControl();

  /**
   * The minimum number selectable. Defaults to 1.
   */
  min = input(1);

  /**
   * The maximum number selectable. Defaults to 10.
   */
  max = input(10);

  /**
   * Property used to determine whether or not the select is
   * used in a situation where the `max` isn't a true max.
   */
  extendable = input(true);

  /**
   * Event emitted when the quantity select gains focus
   */
  focusChange = output<void>();

  /**
   * Event emitted when the quantity select loses focus
   */
  blurChange = output<void>();

  /**
   * Event emitted when the quantiy select's value changes
   */
  valueChange = output<number>();

  quantity = input();

  disabled = input();

  constructor() {
    effect(() => {
      const value = this.quantity();
      this._selectControl.patchValue(value);
    });

    effect(() => {
      if(this.disabled()) {
        this._selectControl.disable();
      } else {
        this._selectControl.enable();
      }
    });
  }

  /**
   * An input for easily making options for the `select`.
   */
  valueArray = computed(() => makeValueArray(this.min(), this.max(), 1));

  get focused() {
    return this.select?.focused;
  }

  focus() {
    this.select?.focus();
  }

  /**
   * @docs-private
   *
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(event: Event) {
    const val = coerceNumberProperty((<HTMLSelectElement>event.target).value);

    this.valueChange.emit(val);
  }
}
