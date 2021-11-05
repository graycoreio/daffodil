import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav-accordion',
  templateUrl: './nav-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavAccordionComponent {}
