import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { DaffCheckboxSetComponent } from '@daffodil/design';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'checkbox-set',
    templateUrl: './checkbox-set.component.html'
})
export class CheckboxSetComponent implements OnInit {

    @ViewChild(DaffCheckboxSetComponent)
    private checkboxSet: DaffCheckboxSetComponent;
    checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
    selectedValues = [];

    ngOnInit() {
        this.checkboxArray.setValue([false, false, false]);
    }
    displayList() {
        this.selectedValues = this.checkboxSet.getValues()
    }
}