import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffCheckboxSetComponent,
  DaffCheckboxModule,
} from '@daffodil/design/checkbox';

@Component({
  selector: 'checkbox-set-example',
  templateUrl: './checkbox-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class CheckboxSetExampleComponent implements OnInit {

  @ViewChild(DaffCheckboxSetComponent)
  private checkboxSet: DaffCheckboxSetComponent;
  checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
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
