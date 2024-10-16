import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetPaymentId,
  /**
   * Provider function for {@link DaffAuthorizeNetPaymentId}.
   */
  provider: provideDaffAuthorizeNetPaymentId,
} = createSingleInjectionToken<string>('DaffAuthorizeNetPaymentId');
