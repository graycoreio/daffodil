import {
  Component,
  output,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  Optional,
  input,
  model,
} from '@angular/core';
import {
  UntypedFormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'daff-sf-quantity-input',
  templateUrl: './quantity-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffInputComponent,
    ReactiveFormsModule,
  ],
})
export class DaffSfQuantityInputComponent implements OnInit, OnDestroy {
  @ViewChild(DaffInputComponent) input: DaffInputComponent;

  /**
   * Event emitted when the quantity input gains focus
   */
  focusChange = output<void>();

  /**
   * Event emitted when the quantity input loses focus
   */
  blurChange = output<void>();

  /**
   * Event emitted when the quantity input's value changes
   */
  valueChange = output<number>();

  quantity = model<number>();

  /**
   * The minimum number for the quantity input field
   */
  min = input(1);

  /**
   * The maximum number for the quantity input field
   */
  max = input(10);

  /**
   * @docs-private
   */
  get focused() {
    return this.input.focused;
  }

  /**
   * A new control for the nested native input.
   * We don't bind the native input directly to the inherited form control
   * to avoid triggering updates on the input event.
   * Instead, we listen for the change event and manually patch form control values.
   */
  _inputControl = new UntypedFormControl();

  _destroyed = new Subject();

  get value(): number {
    return this.ngControl?.control.value || this.quantity();
  }
  set value(value: number) {
    if (value === 0 || Number.isNaN(value)) {
      value = this.value;
    }
    const val = Math.max(Math.min(Math.round(value), this.max()), this.min());
    this.ngControl?.control.patchValue(val);
    this._inputControl.patchValue(val);
    this.quantity.set(val);
    this.changeDetectorRef.markForCheck();
  }

  constructor(
    @Optional() public ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  /**
   * @docs-private
   */
  ngOnInit() {
    this._inputControl.patchValue(this.ngControl?.control.value ?? this.quantity());
    this.setInputDisabled();
    this.ngControl?.statusChanges.pipe(
      takeUntil(this._destroyed),
    ).subscribe((s) => {
      this.setInputDisabled();
    });
  }

  ngOnDestroy() {
    this._destroyed.next(true);
  }

  focus() {
    this.input.focus();
  }

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(event: Event) {
    if(event.target instanceof HTMLInputElement) {
      this.value = event.target.valueAsNumber;
    }

    this.valueChange.emit(this.value);
  }

  private setInputDisabled() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.ngControl?.disabled
      ? this._inputControl.disable()
      : this._inputControl.enable();
  }
}
