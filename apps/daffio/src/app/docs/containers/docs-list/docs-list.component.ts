import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';
import { DaffioDocList } from '../../models/doc-list';
import { DaffioDocsIndexService } from '../../services/index.service';

@Component({
  selector: 'daffio-docs-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
  providers: [
    DaffioDocsIndexService,
  ],
})
export class DaffioDocsListContainer implements OnInit {
  docsList$: Observable<DaffioDocList>;

  constructor(
    private index: DaffioDocsIndexService,
  ) {}

  ngOnInit() {
    this.docsList$ = this.index.getList();
  }
}
