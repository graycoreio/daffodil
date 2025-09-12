import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import { DaffApiPackageDoc } from '@daffodil/docs-utils';

import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioApiPackageFilterPipe } from '../../pipes/packge-filter.pipe';
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
  ],
})
export class DaffioApiPackageComponent implements DaffioDocsDynamicContent<DaffApiPackageDoc> {
  @HostBinding('class.daffio-api-package') class = true;

  /**
   * A list of references for API documents.
   */
  doc = input<DaffApiPackageDoc>();
}
