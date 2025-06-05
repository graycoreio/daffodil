import {
  Component,
  ChangeDetectionStrategy,
  input,
  WritableSignal,
  computed,
  viewChildren,
  effect,
} from '@angular/core';

import {
  DaffApiDocBase,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../../core/html-sanitizer/safe.pipe';
import { DaffioInterceptNavigationDirective } from '../../../../../core/router/intercept-navigation.directive';
import { DaffioDocsTocHeaderDirective } from '../../../../toc/header.directive';
import { DaffioDocsApiDynamicContentFragment } from '../../../dynamic-content/fragment.type';
import { DaffioDocsApiItemLabelComponent } from '../../api-item-label/api-item-label.component';

@Component({
  selector: 'daffio-docs-api-base-fragment',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioSafeHtmlPipe,
    DaffioDocsApiItemLabelComponent,
    DaffioInterceptNavigationDirective,
    DaffioDocsTocHeaderDirective,
  ],
})
export class DaffioDocsApiBaseFragmentComponent implements DaffioDocsApiDynamicContentFragment<DaffApiDocBase> {
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  private readonly _toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  doc = input<DaffApiDocBase>();
  child = input(false);
  toc = input<WritableSignal<DaffDocTableOfContents>>();

  constructor() {
    effect(() => {
      this.toc()?.set(this._toc());
    });
  }
}
