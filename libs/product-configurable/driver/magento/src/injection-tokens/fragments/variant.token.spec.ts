import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  provideDaffProductConfigurableMagentoExtraItemFragments,
  DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_ITEM_FRAGMENTS,
} from './variant.token';

describe('@daffodil/product-configurable/driver/magento | provideDaffProductConfigurableMagentoExtraItemFragments', () => {
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
        ...provideDaffProductConfigurableMagentoExtraItemFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_ITEM_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
