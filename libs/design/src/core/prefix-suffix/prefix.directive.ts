import { Directive } from '@angular/core';

/**
 * Places content before the main content of a component.
 */
@Directive({
  selector: '[daffPrefix]',
  host: {
    class: 'daff-prefix',
  },
})
export class DaffPrefixDirective {}
