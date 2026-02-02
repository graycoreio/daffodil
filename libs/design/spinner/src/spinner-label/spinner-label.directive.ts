import { Directive } from '@angular/core';

/**
 * Labels are used to describe the loading state and provide context for users.
 * They are optional.
 *
 * @usage
 * ```html
 * <daff-spinner-label>Loading</daff-spinner-label>
 * ```
 */
@Directive({
  /* eslint-disable-next-line @angular-eslint/directive-selector */
  selector: 'daff-spinner-label',
})
export class DaffSpinnerLabelDirective {}
