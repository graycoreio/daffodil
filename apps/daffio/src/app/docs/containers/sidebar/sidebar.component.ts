import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDoc } from '../../models/doc';
import { DaffioGuideList } from '../../models/guide-list';
import { DaffioDocsService } from '../../services/docs.service';

@Component({
  selector: 'daffio-sidebar-container',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsSidebarContainer implements OnInit{
  sidebarContents$: Observable<DaffioGuideList>;

  constructor(
    private docService: DaffioDocsService<DaffioDoc, DaffioGuideList>,
  ) {}

  ngOnInit() {
    this.sidebarContents$ = this.docService.getGuideList();
  }
}
