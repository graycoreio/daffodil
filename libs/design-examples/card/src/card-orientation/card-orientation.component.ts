import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

@Component({
  selector: 'card-orientation-example',
  templateUrl: './card-orientation.component.html',
  styleUrls: ['./card-orientation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
    ReactiveFormsModule,
  ],
})
export class CardOrientationExampleComponent {
  faMapMarked = faMapMarked;

  options = [
    { value: '', label: 'Default' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal' },
  ];

  orientationControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
