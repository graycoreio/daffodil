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
  packagesList$: Observable<DaffDocsList>;

  constructor(
    private docService: DaffDocsAssetService<DaffDoc, DaffDocsList>,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getPackageList();
  }
}
