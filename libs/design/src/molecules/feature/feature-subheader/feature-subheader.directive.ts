import { Directive } from '@angular/core';

@Directive({
  selector: '[daffFeatureSubheader]',
  host: {'class': 'daff-feature__subheader'}
})
export class DaffFeatureSubheaderDirective {}
