import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetPaymentId,
  provider: daffProvideAuthorizeNetPaymentId,
} = createSingleInjectionToken<string>('DaffAuthorizeNetPaymentId');
