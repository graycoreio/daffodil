import { Type } from '@angular/core';

import { createMultiInjectionToken } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocComponent } from './component.type';

export type DaffioDocComponentInjection<T extends DaffDoc = DaffDoc> = {readonly kind: DaffDocKind} & Type<DaffioDocComponent<T>>;

export const {
  token: DAFFIO_DOC_RENDERER_COMPONENTS,
  provider: provideDaffioDocRendererComponents,
} = createMultiInjectionToken<DaffioDocComponentInjection>('DAFFIO_DOC_RENDERER_COMPONENTS');
