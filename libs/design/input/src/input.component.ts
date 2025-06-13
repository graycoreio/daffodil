/* eslint-disable quote-props */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Optional,
  Self,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  HostBinding,
} from '@angular/core';
import {
  NgControl,
  Validators,
} from '@angular/forms';
import {
  merge,
  of,
  map,
} from 'rxjs';

import {
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design';

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

  /** @docs-private */
  focused = false;

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
   */
  _required: boolean;

  /**
   * @docs-private
   */
  @HostBinding('required') get requiredAttribute() {
    return this.required;
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-required') get ariaRequired() {
    return this.required;
  }

  @Input()
  get required(): boolean {

    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required);
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }

  /** @docs-private */
  focus() {
    this.focused = true;
    this.emitState();

  }

  /** @docs-private */
  blur() {
    this.focused = false;
    this.emitState();
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
    );
  }

  /** @docs-private */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
