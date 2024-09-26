import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioDocList } from '../../../models/doc-list';
import { DaffioDocsIndexService } from '../../../services/index.service';
import { DaffioPackage } from '../../components/package-cards/package-cards.component';

function getPath(doc: DaffioDocList): string {
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
    private docService: DaffioDocsIndexService,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getList().pipe(
      map((guidesTree) => guidesTree.children.map((p) => ({
        title: p.title,
        path: `/${getPath(p)}`,
        description: '',
      }))),
    );
  }
}
