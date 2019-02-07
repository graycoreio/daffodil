import { Directive } from '@angular/core';

@Directive({
  selector: '[daffCardImage]',
  host: {'class': 'daff-card__image'}
})
export class DaffCardImageDirective {}