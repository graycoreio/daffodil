import { Directive } from '@angular/core';

@Directive({
  selector: '[daffDocsColorStripStep]',
  host: {
    class: 'daff-docs-color-strip__step',
  },
})
export class DaffDocsColorStripStepDirective {}
