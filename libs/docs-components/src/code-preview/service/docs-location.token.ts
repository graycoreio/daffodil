import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DAFF_DOCS_LOCATION,
  provider: provideDaffDocsLocation,
} = createSingleInjectionToken<string>('DAFF_DOCS_LOCATION', { factory: () => '' });
