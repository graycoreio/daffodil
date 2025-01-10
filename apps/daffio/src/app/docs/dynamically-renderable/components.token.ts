import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsDynamicallyRenderable } from './type';

export type DaffioDocsDynamicallyRenderableComponentInjection<T extends DaffDoc = DaffDoc> = {readonly kind: DaffDocKind} & Type<DaffioDocsDynamicallyRenderable<T>>;

export const {
  token: DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_COMPONENTS,
  provider: provideDaffioDocsDynamicallyRenderableComponents,
} = createMultiInjectionToken<DaffioDocsDynamicallyRenderableComponentInjection>('DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_COMPONENTS');
