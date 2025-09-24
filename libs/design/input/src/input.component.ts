/* eslint-disable quote-props */
import {
  Component,
  Optional,
  Self,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  HostBinding,
  booleanAttribute,
} from '@angular/core';
import {
  NgControl,
  Validators,
} from '@angular/forms';
import {
  merge,
  of,
  map,
  tap,
} from 'rxjs';

import {
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design/form-field';

/**
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[daff-input]',
  template: '<ng-content></ng-content>',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

    { provide: DaffFormFieldControl, useExisting: DaffInputComponent },
  ],
  host: {
    'class': 'daff-input',
    '(focus)': 'focus()',
    '(blur)': 'blur()',
    '[attr.id]': '_id',
    '[attr.aria-describedby]': 'ariaDescribedBy',
  },
})
export class DaffInputComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {
  /** @docs-private */
  controlType = 'native-input';

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  focused = false;

  private get _id() {
    return this.formField?.id;
  };

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  @Input({ transform: booleanAttribute }) disabled = false;

  /**
   * @docs-private
   */
  @HostBinding('disabled') get disabledAttribute() {
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
  @HostBinding('required') get requiredAttribute() {
    return this.required || null;
  }

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

  /** @docs-private */
  focus() {
    this.focused = true;
    this.emitState();

  }

  /** @docs-private */
  blur() {
    this.focused = false;
    this.emitState(true);
  }

  constructor(
    /** @docs-private */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
    @Optional() private formField: DaffFormFieldComponent,
  ) {
    super(ngControl);

    if(!this.formField) {
      throw new Error('DaffInputComponent needs to be used with the DaffFormFieldComponent.');
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

  /** @docs-private */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
