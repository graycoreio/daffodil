import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffCheckboxModule } from '@daffodil/design';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-checkbox',
  templateUrl: './basic-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class BasicCheckboxComponent implements OnInit {
  checkboxExample = new UntypedFormControl();

  ngOnInit() {
    this.checkboxExample.setValue(true);
  }
  setFalse() {
    this.checkboxExample.setValue(false);
  }
  setTrue() {
    this.checkboxExample.setValue(true);
  }
}
