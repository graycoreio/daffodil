import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';

import { DaffioPackage } from '../../components/package-cards/package-cards.component';

function getPath(doc: DaffDocsList): string {
  return doc.path || doc.children?.[0].path || '';
}

@Component({
  selector: 'daffio-docs-package-cards-container',
  templateUrl: './package-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackageCardsContainer implements OnInit {

  packagesList$: Observable<DaffioPackage[]>;

  constructor(
    private docService: DaffDocsAssetService<DaffDoc, DaffDocsList>,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getPackageList().pipe(
      map((guidesTree) => guidesTree.children.map((p) => ({
        title: p.title,
        path: `/${getPath(p)}`,
        description: '',
      }))),
    );
  }
}
