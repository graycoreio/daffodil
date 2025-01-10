import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsDynamicContent } from './dynamic-content.type';

export type DaffioDocsDynamicContentComponentInjection<T extends DaffDoc = DaffDoc> = {readonly kind: DaffDocKind} & Type<DaffioDocsDynamicContent<T>>;

export const {
  token: DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS,
  provider: provideDaffioDocsDynamicContentComponents,
} = createMultiInjectionToken<DaffioDocsDynamicContentComponentInjection>('DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS');
