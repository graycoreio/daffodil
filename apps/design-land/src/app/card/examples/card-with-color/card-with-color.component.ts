import { Component } from '@angular/core';

import { DaffPalette } from '@daffodil/design';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'card-with-color',
  templateUrl: './card-with-color.component.html'
})
export class CardWithColorComponent {
  color: DaffPalette = "primary";

  colorControl: FormControl = new FormControl('primary');
}
