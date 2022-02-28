import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';

import { DaffBase64Service } from '../base64.interface';

declare const Buffer;

/**
 * A base64 service meant to be loaded into SSR contexts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffServerBase64Service implements DaffBase64Service {
  constructor(@Inject(PLATFORM_ID) platformId: string){
    if (isPlatformBrowser(platformId)){
      throw new Error('The DaffBrowserBase64Service can only be instantiated on the server.');
    }
  }

  encode(str: string): string {
    return Buffer.from(str).toString('base64');
  }

  decode(str: string): string {
    return Buffer.from(str, 'base64').toString('ascii');
  }
}
