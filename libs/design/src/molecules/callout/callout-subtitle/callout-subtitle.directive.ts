import { Directive } from '@angular/core';

 @Directive({
  selector: '[daffCalloutSubtitle]',
  host: {'class': 'daff-callout__subtitle'}
})

export class DaffCalloutSubtitleDirective {}
