import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffCheckboxSetComponent,
  DaffCheckboxModule,
} from '@daffodil/design/checkbox';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'checkbox-set',
  templateUrl: './checkbox-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class CheckboxSetComponent implements OnInit {

  @ViewChild(DaffCheckboxSetComponent)
  private checkboxSet: DaffCheckboxSetComponent;
  checkboxArray = new UntypedFormArray([new UntypedFormControl(), new UntypedFormControl(), new UntypedFormControl()]);
  selectedValues = [];

  /**
   * @docs-private
   */
  ngOnInit() {
    this.checkboxArray.setValue([false, false, false]);
  }
  displayList() {
    this.selectedValues = this.checkboxSet.getValues();
  }
}
