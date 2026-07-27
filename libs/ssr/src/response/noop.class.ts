import { DaffSsrResponse } from './type';

/**
 * A noop response that will be used in all environments except SSR.
 * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di.
 */
export class DaffSsrNoopResponse implements DaffSsrResponse {
  /**
   * Returns an empty string that is not representative of anything.
   */
  get(header: string): Array<string> | string {
    return '';
  }

  /**
   * Does nothing in the noop.
   */
  set(name: string, value: Array<string> | string): void {}

  /**
   * Does nothing in the noop.
   */
  append(name: string, value: Array<string> | string): void {}

  /**
   * Does nothing in the noop.
   */
  status(code: number): void {}
}
