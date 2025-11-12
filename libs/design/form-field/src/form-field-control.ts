import { NgControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { DaffFormFieldState } from './form-field-state';

/**
 * An abstract class that form controls must implement to be used with the DaffFormFieldComponent.
 *
 * > **Note**
 * > This is an abstract class instead of an interface to support Angular's dependency injection. Interfaces are erased during TypeScript compilation and cannot be used as DI tokens.
 *
 * > By using an abstract class, the Angular DI container can match the class token for injection.
 */
export abstract class DaffFormFieldControl<T> {
  /**
   * The type of the control (e.g., 'input', 'select', 'textarea').
   * Used to apply control-specific styling or behavior.
   */
  abstract readonly controlType?: any;

  /**
   * Whether the control supports automatic label behavior.
   * When `true`, the form field will associate the label with the control using `for` and `id` attributes.
   *
   * Defaults to `true`.
   */
  readonly supportsAutoLabelling?: boolean = true;

  /**
   * Whether the control currently has focus.
   */
  abstract readonly focused: boolean;

  /**
   * Whether the control is required for form validation.
   */
  abstract readonly required: boolean;

  /**
   * Whether the control is disabled.
   */
  abstract readonly disabled: boolean;

  /**
   * The unique identifier for the control element.
   */
  readonly id?: string;

  /**
   * Whether the label should be in the raised position.
   * By default, matches the focused state.
   */
  get raised() {
    return this.focused;
  };

  /**
   * Sets focus on the control.
   *
   * @param event - Optional event that triggers the focus.
   */
  abstract focus(event?: Event): void;

  /**
   * The current value of the control.
   */
  abstract readonly value: T;

  constructor(public ngControl: NgControl | null) {}

  /**
   * Computes the current state of the form field control.
   * Combines control properties and form validation state.
   */
  get state(): DaffFormFieldState {
    return {
      focused: this.focused,
      filled: !!this.value,
      disabled: this.ngControl?.disabled ?? this.disabled,
      error: this.ngControl?.errors && (this.ngControl?.dirty || this.ngControl?.touched),
      valid: !this.ngControl?.errors && this.ngControl?.dirty,
    };
  }

  _stateChanges = new BehaviorSubject({
    focused: false,
    filled: false,
    disabled: false,
    error: false,
    valid: true,
  });

  /**
   * Observable stream of state changes for the form field control.
   */
  stateChanges: Observable<DaffFormFieldState>;

  /**
   * Emits the current state.
   */
  emitState(deferred = false) {
    if(deferred) {
      Promise.resolve().then(() => {
        this._stateChanges.next(this.state);
      });
      return;
    }

    this._stateChanges.next(this.state);
  }
};
