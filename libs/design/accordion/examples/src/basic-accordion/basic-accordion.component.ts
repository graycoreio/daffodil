import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-accordion',
  templateUrl: './basic-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionComponent {}
