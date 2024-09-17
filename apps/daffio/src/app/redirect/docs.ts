import {
  UrlMatcher,
  UrlSegment,
} from '@angular/router';

const REDIRECTED_ROUTES = [
  'api',
  'packages',
];

/**
 * Matches old docs routes. (packages and api)
 */
export const daffioDocsRedirectMatcher: UrlMatcher = (segments: Array<UrlSegment>) =>
  REDIRECTED_ROUTES.includes(segments[0].path)
    ? {
      consumed: [segments[0]],
    }
    : null;
