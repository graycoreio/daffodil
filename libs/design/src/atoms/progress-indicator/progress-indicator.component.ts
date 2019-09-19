import { Component, Input, ChangeDetectionStrategy, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { daffColorMixin, DaffColorable, DaffPalette } from '../../core/colorable/colorable';
import { daffProgressIndicatorAnimation } from './animation/progress-indicator-animation';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffProgressIndicatorBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary') 

@Component({
  selector: 'daff-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-progress-indicator'
  },
  animations: [
    daffProgressIndicatorAnimation.fill
  ]
})
export class DaffProgressIndicatorComponent extends _daffProgressIndicatorBase implements DaffColorable{

  /**
   * The color of the progress indicator
   * See DaffColorable
   */
  @Input() color: DaffPalette;

  /**
   * The percentage completion of the progression, 
   * expressed as a whole number between 0 and 100.
   * 
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() percentage: number = 0;

  /**
   * An event that emits each time the progression reaches 100% 
   * and the animation is finished
   */
  @Output() finished: EventEmitter<void> = new EventEmitter();


  /**
   * Calculates when the progress animation is fully completed
   * @param event: AnimationEvent
   */
  onAnimationComplete(event: AnimationEvent) : void {
    // @ts-ignore: @angular/animations typing error on event.toState as string
    // See: https://github.com/angular/angular/issues/26507
    if(event.toState === "100" || event.toState === 100) {
      this.finished.emit();
    }
  }

  get fillState(): any {
    return {
      value: this.percentage,
      params: {
        percentage: this.percentage 
      }
    };
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
