import { Response } from 'express';

import { provideDaffSsrResponse } from '@daffodil/ssr';

import { DaffSsrExpressResponse } from './class';

/**
 * Provides `DaffSsrExpressResponse` to `DAFF_SSR_RESPONSE`.
 */
export const provideDaffSsrExpressResponse = (response: Response) =>
  provideDaffSsrResponse(new DaffSsrExpressResponse(response));

