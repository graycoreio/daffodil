import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'loading-button-example',
  templateUrl: './loading-button.component.html',
  styleUrl: './loading-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class LoadingButtonExampleComponent {}
