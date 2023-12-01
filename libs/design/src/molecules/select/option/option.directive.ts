import {
  Directive,
  Optional,
  TemplateRef,
} from '@angular/core';

/**
 * The directive provides the template for a list of options inside the select dropdown.
 */
@Directive({
  selector: '[daffSelectOption]',
})
export class DaffSelectOptionDirective {
  constructor(@Optional() public templateRef?: TemplateRef<unknown>) {}
}
