import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-radio',
  templateUrl: './basic-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRadioComponent implements OnInit {

  radioGroup = new UntypedFormGroup({
    race: new UntypedFormControl('Zerg'),
  });
  constructor() {
  }

  ngOnInit() {
  }
}
