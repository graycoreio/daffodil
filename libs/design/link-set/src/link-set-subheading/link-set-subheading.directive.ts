import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
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
