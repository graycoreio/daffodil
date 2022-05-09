import { DaffContentBlock } from '@daffodil/content';

import { MagentoContentBlock } from '../../models/public_api';


/**
 * Transforms the {@link MagentoContentBlock} from the magento CMS blocks query into a {@link DaffContentBlock}.
 */
export function magentoContentBlockTransform(block: MagentoContentBlock): DaffContentBlock {
  return {
    id: block.identifier,
    title: block.title,
    content: block.content,
  };
}
