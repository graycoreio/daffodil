import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffCompositeProductItem,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product-composite';

import { DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM } from '../injection-tokens/transforms/option/token';
import { MagentoBundleProductOptionTransform } from '../interfaces/public_api';
import { MagentoBundledProductItem } from '../models/bundled-product';

@Injectable()
export class MagentoBundledProductItemTransformer {
  constructor(
    @Inject(DAFF_PRODUCT_COMPOSITE_MAGENTO_OPTION_TRANSFORM) private optionTransform: MagentoBundleProductOptionTransform,
  ) {}

  transform(item: MagentoBundledProductItem): DaffCompositeProductItem {
    return {
      id: item.option_id.toString(),
      required: item.required,
      title: item.title,
      input_type: <DaffCompositeProductItemInputEnum>item.type,
      options: Array.from(item.options).sort((a, b) => a.position - b.position).map(this.optionTransform),
    };
  }
}
