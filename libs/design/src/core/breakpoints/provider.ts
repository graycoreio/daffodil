import { BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  InjectionToken,
  PLATFORM_ID,
} from '@angular/core';

import { NoopBreakpointObserver } from './noop.service';

/**
 * Provides a {@link NoopBreakpointObserver} if the platform is not browser.
 */
export const SERVER_SAFE_BREAKPOINT_OBSERVER = new InjectionToken<Omit<BreakpointObserver, never>>('SERVER_SAFE_BREAKPOINT_OBSERVER', {
  factory: () =>
    isPlatformBrowser(inject(PLATFORM_ID))
      ? inject(BreakpointObserver)
      : inject(NoopBreakpointObserver),
});
