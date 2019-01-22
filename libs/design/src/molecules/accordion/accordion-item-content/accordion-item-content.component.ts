import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-accordion-item-content]',
  host: {
    'class': 'daff-accordion-item__content'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffAccordionItemContentComponent {}
