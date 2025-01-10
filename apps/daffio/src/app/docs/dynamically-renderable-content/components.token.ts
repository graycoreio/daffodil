import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsDynamicallyRenderableContent } from './type';

export type DaffioDocsDynamicallyRenderableContentComponentInjection<T extends DaffDoc = DaffDoc> = {readonly kind: DaffDocKind} & Type<DaffioDocsDynamicallyRenderableContent<T>>;

export const {
  token: DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_CONTENT_COMPONENTS,
  provider: provideDaffioDocsDynamicallyRenderableContentComponents,
} = createMultiInjectionToken<DaffioDocsDynamicallyRenderableContentComponentInjection>('DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_CONTENT_COMPONENTS');
