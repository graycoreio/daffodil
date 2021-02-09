import {gql} from 'apollo-angular';

export const DAFF_MAGENTO_GET_CATEGORY_AGGREGATIONS_QUERY_NAME = 'MagentoGetCategoryAggregations';

/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 */
export const MagentoGetCategoryAggregations = gql`
query ${DAFF_MAGENTO_GET_CATEGORY_AGGREGATIONS_QUERY_NAME}($filter: ProductAttributeFilterInput!)
{
	products(filter: $filter)
	{
		aggregations {
			label
			count
			attribute_code
			options {
					count
					label
					value
			}
		}
		sort_fields {
			default
			options {
				label
				value
			}
		}
	}
}`
