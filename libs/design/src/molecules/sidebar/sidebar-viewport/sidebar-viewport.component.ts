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
	/**
	 * @docs-private
	 */
  _animationState: string;

	/**
	 * @docs-private
	 */
  @ContentChild(DaffSidebarComponent) sidebar: DaffSidebarComponent;
  /**
   * Internal tracking variable for the state of sidebar viewport.
	 * @docs-private
   */
  _opened = false;

	/**
	 * @docs-private
	 */
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
	 * Property for the "opened" state of the sidebar
	 */
	@Input()
	get opened(): boolean { return this._opened; }
	set opened(value: boolean) {
		this._opened = value;
		this._animationState = getAnimationState(value, this.animationsEnabled);
	}
  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the sidebar
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * @docs-private
	 */
	get animationsEnabled(): boolean {
    return (this.mode === 'over' || this.mode === 'push') ? true : false;
  }

	/**
	 * @docs-private
	 */
  ngOnInit() {
    this._animationState = getAnimationState(this.opened, this.animationsEnabled);
	}

	/**
	 * @docs-private
	 */
  ngAfterViewInit() {
    if (this.sidebar) {
      this.sidebar.escapePressed.subscribe(() => {
        this.onEscape();
      })
    }
  }

	/**
	 * @docs-private
	 */
  _backdropClicked(): void {
    this.backdropClicked.emit();
  }

	/**
	 * @docs-private
	 */
  get hasBackdrop(): boolean {
    return (this.mode === 'over' || this.mode === 'push');
	}

	/**
	 * @docs-private
	 */
  onEscape() {
    if (this.hasBackdrop) {
      this.opened = false;
      this.ref.markForCheck();
    }
  }
}
