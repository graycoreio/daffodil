import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DAFF_DOCS_ASSET_PATH_TOKEN,
  provider: provideDaffDocsAssetPath,
} = createSingleInjectionToken('DAFF_DOCS_ASSET_PATH_TOKEN', { factory: () => '/' });
