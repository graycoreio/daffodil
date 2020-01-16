import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'docs-radio-set',
  templateUrl: './radio-set.component.html',
  styleUrls: ['./radio-set.component.scss']
})

export class DocsRadioSetComponent implements OnInit {

  simpleHorizonalFormControl: FormControl;
  simpleVerticalFormControl: FormControl;
  withContentFormControl: FormControl;

  ngOnInit() {
    this.simpleVerticalFormControl = new FormControl('option-2');
    this.simpleHorizonalFormControl = new FormControl();
    this.withContentFormControl = new FormControl('option-2');
  }
}
