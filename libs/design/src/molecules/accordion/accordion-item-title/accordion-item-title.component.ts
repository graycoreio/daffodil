import { Component } from '@angular/core';

@Component({
  selector: '[daff-accordion-item-title]',
  host: {'class': 'daff-accordion-item__title'},
  template: '<ng-content></ng-content>'
})
export class DaffAccordionItemTitleComponent{ }
