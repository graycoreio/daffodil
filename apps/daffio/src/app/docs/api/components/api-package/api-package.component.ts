import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  input,
  computed,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import {
  DaffApiPackageDoc,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioApiPackageFilterPipe } from './not-packages.pipe';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocHeaderDirective } from '../../../toc/header.directive';
import { DaffioApiListSectionComponent } from '../api-list-section/api-list-section.component';

@Component({
  selector: 'daffio-api-package',
  templateUrl: './api-package.component.html',
  styleUrls: ['./api-package.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DaffioApiListSectionComponent,
    DAFF_ARTICLE_COMPONENTS,
    DaffioApiPackageFilterPipe,
    DaffioDocViewerComponent,
    DaffioDocsTocHeaderDirective,
  ],
})
export class DaffioApiPackageComponent implements DaffioDocsDynamicContent<DaffApiPackageDoc> {
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  readonly toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  @HostBinding('class.daffio-api-package') class = true;

  /**
   * A list of references for API documents.
   */
  doc = input<DaffApiPackageDoc>();
}
