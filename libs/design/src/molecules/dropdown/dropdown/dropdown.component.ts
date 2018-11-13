import { Component, ViewEncapsulation, Input } from '@angular/core';

import { daffFadeAnimation } from '../animations/fade-animation';
import { getAnimationState } from '../animations/fade-animation-state';

@Component({
  selector: 'daff-dropdown',
  styleUrls: ['./dropdown.component.scss'],
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    daffFadeAnimation.fade
  ],
})
export class DaffDropdownComponent {
  _positionX: string = 'after';
  _positionY: string = 'below';
  _showBody: boolean = false;
  _animationState: string;

  @Input()
  get positionX(): string { return this._positionX; }
  set positionX(value: string) {
    // if (value !== 'before' && value !== 'after') {
    //   throw Error(`positionX value must be either 'before' or 'after'.
    //   Example: <daff-dropdown-body positionX="before"></daff-dropdown-body>`);
    // }
    this._positionX = value;
  }

  @Input()
  get positionY(): string { return this._positionY; }
  set positionY(value: string) {
    // if (value !== 'above' && value !== 'below') {
    //   throw Error(`positionY value must be either 'above' or 'below'.
    //   Example: <daff-dropdown-body positionY="below"></daff-dropdown-body>`);
    // }
    this._positionY = value;
  }

  @Input()
  get open(): boolean {return this._showBody; }
  set open(value: boolean) {
    this._showBody = !this._showBody;
    this._animationState = getAnimationState(this._showBody);
  }
  
  get bodyClassList(): {[key: string]: boolean} {

    return {
      'daff-dropdown__body--before': this._positionX === 'before',
      'daff-dropdown__body--after': this._positionX === 'after',
      'daff-dropdown__body--above': this.positionY === 'above',
      'daff-dropdown__body--below': this.positionY === 'below',
    };
  };

  ngOnInit() {
    this._animationState = getAnimationState(this._showBody);
  }
}
