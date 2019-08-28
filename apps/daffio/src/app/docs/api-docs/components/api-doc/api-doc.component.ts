import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { DaffioApiDoc } from '../../models/api-doc';

@Component({
  selector: 'daffio-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffioApiDocComponent {

  /**
   * An Api document.
   */
  @Input() doc: DaffioApiDoc;
}
