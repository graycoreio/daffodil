import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { DaffRouterActivatedRoute } from '@daffodil/router';

import { DaffioDocList } from '../../../models/doc-list';
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
    private route: DaffRouterActivatedRoute,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data) => data.index),
      map((guidesTree) => guidesTree.children.map((p) => ({
        title: p.title,
        path: `/${getPath(p)}`,
        description: '',
      }))),
    );
  }
}
