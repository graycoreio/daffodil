import { Directive } from '@angular/core';

/**
 * DaffPrefixDirective can be used to place content before another piece of content
 * in components like `DaffFormFieldComponent` or `DaffListComponent`.
 */
@Directive({
  selector: '[daffPrefix]',
  host: {
    class: 'daff-prefix',
  },
})
export class DaffPrefixDirective {}
