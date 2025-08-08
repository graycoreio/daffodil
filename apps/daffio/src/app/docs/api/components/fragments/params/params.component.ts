import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  effect,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import {
  DaffDocsApiFunction,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioInterceptNavigationDirective } from '../../../../../core/router/intercept-navigation.directive';
import { DaffioDocsHeadingLinkComponent } from '../../../../components/heading-link/heading-link.component';
import { DaffioDocsTocHeaderDirective } from '../../../../toc/header.directive';
import { DaffioDocsApiDynamicContentFragment } from '../../../dynamic-content/fragment.type';

@Component({
  selector: 'daffio-docs-api-params-fragment',
  templateUrl: './params.component.html',
  styleUrl: './params.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffioDocsTocHeaderDirective,
    DaffioInterceptNavigationDirective,
    DaffioSafeHtmlPipe,
    DaffioDocsHeadingLinkComponent,
  ],
})
export class DaffioDocsApiParamsFragmentComponent implements DaffioDocsApiDynamicContentFragment<DaffDocsApiFunction> {
  faCode = faCode;

  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  private readonly _toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  doc = input<DaffDocsApiFunction>();
  child = input(false);
  toc = input<WritableSignal<DaffDocTableOfContents>>();

  constructor() {
    effect(() => {
      this.toc().set(this._toc());
    });
  }
}
