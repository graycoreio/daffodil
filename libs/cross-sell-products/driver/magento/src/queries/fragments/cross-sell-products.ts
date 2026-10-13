import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';
import { magentoProductPreviewFragment } from '@daffodil/product/driver/magento';

export const magentoCrossSellProductsFragment = (extraProductFragments: DocumentNode[] = []) => gql`
  fragment crossSellProducts on Cart {
		items {
			product {
				crosssell_products {
					...magentoProductPreview
					${daffBuildFragmentNameSpread(...extraProductFragments)}
				}
			}
		}
	}
	${magentoProductPreviewFragment}
  ${daffBuildFragmentDefinition(...extraProductFragments)}
`;
