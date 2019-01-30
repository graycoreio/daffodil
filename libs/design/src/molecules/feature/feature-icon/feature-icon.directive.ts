import { Directive } from '@angular/core';

@Directive ({
  selector: '[daffFeatureIcon]',
  host: {'class': 'daff-feature__icon'}
})
export class DaffFeatureIconDirective {}
