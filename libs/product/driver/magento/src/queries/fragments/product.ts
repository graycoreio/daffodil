import { gql } from 'apollo-angular';

import { magentoBundledProductFragment } from './bundled-product';
import { magentoConfigurableProductFragment } from './configurable-product';
import { magentoProductPreviewFragment } from './product-preview';
import { magentoSimpleProductFragment } from './simple-product';

export const magentoProductFragment = gql`
  fragment product on ProductInterface {
		...magentoProductPreview
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
		upsell_products {
      ...magentoProductPreview
      ...magentoBundledProduct
      ...magentoSimpleProduct
      ...magentoConfigurableProduct
    }
    related_products {
      ...magentoProductPreview
      ...magentoBundledProduct
      ...magentoSimpleProduct
      ...magentoConfigurableProduct
    }
		...magentoBundledProduct
		...magentoSimpleProduct
		...magentoConfigurableProduct
	}
	${magentoBundledProductFragment}
	${magentoSimpleProductFragment}
	${magentoConfigurableProductFragment}
	${magentoProductPreviewFragment}
`;
