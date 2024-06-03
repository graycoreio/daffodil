import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDocsListComponent } from '../../../components/docs-list/docs-list.component';
import { DaffioDoc } from '../../../models/doc';
import { DaffioDocList } from '../../../models/doc-list';
import { DaffioDocsService } from '../../../services/docs.service';


@Component({
  selector: 'daffio-docs-packages-list-container',
  templateUrl: './packages-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsPackagesListContainer implements OnInit {
  packagesList$: Observable<DaffioDocList>;

  constructor(
    private docService: DaffioDocsService<DaffioDoc, DaffioDocList>,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getPackageList();
  }
}
