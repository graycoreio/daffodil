import gql from 'graphql-tag';

/**
 * Soon to be deprecated.
 */
export const GetSortFieldsAndFiltersByCategory = gql`
query getSortFieldsAndFiltersByCategory($categoryId: String!)
{
	products(
		filter: {
			category_id: {
				eq: $categoryId
			}
		}
	)
	{
		sort_fields {
			default
			options {
				label
				value
			}
		}
		filters {
			name
			filter_items_count
			request_var
			__typename
			filter_items {
				label
				value_string
				items_count
			}
		}
	}
}`
