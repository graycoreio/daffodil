import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffArticleEncapsulated]',
  standalone: true,
})

export class DaffArticleEncapsulatedDirective {
  @HostBinding('class.daff-ae') class = true;
}
