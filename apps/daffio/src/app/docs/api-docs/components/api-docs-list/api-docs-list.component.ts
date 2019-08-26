import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { DaffioApiDocReference } from '../../models/api-doc-reference';

@Component({
  selector: 'daffio-api-docs-list',
  templateUrl: './api-docs-list.component.html',
  styleUrls: ['./api-docs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffioApiDocsListComponent {

  /**
   * A list of references for API documents.
   */
  @Input() docsList: DaffioApiDocReference[] = [];
}
