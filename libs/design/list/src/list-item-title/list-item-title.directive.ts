import { Directive } from '@angular/core';

/**
 * Used to identify the primary title of a list item within a multi-line list.
 *
 * @example
 * ```html
 * <div daffListItemTitle>Title</div>
 * ```
 */
@Directive({
  selector: '[daffListItemTitle]',
  host: {
    class: 'daff-list-item__title',
  },
})

export class DaffListItemTitleDirective {}
