import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';

import { DaffioDocsListComponent } from '../../../components/docs-list/docs-list.component';


@Component({
  selector: 'daffio-docs-guides-list-container',
  templateUrl: './guides-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsGuidesListContainer implements OnInit {
  guidesList$: Observable<DaffDocsList>;

  constructor(
    private docService: DaffDocsAssetService<DaffDoc, DaffDocsList>,
  ) {}

  ngOnInit() {
    this.guidesList$ = this.docService.getGuidesList();
  }
}
