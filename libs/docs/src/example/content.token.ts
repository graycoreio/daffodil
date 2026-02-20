import { createMultiInjectionToken } from '@daffodil/core';

import { DaffDocsExampleContent } from './content.type';

export const {
  token: DAFF_DOCS_EXAMPLE_CONTENT,
  provider: provideDaffDocsExampleContent,
  factoryProvider: provideDaffDocsExampleContentFactory,
} = createMultiInjectionToken<DaffDocsExampleContent>('DAFF_DOCS_EXAMPLE_CONTENT');
