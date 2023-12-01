import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'preselected-dropdown',
  templateUrl: './preselected-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreselectedDropdownComponent {}
