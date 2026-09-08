import { gql } from 'apollo-angular';

import { magentoProductCustomAttributesFragment } from './custom-attributes';
import { magentoProductFragment } from './product';

export const magentoProductPageFragment = gql`
  fragment magentoProductPage on ProductInterface {
    ...product
		...magentoProductCustomAttributes
    __typename
		media_gallery_entries {
			label
			file
			position
			disabled
			uid
		}
		description {
			html
		}
	}
  ${magentoProductFragment}
  ${magentoProductCustomAttributesFragment}
`;
