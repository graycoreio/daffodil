import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DaffDocsApiRoleTagLabelPipe } from '@daffodil/docs';
import { DaffApiNavDoc } from '@daffodil/docs-utils';

import { DaffioDocsApiGroupByRolePipe } from './group-by-role.pipe';
import { DaffioDocsApiItemLabelComponent } from '../api-item-label/api-item-label.component';

@Component({
  selector: 'daffio-api-list-section',
  templateUrl: './api-list-section.component.html',
  styleUrls: ['./api-list-section.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DaffioDocsApiItemLabelComponent,
    FaIconComponent,
    DaffDocsApiRoleTagLabelPipe,
    DaffioDocsApiGroupByRolePipe,
  ],
})
export class DaffioApiListSectionComponent {
  faExclamation = faExclamation;

  @HostBinding('class.daffio-api-list-section') class = true;

  /**
   * A list of references for API documents.
   */
  children = input<Array<DaffApiNavDoc>>();
}
