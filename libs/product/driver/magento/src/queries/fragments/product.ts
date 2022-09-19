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
		media_gallery_entries {
			label
			file
			position
			disabled
			uid
		}
		short_description {
			html
		}
		description {
			html
		}
	}
  ${magentoProductPreviewFragment}
`;
