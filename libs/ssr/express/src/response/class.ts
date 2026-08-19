import { Response } from 'express';

import { DaffSsrResponse } from '@daffodil/ssr';

/**
 * A response that interfaces with the express request.
 *
 * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di. Deprecated in version 0.94.0. Will be removed in version 0.97.0.
 * @inheritdoc
 */
export class DaffSsrExpressResponse implements DaffSsrResponse {
  constructor(
    protected response: Response,
  ) {}

  get(header: string): Array<string> | string {
    return String(this.response.getHeader(header)) || '';
  }

  set(name: string, value: Array<string> | string): void {
    this.response.setHeader(name, value);
  }

  append(name: string, value: Array<string> | string): void {
    this.response.appendHeader(name, value);
  }

  status(code: number): void {
    this.response.status(code);
  }
}
