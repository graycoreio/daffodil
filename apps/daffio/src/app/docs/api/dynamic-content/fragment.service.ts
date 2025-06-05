import {
  Inject,
  Injectable,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';
import {
  DaffApiDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContentFragments } from './fragment.type';
import {
  DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS,
  DaffioDocsApiDynamicContentFragmentInjection,
} from './fragments.token';
import { DAFFIO_DOCS_API_BASE_FRAGMENTS } from '../roles/fragments/base';

@Injectable()
export class DaffioDocsApiDynamicContentFragmentService<T extends DaffApiDoc = DaffApiDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocsApiDynamicContentFragments<T>> = daffArrayToDict(this.fragments, (c) => c.role);

  constructor(
    @Inject(DAFFIO_DOCS_API_DYNAMIC_FRAGMENTS) private fragments: Array<DaffioDocsApiDynamicContentFragmentInjection<T>>,
  ) {}

  get(doc: T): DaffioDocsApiDynamicContentFragments<T> {
    return this._map[doc.role] || DAFFIO_DOCS_API_BASE_FRAGMENTS;
  }
}
