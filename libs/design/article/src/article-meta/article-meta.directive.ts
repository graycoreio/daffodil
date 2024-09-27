import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffArticleMeta]',
  standalone: true,
})
export class DaffArticleMetaDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-article__meta') class = true;
}
