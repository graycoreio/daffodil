import { Component, ViewEncapsulation, Input, HostBinding, NgZone, ElementRef, Output, EventEmitter, Optional, Inject, AfterContentInit, OnDestroy } from '@angular/core';

import { ESCAPE } from '@angular/cdk/keycodes';
import { FocusMonitor, FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';

import { filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { daffSidebarAnimations, DaffSidebarAnimationStates } from './sidebar.animation';

/**
 * DaffSidebar is heavily based upon the work done by the @angular/material2
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer` which 
 * follows a stricter `dumb` component pattern.
 */

@Component({
  selector: 'daff-sidebar',
  host: {
    'class': 'daff-sidebar',
    '[@transform]': '_animationState',
  },
  styleUrls: ['./sidebar.component.scss'],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  animations: [daffSidebarAnimations.transformSidebar],
})
export class DaffSidebarComponent implements AfterContentInit, OnDestroy{

  private _enableAnimations: boolean = false;
  private _animationState: DaffSidebarAnimationStates = DaffSidebarAnimationStates.VOID;

  private _focusTrap: FocusTrap;
  private _elementFocusedBeforeDrawerWasOpened: HTMLElement | null = null;

  /**
   * Property for the "opened" state of the sidebar
   */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { 
    if(this._opened == value){return;}
    this._opened = value;
    this._openedChanged.emit(value);

    if (value) {
      this._animationState = this._enableAnimations ? DaffSidebarAnimationStates.OPEN : DaffSidebarAnimationStates.OPEN_INSTANT;
    } else {
      this._animationState = DaffSidebarAnimationStates.VOID;
      this._restoreFocus();
    }
  }

  private _opened: boolean = false;

  private _openedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Event fired when `ESC` key is pressed
   */
  @Output() escapePressed: EventEmitter<void> = new EventEmitter<void>();

  //See @angular/material/sidenav
  constructor(
    private _focusTrapFactory: FocusTrapFactory,
    private _focusMonitor: FocusMonitor,
    private _platform: Platform,
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
    @Optional() @Inject(DOCUMENT) private _doc: any) {
    
    this._openedChanged.subscribe((opened: boolean) => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement as HTMLElement;
        }

        if (this._isFocusTrapEnabled && this._focusTrap) {
          this._trapFocus();
        }
      } else {
        this._restoreFocus();
      }
    });

    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
     *
     */
    this._ngZone.runOutsideAngular(() => {
      fromEvent<KeyboardEvent>(this._elementRef.nativeElement, 'keydown').pipe(
          filter(event => {
            console.log(event);
            return event.keyCode === ESCAPE
          })
      ).subscribe(event => this._ngZone.run(() => {
          this.escapePressed.emit();
          event.stopPropagation();
      }));
    });
  }

  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  

  ngAfterContentChecked() {
    // Enable the animations after the lifecycle hooks have run, in order to avoid animating
    // drawers that are open by default. When we're on the server, we shouldn't enable the
    // animations, because we don't want the drawer to animate the first time the user sees
    // the page.
    if (this._platform.isBrowser) {
      this._enableAnimations = true;
    }
  }

  
  private _trapFocus() {
    this._focusTrap.focusInitialElementWhenReady().then(hasMovedFocus => {
      // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
      // still works. We need to check that `focus` is a function due to Universal.
      if (!hasMovedFocus && typeof this._elementRef.nativeElement.focus === 'function') {
        this._elementRef.nativeElement.focus();
      }
    });
  }

  private _restoreFocus() {
    const activeEl = this._doc && this._doc.activeElement;

    if (activeEl && this._elementRef.nativeElement.contains(activeEl)) {
      if (this._elementFocusedBeforeDrawerWasOpened instanceof HTMLElement) {
        this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, 'program');
      } else {
        this._elementRef.nativeElement.blur();
      }
    }

    this._elementFocusedBeforeDrawerWasOpened = null;
  }

  get _isFocusTrapEnabled(): boolean {
    return this.opened;
  }
}