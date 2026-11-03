import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

export const magentoConfigurableProductFragment = (extraVariantFragments: Array<DocumentNode> = []) => gql`
  fragment magentoConfigurableProduct on ConfigurableProduct {
		configurable_options {
			attribute_code
			label
			position
			values {
				label
				value_index
			}
		}
		variants {
			${daffBuildFragmentNameSpread(...extraVariantFragments)}
			attributes {
				code
				value_index
			}
			product {
				sku
				price_range {
					maximum_price {
						regular_price {
							value
							currency
						}
						discount {
							amount_off
							percent_off
						}
					}
				}
				stock_status
				image {
					url
					label
				}
			}
		}
  }
${daffBuildFragmentDefinition(...extraVariantFragments)}
`;
