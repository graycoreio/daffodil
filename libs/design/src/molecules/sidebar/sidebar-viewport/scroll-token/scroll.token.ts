import { DOCUMENT } from '@angular/common';
import {
  ElementRef,
  InjectionToken,
  inject,
} from '@angular/core';

/**
 * An interface that enables a user to enable or disable scrolling on sidebars.
 *
 * See {@link DAFF_SIDEBAR_SCROLL_TOKEN}
 */
export interface DaffSidebarScroll {
  enable(): void;
  disable(): void;
}

/**
 * An injection token that can be used within a sidebar to determine
 * what to do enabling and disabling scrolling. By default, the body
 * is the element where scrolling is controlled.
 */
export const DAFF_SIDEBAR_SCROLL_TOKEN = new InjectionToken<DaffSidebarScroll>('DAFF_SIDEBAR_SCROLL_TOKEN', {
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
});


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
