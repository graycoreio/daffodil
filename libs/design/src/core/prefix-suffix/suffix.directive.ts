import { Directive } from '@angular/core';

/**
 * DaffSuffixDirective can be used to place content after another piece of content
 * in components like `DaffFormFieldComponent` or `DaffListComponent`.
 */
@Directive({
  selector: '[daffSuffix]',
  host: {
    class: 'daff-suffix',
  },
})
export class DaffSuffixDirective { }
