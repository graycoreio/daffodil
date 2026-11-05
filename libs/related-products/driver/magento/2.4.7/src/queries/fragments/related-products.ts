import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';
import { magentoProductPreviewFragment } from '@daffodil/product/driver/magento/2.4.7';

export const magentoRelatedProductsFragment = (extraProductFragments: DocumentNode[] = []) => gql`
  fragment relatedProducts on ProductInterface {
    related_products {
      ...magentoProductPreview
      ${daffBuildFragmentNameSpread(...extraProductFragments)}
    }
	}
	${magentoProductPreviewFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
