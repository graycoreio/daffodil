import { Directive } from '@angular/core';

@Directive({
  selector: '[panel]',
  host: {'class': 'accordion__panel'}
})
export class PanelDirective {}
