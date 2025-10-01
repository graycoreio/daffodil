import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'daffio-docs-search-field',
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    FaIconComponent,
    DaffIconButtonComponent,
  ],
})

export class DaffioDocsSearchFieldComponent {
  faTimes = faTimes;
  searchInput = '';

  @HostBinding('class.daffio-docs-search-field') private class = true;

  clearField() {
    this.searchInput = '';
  }
}
