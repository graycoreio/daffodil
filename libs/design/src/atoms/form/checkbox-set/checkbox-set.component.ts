import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter
} from '@angular/core';
import { FormArray } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'daff-checkbox-set',
  templateUrl: './checkbox-set.component.html',
  styleUrls: ['./checkbox-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DaffCheckboxSetComponent {

  @Input() formArray: FormArray;
  /**
   * The name of the checkbox-set
   */
  @Input() name: string;

  /**
   * The role of the component. Set to "checkbox".
	 * @docs-private
   */
  @HostBinding('attr.role') role = 'group';

  /**
   * The list of checkboxes in the set.
	 * @docs-private
   */
  @ContentChildren(DaffCheckboxComponent) checkboxes: QueryList<DaffCheckboxComponent>;

  @Output() valueList = new EventEmitter<any[]>();

  getValues(): any[] {
    const checkboxes = this.checkboxes.toArray();
    return this.formArray.value.map((element, index) => {
      return element === true ? checkboxes[index].value : false;
    }).filter(element => element !== false);
  }
}