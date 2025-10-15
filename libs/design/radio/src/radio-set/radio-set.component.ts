import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daff-radio-set',
  templateUrl: './radio-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'radiogroup',
  },
})

export class DaffRadioSetComponent {

  @Input() name: string;

  constructor() { }

}
