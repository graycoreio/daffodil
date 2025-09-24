import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffListModule } from '@daffodil/design/list';

import { DaffioFeatureComparisonComponent } from '../feature-comparison/feature-comparison.component';

@Component({
  selector: 'daffio-why-pwa-solution',
  templateUrl: './why-pwa-solution.component.html',
  styleUrls: ['./why-pwa-solution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffContainerModule,
    DaffCalloutModule,
    DaffListModule,
    DaffioFeatureComparisonComponent,
  ],
})

export class DaffioWhyPwaSolutionComponent {
  @HostBinding('class.daffio-why-pwa-solution') class = true;
}
