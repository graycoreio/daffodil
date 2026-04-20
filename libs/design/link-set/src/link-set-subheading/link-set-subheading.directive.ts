import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 *
 * A directive for adding a subheading to a daff-link-set.
 */
@Directive({
  selector: '[daffLinkSetSubheading]',
  standalone: true,
})
export class DaffLinkSetSubheadingDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-link-set__subheading') class = true;
}
