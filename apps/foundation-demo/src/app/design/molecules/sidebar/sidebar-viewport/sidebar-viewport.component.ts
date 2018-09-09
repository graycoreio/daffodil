import { Component, Output, EventEmitter, Input, ViewEncapsulation, ContentChild, ChangeDetectionStrategy, AfterContentInit, OnDestroy } from '@angular/core';
import { DaffSidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { Subscription } from 'rxjs';
import { daffSidebarAnimations } from 'apps/foundation-demo/src/app/design/molecules/sidebar/sidebar-viewport/sidebar-viewport.animation';

@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformSidebar,
    daffSidebarAnimations.transformContent,
    daffSidebarAnimations.fadeBackdrop
  ]
})
export class DaffSidebarViewportComponent{

  _animationState: string = "void";

  /**
   * Property for the "opened" state of the sidebar
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { 
    if(this._opened == value){return;}
    this._opened = value;
    this._openedChanged.emit(value);
    this._animationState = getAnimationState(value);
  }

  /**
   * Output event to monitor when opened changes
   */
  
  private _openedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Internal tracking variable for the state of sidebar viewport.
   */
  private _opened: boolean = false;

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the sidebar
   */
  @Output() onBackdropClicked: EventEmitter<void> = new EventEmitter<void>();

  _onBackdropClicked() : void {
    this.onBackdropClicked.emit();
  }

  hasBackdrop() : boolean {
    return this._opened && ( this.mode == DaffSidebarMode.OVER || this.mode == DaffSidebarMode.PUSH);
  }

  get openClass() : string {
    return this._opened ? "open" : null;
  }

  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  @Input() backdropIsVisible: boolean = true;

  /**
   * The mode to put the sidebar in
   */
  @Input() mode: DaffSidebarMode = DaffSidebarMode.SIDE;

}


export const getAnimationState = (open : boolean = false, enabled: boolean = true) => {
  if(open && enabled){
      return "open";
  }
  else if(open && !enabled) {
    return "open-instant";
  }
  else {
    return "void";
  }
}