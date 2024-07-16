import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading-icon-diameter',
  templateUrl: './loading-icon-diameter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffLoadingIconModule],
})
export class LoadingIconDiameterComponent { }
