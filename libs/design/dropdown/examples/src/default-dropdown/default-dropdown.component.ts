import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-dropdown',
  templateUrl: './default-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultDropdownComponent {}
