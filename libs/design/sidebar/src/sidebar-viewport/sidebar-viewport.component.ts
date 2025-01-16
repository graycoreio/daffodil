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
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarViewportBackdropComponent } from '../sidebar-viewport-backdrop/sidebar-viewport-backdrop.component';

/**
 * The DaffSidebarViewportComponent is the "holder" of sidebars throughout an entire application.
 *
 * `<daff-sidebar-viewport>` should only ever be used once in an application,
 * but it's possible for there to be multiple sidebars of many modes
 * at the same time. See {@link DaffSidebarMode}.
 *
 * Since this is a functional component, it's possible to have multiple "open" sidebars
 * at the same time. As a result, this component attempts to gracefully handle these situations.
 * However, importantly, there can only be one sidebar of each mode, on each side, at any given time.
 *
 * If this is violated, this component will throw an exception.
 *
 * @example Using the sidebar viewport
 * ```html
 * <daff-sidebar-viewport>
 *    <daff-sidebar></daff-sidebar>
 *    <p>Site content</p>
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
  @HostBinding('class.daff-sidebar-viewport') hostClass = true;

  @HostBinding('class') get classes() {
    return {
      'daff-sidebar-viewport': true,
      [this.navPlacement]: true,
      'pad-left': this._isPaddedLeft,
      'pad-right': this._isPaddedRight,
    };
  };

  get isNavOnSide() {
    return this.navPlacement === DaffNavPlacementEnum.BESIDE;
  }

  onContentAnimationStart(e: AnimationEvent) {
    if(e.toState === 'open') {
      this._elementRef.nativeElement.style.overflow = 'clip';
    }
  }

  onContentAnimationDone(e: AnimationEvent) {
    if(e.toState === 'closed') {
      this._elementRef.nativeElement.style.overflow = null;
    }
  }

  /**
   * The placement of the nav in relation to the sidebar. The default is set to `top`.
   * Note that this is really only available when there is a `side-fixed` sidebar.
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
   * The called when the backdrop of the viewport is clicked upon.
   */
  _backdropClicked(): void {
    this.backdropClicked.emit();
  }
}
