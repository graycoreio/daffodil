import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnInit, ContentChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { DaffSidebarMode } from '../helper/sidebar-mode';
import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';

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
export class DaffSidebarViewportComponent implements OnInit, AfterViewInit {

  constructor(private ref: ChangeDetectorRef) {
  }
  _animationState: string;

  @ContentChild(DaffSidebarComponent, { static: false }) sidebar: DaffSidebarComponent;
  /**
   * Internal tracking variable for the state of sidebar viewport.
   */
  _opened = false;

  _mode: DaffSidebarMode = 'side';

  /**
   * The mode to put the sidebar in
   */
  @Input()
  get mode(): DaffSidebarMode { return this._mode; }
  set mode(value: DaffSidebarMode) {
    this._mode = value;
    this._animationState = getAnimationState(this.opened, this.animationsEnabled);
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

  get animationsEnabled(): boolean {
    return (this.mode === 'over' || this.mode === 'push') ? true : false;
  }

  ngOnInit() {
    this._animationState = getAnimationState(this.opened, this.animationsEnabled);

  }
  ngAfterViewInit() {
    if (this.sidebar) {
      this.sidebar.escapePressed.subscribe(() => {
        this.onEscape();
      })
    }
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


  _backdropClicked(): void {
    this.backdropClicked.emit();
  }

  get hasBackdrop(): boolean {
    return (this.mode === 'over' || this.mode === 'push');
  }
  onEscape() {
    if (this.hasBackdrop) {
      this.opened = false;
      this.ref.markForCheck();
    }
  }
}