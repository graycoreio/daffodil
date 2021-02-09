import {gql} from 'apollo-angular';

export const DAFF_MAGENTO_GET_CUSTOM_ATTRIBUTE_METADATA_QUERY_NAME = 'MagentoGetCustomAttributeMetadata';

/**
 * A query for getting aggregation types.
 */
export const MagentoGetCustomAttributeMetadata = gql`
query ${DAFF_MAGENTO_GET_CUSTOM_ATTRIBUTE_METADATA_QUERY_NAME}($attributes: [AttributeInput!]!)
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
