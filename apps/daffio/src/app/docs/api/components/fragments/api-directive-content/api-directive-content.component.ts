import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffApiDirective,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsApiPropertyBlockComponent } from '../../property-block/property-block.component';
import { DaffioDocsApiTypeContentComponent } from '../api-type-content/api-type-content.component';

@Component({
  selector: 'daffio-docs-api-directive-content',
  templateUrl: './api-directive-content.component.html',
  styleUrl: './api-directive-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsApiTypeContentComponent,
    DaffioDocsApiPropertyBlockComponent,
    FaIconComponent,
  ],
})
export class DaffioDocsApiDirectiveContentComponent implements DaffioDocsApiDynamicContent<DaffApiDirective> {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  static role = DaffDocsApiRole.DIRECTIVE;

  doc = input<DaffApiDirective>();
  child = input(false);
}
