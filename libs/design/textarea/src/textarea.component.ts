import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Optional,
  Self,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
  OnInit,
  Input,
} from '@angular/core';
import {
  NgControl,
  Validators,
} from '@angular/forms';
import {
  map,
  merge,
  of,
} from 'rxjs';

import {
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design';

/**
 * DaffTextareaComponent provides the same functionality as a native `<textarea>` and contains custom styling and functionality.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea[daff-textarea]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

    { provide: DaffFormFieldControl, useExisting: DaffTextareaComponent },
  ],
})
export class DaffTextareaComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {

  /** @docs-private */
  controlType = 'native-textarea';

  /**
   * @docs-private
   */
  @HostBinding('class.daff-textarea') class = true;

  /**
   * @docs-private
   */
  focused = false;

  private get _id() {
    return this.formField?.id;
  };

  /**
   * @docs-private
   */
  @HostBinding('attr.id') get internalId() {
    return this._id;
  }

  private _disabled = false;

  /**
   * @docs-private
   */
  @Input() get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  /**
   * @docs-private
   */
  @HostListener('focus') focus() {
    this.focused = true;
    this.emitState();
  }

  /**
   * @docs-private
   */
  @HostListener('blur') blur() {
    this.focused = false;
    this.emitState();
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

  /**
   * @docs-private
   */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required);
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-describedby') get ariaDescribedBy() {
    if(this.formField.hasErrorMessage()) {
      return this.formField.errorMessageId;
    } else if(this.formField.hasHint()) {
      return this.formField.hintId;
    } else {
      return null;
    }
  }

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
    private formField: DaffFormFieldComponent,
  ) {
    super(ngControl);
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

  /**
   * @docs-private
   */
  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  /**
   * @docs-private
   */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
