import { Directive } from '@angular/core';

@Directive({
  selector: '[daffFeatureTitle]',
  host: {'class': 'daff-feature__title'}
})
export class DaffFeatureTitleDirective {}
