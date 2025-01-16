import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  map,
  Observable,
} from 'rxjs';

import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';

import { useDaffioNavList } from '../../../composables/nav-index';

@Component({
  selector: 'daffio-docs-design-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    AsyncPipe,
    DAFF_CARD_COMPONENTS,
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
  ],
})
export class DaffioDocsDesignComponentOverviewPageComponent {
  components$: Observable<Array<DaffDocsDesignGuideNavList>> = useDaffioNavList<DaffDocsDesignGuideNavList>().list.pipe(
    map((docsList) =>
      docsList
        .children
        .find(({ id }) => id === 'components')
        .children
        .filter(({ id }) => !!id)
        .flatMap((d) => d.children.length ? d.children : d),
    ),
  );
}
