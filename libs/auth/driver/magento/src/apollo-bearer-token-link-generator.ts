import { Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';

import { DaffAuthStorageService } from '@daffodil/auth';
import { DaffApolloLinkGenerator } from '@daffodil/core/graphql';

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
          headers: {
            ...operation.getContext().headers,
            authorization: `Bearer ${token}`,
          },
        });
      }
      return forward(operation);
    });
  }
}
