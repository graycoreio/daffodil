import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

import { DaffProductMagentoDriverModule } from '@daffodil/product';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffCartMagentoDriverModule } from '@daffodil/cart';
import { DaffAuthMagentoDriverModule } from '@daffodil/auth';

import { environment } from '../../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../../environments/environment.interface';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

@NgModule({
  imports: [
    //Magento
    ApolloModule,
    HttpLinkModule,
    DaffAuthMagentoDriverModule.forRoot(),
    DaffProductMagentoDriverModule.forRoot(),
    DaffCartMagentoDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationMagentoDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class DemoMagentoDriverModule {
  // Magento
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
          if (graphQLErrors)
            graphQLErrors.map(({message, locations, path}) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
              ),
            );
          if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        httpLink.create({
          uri: (<MagentoEnvironmentDriverConfiguration>environment.driver).domain + '/graphql',
          withCredentials: false,
        }),
      ]),
      cache,
    });
  }
}
