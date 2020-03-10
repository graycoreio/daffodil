import gql from 'graphql-tag';

/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 */
export const MagentoGetCategoryAggregations = gql`
query MagentoGetProducts($filter: ProductAttributeFilterInput!)
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
