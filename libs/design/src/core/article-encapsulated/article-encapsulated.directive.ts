import { Directive } from '@angular/core';

/**
 * The `DaffArticleEncapsulatedDirective` prevents {@link DaffArticleComponent } styles from bleeding into custom components nested within an article.
 */
@Directive({
  selector: '[daffArticleEncapsulated]',
  host: {
    class: 'daff-ae',
  },
})
export class DaffArticleEncapsulatedDirective {}
