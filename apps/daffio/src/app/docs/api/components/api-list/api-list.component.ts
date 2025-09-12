import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffDocsApiNavList } from '@daffodil/docs-utils';

import { DaffioApiPackageFilterPipe } from '../../pipes/packge-filter.pipe';
import { DaffioApiListSectionComponent } from '../api-list-section/api-list-section.component';

@Component({
  selector: 'daffio-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DaffioApiListSectionComponent,
    DaffioApiPackageFilterPipe,
  ],
})
export class DaffioApiListComponent {
  @HostBinding('class.daffio-api-list') class = true;

  apiList = input<DaffDocsApiNavList>();
}
