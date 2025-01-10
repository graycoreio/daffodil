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
  DaffioDocsDynamicContentComponentInjection,
} from './components.token';
import { DaffioDocsDynamicContent } from './type';
import { DaffioDocsDefaultContentComponent } from '../components/default-content/default-content.component';

@Injectable()
export class DaffioDocsDynamicContentComponentService<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsDynamicContentComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  constructor(
    @Inject(DAFFIO_DOCS_DYNAMICALLY_RENDERABLE_CONTENT_COMPONENTS) private components: Array<DaffioDocsDynamicContentComponentInjection<T>>,
  ) {}

  getComponent(doc: T): Type<DaffioDocsDynamicContent<T>> {
    return this._map[doc.kind] || DaffioDocsDefaultContentComponent;
  }
}
