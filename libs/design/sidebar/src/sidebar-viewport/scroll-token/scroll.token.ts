import { DOCUMENT } from '@angular/common';
import {
  ElementRef,
  inject,
} from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

/**
 * An interface that enables a user to enable or disable scrolling on sidebars.
 *
 * See {@link DAFF_SIDEBAR_SCROLL_TOKEN}
 */
export interface DaffSidebarScroll {
  enable(): void;
  disable(): void;
}

export const {
  /**
   * An injection token that can be used within a sidebar to determine
   * what to do enabling and disabling scrolling. By default, the body
   * is the element where scrolling is controlled.
   */
  token: DAFF_SIDEBAR_SCROLL_TOKEN,
  /**
   * Provider function for {@link DAFF_SIDEBAR_SCROLL_TOKEN}.
   */
  provider: provideDaffSidebarScrollToken,
} = createSingleInjectionToken<DaffSidebarScroll>(
  'DAFF_SIDEBAR_SCROLL_TOKEN',
  {
    providedIn: 'root',
    factory: () => {
      const document = inject(DOCUMENT);
      return {
        enable: () => {
          document.body.style.overflow = null;
        },
        disable: () => {
          document.body.style.overflow = 'hidden';
        },
      };
    },
  },
);


/**
 * A factory function that return a DaffSidebarScroll
 * for the current sidebar viewport.
 *
 * See the providers of {@link DaffSidebarViewportComponent}
 */
export const daffSidebarViewportScrollFactory = (): DaffSidebarScroll => {
  const element = inject(ElementRef).nativeElement;
  return {
    enable: () => {
      element.style.overflow = null;
    },
    disable: () => {
      element.style.overflow = 'hidden';
    },
  };
};
