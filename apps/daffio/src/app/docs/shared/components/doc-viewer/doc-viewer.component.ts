import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DaffioDoc } from '../../models/doc';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffioDocViewerComponent {

  /**
   * The doc to render
   */
  @Input() doc: DaffioDoc;

}
