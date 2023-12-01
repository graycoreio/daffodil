import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-dropdown',
  templateUrl: './skeleton-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonDropdownComponent {}
