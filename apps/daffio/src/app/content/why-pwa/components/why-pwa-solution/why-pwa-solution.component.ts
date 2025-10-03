import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

import { DaffioFeatureComparisonComponent } from '../feature-comparison/feature-comparison.component';

@Component({
  selector: 'daffio-why-pwa-solution',
  templateUrl: './why-pwa-solution.component.html',
  styleUrls: ['./why-pwa-solution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DAFF_CALLOUT_COMPONENTS,
    DAFF_LIST_COMPONENTS,
    DaffioFeatureComparisonComponent,
  ],
})

export class DaffioWhyPwaSolutionComponent {
  @HostBinding('class.daffio-why-pwa-solution') class = true;
}
