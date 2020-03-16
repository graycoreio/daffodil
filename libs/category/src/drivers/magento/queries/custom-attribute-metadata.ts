import gql from 'graphql-tag';

/**
 * A query for getting aggregation types.
 */
export const MagentoGetCustomAttributeMetadata = gql`
query MagentoGetCustomAttributeMetadata($attributes: [AttributeInput!]!)
{
	customAttributeMetadata(attributes: $attributes)
	{
		items {
      attribute_code
      attribute_type
      input_type
    }
	}
}`
