import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  OnInit,
  OnDestroy,
  Optional,
  input,
  output,
} from '@angular/core';
import {
  NgControl,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DaffFormFieldControl } from '@daffodil/design/form-field';
import { DaffNativeSelectComponent } from '@daffodil/design/native-select';

/**
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
export class DaffSfQuantitySelectComponent implements OnInit, OnDestroy {
  @ViewChild(DaffNativeSelectComponent) select: DaffNativeSelectComponent;

  /**
   * A new control for the nested native select.
   * We don't bind the native select directly to the inherited form control
   * to avoid triggering updates on the input event.
   * Instead, we listen for the change event and manually patch form control values.
   */
  _selectControl = new UntypedFormControl();

  _destroyed = new Subject();

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

  /**
   * The amount to increment between "min" and "max".
   */
  private increment = 1;

  get value(): number {
    return this.formFieldControl.value;
  }
  set value(value: number) {
    this.formFieldControl.ngControl?.control.patchValue(value);
    this._selectControl.patchValue(value);
    this.changeDetectorRef.markForCheck();
  }

  constructor(
    @Optional() public ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
    private formFieldControl: DaffFormFieldControl<number>,
  ) {}

  /**
   * @docs-private
   */
  ngOnInit() {
    this._selectControl.patchValue(this.formFieldControl.value);
    this.setSelectDisabled();
    this.formFieldControl.stateChanges.pipe(
      takeUntil(this._destroyed),
    ).subscribe(() => {
      this.setSelectDisabled();
    });
  }

  ngOnDestroy() {
    this._destroyed.next(true);
  }

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

    this.value = val;

    this.valueChange.emit(val);
  }

  /**
   * A helper function for easily making options for the `select`.
   */
  get valueArray() {
    return makeValueArray(this.min(), this.max(), this.increment);
  }

  private setSelectDisabled() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.formFieldControl.disabled
      ? this._selectControl.disable()
      : this._selectControl.enable();
  }
}
