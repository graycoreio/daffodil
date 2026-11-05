
import { magentoProductGetMatchedAttributeType } from './get-matched-attribute-type';
import {
  MagentoAggregation,
  MagentoProductFilterTypeField,
} from '../../models/public_api';

export function magentoProductAddMetadataTypesToAggregates(
  inputFields: MagentoProductFilterTypeField[],
  aggregations: MagentoAggregation[],
): MagentoAggregation[] {
  return aggregations.map((aggregate) => ({
    ...aggregate,
    type: magentoProductGetMatchedAttributeType(aggregate, inputFields),
  }));
}
