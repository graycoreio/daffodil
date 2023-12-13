import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffArticleTitle]',
})
export class DaffArticleTitleDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-article__title') class = true;
}
