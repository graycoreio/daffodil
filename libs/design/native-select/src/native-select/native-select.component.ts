import {
  Component,
  Optional,
  Self,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  booleanAttribute,
} from '@angular/core';
import {
  NgControl,
  Validators,
} from '@angular/forms';
import {
  map,
  merge,
  of,
  tap,
} from 'rxjs';

import {
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design/form-field';

/**
 * DaffNativeSelectComponent provides the same functionality as a native `<select>` and contains custom styling and functionality.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select[daff-native-select]',
  template: '<ng-content></ng-content>',
  styleUrl: './native-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

    { provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent },
  ],
  host: {
    class: 'daff-native-select',
    '(focus)': 'focus()',
    '(blur)': 'blur()',
    '[attr.id]': '_id',
    '[attr.aria-describedby]': 'ariaDescribedBy',
    '[disabled]': 'disabledAttribute',
    '[required]': 'requiredAttribute',
  },
})

export class DaffNativeSelectComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {
  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  controlType = 'native-select';

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  focused = false;

  /**
   * Implemented as part of DaffFormFieldControl.
   */
  private get _id() {
    return this.formField?.id;
  };

  /**
   * @docs-private
   */
  get ariaDescribedBy() {
    if(this.formField.hasErrorMessage()) {
      return this.formField.errorMessageId;
    } else if(this.formField.hasHint()) {
      return this.formField.hintId;
    } else {
      return null;
    }
  }

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  @Input({ transform: booleanAttribute }) disabled = false;

  /**
   * @docs-private
   */
  get disabledAttribute() {
    return this.disabled || null;
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

  /**
   * @docs-private
   */
  get requiredAttribute() {
    return this.required || null;
  }

  /**
   * @docs-private
   */
  focus() {
    this.focused = true;
    this.emitState();
  }

  /**
   * @docs-private
   */
  blur() {
    this.focused = false;
    this.emitState(true);
  }

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
    // @Optional is intentional so that we can control the error message thrown when the DaffFormFieldComponent is not used.
    @Optional() private formField: DaffFormFieldComponent,
  ) {
    super(ngControl);

    if(!this.formField) {
      throw new Error('DaffNativeSelectComponent needs to be used with the DaffFormFieldComponent.');
    }
  }

  /** @docs-private */
  ngOnInit() {
    this.stateChanges = merge(
      this._stateChanges.asObservable(),
      this.ngControl ? this.ngControl.statusChanges : of(undefined),
    ).pipe(
      map(() => this.state),
      tap((state) => this.disabled = state.disabled),
    );
  }

  /**
   * @docs-private
   */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
