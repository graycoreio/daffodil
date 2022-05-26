
import {
  MagentoAggregation,
  MagentoProductFilterTypeField,
} from '../../models/public_api';
import { magentoProductGetMatchedAttributeType } from './get-matched-attribute-type';

export function magentoProductAddMetadataTypesToAggregates(
  inputFields: MagentoProductFilterTypeField[],
  aggregations: MagentoAggregation[],
): MagentoAggregation[] {
  return aggregations.map((aggregate) => ({
    ...aggregate,
    type: magentoProductGetMatchedAttributeType(aggregate, inputFields),
  }));
}
