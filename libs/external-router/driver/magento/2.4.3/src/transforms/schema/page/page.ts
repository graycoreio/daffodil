import { MagentoCmsPageRoute } from '@daffodil/external-router/driver/magento';

export const transformMagentoPageSchema = (resolution: MagentoCmsPageRoute): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: resolution.meta_title,
  description: resolution.meta_description,
});
