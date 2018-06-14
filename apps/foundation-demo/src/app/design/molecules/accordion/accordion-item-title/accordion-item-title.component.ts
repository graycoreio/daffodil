import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[accordion-item-title]',
  host: {'class': 'accordion-item__title'},
  template: '<ng-content></ng-content>'
})
export class AccordionItemTitleComponent{ }
