import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

/**
 * A component for creating articles within your page.
 */
@Component({
  selector: 'daff-article',
  template: '<ng-content></ng-content>',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffArticleComponent {

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-article') class = true;

	/**
	 * @docs-private
	 */
  @HostBinding('attr.role') role = 'article';
}
