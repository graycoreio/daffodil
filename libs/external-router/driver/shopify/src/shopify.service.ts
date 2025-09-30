import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  daffUriTruncateFileExtension,
  daffUriTruncateLeadingPathSegments,
  daffUriTruncateLeadingSlash,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DaffExternalRouterDriverInterface } from '@daffodil/external-router/driver';

@Injectable({
  providedIn:'root',
})
export class DaffShopifyExternalRouterDriver implements DaffExternalRouterDriverInterface {

  resolve(url: string): Observable<DaffExternallyResolvableUrl> {
    const productsMatch = url.match(/^\/?products\/(?<slug>[^/]+?)(?:\.[^/.]+)?$/);
    if(productsMatch && productsMatch.groups?.['slug']) {
      return of({
        id: daffUriTruncateFileExtension(daffUriTruncateLeadingPathSegments(url)),
        url: daffUriTruncateLeadingSlash(url),
        code: 200,
        type: 'PRODUCT',
      });
    }

    return of({
      id: 'null',
      url: (new URL('https://www.example.com' + url)).pathname,
      code: 404,
      type: 'UNKNOWN',
    });
  }
}
