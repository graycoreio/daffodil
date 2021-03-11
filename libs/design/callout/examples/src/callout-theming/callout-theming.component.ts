import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DaffPalette } from '@daffodil/design';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'callout-theming',
  templateUrl: './callout-theming.component.html'
})
export class CalloutThemingComponent {
  color: DaffPalette = 'theme';

  colorControl: FormControl = new FormControl('theme');
}