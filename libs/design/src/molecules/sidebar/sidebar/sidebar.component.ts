import {
  Component,
  ViewEncapsulation,
  NgZone,
  ElementRef,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
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
  styleUrls: ['./sidebar.component.scss'],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.transformSidebar,
  ],
})
export class DaffSidebarComponent {
  /**
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
      value: getAnimationState(this.open, this.mode === 'over' || this.mode === 'side-fixed'),
      params: { width:  getSidebarAnimationWidth(this.side, this.width) },
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
   * Whether or not the sidebar is open.
   */
  @Input() open = false;

  /**
   * The width of the sidebar.
   */
  get width() {
    return this._elementRef.nativeElement.offsetWidth;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
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
}
