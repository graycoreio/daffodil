/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffArticleMeta]',
  host: {
    'class': 'daff-article__meta',
  },
})
export class DaffArticleMetaDirective {}
