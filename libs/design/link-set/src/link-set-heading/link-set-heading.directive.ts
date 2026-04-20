import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 * A directive for adding a heading to a daff-link-set.
 */
@Directive({
  selector: '[daffLinkSetHeading]',
  standalone: true,
})
export class DaffLinkSetHeadingDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-link-set__heading') class = true;
}
