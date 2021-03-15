import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-theming',
  templateUrl: './callout-theming.component.html',
})
export class CalloutThemingComponent {
  color: DaffPalette = 'theme';

  colorControl: FormControl = new FormControl('theme');
}
