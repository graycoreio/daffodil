import { NgControl } from '@angular/forms';

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
export abstract class DaffFormFieldControl {
  readonly ngControl: NgControl | null;

  readonly controlType?: any;

  readonly focused: boolean;

  abstract focus(event?: MouseEvent): void;
}
