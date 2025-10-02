import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daff-radio-set',
  templateUrl: './radio-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffRadioSetComponent {

  @Input() name: string;

  constructor() { }

  /**
   * @docs-private
   */
  @HostBinding('attr.role') role = 'radiogroup';

}
