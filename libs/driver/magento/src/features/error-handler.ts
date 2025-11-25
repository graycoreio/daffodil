import type { ErrorHandler } from '@apollo/client/link/error';

import { createSingleInjectionToken } from '@daffodil/core';

import { MagentoDriverFeatureKind } from './kind.enum';
import { makeMagentoDriverFeature } from './make-feature';
import { MagentoDriverFeature } from './type';

export const {
  /**
   * Holds the error handler for {@link provideMagentoDriver}.
   */
  token: DAFF_DRIVER_MAGENTO_ERROR_HANDLER,
  /**
   * Provider function for {@link DAFF_DRIVER_MAGENTO_ERROR_HANDLER}.
   */
  provider: provideDaffDriverMagentoErrorHandler,
} = createSingleInjectionToken<ErrorHandler>('DAFF_DRIVER_MAGENTO_ERROR_HANDLER', {
  factory: () => ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  },
});

/**
 * A {@link provideMagentoDriver} feature that specifies the error handler.
 */
export const withDaffDriverMagentoErrorHandler = (handler: ErrorHandler): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.ErrorHandler, [
  provideDaffDriverMagentoErrorHandler(handler),
]);
