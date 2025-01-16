import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[daffioHeaderItem]',
  standalone: false,
})
export class DaffioHeaderItemDirective {
  @HostBinding('class.daffio-header-item') class = true;

  /** Whether or not the header item is active */
  @Input() @HostBinding('class.active') active = false;
}
