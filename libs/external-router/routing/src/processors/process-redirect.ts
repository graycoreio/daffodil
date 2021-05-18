import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { DaffExternalRouterPermanentRedirectError } from '../errors/permanent-redirect';
import { DaffExternalRouterTemporaryRedirectError } from '../errors/temporary-redirect';

/**
 * Processes resolvedUrls and throws the appropriate error so that External Router
 * can handle redirects.
 */
export const processRedirects = (url: DaffExternallyResolvableUrl): DaffExternallyResolvableUrl => {
  if(url.code === 301){
    throw new DaffExternalRouterPermanentRedirectError(url.url);
  } else if(url.code === 302) {
    throw new DaffExternalRouterTemporaryRedirectError(url.url);
  } else {
    return url;
  }
};
