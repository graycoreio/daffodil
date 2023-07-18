import { AnimationEvent } from '@angular/animations';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2,
  HostBinding,
} from '@angular/core';

import {
  daffColorMixin,
  DaffColorable,
  DaffPalette,
} from '@daffodil/design';

import { daffProgressBarAnimation } from './animation/progress-bar-animation';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffProgressBarBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffProgressBarBase = daffColorMixin(DaffProgressBarBase, 'primary');

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
   * The percentage completion of the progression,
   * expressed as a whole number between 0 and 100.
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() percentage: number = 0;

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
    // @ts-ignore: @angular/animations typing error on event.toState as string
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

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
