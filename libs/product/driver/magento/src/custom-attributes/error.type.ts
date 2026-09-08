export enum MagentoAttributeMetadataErrorType {
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  ATTRIBUTE_NOT_FOUND	= 'ATTRIBUTE_NOT_FOUND',
  FILTER_NOT_FOUND = 'FILTER_NOT_FOUND',
  UNDEFINED = 'UNDEFINED'
}

export interface MagentoAttributeMetadataError {
  type: MagentoAttributeMetadataErrorType;
  message: string;
}
