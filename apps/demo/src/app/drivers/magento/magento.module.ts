import {Apollo} from 'apollo-angular';
import {InMemoryCache, ApolloLink} from '@apollo/client/core';
import {onError} from '@apollo/client/link/error';
import {HttpLink} from 'apollo-angular/http';
import { NgModule } from '@angular/core';

import { DaffProductMagentoDriverModule } from '@daffodil/product';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation/driver/magento';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffCartMagentoDriverModule } from '@daffodil/cart/driver/magento';
import { DaffAuthMagentoDriverModule } from '@daffodil/auth';

import { environment } from '../../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../../environments/environment.interface';
import { possibleTypes } from './fragmentTypes.json';

const cache = new InMemoryCache({ possibleTypes });

@NgModule({
  imports: [
    //Magento
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
