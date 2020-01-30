import {
  Component, NgZone, ElementRef, Output, EventEmitter,
  Input, ChangeDetectionStrategy, OnInit, HostBinding
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
import { DaffSidebarMode } from '../helper/sidebar-mode';

/**
 * DaffSidebarComponent is heavily based upon the work done by the @angular/material2
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer` which
 * follows a stricter `dumb` component pattern than `mat-drawer`.
 */
@Component({
  selector: 'daff-sidebar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformSidebar
  ]
})
export class DaffSidebarComponent implements OnInit {

  /**
   * Internal tracking of the opened state of the sidebar.
   */
  _opened = false;

  /**
   * Internal tracking of the mode of the sidebar.
   */
  _mode: DaffSidebarMode = 'side';

  /**
   * Internal tracking of the animation state of the sidebar; e.g. open or closed.
   */
  _animationState: string;

  @HostBinding('class.daff-sidebar') class = true;
  @HostBinding('@transformSidebar') get transformSidebar() { return this._animationState; }
  @HostBinding('class.side') get sideMode() { return  this._mode === 'side'; }
  @HostBinding('class.push') get pushMode() { return this._mode === 'push'; }
  @HostBinding('class.over') get overMode() { return this._mode === 'over'; }
  @HostBinding('class.fixed-in-viewport') get fixedViewport() { return this.fixedInViewport; }

  /**
   * Determines whether or not the sidebar should be fixed in the viewport.
   */
  @Input() fixedInViewport: boolean = false;

  /**
   * The position of the sidebar in relation to the content it overlaps.
   */
  @Input()
  get mode(): DaffSidebarMode { return this._mode; }
  set mode(value: DaffSidebarMode) {
    this._mode = value;
    this._animationState = getAnimationState(this._opened, this.animationsEnabled);
  }

  /**
   * The opened state of the sidebar.
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) {
    this._opened = value;
    this._animationState = getAnimationState(this._opened, this.animationsEnabled);
  }


  /**
   * Event fired when `ESC` key is pressed when the sidebar has focus.
   */
  @Output() escapePressed: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone
  ) {

    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
     *
     */
    this._ngZone.runOutsideAngular(() => {
      fromEvent<KeyboardEvent>(this._elementRef.nativeElement, 'keydown').pipe(
          filter(event => {
            return event.key === 'Escape';
          })
      ).subscribe(event => this._ngZone.run(() => {
          this.escapePressed.emit();
          event.stopPropagation();
      }));
    });
  }

  ngOnInit() {
    this._animationState = getAnimationState(this._opened, this.animationsEnabled);
  }

  get animationsEnabled(): boolean {
    return ( this._mode === 'over' || this._mode === 'push' );
  }
}
