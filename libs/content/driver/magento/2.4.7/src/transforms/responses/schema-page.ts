import { DaffContentSchemaPage } from '@daffodil/content';

import { MagentoCmsPage } from '../../models/public_api';

/**
 * Transforms the {@link MagentoCmsPage} from the magento CMS page query into a {@link DaffContentSchemaPage}.
 */
export function magentoContentSchemaPageTransform(page: MagentoCmsPage): DaffContentSchemaPage {
  return {
    id: page.identifier,
    title: page.title,
    schema: JSON.parse(page.content_schema_json),
    metaTitle: page.meta_title,
    metaDescription: page.meta_description,
  };
}
