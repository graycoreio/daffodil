import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-theming',
  templateUrl: './card-theming.component.html',
  styles: [`
    daff-card {
      max-width: 400px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardThemingComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('');
}
