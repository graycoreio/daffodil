import { NgModule } from '@angular/core';
import {
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { DaffAuthMagentoDriverModule } from '@daffodil/auth/driver/magento';
import { DaffCartMagentoDriverModule } from '@daffodil/cart/driver/magento';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffMagentoApolloCacheableOperationsLinkGenerator } from '@daffodil/driver/magento';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation/driver/magento';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductMagentoDriverModule } from '@daffodil/product/driver/magento';

import { environment } from '../../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../../environments/environment.interface';
import possibleTypes from './fragmentTypes.json';

const cache = new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes });

@NgModule({
  imports: [
    //Magento
    DaffAuthMagentoDriverModule.forRoot(),
    DaffProductMagentoDriverModule.forRoot({
      baseMediaUrl: 'https://magento2.test/media/',
    }),
    DaffCartMagentoDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationMagentoDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
  ],
})
export class DemoMagentoDriverModule {
  // Magento
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
		private magentoLinkGenerator: DaffMagentoApolloCacheableOperationsLinkGenerator,
  ) {

    apollo.create({
      link: ApolloLink.from([
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
        this.magentoLinkGenerator.getLink(),
        httpLink.create({
          uri: (<MagentoEnvironmentDriverConfiguration>environment.driver).domain + '/graphql',
          withCredentials: false,
        }),
      ]),
      cache,
    });
  }
}
