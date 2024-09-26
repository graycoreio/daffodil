import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDocsListComponent } from '../../../components/docs-list/docs-list.component';
import { DaffioDocList } from '../../../models/doc-list';
import { DaffioDocsDesignIndexService } from '../../services/index.service';

@Component({
  selector: 'daffio-docs-design-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
  providers: [
    DaffioDocsDesignIndexService,
  ],
})
export class DaffioDocsDesignListContainer implements OnInit {
  docsList$: Observable<DaffioDocList>;

  constructor(
    private index: DaffioDocsDesignIndexService,
  ) {}

  ngOnInit() {
    this.docsList$ = this.index.getList();
  }
}
