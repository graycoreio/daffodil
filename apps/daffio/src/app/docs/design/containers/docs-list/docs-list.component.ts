import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';

import { DaffioDocsListComponent } from '../../../components/docs-list/docs-list.component';
import { useDaffioNavList } from '../../../composables/nav-index';

@Component({
  selector: 'daffio-docs-design-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsDesignListContainer {
  docsList$ = useDaffioNavList<DaffDocsDesignGuideNavList>().list;
}
