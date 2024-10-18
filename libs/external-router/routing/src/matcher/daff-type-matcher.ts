import {
  UrlMatcher,
  UrlSegment,
} from '@angular/router';

export const daffExternalRouterTypeMatcher: UrlMatcher = (url: UrlSegment[]) => ({ consumed: url });
