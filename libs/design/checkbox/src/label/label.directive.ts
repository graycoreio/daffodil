import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'daff-checkbox-set-label',
  host: {
    class: 'daff-checkbox-set-label',
  },
})
export class DaffCheckboxSetLabelDirective {}
