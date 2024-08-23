import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[daffBreadcrumbItem]',
  standalone: true,
})
export class DaffBreadcrumbItemDirective {
  @HostBinding('class.daff-breadcrumb__item') class = true;

  @HostBinding('attr.aria-current') get ariaCurrent() {
    return this.active ? 'page' : 'false';
  }

  /** Whether or not the breadcrumb item is active */
  @Input() @HostBinding('class.active') active = false;

}
