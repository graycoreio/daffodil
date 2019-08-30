import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { DaffSidebarMode } from '../helper/sidebar-mode';
import { daffSidebarAnimations, DaffSidebarAnimationState } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformSidebar,
    daffSidebarAnimations.transformContent
  ]
})
export class DaffSidebarViewportComponent {
  
  
  /**
   * Internal tracking variable for the state of sidebar viewport.
   */
  _opened : boolean = false;

  
  _mode : DaffSidebarMode = "side";

  get _width() {
    return "250px";
  }
  
  /**
   * The mode to put the sidebar in
   */
  @Input()
  get mode(): DaffSidebarMode { return this._mode; }
  set mode(value: DaffSidebarMode) { 
    this._animationState = {
      value: getAnimationState(this._opened, value),
      params: {
        sidebarWidth: this._width,
      }
    }
    this._mode = value;
  }

  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() backdropIsVisible: boolean = true;
  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the sidebar
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  _animationState: DaffSidebarAnimationState;
  
  /**
   * Property for the "opened" state of the sidebar
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { 
    this._animationState = {
      value: getAnimationState(value, this.mode),
      params: {
        sidebarWidth: this._width,
      }
    }
    this._opened = value;
  }
  
  _backdropClicked() : void {
    this.backdropClicked.emit();
  }
  
  get hasBackdrop() : boolean {
    return (this.mode === "over" || this.mode === "push");
  }
}