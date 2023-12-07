import { DOCUMENT } from '@angular/common';
import {
  ElementRef,
  InjectionToken,
  inject,
} from '@angular/core';

export interface DaffSidebarScroll {
  enable(): void;
  disable(): void;
}

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

export const daffSidebarViewportScrollFactory = () => {
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
