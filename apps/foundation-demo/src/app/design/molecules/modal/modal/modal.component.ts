import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    daffFadeAnimations.fade
  ]
})
export class DaffModalComponent implements OnInit {

  ngOnInit() {
    this._animationState = getAnimationState(this.show);
    this.updatePositionClasses();
  }

  _modalContentClasses: {[key: string]: boolean} = {};
  _animationState: string;
  _verticalPosition: string = 'center';
  _horizontalPosition: string = 'center';

  /**
   * Property for the "show" state of the modal
   */
  @Input()
  get show(): boolean { return this._show; }
  set show(value: boolean) { 
    this._show = value;
    this._animationState = getAnimationState(value);
  }

  @Input()
  get verticalPosition(): string { return this._verticalPosition; }
  set verticalPosition(value: string) {
    if (value !== 'center' && value !== 'top' && value !== 'bottom') {
      throw Error(`verticalPosition value must be either 'center', 'top', or 'bottom'.
      Example: <daff-modal verticalPosition="top"></daff-modal>`);
    }
    this._verticalPosition = value;
    this.updatePositionClasses();
  }

  @Input()
  get horizontalPosition(): string { return this._horizontalPosition; }
  set horizontalPosition(value: string) {
    if (value !== 'center' && value !== 'left' && value !== 'right') {
      throw Error(`horizontalPosition value must be either 'center', 'left', or 'right'.
      Example: <daff-modal horizontalPosition="right"></daff-modal>`);
    }
    this._horizontalPosition = value;
    this.updatePositionClasses();
  }

  /**
   * Internal tracking variable for the state of modal.
   */
  private _show: boolean = false;

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the modal
   */
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();

  _onBackdropClicked() : void {
    this.hide.emit();
  }

  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  @Input() backdropIsVisible: boolean = true;

  private updatePositionClasses() {
    const modalContentClasses = this._modalContentClasses;
    modalContentClasses['daff-modal__content--left'] = this._horizontalPosition === 'left';
    modalContentClasses['daff-modal__content--right'] = this._horizontalPosition === 'right';
    modalContentClasses['daff-modal__content--center'] = this._horizontalPosition === 'center';
    modalContentClasses['daff-modal__content--top'] = this._verticalPosition === 'top';
    modalContentClasses['daff-modal__content--bottom'] = this._verticalPosition === 'bottom';
    modalContentClasses['daff-modal__content--middle'] = this._verticalPosition === 'center';
  }
}
