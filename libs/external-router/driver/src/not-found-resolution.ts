import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

/**
 * When a driver fails to find a resolution, it should return a 404.
 * This const represents the standard "Not Found" resolution that a driver
 * should return. Drivers are not required to return this value, but may do so
 * if they would like.
 */
export const DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION: DaffExternallyResolvableUrl = {
  id: null,
  url: null,
  code: 404,
  type: null,
};
