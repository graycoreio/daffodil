import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading-icon-diameter',
  templateUrl: './loading-icon-diameter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class LoadingIconDiameterComponent { }
