import {
  Inject,
  Injectable,
  Type,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import {
  DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_COMPONENTS,
  DaffioDocsDynamicallyRenderableComponentInjection,
} from './components.token';
import { DaffioDocsDynamicallyRenderable } from './type';
import { DaffioDocDefaultComponent } from '../components/doc-default/component';

@Injectable({
  providedIn: 'any',
})
export class DaffioDocsDynamicallyRenderableComponentService<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsDynamicallyRenderableComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  constructor(
    @Inject(DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_COMPONENTS) private components: Array<DaffioDocsDynamicallyRenderableComponentInjection<T>>,
  ) {}

  getComponent(doc: T): Type<DaffioDocsDynamicallyRenderable<T>> {
    return this._map[doc.kind] || DaffioDocDefaultComponent;
  }
}
