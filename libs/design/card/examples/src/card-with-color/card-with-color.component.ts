import { Component } from '@angular/core';

import { DaffPalette } from '@daffodil/design';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line
  selector: 'card-with-color',
  templateUrl: './card-with-color.component.html',
  styles: [`
    daff-card {
      max-width: 400px;
    } 
  `]
})
export class CardWithColorComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('primary');
}
