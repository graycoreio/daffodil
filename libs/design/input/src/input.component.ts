import {
  Component,
  Optional,
  Self,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
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
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    { provide: DaffFormFieldControl, useExisting: DaffInputComponent },
  ],
})
export class DaffInputComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {

  /** @docs-private */
  @HostBinding('class.daff-input') class = true;

  /** @docs-private */
  controlType = 'native-input';

  /** @docs-private */
  focused = false;

  /** @docs-private */
  @HostListener('focus') focus() {
    this.focused = true;
    this.emitState();

  }

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
  @HostBinding('attr.aria-describedby') get ariaDescribedBy() {
    if(this.formField.hasErrorMessage()) {
      return this.formField.errorMessageId;
    } else if(this.formField.hasHint()) {
      return this.formField.hintId;
    } else {
      return null;
    }
  }

  /** @docs-private */
  @HostListener('blur') blur() {
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
  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  /** @docs-private */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
