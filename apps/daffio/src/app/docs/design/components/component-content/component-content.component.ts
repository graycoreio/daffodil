import {
  KeyValuePipe,
  NgComponentOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import {
  DAFF_TABS_COMPONENTS,
  DaffTabsComponent,
} from '@daffodil/design/tabs';
import {
  DaffApiDoc,
  DaffDocKind,
  daffDocsApiRoleGetSectionLabel,
  DaffPackageGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocsApiDynamicContentComponentService } from '../../../api/dynamic-content/dynamic-content-component.service';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsDesignApiSortSectionLabels } from '../../pipes/sort-api-section-labels.pipe';

@Component({
  selector: 'daffio-docs-design-component-content',
  templateUrl: './component-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    DAFF_ARTICLE_COMPONENTS,
    DaffioDocViewerComponent,
    DaffioSafeHtmlPipe,
    KeyValuePipe,
    DaffioDocsDesignApiSortSectionLabels,
    NgComponentOutlet,
  ],
})
export class DaffioDocsDesignComponentContentComponent implements DaffioDocsDynamicContent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.COMPONENT;

  private readonly _tab = signal<string>('');

  readonly USAGE_TAB_ID = 'usage-tab';
  readonly API_TAB_ID = 'api-tab';
  readonly getSectionLabel = daffDocsApiRoleGetSectionLabel;

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

  constructor(
    private apiComponentService: DaffioDocsApiDynamicContentComponentService,
  ) {}

  getApiComponent(doc: DaffApiDoc) {
    return this.apiComponentService.getComponent(doc);
  }

  setTab(tab: string) {
    this._tab.set(tab);
  }
}
