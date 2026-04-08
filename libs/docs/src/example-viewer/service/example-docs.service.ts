import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffDocsExampleServiceInterface } from './example-docs.service.interface';


export const {
  token: DAFF_DOCS_EXAMPLE_SERVICE,
  provider: provideDaffDocsExampleService,
} = createSingletonInjectionToken<DaffDocsExampleServiceInterface>('DAFF_DOCS_EXAMPLE_SERVICE');
