import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-disabled',
  templateUrl: './input-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDisabledComponent {

}
