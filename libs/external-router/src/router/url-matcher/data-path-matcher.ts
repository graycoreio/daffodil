import {
  UrlMatcher,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';

import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';

import { DaffRouteWithDataPath } from '../../model/public_api';

/**
 * A UrlMatcher that does an exact match against a path stored in the special
 * configuration fields that External Router stores on a Route's data.
 *
 * ```ts
 *  export const routes: Routes = [
 *    {
 *      matcher: daffDataPathUrlMatcher,
 *      data: {
 *        daffExternalRouteType: "CATEGORY",
 *      },
 *      loadChildren: () => import('./category/category.module').then((m) => m.ShopCategoryModule),
 *    }
 * ]
 * ```
 * {@link daffInsertDataPathStrategy }
 * {@link DaffRouteWithDataPath }
 */
export const daffDataPathUrlMatcher: UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: DaffRouteWithDataPath) => {
  const path = daffUriTruncateLeadingSlash(segments.reduce((acc: string, segment) => acc + '/' + segment.path, ''));
  const paths = route?.data?.daffPaths;

  // If we don't have any paths, we can safely fail a match.
  if(!paths) {
    return null;
  }

  // Otherwise, look up the path in the dictionary, failing if a match isn't found,
  // but matching the entire segment if a match is found.
  return path in paths ?  { consumed: segments } : null;
};

