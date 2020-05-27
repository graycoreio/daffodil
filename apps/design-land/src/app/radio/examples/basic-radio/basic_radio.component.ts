import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'basic-radio',
    templateUrl: './basic_radio.component.html'
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