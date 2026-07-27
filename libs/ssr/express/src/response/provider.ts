import { Response } from 'express';

import { provideDaffSsrResponse } from '@daffodil/ssr';

import { DaffSsrExpressResponse } from './class';

/**
 * Provides `DaffSsrExpressResponse` to `DAFF_SSR_RESPONSE`.
 * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di.
 */
export const provideDaffSsrExpressResponse = (response: Response) =>
  provideDaffSsrResponse(new DaffSsrExpressResponse(response));

