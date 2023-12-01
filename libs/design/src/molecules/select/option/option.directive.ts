import {
  Directive,
  HostBinding,
  Optional,
  TemplateRef,
} from '@angular/core';

/**
 * A directive for styling an select item's content.
 */
@Directive({
  selector: '[daffSelectOption]',
})
export class DaffSelectOptionDirective {
  @HostBinding('class.daff-select__option') class = true;

  constructor(@Optional() public templateRef?: TemplateRef<unknown>) {}
}
