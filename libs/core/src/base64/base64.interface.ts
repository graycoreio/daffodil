import { isPlatformBrowser } from '@angular/common';
import {
  InjectionToken,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { DaffBrowserBase64Service } from './browser/browser.service';
import { DaffServerBase64Service } from './server/public_api';

/**
 * A service for encoding and decoding base64 strings.
 */
export interface DaffBase64Service {
  /**
   * Encodes an ASCII string to base64.
   */
  encode(str: string): string;
  /**
   * Decodes a base64 string to ASCII.
   */
  decode(str: string): string;
}

/**
 * A token which creates a base64 service appropriate for the current environment, i.e., browser vs. server.
 */
export const DaffBase64ServiceToken = new InjectionToken<DaffBase64Service>('DaffBase64Service', {
  providedIn: 'root',
  factory: () => isPlatformBrowser(inject<string>(PLATFORM_ID))
    ? new DaffBrowserBase64Service(inject<string>(PLATFORM_ID))
    : new DaffServerBase64Service(inject<string>(PLATFORM_ID)),
});
