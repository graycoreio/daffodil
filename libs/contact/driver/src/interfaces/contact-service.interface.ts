import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffContactRequest } from '../model/contact-request';
import { DaffContactResponse } from '../model/contact-response';

export const {
  /**
   * The injection token that holds the reference to the DaffContactDriver.
   */
  token: DaffContactDriver,
  /**
   * Provider function for {@link DaffContactDriver}.
   */
  provider: provideDaffContactDriver,
} = createSingletonInjectionToken<DaffContactServiceInterface>('DaffContactDriver');

/**
 * The interface that a contact driver must implement.
 */
export interface DaffContactServiceInterface {
  send(payload: DaffContactRequest): Observable<DaffContactResponse>;
}
