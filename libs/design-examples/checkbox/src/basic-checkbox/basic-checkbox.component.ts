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
  selector: 'basic-checkbox-example',
  templateUrl: './basic-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class BasicCheckboxExampleComponent implements OnInit {
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
