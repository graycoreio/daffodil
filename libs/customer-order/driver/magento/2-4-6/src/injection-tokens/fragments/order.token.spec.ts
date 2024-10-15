import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  provideDaffCustomerOrderMagentoExtraOrderFragments,
  DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_FRAGMENTS,
} from './order.token';

describe('@daffodil/customer-order/driver/magento/2-4-6 | provideDaffCustomerOrderMagentoExtraOrderFragments', () => {
  let fragments: DocumentNode[];
  let result: DocumentNode[];

  beforeEach(() => {
    fragments = [
      gql`
        fragment one on Query {
          __typename
        }
      `,
      gql`
        fragment two on Query {
          __typename
        }
      `,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffCustomerOrderMagentoExtraOrderFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_CUSTOMER_ORDER_MAGENTO_EXTRA_ORDER_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
