import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffCheckboxModule } from '@daffodil/design/checkbox';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-checkbox',
  templateUrl: './basic-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class BasicCheckboxComponent implements OnInit {
  checkboxExample = new UntypedFormControl();

  /**
   * @docs-private
   */
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
