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
  DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_CONTENT_COMPONENTS,
  DaffioDocsDynamicallyRenderableContentComponentInjection,
} from './components.token';
import { DaffioDocsDynamicallyRenderableContent } from './type';
import { DaffioDocsDefaultContentComponent } from '../components/default-content/default-content.component';

@Injectable()
export class DaffioDocsDynamicallyRenderableContentComponentService<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsDynamicallyRenderableContentComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  constructor(
    @Inject(DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_CONTENT_COMPONENTS) private components: Array<DaffioDocsDynamicallyRenderableContentComponentInjection<T>>,
  ) {}

  getComponent(doc: T): Type<DaffioDocsDynamicallyRenderableContent<T>> {
    return this._map[doc.kind] || DaffioDocsDefaultContentComponent;
  }
}
