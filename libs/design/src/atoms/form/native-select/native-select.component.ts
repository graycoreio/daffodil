import {
  Component,
  Optional,
  Self,
  ElementRef,
  HostListener,
  HostBinding,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  map,
  merge,
  of,
} from 'rxjs';

import { DaffFormFieldComponent } from '../form-field/form-field/form-field.component';
import { DaffFormFieldControl } from '../form-field/form-field-control';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select[daff-native-select]',
  template: '<ng-content></ng-content>',
  styleUrl: './native-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

    { provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent },
  ],
  standalone: false,
})

export class DaffNativeSelectComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {
  /**
   * @docs-private
   */
  controlType = 'native-select';

  /**
   * @docs-private
   */
  @HostBinding('class.daff-native-select') class = true;

  /**
   * @docs-private
   */
  focused = false;

  private _id = '';

  /**
   * @docs-private
   */
  @HostBinding('attr.id') get internalId() {
    return this._id;
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

  /**
   * @docs-private
   *
   * TODO: Update functionality to match other control during refactor.
   */
  disabled = false;

  /**
   * @docs-private
   * TODO: Update functionality to match other control during refactor.
   */
  required = false;

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

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
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
    );
  }

  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  get value() {
    return this._elementRef.nativeElement.value;
  }
}
