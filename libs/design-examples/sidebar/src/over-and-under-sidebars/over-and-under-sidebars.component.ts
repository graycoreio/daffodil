import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  DaffButtonComponent,
  DaffIconButtonComponent,
} from '@daffodil/design/button';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';
import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';
import {
  DAFF_VIEWPORT_COMPONENTS,
  DaffViewportService,
  provideDaffViewport,
} from '@daffodil/design/viewport';

@Component({
  selector: 'over-and-under-sidebars-example',
  templateUrl: './over-and-under-sidebars.component.html',
  styleUrls: ['over-and-under-sidebars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
    FaIconComponent,
    ReactiveFormsModule,
    DaffButtonComponent,
    DaffIconButtonComponent,
    DAFF_VIEWPORT_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
  providers: [
    provideDaffViewport(),
  ],
})
export class OverandUnderSidebarsExampleComponent {
  faTimes = faTimes;

  modes = [
    { label: 'Over', value: 'over' },
    { label: 'Under', value: 'under' },
  ];

  modeControl: FormControl = new FormControl(this.modes[0]);

  constructor(private viewportService: DaffViewportService) {}

  openSidebar() {
    this.viewportService.open('left');
  }
}
