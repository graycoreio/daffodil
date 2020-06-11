import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'generated-radio-set',
    templateUrl: './generated_radio_set.component.html'
})
export class GeneratedRadioSetComponent {

    radioGroup = new FormGroup({
        masterConsole: new FormControl()
    });
    consoles = ['Xbox', 'Playstation', 'Nintendo Switch', 'PC'];
}