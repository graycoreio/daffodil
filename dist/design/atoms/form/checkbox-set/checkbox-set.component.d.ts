import { QueryList, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox/checkbox.component';
export declare class DaffCheckboxSetComponent {
    formArray: FormArray;
    /**
     * The name of the checkbox-set
     */
    name: string;
    /**
     * The role of the component. Set to "checkbox".
       * @docs-private
     */
    role: string;
    /**
     * The list of checkboxes in the set.
       * @docs-private
     */
    checkboxes: QueryList<DaffCheckboxComponent>;
    valueList: EventEmitter<any[]>;
    getValues(): any[];
}
