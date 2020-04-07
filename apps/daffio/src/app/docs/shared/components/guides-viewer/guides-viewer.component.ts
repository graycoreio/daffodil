import { Component, OnInit, Input } from '@angular/core';
import { DaffioGuideList } from '../../models/guide-list';

@Component({
  selector: 'daffio-guides-viewer',
  templateUrl: './guides-viewer.component.html',
  styleUrls: ['./guides-viewer.component.scss']
})
export class DaffioGuidesViewerComponent {

  @Input() guideList: DaffioGuideList;
  constructor() { }

}
