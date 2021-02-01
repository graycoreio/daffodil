import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-with-color',
  templateUrl: './card-with-color.component.html',
  styles: [`
    daff-card {
      max-width: 400px;
    }
  `],
})
export class CardWithColorComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('primary');
}
