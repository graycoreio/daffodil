import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffArticleLead]'
})
export class DaffArticleLeadDirective {

  @HostBinding('class.daff-article__lead') private class = true;
}
