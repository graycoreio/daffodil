import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, Output, EventEmitter } from '@angular/core';

import { daffColorMixin, DaffColorable, DaffPalette } from '../../core/colorable/colorable';
import { daffProgressIndicatorAnimation } from './animation/progress-indicator-animation';
import { AnimationEvent } from '@angular/animations';

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffProgressIndicatorBase{
  constructor(public _elementRef: ElementRef) {}
}

const _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary') 

@Component({
  selector: 'daff-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() percentage = 0;

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

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
