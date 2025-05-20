import { NgControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { DaffFormFieldState } from './form-field-state';

/**
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 */
export abstract class DaffFormFieldControl<T> {
  abstract readonly controlType?: any;

  abstract readonly focused: boolean;

  get raised() {
    return this.focused;
  };

  abstract focus(event?: Event): void;

  abstract readonly value: T;

  constructor(public ngControl: NgControl | null) {
  }

  get state(): DaffFormFieldState {
    return {
      focused: this.focused,
      filled: !!this.value,
      disabled: this.ngControl?.disabled,
      error: this.ngControl?.errors && (this.ngControl?.dirty || this.ngControl?.touched),
      valid: !this.ngControl?.errors && (this.ngControl?.dirty || this.ngControl?.touched),
    };
  }

  _stateChanges = new BehaviorSubject({
    focused: false,
    filled: false,
    disabled: false,
    error: false,
    valid: true,
  });

  stateChanges: Observable<DaffFormFieldState>;

  emitState() {
    this._stateChanges.next(this.state);
  }
};
