import { DaffContentPage } from '@daffodil/content';

import { MagentoCmsPage } from '../../models/public_api';

/**
 * Transforms the {@link MagentoCmsPage} from the magento CMS page query into a {@link DaffContentPage}.
 */
export function magentoContentPageTransform(page: MagentoCmsPage): DaffContentPage {
  return {
    id: page.identifier,
    title: page.title,
    htmlContent: page.content,
    metaTitle: page.meta_title,
    metaDescription: page.meta_description,
  };
}
