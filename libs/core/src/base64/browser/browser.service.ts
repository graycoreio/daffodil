import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { DaffBase64Service } from '../base64.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffBrowserBase64Service implements DaffBase64Service {
  constructor(@Inject(PLATFORM_ID) platformId: string){
    if(!isPlatformBrowser(platformId)){
      throw new Error('The DaffBrowserBase64Service can only be instantiated in the browser.');
    }
  }

  encode(str: string): string {
    return btoa(str);
  }

  decode(str: string): string {
    return atob(str);
  }
}
