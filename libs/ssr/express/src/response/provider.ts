import { Response } from 'express';

import { provideDaffSsrResponse } from '@daffodil/ssr';

import { DaffSsrExpressResponse } from './class';

/**
 * Provides `DaffSsrExpressResponse` to `DAFF_SSR_RESPONSE`.
 * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di. Deprecated in version 0.94.0. Will be removed in version 0.97.0.
 */
export const provideDaffSsrExpressResponse = (response: Response) =>
  provideDaffSsrResponse(new DaffSsrExpressResponse(response));

