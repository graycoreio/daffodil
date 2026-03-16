import { Directive } from '@angular/core';

@Directive({
  selector: '[daffDocsColorStripHex]',
  host: {
    class: 'daff-docs-color-strip__hex',
  },
})
export class DaffDocsColorStripHexDirective {}
