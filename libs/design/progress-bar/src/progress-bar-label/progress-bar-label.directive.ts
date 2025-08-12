import { Directive } from '@angular/core';

/**
 * Use label to help users understand what the progress represents.
 *
 * @usage
 * ```html
 * <daff-progress-bar-label>File upload</daff-progress-bar-label>
 * ```
 */
@Directive({
  /* eslint-disable-next-line @angular-eslint/directive-selector */
  selector: 'daff-progress-bar-label',
})
export class DaffProgressBarLabelDirective {}
