import { CombinedGraphQLErrors } from '@apollo/client';
import type { ErrorLink } from '@apollo/client/link/error';

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
} = createSingleInjectionToken<ErrorLink.ErrorHandler>('DAFF_DRIVER_MAGENTO_ERROR_HANDLER', {
  factory: () => ({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    } else {
      console.error(`[Network error]: ${error.message}`);
    }
  },
});

/**
 * A {@link provideMagentoDriver} feature that specifies the error handler.
 */
export const withDaffDriverMagentoErrorHandler = (handler: ErrorLink.ErrorHandler): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.ErrorHandler, [
  provideDaffDriverMagentoErrorHandler(handler),
]);
