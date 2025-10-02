import { TestBed } from '@angular/core/testing';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  provideDaffProductConfigurableMagentoExtraVariantFragments,
  DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_FRAGMENTS,
} from './variant.token';

describe('@daffodil/product-configurable/driver/magento | provideDaffProductConfigurableMagentoExtraVariantFragments', () => {
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
        ...provideDaffProductConfigurableMagentoExtraVariantFragments(...fragments),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_EXTRA_VARIANT_FRAGMENTS);
  });

  it('should provide the fragments to the token', () => {
    fragments.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
