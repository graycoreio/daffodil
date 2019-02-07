import { Directive } from '@angular/core';

@Directive({
  selector: '[daffListSubheader]',
  host: {'class': 'daff-list__subheader'}
})
export class DaffListSubheaderDirective {}
