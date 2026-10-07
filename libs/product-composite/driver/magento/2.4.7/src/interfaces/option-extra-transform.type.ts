import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

import { MagentoBundledProductItemOption } from '../models/bundled-product';

export type MagentoBundleProductOptionExtraTransform<T extends MagentoBundledProductItemOption = MagentoBundledProductItemOption, V extends DaffCompositeProductItemOption = DaffCompositeProductItemOption> =
  (daffOption: DaffCompositeProductItemOption, magentoOption: T) => V;
