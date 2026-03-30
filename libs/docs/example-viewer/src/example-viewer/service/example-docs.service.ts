import { createSingleInjectionToken } from '@daffodil/core';

import { DaffDocsExampleServiceInterface } from './example-docs.service.interface';


export const {
  token: DAFF_DOCS_EXAMPLE_SERVICE,
  provider: provideDaffDocsExampleService,
} = createSingleInjectionToken<DaffDocsExampleServiceInterface>('DAFF_DOCS_EXAMPLE_SERVICE');
