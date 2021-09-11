import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';
import { magentoProductPreviewFragment } from '@daffodil/product/driver/magento';

export const magentoUpsellProductsFragment = (extraProductFragments: DocumentNode[] = []) => gql`
  fragment upsellProducts on ProductInterface {
    upsell_products {
      ...magentoProductPreview
      ${daffBuildFragmentNameSpread(...extraProductFragments)}
    }
	}
	${magentoProductPreviewFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
