import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  Self,
  ChangeDetectorRef,
  booleanAttribute,
  OnInit,
  input,
  signal,
  computed,
  effect,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  Validators,
} from '@angular/forms';
import {
  Subject,
  merge,
  of,
  map,
  tap,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design/form-field';

import { DaffSfQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffSfQuantitySelectComponent } from './quantity-select/quantity-select.component';

@Component({
  selector: 'daff-sf-quantity-field',
  templateUrl: './quantity-field.component.html',
  providers: [
    {
      provide: DaffFormFieldControl,
      useExisting: DaffSfQuantityFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSfQuantityInputComponent,
    DaffSfQuantitySelectComponent,
  ],
})
export class DaffSfQuantityFieldComponent extends DaffFormFieldControl<number> implements ControlValueAccessor, DaffFormFieldControl<number>, OnInit {

  /**
   * @docs-private
   */
  quantity = signal<number>(1);

  /**
   * @docs-private
   */
  _inputHasBeenShown = signal(false);

  /**
   * @docs-private
   */
  _showInputField = computed(() => {
    this.quantity();

    return this._inputHasBeenShown() || this.quantity() >= this.selectMax();
  });

  /**
   * @docs-private
   */
  _showSelectField = computed(() => !this._showInputField());

  /** @docs-private */
  get controlType() {
    return this._showInputField() ? 'native-input' : 'native-select';
  }

  /**
   * @docs-private
   */
  input = viewChild(DaffSfQuantityInputComponent);

  /**
   * @docs-private
   */
  select = viewChild(DaffSfQuantitySelectComponent);

  /**
   * The minimum valid value of the quantity field.
   * Must be greater than or equal to 1.
   */
  min = input(1);

  /**
   * The maximum valid value of the quantity field.
   * Must be greater than `min`.
   */
  max = input(500);

  /**
   * The maximum number allowed before the field switches from a dropdown to an input.
   * When the value reaches this number, an input field is shown instead of a select.
   * Default is 10.
   */
  selectMax = input(10);

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  get focused() {
    return this.select()?.focused || this.input()?.focused;
  };

  private _disabled = false;

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.ngControl?.disabled ?? this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }

  private _required = false;

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  @Input({ transform: booleanAttribute })
  get required(): boolean {
    return this.ngControl?.control?.hasValidator(Validators.required) ?? this._required;
  }
  set required(value: boolean) {
    this._required = value;
  }

  _destroyed = new Subject<boolean>();

  /**
   * @docs-private
   *
   * Returns the lesser of max and selectMax.
   */
  get _maxFloor(): number {
    return Math.min(this.max(), this.selectMax());
  }

  private _focusSetWhenSwitching = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private cd: ChangeDetectorRef,
    @Optional() private formField: DaffFormFieldComponent,
  ) {
    super(ngControl);

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    if(!this.formField) {
      throw new Error('DaffSfQuantityFieldComponent needs to be used with the DaffFormFieldComponent.');
    }

    effect(() => {
      if(this.quantity() >= this.selectMax()){
        this._inputHasBeenShown.set(true);
      }
    });

    effect(() => {
      if(this._inputHasBeenShown() && this.select()?.focused) {
        this._focusSetWhenSwitching = true;
      }

      if(this._focusSetWhenSwitching && this.input()) {
        this.input().focus();
        this._focusSetWhenSwitching = false;
      }
    });
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    this.stateChanges = merge(
      this._stateChanges.asObservable(),
      this.ngControl ? this.ngControl.statusChanges : of(undefined),
    ).pipe(
      map(() => this.state),
      tap((state) => this.disabled = state.disabled),
    );

    if (this.ngControl?.statusChanges) {
      this.ngControl.statusChanges.pipe(
        takeUntil(this._destroyed),
      ).subscribe(() => {
        this.emitState();
      });
    }

    if (this.ngControl?.valueChanges) {
      this.ngControl.valueChanges.pipe(
        takeUntil(this._destroyed),
      ).subscribe((value) => {
        this.quantity.set(value);
        this.cd.markForCheck();
      });
    }
  }

  private onChange(quantity: number): void {};
  private onTouched(quantity: number): void {};

  /**
   * @docs-private
   */
  writeValue(quantity: number): void {
    this.quantity.set(quantity);
    this.cd.markForCheck();
  }

  /**
   * @docs-private
   */
  registerOnChange(fn: (quantity: number) => void): void {
    this.onChange = fn;
  }

  /**
   * @docs-private
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * @docs-private
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  focus() {
    if (this.select()) {
      this.select().focus();
    }
    if (this.input()) {
      this.input().focus();
    }
    this.emitState();
  }

  /**
   * @docs-private
   *
   * Called when child components gain focus
   */
  _onChildFocus() {
    this.onTouched(this.value);
    this.emitState();
  }

  /**
   * @docs-private
   *
   * Called when child components lose focus
   */
  _onChildBlur() {
    this.onTouched(this.value);
    this.emitState(true);
  }

  /**
   * @docs-private
   *
   * Called when child components change value
   */
  _onChildValueChange(value: number) {
    this.quantity.set(value);
    this.onChange(value);

    this.cd.markForCheck();
  }

  /**
   * Implemented as part of DaffFormFieldControl.
   */
  get value(): number {
    return this.quantity();
  }
}
