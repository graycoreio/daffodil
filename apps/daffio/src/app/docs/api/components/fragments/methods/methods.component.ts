import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  viewChildren,
  effect,
  WritableSignal,
} from '@angular/core';

import {
  DaffApiType,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocsTocHeaderDirective } from '../../../../toc/header.directive';
import { DaffioDocsApiDynamicContentFragment } from '../../../dynamic-content/fragment.type';
import { DaffioDocsApiMethodBlockComponent } from '../../method-block/method-block.component';

@Component({
  selector: 'daffio-docs-api-methods-fragment',
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsApiMethodBlockComponent,
    DaffioDocsTocHeaderDirective,
  ],
})
export class DaffioDocsApiMethodsFragmentComponent implements DaffioDocsApiDynamicContentFragment<DaffApiType> {
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  private readonly _toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  doc = input<DaffApiType>();
  child = input(false);
  toc = input<WritableSignal<DaffDocTableOfContents>>();

  constructor() {
    effect(() => {
      this.toc().set(this._toc());
    });
  }
}
