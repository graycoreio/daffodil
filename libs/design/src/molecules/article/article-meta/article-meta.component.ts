import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffArticleMeta]'
})
export class DaffArticleMetaDirective {

  @HostBinding('class.daff-article__meta') class = true;
}
