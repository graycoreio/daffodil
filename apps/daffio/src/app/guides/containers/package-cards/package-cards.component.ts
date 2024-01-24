import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { DaffioDoc } from '../../../docs/models/doc';
import { DaffioGuideList } from '../../../docs/models/guide-list';
import { DaffioDocsService } from '../../../docs/services/docs.service';
import { DaffioPackage } from '../../components/package-cards/package-cards.component';

@Component({
  selector: 'daffio-docs-package-cards-container',
  templateUrl: './package-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackageCardsContainer implements OnInit {

  packagesList$: Observable<DaffioPackage[]>;

  constructor(
    private docService: DaffioDocsService<DaffioDoc, DaffioGuideList>,
  ) {}

  ngOnInit() {
    this.packagesList$ = this.docService.getGuideList().pipe(
      map((guidesTree) => guidesTree.children.map((p) => ({
        title: p.title,
        path: `/${p.path || p.children?.[0].path}`,
        description: '',
      }))),
    );
  }
}
