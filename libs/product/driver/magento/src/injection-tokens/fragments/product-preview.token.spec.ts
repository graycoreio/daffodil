import { TestBed } from '@angular/core/testing';
import { gql } from '@damienwebdev/apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffProvideProductMagentoExtraProductPreviewFragments,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
} from './product-preview.token';


describe('daffProvideProductMagentoExtraProductPreviewFragments', () => {
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
        ...daffProvideProductMagentoExtraProductPreviewFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
