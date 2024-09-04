import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductShopifyDriverModule } from '@daffodil/product/driver/shopify';

import { environment } from '../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../environments/environment.interface';

const cache = new InMemoryCache();

@NgModule({
  imports: [
    //Shopify
    DaffProductShopifyDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
  ],
})
export class DemoDriverModule {
  driver: ShopifyEnviromentDriverConfiguration = (<ShopifyEnviromentDriverConfiguration>environment.driver);

  // Shopify
  constructor(apollo: Apollo, httpLink: HttpLink) {
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
        httpLink.create({
          uri: this.driver.domain + '/graphql',
          withCredentials: false,
          headers: new HttpHeaders({
            'X-Shopify-Storefront-Access-Token': this.driver.publicAccessToken,
          }),
        }),
      ]),
      cache,
    });
  }
}
