import gql from 'graphql-tag';

export const GetProductQuery = gql`
query GetAProduct($sku: String!){
	storeConfig {
		secure_base_media_url
	}
	products(filter: {
		sku: {
			eq: $sku
		}
	}){
		items {
			id
			url_key
			name
			sku
			image {
				url
				label
			}
			media_gallery_entries {
				label
				file
				position
				disabled
				id
			}
			short_description {
				html
			}
			description {
				html
			}
		}
	}
}`
