import {
  inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { ApolloLink } from '@apollo/client';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffApolloLinkGenerator,
  getApolloOperationHeaders,
  provideDaffApolloHeaderProviders,
} from '@daffodil/core/graphql';
import {
  makeMagentoDriverFeature,
  MagentoDriverFeature,
} from '@daffodil/driver/magento';

export function withAuth(): MagentoDriverFeature {
  return makeMagentoDriverFeature('MagentoAuthApolloBearerToken', [
    provideMagentoAuthApolloBearerToken(),
  ]);
}

export function provideMagentoAuthApolloBearerToken() {
  return makeEnvironmentProviders([
    provideDaffApolloHeaderProviders(() => {
      const storage = inject(DaffAuthStorageService);
      let token = null;

      try {
        token = storage.getAuthToken();
      } catch(e){}

      return token
        ? {
          authorization: `Bearer ${token}`,
        }
        : {};
    }),
  ]);
}

/**
 * A service that will convert cacheable apollo operations into a format that Magento will understand as cacheable.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoAuthApolloBearerTokenLinkGenerator implements DaffApolloLinkGenerator {
  constructor(
    private storage: DaffAuthStorageService,
  ) {}

  getLink(): ApolloLink {
    return new ApolloLink((operation, forward) => {
      let token = null;

      try {
        token = this.storage.getAuthToken();
      } catch(e){}

      if (token) {
        operation.setContext({
          headers: getApolloOperationHeaders(operation).append('authorization', `Bearer ${token}`),
        });
      }
      return forward(operation);
    });
  }
}
