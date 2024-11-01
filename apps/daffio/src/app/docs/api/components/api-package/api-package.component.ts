import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import { DaffApiPackageDoc } from '@daffodil/docs-utils';

import { DaffioApiPackageFilterPipe } from './not-packages.pipe';
import { DaffioApiListSectionComponent } from '../api-list-section/api-list-section.component';

@Component({
  selector: 'daffio-api-package',
  templateUrl: './api-package.component.html',
  styleUrls: ['./api-package.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    DaffioApiListSectionComponent,
    DAFF_ARTICLE_COMPONENTS,
    DaffioApiPackageFilterPipe,
  ],
})
export class DaffioApiPackageComponent {
  @HostBinding('class.daffio-api-package') class = true;

  /**
   * A list of references for API documents.
   */
  @Input() doc: DaffApiPackageDoc;
}
