import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';

import { useDaffioNavList } from '../../../composables/nav-index';
import { DaffioPackage } from '../../components/package-cards/package-cards.component';

function getPath(doc: DaffDocsNavList): string {
  return doc.path || doc.children?.[0].path || '';
}

@Component({
  selector: 'daffio-docs-package-cards-container',
  templateUrl: './package-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioDocsPackageCardsContainer {
  packagesList$: Observable<Array<DaffioPackage>> = useDaffioNavList().list.pipe(
    map((guidesTree) => guidesTree.children.map((p) => ({
      title: p.title,
      path: `/${getPath(p)}`,
      description: '',
    }))),
  );
}
