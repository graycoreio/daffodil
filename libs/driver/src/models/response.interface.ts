import { DaffError } from '@daffodil/core';

/**
 * A driver response.
 * Can contain a response, errors, or both.
 */
export interface DaffDriverResponse<T> {
  /**
   * The body of the response.
   */
  response?: T;
  /**
   * A list of errors that occured during the driver call.
   */
  errors: DaffError[];
}
