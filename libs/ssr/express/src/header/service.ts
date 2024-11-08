import {
  Inject,
  Injectable,
} from '@angular/core';
import { Response } from 'express';

import { DaffSsrHeaderService } from '@daffodil/ssr';

import { DAFF_SSR_EXPRESS_RESPONSE } from '../response.token';

/**
 * A service that adds headers to the express response in the `DAFF_SSR_EXPRESS_RESPONSE` token.
 * Appropriate for the server environment.
 *
 * @inheritdoc
 */
@Injectable()
export class DaffSsrHeaderExpressService implements DaffSsrHeaderService {
  constructor(
    @Inject(DAFF_SSR_EXPRESS_RESPONSE) private response: Response,
  ) {}

  addResponseHeader(name: string, value: string): void {
    this.response.appendHeader(name, value);
  };
}
