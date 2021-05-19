import { DaffExternallyResolvableUrl } from '@daffodil/external-router';


import { DaffExternalRouterClientError } from '../errors/client-error';
import { DaffExternalRouterNotFoundError } from '../errors/not-found-error';
import { DaffExternalRouterServerError } from '../errors/server-error';

/**
 * Processes resolved URLs and throws the appropriate error so that External Router
 * can handle routing errors.
 */
export const processErrors = (url: DaffExternallyResolvableUrl): DaffExternallyResolvableUrl => {
  if(url.code === 404 ){
    throw new DaffExternalRouterNotFoundError();
  } else if(url.code >= 400 && url.code < 500) {
    throw new DaffExternalRouterClientError();
  } else if(url.code >= 500) {
    throw new DaffExternalRouterServerError();
  } else {
    return url;
  }
};
