/* eslint-disable quote-props */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';

import { DaffColorableDirective } from '@daffodil/design';

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

@Component({
  selector: 'daff-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  host: {
    'class': 'daff-progress-bar',
    '[class.indeterminate]': 'indeterminate',
    'role': 'progressbar',
    '[attr.aria-label]': 'indeterminate ? "loading" : null',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': '100',
    '[attr.aria-valuenow]': 'indeterminate ? null : percentage',
  },
})
export class DaffProgressBarComponent {
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private colorable: DaffColorableDirective,
  ) {
    this.colorable.defaultColor = 'primary';
  }

  private _percentage = 0;

  /**
   * Sets the percentage completion of the progression,
   * expressed as a whole number between 0 and 100.
   */
  @Input() get percentage(): number {
    return this._percentage;
  };
  set percentage(val: number) {
    this._percentage = clamp(val, 0, 100);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Property to set the animation of a progress bar to
   * run for an indefinite amount of time.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
   **/
  @Input({ transform: coerceBooleanProperty }) indeterminate = false;

  /**
   * @docs-private
   *
   * Returns the transform style for the determinate progress bar.
   */
  _determinateBarTransform(): string {
    return `scaleX(${this.percentage / 100})`;
  }

  /**
   * An event that emits each time the progression reaches 100%
   * and the animation is finished.
   */
  @Output() finished: EventEmitter<void> = new EventEmitter();

  /**
   * @docs-private
   *
   * Handles the CSS transition end event.
   */
  onTransitionEnd(event: TransitionEvent): void {
    if (event.propertyName === 'transform' && this.percentage === 100) {
      this.finished.emit();
    }
  }
}
