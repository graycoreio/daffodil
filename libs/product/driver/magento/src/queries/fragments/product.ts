import { gql } from 'apollo-angular';

import { magentoProductPreviewFragment } from './product-preview';

export const magentoProductFragment = gql`
  fragment product on ProductInterface {
    ...magentoProductPreview
    __typename
    name
    meta_title
		meta_description
    canonical_url
    stock_status
    image {
			url
			label
		}
		short_description {
			html
		}
	}
  ${magentoProductPreviewFragment}
`;
