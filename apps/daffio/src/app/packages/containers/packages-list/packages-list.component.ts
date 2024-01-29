import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDoc } from '../../../docs/models/doc';
import { DaffioGuideList } from '../../../docs/models/guide-list';
import { DaffioDocsService } from '../../../docs/services/docs.service';

@Component({
  selector: 'daffio-docs-packages-list-container',
  templateUrl: './packages-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackagesListContainer implements OnInit {

  packagesList$: Observable<DaffioGuideList>;

  constructor(
    private docService: DaffioDocsService<DaffioDoc, DaffioGuideList>,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getGuideList();
  }
}
