import {
  Inject,
  Injectable,
  Injector,
  runInInjectionContext,
  Type,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import {
  DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY,
  DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS,
  DaffioDocsDynamicContentComponentInjection,
} from './dynamic-content-components.token';
import { DaffioDocsDynamicContent } from './dynamic-content.type';
import { DaffioDocsDefaultContentComponent } from '../components/default-content/default-content.component';

@Injectable()
export class DaffioDocsDynamicContentComponentService<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsDynamicContentComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  constructor(
    @Inject(DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENTS) private components: Array<DaffioDocsDynamicContentComponentInjection<T>>,
    private injector: Injector,
  ) {}

  getComponent(doc: T): Type<DaffioDocsDynamicContent<T>> {
    const injection = this._map[doc.kind];
    const component = DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY in injection
      ? runInInjectionContext(this.injector, injection[DAFFIO_DOCS_DYNAMIC_CONTENT_COMPONENT_INJECTION_GETTER_KEY](doc))
      : injection;
    return component || DaffioDocsDefaultContentComponent<T>;
  }
}
