import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  provideDaffProductCompositeMagentoExtraOptionFragments,
  DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_FRAGMENTS,
} from './option.token';

describe('@daffodil/product-composite/driver/magento | provideDaffProductCompositeMagentoExtraOptionFragments', () => {
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
        ...provideDaffProductCompositeMagentoExtraOptionFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_EXTRA_OPTION_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
