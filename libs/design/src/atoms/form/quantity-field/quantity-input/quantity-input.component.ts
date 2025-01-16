import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  UntypedFormControl,
  NgControl,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DaffInputComponent } from '../../input/public_api';

@Component({
  selector: 'daff-quantity-input',
  templateUrl: './quantity-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffQuantityInputComponent implements OnInit, OnDestroy {
  @ViewChild(DaffInputComponent) input: DaffInputComponent;

  /**
   * @docs
   * The minimum number for the quantity input field
   */
  @Input() min = 1;

  /**
   * @docs
   * The maximum number for the quantity input field
   */
  @Input() max = 10;

  /**
   * A new control for the nested native input.
   * We don't bind the native input directly to the inherited form control
   * to avoid triggering updates on the input event.
   * Instead, we listen for the change event and manually patch form control values.
   */
  _inputControl = new UntypedFormControl();

  get focused(): boolean {
    return this.input?.focused;
  }

  _destroyed = new Subject();

  get value() {
    return this.ngControl.control.value;
  }
  set value(value) {
    const val = Math.min(Math.round(coerceNumberProperty(value)), this.max);
    this.ngControl.control.patchValue(val);
    this._inputControl.patchValue(val);
    this.changeDetectorRef.markForCheck();
  }

  get disabled() {
    return this.ngControl.control.disabled;
  }

  constructor(
    public ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this._inputControl.patchValue(this.ngControl.control.value);
    this.setInputDisabled();
    this.ngControl.statusChanges.pipe(
      takeUntil(this._destroyed),
    ).subscribe(() => {
      this.setInputDisabled();
    });
  }

  ngOnDestroy() {
    this._destroyed.next(true);
  }

  focus() {
    this.input.focus();
  }

  onFocus() {
    this.ngControl.control.markAsTouched();
  }

  onBlur() {
    if (this.value === null || this.value === undefined) {
      this.value = 1;
      this.changeDetectorRef.markForCheck();
    }
  }

  /**
   * Callback function fired when the value changes.
   * Used to pass the value back up to the ngControl.
   */
  onValueChange(e: any) {
    this.value = e.target.value;
  }

  private setInputDisabled() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.ngControl.disabled
      ? this._inputControl.disable()
      : this._inputControl.enable();
  }
}
