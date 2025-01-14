import { AnimationEvent } from '@angular/animations';
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  NgZone,
  ElementRef,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  HostListener,
  Inject,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  daffFocusableElementsSelector,
  DaffFocusStackService,
  DaffOpenable,
  DaffOpenableDirective,
} from '@daffodil/design';

import { isOpening } from './is-opening';
import { daffSidebarAnimations } from '../animation/sidebar-animation';
import {
  DaffSidebarAnimationState,
  getAnimationState,
} from '../animation/sidebar-animation-state';
import { getSidebarAnimationWidth } from '../animation/sidebar-animation-width';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { DaffSidebarSide } from '../helper/sidebar-side';

/**
 * DaffSidebarComponent is heavily based upon the work done by the @angular/components
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer`.
 */
@Component({
  selector: 'daff-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{
    directive: DaffOpenableDirective,
    inputs: ['open'],
    outputs: ['toggled'],
  }],
  animations: [
    daffSidebarAnimations.transformSidebar,
  ],
  standalone: true,
})
export class DaffSidebarComponent implements DaffOpenable {
  /**
   * @docs-private
   *
   * The CSS classes set.
   */
  @HostBinding('class') get classes() {
    return {
      'daff-sidebar': true,
      [this.side]: true,
      [this.mode]: true,
    };
  };

  /**
   * The animation state of the sidebar.
   */
  @HostBinding('@transformSidebar') get transformSidebar() {
    return {
      value: getAnimationState(this.openDirective.open, this.mode),
      params: { width: getSidebarAnimationWidth(this.side, this.width) },
    };
  }

  /**
   * Event fired when `ESC` key is pressed when the sidebar has focus
   */
  @Output() escapePressed: EventEmitter<void> = new EventEmitter<void>();

  /**
   * What side of the viewport to show the sidebar on.
   */
  @Input() side: DaffSidebarSide = 'left';

  /**
   * The mode of the sidebar.
   */
  @Input() mode: DaffSidebarMode = 'side';

  /**
   * The width of the sidebar.
   */
  get width() {
    return this._elementRef.nativeElement.offsetWidth;
  }

  get open() {
    return this.openDirective.open;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _focusStack: DaffFocusStackService,
    private openDirective: DaffOpenableDirective,
    @Inject(DOCUMENT) private _doc: any,
  ) {
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
     *
     */
    this._ngZone.runOutsideAngular(() => {
      fromEvent<KeyboardEvent>(this._elementRef.nativeElement, 'keydown').pipe(
        filter(event => event.key === 'Escape'),
      ).subscribe(event => this._ngZone.run(() => {
        this.escapePressed.emit();
        event.stopPropagation();
      }));
    });
  }

  private _focusTrap: ConfigurableFocusTrap;

  /**
   * Animation event that can be used to hook into when the transformSidebar
   * animation begins. This is used in sidebar to determine when to show the
   * visibility of the sidebar so that the animation does not jump as the element is shown.
   */
  @HostListener('@transformSidebar.start', ['$event']) onAnimationStart(e: AnimationEvent) {
    if (e.toState === 'open' || e.toState === 'under-open' || e.toState === 'side-fixed-open') {
      this._elementRef.nativeElement.style.visibility = 'visible';
    }
  }

  /**
   * Animation event that can be used to hook into when the
   * transformSidebar animation is complete.
   */
  @HostListener('@transformSidebar.done', ['$event']) onAnimationComplete(e: AnimationEvent) {
    if(isOpening(<DaffSidebarAnimationState>e.fromState, <DaffSidebarAnimationState>e.toState)) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

      const focusableChild = (<HTMLElement>this._elementRef.nativeElement.querySelector(daffFocusableElementsSelector));

      this._focusStack.push(this._doc.activeElement);

      if(focusableChild) {
        focusableChild.focus();
      } else {
        this._elementRef.nativeElement.tabIndex = 0;
        (<HTMLElement>this._elementRef.nativeElement).focus();
      }
    } else {
      if(this._focusTrap) {
        this._focusTrap.destroy();
        this._focusTrap = undefined;
        this._focusStack.pop();
      }
    }

    /**
     * This is used in sidebar to determine when to hide the visibility
     * of the sidebar so that the animation does not jump as the element is hidden.
     */
    if (e.toState === 'closed' || e.toState === 'under-closed' || e.toState === 'side-fixed-closed') {
      this._elementRef.nativeElement.style.visibility = 'hidden';
    } else {
      this._elementRef.nativeElement.style.visibility = null;
    }
  }

  /**
   * Reveal the contents of the sidebar
   */
  reveal() {
    this.openDirective.reveal();
  }

  /**
   * Hide the contents of the sidebar
   */
  hide() {
    this.openDirective.hide();
  }

  /**
   * Toggle the visibility of the sidebar
   */
  toggle() {
    this.openDirective.toggle();
  }
}
