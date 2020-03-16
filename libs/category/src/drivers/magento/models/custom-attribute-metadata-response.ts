export interface MagentoCustomAttributeMetadataResponse {
	customAttributeMetadata: {
		items: {
			attribute_code: string;
			attribute_type: string;
			input_type: string;
		}[]
	}
}
