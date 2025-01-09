import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  Inject,
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
} from './token';
import { DaffioDocDefaultComponent } from '../doc-default/component';

@Component({
  selector: 'daffio-doc-renderer',
  standalone: true,
  imports: [
    NgComponentOutlet,
  ],
  template: `
		<ng-template [ngComponentOutlet]="component" [ngComponentOutletInputs]="{doc}"></ng-template>
	`,
})
export class DaffioDocRendererComponent<T extends DaffDoc = DaffDoc> {
  private readonly _map: Record<DaffDocKind, DaffioDocComponentInjection<T>> = daffArrayToDict(this.components, (c) => c.kind);

  @Input() doc: DaffDoc;

  get component(): Type<DaffioDocComponent<T>> {
    return this._map[this.doc.kind] || DaffioDocDefaultComponent;
  }

  constructor(
    @Inject(DAFFIO_DOC_RENDERER_COMPONENTS) private components: Array<DaffioDocComponentInjection<T>>,
  ) {}
}
