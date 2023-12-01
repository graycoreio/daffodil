import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * A directive for styling an dropdown item's content.
 */
@Directive({
  selector: '[daffDropdownOption]',
})
export class DaffDropdownOptionDirective {

  @HostBinding('class.daff-dropdown__option') class = true;
}
