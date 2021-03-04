import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'basic-checkbox',
    templateUrl: './basic-checkbox.component.html'
})
export class BasicCheckboxComponent implements OnInit {
    checkboxExample = new FormControl();

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