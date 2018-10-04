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
  }

  _animationState: string;

  /**
   * Property for the "show" state of the modal
   */
  @Input()
  get show(): boolean { return this._show; }
  set show(value: boolean) { 
    this._show = value;
    this._animationState = getAnimationState(value);
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
}