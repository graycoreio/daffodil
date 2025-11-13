import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

import { DaffioDocsPackageCardsContainer } from '../../containers/package-cards/package-cards.component';

@Component({
  selector: 'daffio-packages-overview',
  templateUrl: './packages-overview.component.html',
  styleUrls: ['./packages-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DaffioDocsPackageCardsContainer,
  ],
})
export class DaffioPackagesOverviewPageComponent {}
