import { Directive } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubtitle]',
  host: {'class': 'daff-feature__subtitle'}
})
export class DaffFeatureSubtitleDirective {}
