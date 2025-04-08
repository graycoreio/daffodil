import { gql } from 'apollo-angular';

export const DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME = 'MagentoResolveUrlv243';

/**
 * This query retrieves a URL resolution from Magento and informs you about
 * what type of route the URL is.
 */
export const MagentoResolveUrlv243 = gql`
	query ${DAFF_MAGENTO_RESOLVE_URL_QUERY_NAME}($url: String!) {
		route(url: $url) {
			relative_url
			redirect_code
			type
			... on CategoryInterface {
				uid
				name
				meta_title
				meta_description
				canonical_url
				products {
					items {
							name
							meta_description
							meta_title
							canonical_url
							sku
							review_count
							rating_summary
							image {
								url
							}
							price_range {
								minimum_price {
									regular_price {
										currency
										value
									}
									final_price {
										currency
										value
									}
								}
								maximum_price {
									regular_price {
										currency
										value
									}
									final_price {
										currency
										value
									}
								}
							}
						}
				}
			}
			... on ProductInterface {
				uid
				name
				meta_description
				meta_title
				canonical_url
				sku
				review_count
				rating_summary
				image {
					url
				}
				stock_status
				price_range {
					minimum_price {
						regular_price {
							currency
							value
						}
						final_price {
							currency
							value
						}
					}
					maximum_price {
						regular_price {
							currency
							value
						}
						final_price {
							currency
							value
						}
					}
				}
			}
		}
	}
`;
