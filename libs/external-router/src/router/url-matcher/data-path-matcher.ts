import {
  UrlMatcher,
  UrlSegment,
  UrlSegmentGroup,
  Route,
} from '@angular/router';

import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';

export const daffDataPathUrlMatcher: UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => {
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

