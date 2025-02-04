import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import {
  DAFF_TABS_COMPONENTS,
  DaffTabsComponent,
} from '@daffodil/design/tabs';
import {
  DaffDocKind,
  DaffPackageGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';

@Component({
  selector: 'daffio-docs-design-component-content',
  templateUrl: './component-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    DAFF_ARTICLE_COMPONENTS,
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsDesignComponentContentComponent implements DaffioDocsDynamicContent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.COMPONENT;

  private readonly _tab = signal<string>('');

  readonly USAGE_TAB_ID = 'usage-tab';
  readonly API_TAB_ID = 'api-tab';

  tabs = viewChild.required(DaffTabsComponent);
  doc = input<DaffPackageGuideDoc>();
  toc = computed(() => {
    switch (this._tab()) {
      case this.API_TAB_ID:
        return this.doc().apiToc;

      default:
      case this.USAGE_TAB_ID:
        return this.doc().tableOfContents;
    }
  });

  setTab(tab: string) {
    this._tab.set(tab);
  }
}
