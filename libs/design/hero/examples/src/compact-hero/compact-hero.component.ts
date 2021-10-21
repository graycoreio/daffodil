import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'compact-hero',
  templateUrl: './compact-hero.component.html',
  styleUrls: ['./compact-hero.component.scss'],
})
export class CompactHeroComponent {
  faMobile = faMobile;
}
