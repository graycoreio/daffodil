import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarHeaderComponent,
} from '@daffodil/design/sidebar';

import { getAnimationState } from './animation/get-animation-state';
import { DaffViewportBackdropComponent } from './backdrop/backdrop.component';
import {
  DaffNavPlacement,
  DaffNavPlacementEnum,
} from './nav-placement';
import { DaffViewportService } from './service/viewport-service';
import { viewportBackdropInteractable } from './viewport-backdrop-interactable';
import { viewportContentShift } from './viewport-content-shift';
import { viewportContentPadding } from './viewport-padding';


//TODO handle shifting content for sidebar-fixed
//TODO handle content animations for over, under
//TODO noop backdrop clicked for BC
@Component({
  selector: 'daff-viewport',
  imports: [
    DaffViewportBackdropComponent,
  ],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-viewport',
    '[class.beside]': 'navPlacement() === "beside"',
    '[class.above]': 'navPlacement() === "above"',
    '[class]': '_animationClass()',
    '[class.pad-left]': '_isPaddedLeft()',
    '[class.pad-right]': '_isPaddedRight()',
    '[style.--daff-viewport-content-shift.px]': '_contentShift()',
  },
})
export class DaffViewportComponent {

  /**
   * The placement of the nav in relation to the sidebar. Note that this is really only available when there is a `side-fixed` sidebar.
   */
  navPlacement = input<DaffNavPlacement>(DaffNavPlacementEnum.ABOVE);

  /**
   * The list of sidebars in the viewport.
   *
   * @docs-private
   */
  sidebars = contentChildren(DaffSidebarComponent);

  /**
   * The list of sidebar headers in the viewport.
   *
   * @docs-private
   */
  sidebarHeaders = contentChildren(DaffSidebarHeaderComponent, { descendants: true });

  /**
   * Event fired when the backdrop is clicked. This is often used to close the sidebar.
   */
  backdropClicked = output<void>();

  /**
   * Whether or not the component manages its own state.
   */
  stateless = input(false);

  /**
   * @docs-private
   */
  protected _animationClass = computed<string>(() => getAnimationState(this.sidebars()));

  /**
   * @docs-private
   */
  protected _isPaddedLeft = computed<boolean>(() => viewportContentPadding(this.sidebars(), 'left'));

  /**
   * @docs-private
   */
  protected _isPaddedRight = computed<boolean>(() => viewportContentPadding(this.sidebars(), 'right'));

  /**
   * @docs-private
   */
  protected _contentShift = computed<number>(() => viewportContentShift(this.sidebars()));

  /**
   * Whether the backdrop is interactable. The backdrop is shown and clickable
   * whenever an `over` or `under` sidebar is open.
   *
   * @docs-private
   */
  protected _backdropInteractable = computed<boolean>(() => viewportBackdropInteractable(this.sidebars()));

  /**
   * The backdrop rendered while a sidebar is open.
   *
   * @docs-private
   */
  backdrop = viewChild(DaffViewportBackdropComponent);

  constructor(
    private viewportService: DaffViewportService,
  ) {
    effect(() => {
      const state = this.viewportService.state();
      const leftSidebar = this.sidebars().find((e) => e.side === 'left');
      const rightSidebar = this.sidebars().find((e) => e.side === 'right');
      if(leftSidebar && state.sidebar.left) {
        leftSidebar.open.set(state.sidebar.left.open);
      }
      if(rightSidebar && state.sidebar.right) {
        rightSidebar.open.set(state.sidebar.right.open);
      }
    });

    effect((onCleanup) => {
      const subscriptions = this.sidebars().map((sidebar) =>
        sidebar.escapePressed.subscribe(() => {
          this.viewportService.close(sidebar.side);
        }),
      );
      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });

    effect((onCleanup) => {
      const subscriptions = this.sidebarHeaders().map((header) =>
        header.closeSidebar.subscribe((side) => {
          this.viewportService.close(side);
        }),
      );
      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });

    effect((onCleanup) => {
      const backdrop = this.backdrop();
      if(backdrop) {
        const subscription = backdrop.backdropClicked.subscribe(() => {
          const state = this.viewportService.state();
          if(state.sidebar.left?.open) {
            this.viewportService.close('left');
          }
          if(state.sidebar.right?.open) {
            this.viewportService.close('right');
          }
          this.backdropClicked.emit();
        });
        onCleanup(() => subscription.unsubscribe());
      }
    });
  }

}
