import { Directive } from '@angular/core';

/**
 * Places content after the main content of a component.
 */
@Directive({
  selector: '[daffSuffix]',
  host: {
    class: 'daff-suffix',
  },
})
export class DaffSuffixDirective { }
