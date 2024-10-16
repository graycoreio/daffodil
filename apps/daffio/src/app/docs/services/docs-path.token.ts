import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DAFFIO_DOCS_PATH_TOKEN,
  /**
   * Provider function for {@link DAFFIO_DOCS_PATH_TOKEN}.
   */
  provider: provideDaffioDocsPath,
} = createSingleInjectionToken<string>('DAFFIO_DOCS_PATH_TOKEN', { factory: () => '/assets/daffio/' });
