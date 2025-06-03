import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import {
  daffBuildFragmentDefinition,
  daffBuildFragmentNameSpread,
} from '@daffodil/core/graphql';

export const magentoBundledProductFragment = (extraItemFragments: Array<DocumentNode> = [], extraOptionFragments: Array<DocumentNode> = []) => gql`
fragment magentoBundledProduct on BundleProduct {
	items {
		${daffBuildFragmentNameSpread(...extraItemFragments)}

		option_id
		required
		title
		type
		options {
			${daffBuildFragmentNameSpread(...extraOptionFragments)}

			uid
			is_default
			label
			quantity
      position
			product {
				stock_status
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
			}
		}
	}
}
${daffBuildFragmentDefinition(...extraItemFragments, ...extraOptionFragments)}
`;
