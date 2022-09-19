import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffProvideProductMagentoExtraProductPageFragments,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
} from './product-page.token';

describe('@daffodil/product/driver/magento | daffProvideProductMagentoExtraProductPageFragments', () => {
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
        ...daffProvideProductMagentoExtraProductPageFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
