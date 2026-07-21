import {
  Component,
  ChangeDetectionStrategy,
  booleanAttribute,
  input,
  output,
  computed,
  contentChild,
} from '@angular/core';

import { DaffColorableDirective } from '@daffodil/design';

import { DaffProgressBarLabelDirective } from './progress-bar-label/progress-bar-label.directive';

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

let daffProgressBarId = 0;

/**
 * A progress bar provides visual feedback about the duration or progress of a task or operation.
 *
 * @usage
 * ```html
 * <daff-progress-bar>
 *  <daff-progress-bar-label>File upload</daff-progress-bar-label>
 * </daff-progress-bar>
 * ```
 */
@Component({
  selector: 'daff-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  host: {
    class: 'daff-progress-bar',
    '[class.indeterminate]': 'indeterminate()',
  },
})
export class DaffProgressBarComponent {
  constructor(
    private colorable: DaffColorableDirective,
  ) {
    this.colorable.defaultColor = 'primary';
  }

  /**
   * @docs-private
   */
  _label = contentChild(DaffProgressBarLabelDirective);

  /**
   * Sets the percentage completion of the progression,
   * expressed as a whole number between 0 and 100.
   */
  percentage = input(0, { transform: (val: number) => clamp(val, 0, 100) });

  /**
   * @docs-private
   */
  ariaValueNow = computed(() => this.indeterminate() ? null : this.percentage());

  /**
   * @docs-private
   */
  ariaLabelledBy = computed(() => {
    if(!this.ariaLabel() && this.id) {
      return this.id;
    }
  });

  /**
   * @docs-private
   *
   * The unique id of the progress bar.
   */
  id = 'daff-progress-bar-' + ++daffProgressBarId;

  /**
   * An `aria-label` for the progress bar.
   */
  ariaLabel = input('', { alias: 'aria-label' });

  /**
   * Property to set the animation of a progress bar to
   * run for an indefinite amount of time.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
   **/
  indeterminate = input(false, { transform: booleanAttribute });

  /**
   * @docs-private
   *
   * Returns the transform style for the determinate progress bar.
   */
  _determinateBarTransform(): string {
    return `scaleX(${this.percentage() / 100})`;
  }

  /**
   * An event that emits each time the progression reaches 100%
   * and the animation is finished.
   */
  finished = output<void>();

  /**
   * @docs-private
   *
   * Handles the CSS transition end event.
   */
  onTransitionEnd(event: TransitionEvent): void {
    if (event.propertyName === 'transform' && this.percentage() === 100) {
      this.finished.emit();
    }
  }
}
