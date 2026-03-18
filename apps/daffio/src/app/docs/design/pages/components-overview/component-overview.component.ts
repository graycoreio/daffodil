import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import {
  map,
  Observable,
} from 'rxjs';

import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';

import { DaffioInterceptNavigationDirective } from '../../../../core/router/intercept-navigation.directive';

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
    DaffioInterceptNavigationDirective,
  ],
})
export class DaffioDocsDesignComponentOverviewPageComponent {
  private route = inject(ActivatedRoute);
  components$: Observable<Array<DaffDocsDesignGuideNavList>> = this.route.data.pipe(
    map((data) => data.components),
  );
  title$: Observable<string> = this.route.data.pipe(
    map((data) => data.title),
  );
  subtitle$: Observable<string> = this.route.data.pipe(
    map((data) => data.subtitle),
  );
}
