import {
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { HttpLink } from 'apollo-angular/http';

import { DaffMagentoApolloCacheableOperationsLinkGenerator } from '@daffodil/driver/magento';

import possibleTypes from './fragmentTypes.json';
import { environment } from '../../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../../environments/environment.interface';

export const demoMagentoApolloOptions = (
  httpLink: HttpLink,
  magentoLinkGenerator: DaffMagentoApolloCacheableOperationsLinkGenerator,
) => {
  const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    magentoLinkGenerator.getLink(),
    httpLink.create({
      uri: (<MagentoEnvironmentDriverConfiguration>environment.driver).domain + '/graphql',
      withCredentials: false,
    }),
  ]);
  const cache = new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes });

  return {
    link,
    cache,
  };
};
