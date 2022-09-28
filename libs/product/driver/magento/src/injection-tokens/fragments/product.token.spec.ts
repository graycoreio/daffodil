import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffProvideProductMagentoExtraProductFragments,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
} from './product.token';

describe('@daffodil/product/driver/magento | daffProvideProductMagentoExtraProductFragments', () => {
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
        ...daffProvideProductMagentoExtraProductFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
