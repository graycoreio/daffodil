import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { DaffSidebarMode } from '../helper/sidebar-mode';
import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';

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
export class DaffSidebarViewportComponent implements OnInit{

  _animationState: string;
  
  
  /**
   * Internal tracking variable for the state of sidebar viewport.
   */
  _opened = false;
  
  /**
   * The mode to put the sidebar in
   */
  @Input() mode: DaffSidebarMode = "side";
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
  
  get animationsEnabled() : boolean {
    return ( this.mode === "over" || this.mode === "push" ) ? true : false;
  }

  ngOnInit() {
    this._animationState = getAnimationState(this.opened, this.animationsEnabled);
  }
  
  /**
   * Property for the "opened" state of the sidebar
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { 
    this._opened = value;
    this._animationState = getAnimationState(value, this.animationsEnabled);
  }
  
  
  _backdropClicked() : void {
    this.backdropClicked.emit();
  }
  
  get hasBackdrop() : boolean {
    return (this.mode === "over" || this.mode === "push");
  }
}