import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'daffio-docs-search-field',
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffIconButtonComponent,
  ],
})

export class DaffioDocsSearchFieldComponent {
  faTimes = faTimes;

  @HostBinding('class.daffio-docs-search-field') private class = true;

  inputValue = '';

  clearField() {}
}
