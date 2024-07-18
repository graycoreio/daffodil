import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-input',
  templateUrl: './basic-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputComponent {

}
