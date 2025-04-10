import { AnimationEvent } from '@angular/animations';
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
  Inject,
  SkipSelf,
  Optional,
  OnDestroy,
} from '@angular/core';

import { hasParentViewport } from './helper/has-parent-viewport';
import {
  DaffNavPlacement,
  DaffNavPlacementEnum,
} from './nav-placement';
import {
  DAFF_SIDEBAR_SCROLL_TOKEN,
  DaffSidebarScroll,
  daffSidebarViewportScrollFactory,
} from './scroll-token/scroll.token';
import { sidebarViewportBackdropInteractable } from './utils/backdrop-interactable';
import { isSidebarViewportContentPadded } from './utils/content-pad';
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
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarViewportBackdropComponent } from '../sidebar-viewport-backdrop/sidebar-viewport-backdrop.component';

/**
 * DaffSidebarViewportComponent serves as the container for managing sidebars across an entire application.
 * Because it's a functional component, it supports multiple simultaneously open sidebar and is designed to
 * handle these scenarios gracefully.
 *
 * > However, there is one key contraint: only one sidebar per **mode** is allowed
 * on each **side** (e.g., left or right) at any given time.
 *
 * If this constraint is violated, the component will throw an exception to prevent unintended behavior.
 *
 * ```html
 * <daff-sidebar-viewport>
 *    <daff-sidebar></daff-sidebar>
 *    <div>Site content</div>
 * </daff-sidebar-viewport>
 * ```
 */
@Component({
  selector: 'daff-sidebar-viewport',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformContent,
  ],
  providers: [
    {
      provide: DAFF_SIDEBAR_SCROLL_TOKEN,
      useFactory: daffSidebarViewportScrollFactory,
    },
  ],
  imports: [
    DaffSidebarViewportBackdropComponent,
  ],
})
export class DaffSidebarViewportComponent implements AfterContentChecked, OnDestroy {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-sidebar-viewport') hostClass = true;

  /**
   * @docs-private
   */
  @HostBinding('class') get classes() {
    return {
      'daff-sidebar-viewport': true,
      [this.navPlacement]: true,
      'pad-left': this._isPaddedLeft,
      'pad-right': this._isPaddedRight,
    };
  };

  /**
   * @docs-private
   */
  get isNavOnSide() {
    return this.navPlacement === DaffNavPlacementEnum.BESIDE;
  }

  /**
   * @docs-private
   */
  onContentAnimationStart(e: AnimationEvent) {
    if(e.toState === 'open') {
      this._elementRef.nativeElement.style.overflow = 'clip';
    }
  }

  /**
   * @docs-private
   */
  onContentAnimationDone(e: AnimationEvent) {
    if(e.toState === 'closed') {
      this._elementRef.nativeElement.style.overflow = null;
    }
  }

  /**
   * The placement of the nav in relation to the sidebar. Note that this is really only available when there is a `side-fixed` sidebar.
   */
  @Input() navPlacement: DaffNavPlacement = DaffNavPlacementEnum.ABOVE;

  constructor(
    private cdRef: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
    @Inject(DAFF_SIDEBAR_SCROLL_TOKEN) @SkipSelf() private bodyScroll: DaffSidebarScroll,
    @Inject(DaffSidebarViewportComponent) @SkipSelf() @Optional() private parentViewport,
    @Inject(DAFF_SIDEBAR_SCROLL_TOKEN) private scroll: DaffSidebarScroll,
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

  private _isPaddedLeft = false;

  private _isPaddedRight = false;

  /**
   * @docs-private
   *
   * Whether or not the backdrop is interactable
   */
  _backdropInteractable = false;

  /**
   * @docs-private
   *
   * The animation state
   */
  _animationState: DaffSidebarViewportAnimationStateWithParams = { value: DaffSidebarAnimationStates.CLOSED, params: { shift: '0px' }};

  /**
   * Event fired when the backdrop is clicked. This is often used to close the sidebar.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * @docs-private
   */
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
      if(nextBackdropInteractable) {
        if(!this.parentViewport && !hasParentViewport(this._elementRef.nativeElement)) {
          this.bodyScroll.disable();
        } else {
          this.scroll.disable();
        }
      } else { //if we are hiding the sidebars
        if(!this.parentViewport && !hasParentViewport(this._elementRef.nativeElement)) {
          this.bodyScroll.enable();
        } else {
          this.scroll.enable();
        }
      }
    };

    this._isPaddedLeft = isSidebarViewportContentPadded(this.sidebars, 'left');
    this._isPaddedRight = isSidebarViewportContentPadded(this.sidebars, 'right');
  }

  /**
   * @docs-private
   */
  ngOnDestroy() {
    if(!this.parentViewport && !hasParentViewport(this._elementRef.nativeElement)) {
      this.bodyScroll.enable();
    } else {
      this.scroll.enable();
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
   *
   * Called when the backdrop of the viewport is clicked upon.
   */
  _backdropClicked(): void {
    this.backdropClicked.emit();
  }
}
