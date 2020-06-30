import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'basic-radio',
    templateUrl: './basic-radio.component.html'
})
export class BasicRadioComponent implements OnInit {

    radioGroup = new FormGroup({
        race: new FormControl('Zerg')
    });
    constructor() {
    }

    ngOnInit() {
    }
}