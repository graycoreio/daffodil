import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetPaymentId,
  provider: provideDaffAuthorizeNetPaymentId,
} = createSingleInjectionToken<string>('DaffAuthorizeNetPaymentId');
