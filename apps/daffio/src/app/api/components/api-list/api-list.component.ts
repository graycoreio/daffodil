import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffioApiReference } from '../../models/api-reference';

@Component({
  selector: 'daffio-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiListComponent {

  /**
   * A list of references for API documents.
   */
  @Input() apiList: DaffioApiReference[] = [];
}
