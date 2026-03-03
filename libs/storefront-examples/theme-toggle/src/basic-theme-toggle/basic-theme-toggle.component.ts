import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

@Component({
  selector: 'basic-theme-toggle-example',
  templateUrl: './basic-theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSfThemeToggleComponent,
  ],
})
export class BasicThemeToggleStorefrontExampleComponent {}
