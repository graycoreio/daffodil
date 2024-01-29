import { AnimationEvent } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2,
  HostBinding,
  ChangeDetectorRef,
} from '@angular/core';

import {
  daffColorMixin,
  DaffColorable,
} from '@daffodil/design';

import { daffProgressBarAnimation } from './animation/progress-bar-animation';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffProgressBarBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffProgressBarBase = daffColorMixin(DaffProgressBarBase, 'primary');

export const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  animations: [
    daffProgressBarAnimation.fill,
  ],
})
export class DaffProgressBarComponent extends _daffProgressBarBase implements DaffColorable {

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

  @HostBinding('role') get role() {
    return 'progressbar';
  }

  @HostBinding('attr.aria-label') get ariaLabel() {
    return this._indeterminate ? 'loading' : null;
  }

  @HostBinding('attr.aria-valuemin') ariaValueMin = '0';
  @HostBinding('attr.aria-valuemax') ariaValueMax = '100';
  @HostBinding('attr.aria-valuenow') get ariaValueNow() {
    return this.percentage;
  }

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    super(elementRef, renderer);
  }

  private _percentage = 0;
  private _indeterminate = false;

  /**
   * Sets the percentage completion of the progression,
   * expressed as a whole number between 0 and 100.
   *
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
   * An event that emits each time the progression reaches 100%
   * and the animation is finished
   */
  @Output() finished: EventEmitter<void> = new EventEmitter();

  /**
   * Calculates when the progress animation is fully completed
   *
   * @param event: AnimationEvent
   */
  onAnimationComplete(event: AnimationEvent): void {
    // @ts-expect-error: @angular/animations typing error on event.toState as string
    // See: https://github.com/angular/angular/issues/26507
    if(event.toState === '100' || event.toState === 100) {
      this.finished.emit();
    }
  }

  /**
   * @docs-private
   */
  get fillState(): any {
    return {
      value: this.percentage,
      params: {
        percentage: this.percentage,
      },
    };
  }
}
