import { MagentoGetCategoryFilterTypesResponse } from '../../../models/get-filter-types-response.interface';
import {
  MagentoAggregation,
  MagentoCategoryFilterType,
} from '../../../models/public_api';

export const getMatchedAttributeType = (aggregate: MagentoAggregation, attributes: MagentoGetCategoryFilterTypesResponse): MagentoCategoryFilterType =>
  attributes.__type.inputFields.filter(item => item.name === aggregate.attribute_code)[0].type.name;
