import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-dropdown',
  templateUrl: './disabled-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledDropdownComponent {}
