import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  Inject,
  Injectable,
  Input,
  Type,
} from '@angular/core';

import { daffArrayToDict } from '@daffodil/core';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocComponent } from './component.type';
import {
  DAFFIO_DOC_RENDERER_COMPONENTS,
  DaffioDocComponentInjection,
} from './components.token';
import { DaffioDocDefaultComponent } from '../components/doc-default/component';

@Injectable({
  providedIn: 'any',
})
export class DaffioDocComponentService<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  constructor(
    @Inject(DAFFIO_DOC_RENDERER_COMPONENTS) private components: Array<DaffioDocComponentInjection<T>>,
  ) {}

  getComponent(doc: T): Type<DaffioDocComponent<T>> {
    return this._map[doc.kind] || DaffioDocDefaultComponent;
  }
}
