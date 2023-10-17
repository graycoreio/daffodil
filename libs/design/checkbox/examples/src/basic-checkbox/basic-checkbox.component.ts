import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-checkbox',
  templateUrl: './basic-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
