import {
  Component, Output, EventEmitter, Input, QueryList,
  ContentChildren, HostBinding, ViewChild, ElementRef
} from '@angular/core';

import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarViewportMode } from '../helper/sidebar-viewport-mode';
import { DaffSidebarViewportContentDirective } from '../sidebar-viewport-content/sidebar-viewport-content.directive';

/**
 * A component for managing the state of the backdrop and the content that the sidebars and backdrop overlay.
 */
@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  animations: [daffSidebarAnimations.transformContent],
})
export class DaffSidebarViewportComponent {
  @HostBinding('class.fullscreen') get fullscreenMode() {
    return this.fullscreen === true;
  }

  @HostBinding('class.push') get pushMode() {
    return this._mode === 'push';
  }

  @HostBinding('class.static') get staticMode() {
    return this._mode === 'static';
  }

  @HostBinding('class.fixed-side') get fixedSideMode() {
    return this._mode === 'fixed-side';
  }

  /**
   * The animation state of the sidebar viewport content.
   * Depends on the state of the sidebars it contains.
   */
  get _animationState(): string {
    return this.daffSidebars
      ? this.daffSidebars.reduce((prev: string, current) => {
          return current.mode === 'push' && current.opened ? 'open' : prev;
        }, 'closed')
      : 'closed';
  }

  /**
   * Determines whether the sidebar viewport content is allowed to animate.
   * Depends on the state of the sidebars it contains.
   */
  get _mode(): DaffSidebarViewportMode {
    if (this.containsAFixedInViewportSideModeSidebar()) {
      return 'fixed-side';
    } else if (this.containsSideModeSidebar()) {
      return 'static';
    } else if (this.containsPushModeSidebar()) {
      return 'push';
    } else {
      return 'static';
    }
  }

  /**
   * Whether the sidebar viewport has a backdrop. Depends on the state of the sidebars it contains.
   */
  get hasBackdrop(): boolean {
    return this.forceBackdrop || this.containsAnOpenedPushOrOverSidebar();
  }

  @ViewChild(DaffSidebarViewportContentDirective, {
    static: true,
    read: ElementRef,
  })
  content: ElementRef;

  /**
   * All sidebars this sidebar-viewport wraps.
   */
  @ContentChildren(DaffSidebarComponent) daffSidebars: QueryList<
    DaffSidebarComponent
  >;

  /**
   * State to set the viewport to cover the entire screen
   * as opposed to just the height of its content.
   *
   * This is useful if the content height is shorter than the device viewport
   * height yet you still want the backdrop to cover the entire screen.
   *
   * Note that this will prevent scrolling the content below the backdrop
   * on mobile devices. This mode also causes interference with the
   * browsers native scrolling capabilities, so be advised that you
   * will have to re-implement scroll position restoration.
   */
  @Input() fullscreen: boolean = false;

  /**
   * Input state which tracks whether or not the backdrop is rendered.
   * Typically, the backdrop visibility is dependent on the mode of
   * the child sidebars, but there are certain scenarios involving
   * dynamic rendering where we can't accurately make this assertion
   * so we have to defer to manually setting this.
   */
  @Input() forceBackdrop: boolean = false;

  /**
   * Input state for whether or not the backdrop is
   * "visible" to the human eye.
   */
  @Input() backdropIsVisible: boolean = true;

  /**
   * Event fired when the backdrop is clicked.
   * This is often used to close the sidebar.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  private containsAFixedInViewportSideModeSidebar() {
    return !!this.daffSidebars.filter(
      sidebar => sidebar.mode === 'side' && sidebar.fixedInViewport,
    ).length;
  }
  private containsAnOpenedPushOrOverSidebar(): boolean {
    return !!this.daffSidebars.filter(
      sidebar =>
        (sidebar.mode === 'push' || sidebar.mode === 'over') && sidebar.opened,
    ).length;
  }

  private containsPushModeSidebar(): boolean {
    return !!this.daffSidebars.filter(
      daffSidebar => daffSidebar.mode === 'push',
    ).length;
  }

  private containsSideModeSidebar(): boolean {
    return !!this.daffSidebars.filter(
      daffSidebar => daffSidebar.mode === 'side',
    ).length;
  }

  _backdropClicked(): void {
    this.backdropClicked.emit();
  }
}
