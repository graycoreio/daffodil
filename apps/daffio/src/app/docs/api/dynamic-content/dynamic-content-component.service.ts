import {
  Inject,
  Injectable,
  Type,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';
import {
  DaffApiDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import {
  DAFFIO_DOCS_API_DYNAMIC_CONTENT_COMPONENTS,
  DaffioDocsApiDynamicContentComponentInjection,
} from './dynamic-content-components.token';
import { DaffioDocsApiDynamicContent } from './dynamic-content.type';
import { DaffioDocsApiDefaultContentComponent } from '../components/api-default-content/api-default-content.component';

@Injectable()
export class DaffioDocsApiDynamicContentComponentService<T extends DaffApiDoc = DaffApiDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsApiDynamicContentComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.role);

  constructor(
    @Inject(DAFFIO_DOCS_API_DYNAMIC_CONTENT_COMPONENTS) private components: Array<DaffioDocsApiDynamicContentComponentInjection<T>>,
  ) {}

  getComponent(doc: T): Type<DaffioDocsApiDynamicContent<T>> {
    return this._map[doc.role]?.type || DaffioDocsApiDefaultContentComponent<T>;
  }
}
