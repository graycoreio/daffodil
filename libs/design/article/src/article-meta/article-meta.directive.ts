import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffArticleMeta]',
})
export class DaffArticleMetaDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-article__meta') class = true;
}
