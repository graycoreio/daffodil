import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardTitle]',
  host: {'class': 'daff-card__title'}
})
export class DaffCardTitleDirective {}
