import { Directive, HostBinding } from '@angular/core';

/**
 * A directive for adding a heading to a daff-link-set.
 */
@Directive({
  selector: '[daffLinkSetHeading]'
})
export class DaffLinkSetHeadingDirective {

  @HostBinding('class.daff-link-set__heading') class = true;
}
