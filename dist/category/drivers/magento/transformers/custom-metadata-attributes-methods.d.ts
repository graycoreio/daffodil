import { MagentoAggregation } from '../models/aggregation';
import { MagentoCustomMetadataAttribute } from '../models/requests/custom-metadata-attribute';
import { MagentoCustomAttributeMetadataResponse } from '../models/custom-attribute-metadata-response';
import { MagentoGetCategoryAggregationsResponse } from '../models/get-category-aggregations-response';
export declare function buildCustomMetadataAttribute(filter: MagentoAggregation): MagentoCustomMetadataAttribute;
export declare function addMetadataTypesToAggregates(attributeResponse: MagentoCustomAttributeMetadataResponse, aggregationResponse: MagentoGetCategoryAggregationsResponse): MagentoGetCategoryAggregationsResponse;
