import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

import { MagentoBundledProductItemOption } from '../models/bundled-product';

export type MagentoBundleProductOptionTransform<T extends MagentoBundledProductItemOption = MagentoBundledProductItemOption, V extends DaffCompositeProductItemOption = DaffCompositeProductItemOption> =
  (magentoOption: T) => V;
