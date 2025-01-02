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

import { DaffFormFieldControl } from '../form-field/form-field-control';

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
  standalone: false,
})
export class DaffInputComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {

  /** @docs-private */
  @HostBinding('class.daff-input') class = true;

  /** @docs-private */
  controlType = 'native-input';

  focused = false;

  /** @docs-private */
  @HostListener('focus') focus() {
    this.focused = true;
    this.emitState();

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
  ) {
    super(ngControl);
  }

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
