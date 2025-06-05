import {
  KeyValuePipe,
  NgComponentOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  Signal,
  signal,
  viewChild,
  viewChildren,
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
  DaffDocTableOfContents,
  DaffPackageGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioInterceptNavigationDirective } from '../../../../core/router/intercept-navigation.directive';
import { DaffioDocsApiDynamicContentFragmentService } from '../../../api/dynamic-content/fragment.service';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocHeaderDirective } from '../../../toc/header.directive';
import { DaffioDocsTocService } from '../../../toc/toc.service';
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
    NgComponentOutlet,
    DaffioInterceptNavigationDirective,
    DaffioDocsTocHeaderDirective,
  ],
  providers: [
    KeyValuePipe,
    DaffioDocsDesignApiSortSectionLabels,
  ],
})
export class DaffioDocsDesignComponentContentComponent implements DaffioDocsDynamicContent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.COMPONENT;

  private readonly _tab = signal<string>('');
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);

  readonly USAGE_TAB_ID = 'usage-tab';
  readonly API_TAB_ID = 'api-tab';
  readonly getSectionLabel = daffDocsApiRoleGetSectionLabel;

  readonly sections = computed(() => this.sortSections.transform(<any>this.keyValue.transform(this.doc().api)));
  readonly fragmentTocs = computed<{
    [K in keyof DaffPackageGuideDoc['api']]: Array<Array<Signal<DaffDocTableOfContents>>>
  }>(() =>
    Object.keys(this.doc().api).reduce((acc, header) => {
      acc[header] = this.doc().api[header].map((doc) =>
      // one extra for the base fragment
        Array(this.getApiComponent(doc).components.length + 1).fill(0).map(() => signal<DaffDocTableOfContents>([])),
      );
      return acc;
    }, {}),
  );
  readonly apiToc = computed<DaffDocTableOfContents>(() =>
    this.sections().flatMap((section, i) => [
      this.viewHeaders()[i].entry(),
      ...this.fragmentTocs()[<keyof DaffPackageGuideDoc['api']>section.key].flatMap((fragmentTocs) => fragmentTocs.flatMap((e) => e())),
    ]),
  );
  readonly tabs = viewChild.required(DaffTabsComponent);
  readonly doc = input<DaffPackageGuideDoc>();
  readonly toc = computed<DaffDocTableOfContents>(() => {
    switch (this._tab()) {
      case this.API_TAB_ID:
        return this.apiToc() || [];

      default:
      case this.USAGE_TAB_ID:
        return this.doc().tableOfContents;
    }
  });

  constructor(
    private fragmentsService: DaffioDocsApiDynamicContentFragmentService,
    private tocRegistry: DaffioDocsTocService,
    private keyValue: KeyValuePipe,
    private sortSections: DaffioDocsDesignApiSortSectionLabels,
  ) {
    effect((onCleanup) => {
      this.tocRegistry.set(this.toc());
      onCleanup(() => this.tocRegistry.set([]));
    });
  }

  getApiComponent(doc: DaffApiDoc) {
    return this.fragmentsService.get(doc);
  }

  setTab(tab: string) {
    this._tab.set(tab);
  }
}
