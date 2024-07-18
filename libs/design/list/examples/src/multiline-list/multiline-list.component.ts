import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'multiline-list',
  templateUrl: './multiline-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultilineListComponent {}
