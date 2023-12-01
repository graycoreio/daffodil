import {
  Directive,
  HostBinding,
  Optional,
  TemplateRef,
} from '@angular/core';

/**
 * A directive for styling the content of the selected option.
 */
@Directive({
  selector: '[daffSelectSelectedOption]',
})
export class DaffSelectSelectedOptionDirective {
  @HostBinding('class.daff-select__selected-option') class = true;

  constructor(@Optional() public templateRef?: TemplateRef<unknown>) {}
}
