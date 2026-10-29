import { gql } from 'apollo-angular';

export const magentoProductCustomAttributesFragment = gql`
	fragment magentoProductCustomAttributes on ProductInterface {
		custom_attributesV2(filters: {is_visible_on_front: true}) {
			items {
				__typename
				code
				... on AttributeValue {
					value
				}
				... on AttributeSelectedOptions {
					selected_options {
						__typename
						label
						value
					}
				}
			}
			errors {
				type
				message
			}
		}
	}
`;
