import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-theming',
  templateUrl: './hero-theming.component.html',
})
export class HeroThemingComponent {
  color: DaffPalette = 'theme';

  colorControl: FormControl = new FormControl('theme');
}
