import { Component, ViewEncapsulation, Input } from '@angular/core';

import { daffFadeAnimation } from '../../../animations/fade-animation';
import { getAnimationState } from '../../../animations/fade-animation-state';

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
    if (value !== 'before' && value !== 'after') {
      throw Error(`positionX value must be either 'before' or 'after'.
      Example: <daff-dropdown-body positionX="before"></daff-dropdown-body>`);
    }
    this._positionX = value;
    this.updatePositionClasses();
  }

  @Input()
  get positionY(): string { return this._positionY; }
  set positionY(value: string) {
    if (value !== 'above' && value !== 'below') {
      throw Error(`positionY value must be either 'above' or 'below'.
      Example: <daff-dropdown-body positionY="below"></daff-dropdown-body>`);
    }
    this._positionY = value;
    this.updatePositionClasses();
  }
  
  bodyClassList: {[key: string]: boolean} = {};

  ngOnInit() {
    this.updatePositionClasses();
    this._animationState = getAnimationState(this._showBody);
  }

  private updatePositionClasses() {
    const bodyClasses = this.bodyClassList;
    bodyClasses['daff-dropdown__body--before'] = this._positionX === 'before';
    bodyClasses['daff-dropdown__body--after'] = this._positionX === 'after';
    bodyClasses['daff-dropdown__body--above'] = this.positionY === 'above';
    bodyClasses['daff-dropdown__body--below'] = this.positionY === 'below';
  }

  toggleBody() {
    this._showBody = !this._showBody;
    this._animationState = getAnimationState(this._showBody);
  }

  closeBody() {
    if (this._showBody) {
      this.toggleBody();
    }
  }
}
