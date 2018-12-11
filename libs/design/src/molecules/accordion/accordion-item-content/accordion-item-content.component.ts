import { Component } from '@angular/core';

@Component({
  selector: '[daff-accordion-item-content]',
  host: {'class': 'daff-accordion-item__content'},
  template: '<ng-content></ng-content>'
})
export class DaffAccordionItemContentComponent {}
