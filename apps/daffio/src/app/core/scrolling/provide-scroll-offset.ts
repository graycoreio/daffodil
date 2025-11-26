import { ViewportScroller } from '@angular/common';
import {
  EnvironmentProviders,
  inject,
  provideAppInitializer,
} from '@angular/core';

export const provideScrollOffset = (): EnvironmentProviders =>
  provideAppInitializer(() => {
    const viewportScroller = inject(ViewportScroller);
    viewportScroller.setOffset([0, 64]);
  });
