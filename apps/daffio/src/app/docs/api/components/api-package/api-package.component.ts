import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';

import { DaffioApiPackageFilterPipe } from './not-packages.pipe';
import { DaffioApiReference } from '../../models/api-reference';
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
    DaffArticleModule,
    DaffioApiPackageFilterPipe,
  ],
})
export class DaffioApiPackageComponent {
  @HostBinding('class.daffio-api-package') class = true;

  /**
   * A list of references for API documents.
   */
  @Input() doc: DaffioApiReference;
}
