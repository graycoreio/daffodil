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

  /**
   * @docs-private
   */
  @HostBinding('disabled') get disabledAttribute() {
    return this.disabled || null;
  }

  /**
   * @docs-private
   *
   * Implemented as part of DaffFormFieldControl.
   */
  @Input({ transform: booleanAttribute }) disabled = false;

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
      tap((state) => this.disabled = state.disabled),
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
