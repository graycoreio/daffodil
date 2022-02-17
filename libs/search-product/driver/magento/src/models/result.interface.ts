/**
 * The product fields required to fetch and build a product search result.
 */
export interface MagentoSearchProductResult {
  __typename: string;
  name: string;
  sku: string;
  url_key: string;
  url_suffix: string;
  thumbnail: {
		url: string;
		label: string;
	};
  price_range: {
		maximum_price: {
			regular_price: {
				value: number;
				currency: any;
			};
			discount: {
				amount_off: number;
				percent_off: number;
			};
		};
	};
  short_description?: {
		html: string;
	};
}
