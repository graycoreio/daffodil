import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';

import { DaffioDoc } from '../../../models/doc';
import { DaffioDocsService } from '../../../services/docs.service';
import { DaffioPackage } from '../../components/package-cards/package-cards.component';

function getPath(doc: DaffDocsNavList): string {
  return 'path' in doc ? doc.path : 'path' in doc.children?.[0] ? doc.children?.[0].path : '';
}

@Component({
  selector: 'daffio-docs-package-cards-container',
  templateUrl: './package-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackageCardsContainer implements OnInit {

  packagesList$: Observable<DaffioPackage[]>;

  constructor(
    private docService: DaffioDocsService<DaffioDoc>,
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
