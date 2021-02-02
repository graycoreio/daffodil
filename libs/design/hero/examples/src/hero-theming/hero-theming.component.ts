import { Component } from '@angular/core';

import { DaffPalette } from '@daffodil/design';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hero-theming',
  templateUrl: './hero-theming.component.html'
})
export class HeroThemingComponent {
  color: DaffPalette = 'theme';

  colorControl: FormControl = new FormControl('theme');
}