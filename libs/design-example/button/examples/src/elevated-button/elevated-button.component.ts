import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'elevated-button',
  templateUrl: './elevated-button.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class ElevatedButtonComponent {
  faUser = faUser;
}
