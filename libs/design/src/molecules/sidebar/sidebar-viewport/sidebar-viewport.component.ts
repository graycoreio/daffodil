import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
  AfterContentChecked,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';

import { sidebarViewportBackdropInteractable } from './utils/backdrop-interactable';
import { sidebarViewportContentPadding } from './utils/content-pad';
import {
  isViewportContentShifted,
  sidebarViewportContentShift,
} from './utils/content-shift';
import {
  DaffSidebarAnimationStates,
  daffSidebarAnimations,
} from '../animation/sidebar-animation';
import {
  DaffSidebarViewportAnimationStateWithParams,
  getSidebarViewportAnimationState,
} from '../animation/sidebar-viewport-animation-state';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';

/**
 * The DaffSidebarViewport is the "holder" of sidebars throughout an entire application.
 * It's generally only used once, like
 *
 * ```html
 * <daff-sidebar-viewport>
 *    <daff-sidebar></daff-sidebar>
 *    <p>Some Content</p>
 * </daff-sidebar-viewport>
 * ```
 *
 * Importantly, its possible for there to be multiple sidebars of many modes
 * at the same time. @see {@link DaffSidebarMode }
 *
 * Since this is a functional component, it's possible to have multiple "open" sidebars
 * at the same time. As a result, this component attempts to gracefully handle these situations.
 * However, importantly, there can only be one sidebar of each mode, on each side, at any given time.
 * If this is violated, this component will throw an exception.
 */
@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformContent,
  ],
})
export class DaffSidebarViewportComponent implements AfterContentChecked {
  @HostBinding('class.daff-sidebar-viewport') hostClass = true;

  @HostBinding('class.bounded-nav') get boundedNavClass() {
    return this.boundedNav;
  }

  /**
   * Whether or not the navbar should be bounded.
   * Note that this is really only available
   * when there is a `side-fixed` sidebar.
   */
  @Input() boundedNav = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
  ) { }

  /**
   * The list of sidebars in the viewport.
   *
   * @docs-private
   */
  @ContentChildren(DaffSidebarComponent, { descendants: false }) private sidebars: QueryList<DaffSidebarComponent>;

  /**
   * The number of pixels that the main content of the page should be shifted to
   * right when there are child sidebars.
   */
  private _shift = '0px';

  /**
   * The left padding on the content when left side-fixed sidebars are open.
   */
  public _contentPadLeft = 0;

  /**
   * The left padding on the nav when left side-fixed sidebars are open.
   */
  public _navPadLeft = 0;

  /**
   * The right padding on the content when right side-fixed sidebars are open.
   */
  public _contentPadRight = 0;

  /**
   * The right padding on the content when right side-fixed sidebars are open.
   */
  public _navPadRight = 0;

  /**
   * Whether or not the backdrop is interactable
   */
  _backdropInteractable = false;

  /**
   * The animation state
   */
  _animationState: DaffSidebarViewportAnimationStateWithParams = { value: DaffSidebarAnimationStates.CLOSED, params: { shift: '0px' }};

  /**
   * Event fired when the backdrop is clicked. This is often used to close the sidebar.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  ngAfterContentChecked() {
    const nextShift = sidebarViewportContentShift(this.sidebars) + 'px';
    if (this._shift !== nextShift) {
      this._shift = nextShift;
      this.updateAnimationState();
      this.cdRef.markForCheck();
    }

    const nextBackdropInteractable = sidebarViewportBackdropInteractable(this.sidebars);
    if (this._backdropInteractable !== nextBackdropInteractable) {
      this._backdropInteractable = nextBackdropInteractable;
      this.updateAnimationState();
      this.cdRef.markForCheck();
    };

    const nextLeftPadding = sidebarViewportContentPadding(this.sidebars, 'left');
    if(this._contentPadLeft !== nextLeftPadding) {
      this._contentPadLeft = nextLeftPadding;
      this._navPadLeft = this.boundedNav ? this._contentPadLeft : null;
      this.updateAnimationState();
      this.cdRef.markForCheck();
    }

    const nextRightPadding = sidebarViewportContentPadding(this.sidebars, 'right');
    if(this._contentPadRight !== nextRightPadding) {
      this._contentPadRight = nextRightPadding;
      this._navPadRight = this.boundedNav ? this._contentPadRight : null;
      this.updateAnimationState();
      this.cdRef.markForCheck();
    }
  }

  /**
   * @docs-private
   *
   * Updates the animation state of the viewport depending upon the state
   * of all sidebars within the viewport.
   */
  private updateAnimationState() {
    this._animationState = {
      value: getSidebarViewportAnimationState(
        this.sidebars.reduce((acc: boolean, sidebar) => acc || isViewportContentShifted(sidebar.mode, sidebar.open), false),
      ),
      params: { shift: this._shift },
    };
  }

  /**
   * @docs-private
   * The called when the backdrop of the viewport is clicked upon.
   */
  _backdropClicked(): void {
    this.backdropClicked.emit();
  }
}
