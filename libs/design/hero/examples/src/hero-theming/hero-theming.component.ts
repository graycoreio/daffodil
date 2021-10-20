import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-theming',
  templateUrl: './hero-theming.component.html',
  styleUrls: ['./hero-theming.component.scss'],
})
export class HeroThemingComponent {
  faMobile = faMobile;
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('');
}
