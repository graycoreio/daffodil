import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding,
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
})
export class DaffProgressBarComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-progress-bar') class = true;

  /**
   * @docs-private
   */
  @HostBinding('class.indeterminate') get indeterminateClass() {
    return this._indeterminate;
  }

  /**
   * @docs-private
   */
  @HostBinding('role') get role() {
    return 'progressbar';
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-label') get ariaLabel() {
    return this._indeterminate ? 'loading' : null;
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-valuemin') ariaValueMin = '0';
  /**
   * @docs-private
   */
  @HostBinding('attr.aria-valuemax') ariaValueMax = '100';
  /**
   * @docs-private
   */
  @HostBinding('attr.aria-valuenow') get ariaValueNow() {
    return this.percentage;
  }

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private colorable: DaffColorableDirective,
  ) {
    this.colorable.defaultColor = 'primary';
  }

  private _percentage = 0;
  private _indeterminate = false;

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
  @Input() get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value: any) {
    this._indeterminate = coerceBooleanProperty(value);
  }

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
