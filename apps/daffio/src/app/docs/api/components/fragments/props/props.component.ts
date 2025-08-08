import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  effect,
  viewChildren,
  WritableSignal,
} from '@angular/core';

import {
  DaffApiType,
  DaffDocsApiType,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocsHeadingLinkComponent } from '../../../../components/heading-link/heading-link.component';
import { DaffioDocsTocHeaderDirective } from '../../../../toc/header.directive';
import { DaffioDocsApiDynamicContentFragment } from '../../../dynamic-content/fragment.type';
import { DaffioDocsApiInterfaceBlockComponent } from '../../interface-block/interface-block.component';
import { DaffioDocsApiPropertyBlockComponent } from '../../property-block/property-block.component';

@Component({
  selector: 'daffio-docs-api-props-fragment',
  templateUrl: './props.component.html',
  styleUrl: './props.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsApiPropertyBlockComponent,
    DaffioDocsApiInterfaceBlockComponent,
    DaffioDocsTocHeaderDirective,
    DaffioDocsHeadingLinkComponent,
  ],
})
export class DaffioDocsApiPropsFragmentComponent implements DaffioDocsApiDynamicContentFragment<DaffApiType> {
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  private readonly _toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  doc = input<DaffApiType>();
  child = input(false);
  toc = input<WritableSignal<DaffDocTableOfContents>>();

  readonly isConcrete = computed(() => this.doc().docType !== DaffDocsApiType.INTERFACE && this.doc().docType !== DaffDocsApiType.ENUM);
  readonly hasPropsWithDocs = computed(() => this.doc().props.filter((prop) => prop.description).length > 0);

  constructor() {
    effect(() => {
      this.toc().set(this._toc());
    });
  }
}
