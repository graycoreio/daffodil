import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffioDocsMemberHeadingName]',
})

export class DaffioDocsMemberHeadingNameDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daffio-docs-member-heading__name') class = true;
}
